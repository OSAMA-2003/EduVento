'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Clock, BookOpen, Eye, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Blog interface matching your API response
interface BlogApiResponse {
  id:string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  auther: any;
  tags: string[];
  slug: string;
}

interface BlogCardProps {
  blog: BlogApiResponse;
  index?: number;
  variant?: 'default' | 'featured' | 'compact';
}

const BlogCard = ({ blog, index = 0, variant = 'default' }: BlogCardProps) => {
  
  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'تقنية':
      case 'technology':
        return 'bg-logo-blue';
      case 'تعليم':
      case 'education':
        return 'bg-secondary-green';
      case 'برمجة':
      case 'programming':
        return 'bg-primary-yellow text-primary-dark';
      case 'تصميم':
      case 'design':
        return 'bg-alert-red';
      default:
        return 'bg-logo-blue';
    }
  };

  const cardVariants = {
    default: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl",
    featured: "bg-gradient-primary text-white rounded-2xl shadow-2xl hover:shadow-3xl",
    compact: "bg-white rounded-xl shadow-lg hover:shadow-xl"
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=600&fit=crop';

  return (
    <motion.article
      className={`${cardVariants[variant]} overflow-hidden transition-all duration-500 group cursor-pointer relative border border-white/10 flex flex-col h-full`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
  src={blog.image || fallbackImage}
  alt={blog.title}
  fill
  sizes="(max-width:768px) 100vw, 50vw"
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  onError={(e) => {
    e.currentTarget.src = fallbackImage;
  }}
  priority={index === 0}
/>


        
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className={`absolute top-4 right-4 ${getCategoryColor(blog.category)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm`}>
          {blog.category}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-logo-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <BookOpen className="h-6 w-6 text-logo-blue" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-logo-blue" />
            <span className={variant === 'featured' ? 'text-white/80' : 'text-gray-500'}>{blog.date}</span>
          </div>
          <span className={variant === 'featured' ? 'text-white/60' : 'text-gray-300'}>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-secondary-green" />
            <span className={variant === 'featured' ? 'text-white/80' : 'text-gray-500'}>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 ${
          variant === 'featured'
            ? 'text-white group-hover:text-primary-yellow'
            : 'text-primary-dark group-hover:text-logo-blue'
        }`}>
          <Link
            href={`/blogs/${blog.slug || blog.id}`}
            className="hover:underline"
          >
            {blog.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 flex-grow transition-colors duration-300 ${
          variant === 'featured'
            ? 'text-white/90 group-hover:text-white'
            : 'text-gray-600 group-hover:text-gray-800'
        }`}>
          {blog.excerpt}
        </p>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 2).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                  variant === 'featured'
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
          
          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 500) + 100}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 20) + 1}</span>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blogs/${blog.id}`}
            className={`inline-flex items-center gap-1 font-medium text-sm transition-all duration-300 group/btn ${
              variant === 'featured'
                ? 'text-primary-yellow hover:text-white'
                : 'text-logo-blue hover:text-secondary-green'
            }`}
          >
            <span>اقرأ المزيد</span>
            <ArrowLeft className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-logo-blue via-secondary-green to-primary-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.article>
  );
};

export default BlogCard;
