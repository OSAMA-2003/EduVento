'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { getLatestBlogs } from '@/lib/data';
import { Blog } from '@/lib/types';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogs = getLatestBlogs(5);

  return (
    <section
      ref={ref}
      dir="rtl"
      className="relative py-24 px-4 md:px-20 overflow-hidden "
      style={{
        backgroundImage: `url('https://imgs.search.brave.com/rsJifnFzjrtZJsKk54gOSjM3O53mKIZvBMLdMJsG5EU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tdXNpbmctZGln/aXRhbC10YWJsZXQt/cHNkLW1vY2t1cC1z/bWFydC10ZWNobm9s/b2d5XzUzODc2LTEx/MDgxNS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              أحدث المقالات
            </h2>
            <p className=" hidden md:block text-gray-300 text-lg">
              أخبار التعليم من جميع أنحاء العالم
            </p>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex gap-2">
           
            <button className="next-btn w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
             <button className="prev-btn w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

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
             <Link href={`/blogs/${blog.id}`} >
               <div className="relative overflow-hidden group rounded-xl cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Author and date badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient text-white text-sm font-medium px-3 py-1 rounded">
                    {blog.author.name} - {blog.date}
                  </span>
                </div>
                
                {/* Title overlay */}
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
        <div>
          

          <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-gradient = text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            عرض جميع المقالات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;