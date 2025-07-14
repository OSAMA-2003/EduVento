'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ChevronLeft, ChevronRight, User } from 'lucide-react';
import Link from 'next/link';
import { fetchAllArticles, fetchRelatedArticles } from '@/lib/api';
import { Blog } from '@/lib/types';

const BlogsGrid = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchAllArticles();
        
        // Transform API data to match frontend expectations
        const transformedBlogs = data.map(blog => ({
          id: blog.id.toString(),
          title: blog.title || 'Untitled Article',
          excerpt: blog.excerpt || (blog.content ? `${blog.content.substring(0, 100)}...` : 'No excerpt available'),
          content: blog.content || '',
          category: blog.category || 'Uncategorized',
          date: blog.created_at || new Date().toISOString().split('T')[0],
          readTime: blog.duration_bost || '5 min',
          image: blog.image_url || 'https://via.placeholder.com/600x400?text=No+Image',
          author: blog.author || 'Anonymous',
          tags: blog.tags || [],
          slug: blog.slug || blog.id.toString()
        }));

        setBlogs(transformedBlogs);
      } catch (err: any) {
        console.error('Failed to load blogs:', err);
        setError(err.message || 'Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-gray-200 rounded col-span-2"></div>
                <div className="h-4 bg-gray-200 rounded col-span-1"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">حدث خطأ أثناء تحميل المقالات: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          حاول مرة أخرى
        </button>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">لا توجد مقالات متاحة حالياً</p>
        <Link 
          href="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blog, index) => (
          <motion.article
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl border border-gray-100 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=No+Image';
                }}
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {blog.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{blog.date}</span>
                </div>
                <span>•</span>
                <span>{blog.readTime} قراءة</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                <Link href={`/blogs/${blog.id}`} className="hover:text-blue-600 transition-colors">
                  {blog.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">
                {blog.excerpt}
              </p>
              
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <Link
                href={`/blogs/${blog.id}`}
                className="mt-auto inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                اقرأ المزيد
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsGrid;