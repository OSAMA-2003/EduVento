'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Clock, Users, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getAllCourses } from '@/lib/courseData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PopularCourses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courses = getAllCourses().slice(0, 5); // Get first 5 courses for popular section

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الدورات الأكثر شعبية
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف أفضل الدورات التدريبية التي يختارها الطلاب لتطوير مهاراتهم
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.price} ج
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {course.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        المدرب: {course.instructor.name}
                      </span>
                      <Link
                        href={`/courses/${course.id}`}
                        className="bg-blue-600 hover:bg-[#132cb2] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                      >
                        التفاصيل
                        <ArrowLeft className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-[#132cb2] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            عرض جميع الدورات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularCourses;