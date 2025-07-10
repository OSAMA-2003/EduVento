'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';
import Link from 'next/link';
// It's a good practice to have a shared type for your data models.
// Assuming you have a 'Blog' type exported from your data library.
import type { Blog } from '@/lib/data';

// If you're using ReactMarkdown for content rendering:
// import ReactMarkdown from 'react-markdown';

interface BlogDetailsProps {
  blog: Blog;
  relatedBlogs: Blog[];
}
const BlogDetails = ({ blog, relatedBlogs }: BlogDetailsProps) => {
  // Data fetching and 404 logic are now handled by the parent server component.
  // This component is now purely for presentation.

  return (
    <div className=""> {/* Consider if this padding is needed here or in the parent page */}
      {/* Removed the empty 'container' div and uncommented outer div */}
      <div className="container mx-auto">

        <section className="pt-10 mb-10 bg-gradient text-white"> {/* Ensure bg-gradient is defined in your CSS */}
          <div className="container mx-auto py-14 px-4">
            <div
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </section>

        <div className="mx-auto px-5 mb-10">

          {/* Breadcrumb */}
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                المدونة
              </Link>
              <span>/</span>
              <span className="text-gray-900">{blog.title}</span>
            </div>
          </motion.nav>

          {/* Article Header */}
          <motion.header
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>مشاركة</span>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            className="mb-8 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            className="prose prose-lg max-w-none mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* IMPORTANT: If blog.content contains Markdown, uncomment ReactMarkdown below
                and remove dangerouslySetInnerHTML. Install react-markdown first: npm install react-markdown */}
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            {/* Example with ReactMarkdown (uncomment if you switched to Markdown content) */}
            {/* <ReactMarkdown className="text-gray-700 leading-relaxed">
              {blog.content}
            </ReactMarkdown> */}
          </motion.div>

          {/* Author Bio */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <img
                src={blog.author.image}
                alt={blog.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.author.name}
                </h3>
                <p className="text-gray-600">
                  {blog.author.bio}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                مقالات ذات صلة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => ( // Removed index if not used to avoid lint warnings
                  <div
                    key={relatedBlog.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <Link
                        href={`/blogs/${relatedBlog.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                      >
                        اقرأ المزيد
                        <ArrowLeft className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;