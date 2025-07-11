'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';
import Link from 'next/link';
import { Blog } from '@/lib/types';

interface BlogDetailsProps {
  blog: Blog;
  relatedBlogs: Blog[];
}
const BlogDetails = ({ blog, relatedBlogs }: BlogDetailsProps) => {
  return (
    <div className="bg-gray-50 min-h-screen"> {/* Changed overall background to light gray */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div> {/* Optional: Add a subtle pattern */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {blog.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-blue-100 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {blog.excerpt}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      {/* The py-8 here is important to give space below the hero */}
      <div className="container mx-auto px-4 py-10 md:py-16">

        {/* Breadcrumb - Moved slightly higher for better flow */}
        <motion.nav
          className="mb-8 px-4 md:px-0 max-w-4xl mx-auto" // Added max-w-4xl mx-auto for alignment
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-blue-600 transition-colors">
              المقالات
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{blog.title}</span>
          </div>
        </motion.nav>

        {/* Article Container - Centralized and given a white background */}
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-100">
          {/* Article Header */}
          <motion.header
            className="mb-10 border-b pb-6 border-gray-100" // Added bottom border for separation
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category */}
            <div className="mb-6">
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                {blog.category}
              </span>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                <span>{blog.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{blog.readTime} قراءة</span>
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors ml-auto bg-blue-50 px-3 py-1 rounded-md">
                <Share2 className="h-4 w-4" />
                <span>مشاركة</span>
              </button>
            </div>

            {/* Tags */}
            {blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                  >
                    <Tag className="h-3 w-3 text-gray-400" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.header>

          {/* Featured Image */}
          <motion.div
            className="mb-12 rounded-xl overflow-hidden shadow-xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto max-h-[500px] object-cover" // Slightly increased max-height
            />
          </motion.div>

          {/* Article Content */}
          {/* Apply the prose class for markdown styling */}
          <motion.article
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-16
                       prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mb-4
                       prose-p:mb-4 prose-a:text-blue-600 hover:prose-a:text-blue-800
                       prose-ul:list-disc prose-ul:pl-5 prose-li:mb-2
                       prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-blue-300 prose-blockquote:pl-4 prose-blockquote:italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* IMPORTANT: If blog.content contains Markdown, use ReactMarkdown */}
            <div
              className="text-gray-700 leading-relaxed text-justify" // Kept text-justify for Arabic
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            {/* Example with ReactMarkdown (uncomment if you switched to Markdown content) */}
            {/* <ReactMarkdown className="text-gray-700 leading-relaxed text-justify">
              {blog.content}
            </ReactMarkdown> */}
          </motion.article>

          {/* Author Bio */}
          <motion.div
            className="bg-blue-50 p-8 rounded-xl mb-16 border border-blue-200 flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start sm:gap-6" // Adjusted for better alignment
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={blog.author.image}
              alt={blog.author.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4 sm:mb-0" // Larger image, margin-bottom for small screens
            />
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                حول الكاتب: {blog.author.name}
              </h3>
              <p className="text-blue-700 leading-relaxed">
                {blog.author.bio}
              </p>
            </div>
          </motion.div>
        </div> {/* End Article Container */}

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <motion.section
            className="mt-16 mb-16 max-w-4xl mx-auto" // Added max-w and mx-auto for alignment
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">
                مقالات ذات صلة
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed to lg:grid-cols-3 and increased gap */}
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col" // Added flex-col for better card layout
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow"> {/* Added flex-grow */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/blogs/${relatedBlog.id}`}>
                        {relatedBlog.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"> {/* Increased line-clamp to 3 */}
                      {relatedBlog.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${relatedBlog.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors mt-auto" // mt-auto pushes to bottom
                    >
                      اقرأ المزيد
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;