'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchAllArticles } from '@/lib/api';
import { Blog } from '@/lib/types';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchAllArticles();
        const latestBlogs = data
          .slice(0, 5)
          .map((blog) => ({
            id: blog.id.toString(),
            title: blog.title || 'مقال بدون عنوان',
            excerpt:
              blog.excerpt ||
              (blog.content
                ? `${blog.content.split(' ').slice(0, 20).join(' ')}...`
                : 'لا يوجد مقتطف'),
            content: blog.content || '',
            category: blog.category || 'غير مصنف',
            date: blog.date
              ? new Date(blog.date).toLocaleDateString('ar-EG')
              : new Date().toLocaleDateString('ar-EG'),
            readTime: blog.readTime || '5 دقائق',
            image:
              blog.image ||
              'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=600&fit=crop',
            tags: blog.tags || [],
            slug: blog.slug || blog.id.toString(),
          }));
        setBlogs(latestBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      ref={ref}
      dir="rtl"
      className="relative py-24 px-4 md:px-20 overflow-hidden bg-gradient-secondary-enhanced"
    >
      {/* ✅ Enhanced Background with Brand Gradients */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary-yellow/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-secondary-green/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              أحدث المقالات
            </h2>
            <p className="hidden md:block text-gray-100 text-lg">
              أخبار التعليم من جميع أنحاء العالم
            </p>
          </div>

          <div className="flex gap-2">
            <button className="next-btn w-12 h-12 border-2 border-white/30 rounded-lg text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="prev-btn w-12 h-12 border-2 border-white/30 rounded-lg text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-white text-center py-20">جاري تحميل المقالات...</div>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="news-swiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>
                  <div className="relative overflow-hidden group rounded-xl cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden">
                      
                    <Image
                      src={blog.image|| '/fallback.jpg'}
                      alt={blog.title}
                      fill
                      loading='lazy'
                          sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-primary text-white text-sm font-medium px-3 py-1 rounded">
                         {blog.date}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 btn-gradient-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            عرض جميع المقالات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
