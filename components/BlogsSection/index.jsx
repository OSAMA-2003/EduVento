'use client';

import { Calendar } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogs = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+1',
    title: 'أهمية التعلم المستمر في عصر التكنولوجيا',
    date: '15 يناير 2024',
    author: 'Anthony',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+2',
    title: 'مستقبل البرمجة والذكاء الاصطناعي',
    date: '12 يناير 2024',
    author: 'Anthony',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+3',
    title: 'نصائح لتحسين مهارات التصميم الجرافيكي',
    date: '10 يناير 2024',
    author: 'Anthony',
  },
  {
    id: 4,
    image: 'https://placehold.co/600x400/EEE/31343C?text=Blog+4',
    title: 'أساسيات تطوير المواقع الإلكترونية',
    date: '8 يناير 2024',
    author: 'Anthony',
  },
];

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-black text-white py-20 px-4 md:px-20 relative overflow-hidden">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h2>
        <p className="text-gray-300 text-lg">Education news all over the world.</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg transition hover:scale-105 duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <div className="flex items-center text-sm text-white">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded font-medium">
                    {blog.author} - {blog.date}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-lg">{blog.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsSection;
