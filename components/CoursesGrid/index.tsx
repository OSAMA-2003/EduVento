'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getAllCourses } from '@/lib/courseData';

const CoursesGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10;

  const allCourses = getAllCourses();
  const totalPages = Math.ceil(allCourses.length / coursesPerPage);
  const currentCourses = allCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCourses.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
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
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">
                  {course.instructor.name}
                </span>
                <Link
                  href={`/courses/${course.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
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