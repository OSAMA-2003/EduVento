'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Star, Award, Play, CheckCircle, User, Globe, BookOpen } from 'lucide-react';
import { getCourseById } from '@/lib/courseData';

interface CourseDetailsProps {
  courseId: string;
}

const CourseDetails = ({ courseId }: CourseDetailsProps) => {
  const course = getCourseById(parseInt(courseId));

  if (!course) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            الدورة غير موجودة
          </h1>
          <p className="text-gray-600">
            عذراً، لم نتمكن من العثور على الدورة المطلوبة.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {course.title}
              </h1>
              
              <div className="relative mb-8 rounded-xl overflow-hidden">
                <img
                  src={course.video}
                  alt={course.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-colors">
                    <Play className="h-8 w-8 text-blue-600 fill-current mr-1" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students} طالب</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">وصف الدورة</h2>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </div>

              {/* Curriculum */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">محتوى الدورة</h2>
                <div className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المتطلبات</h2>
                <ul className="space-y-2">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Learning Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ماذا ستتعلم</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Enrollment Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {course.price} ر.س
                  </div>
                  <p className="text-gray-600">دفعة واحدة أو بالتقسيط</p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-4 transition-colors">
                  سجل الآن
                </button>
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-colors">
                  أضف إلى المفضلة
                </button>
                
                {course.certificate && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">شهادة معتمدة</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Course Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">معلومات الدورة</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المستوى:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">اللغة:</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المدة:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الطلاب:</span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">التقييم:</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">المدرب</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{course.instructor.name}</h4>
                    <p className="text-sm text-blue-600">{course.instructor.experience} خبرة</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.instructor.bio}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;