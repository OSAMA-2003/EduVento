'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { fetchAllCourses } from '@/lib/api';
import { Course } from '@/lib/types';

const CoursesGrid = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const coursesPerPage = 10;

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchAllCourses();
        setCourses(data);
        setLoading(false);
      } catch (err: any) {
        setError('حدث خطأ أثناء تحميل الكورسات');
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const currentCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <p className="text-center py-10">جاري تحميل الكورسات...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCourses.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-gradient text-white px-3 py-1 rounded-full text-sm font-semibold">
                {course.price} ج
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold gradient-text mb-2 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                {course.shortDescription || course.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{course.studentsEnrolled}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">
                  {course.instructor?.name || 'مدرب غير محدد'}
                </span>
                <Link
                  href={`/courses/${course.id}`}
                  className="bg-gradient text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
                >
                  التفاصيل
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesGrid;
