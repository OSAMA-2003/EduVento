'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Course interface matching your API response
interface CourseApiResponse {
  id: number;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  duration: string;
  level: string;
  Instructor_name: string;
  Instructor_image_url: string;
  students_numbers: string;
  starts: string; // rating
  created_at: string;
}

interface CourseCardProps {
  course: CourseApiResponse;
  index?: number;
  variant?: 'default' | 'featured' | 'compact';
  showInstructor?: boolean;
}

const CourseCard = ({ 
  course, 
  index = 0, 
  variant = 'default', 
  showInstructor = true 
}: CourseCardProps) => {
  
  // Get level color based on course level
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
      case 'مبتدئ':
        return 'bg-secondary-green';
      case 'intermediate':
      case 'متوسط':
        return 'bg-primary-yellow text-primary-dark';
      case 'advanced':
      case 'متقدم':
      case 'higher':
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

  return (
    <motion.div
      className={`${cardVariants[variant]} overflow-hidden transition-all duration-500 group cursor-pointer relative border border-white/10`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/5 to-secondary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {course.image_url && course.image_url !== "test image_url 1" ? (
      

          <Image 
          src={course.image_url}
          alt={course.title}
          loading='lazy'
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          width={500}
          height={250}
          />


        ) : (
          <div className="w-full h-48 bg-gradient-radial-blend flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <BookOpen className="h-16 w-16 text-white/80 drop-shadow-lg" />
          </div>
        )}
        
        {/* Level Badge */}
        <div className={`absolute top-4 right-4 ${getLevelColor(course.level)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm`}>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Featured Badge */}
        {variant === 'featured' && (
          <div className="absolute top-4 left-4 bg-primary-yellow text-primary-dark px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            مميز
          </div>
        )}

        {/* Instructor Image Overlay */}
        {course.Instructor_image_url && course.Instructor_image_url !== "test Instructor_image 1" && (
          <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src={course.Instructor_image_url}
              alt={course.Instructor_name}
              loading='lazy'
              className="w-full h-full object-cover"
              width={500}
          height={250}
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 line-clamp-2 ${
          variant === 'featured' 
            ? 'text-white group-hover:text-primary-yellow' 
            : 'text-primary-dark group-hover:text-logo-blue'
        }`}>
          {course.title}
        </h3>
        
        {/* Description */}
        <p className={`mb-4 text-sm leading-relaxed line-clamp-2 transition-colors duration-300 ${
          variant === 'featured' 
            ? 'text-gray-100 group-hover:text-white' 
            : 'text-gray-600 group-hover:text-gray-800'
        }`}>
          {course.description}
        </p>
        
        {/* Stats Section */}
        <div className={`flex items-center justify-between text-sm mb-6 rounded-lg p-3 transition-colors duration-300 ${
          variant === 'featured' 
            ? 'bg-white/10 backdrop-blur-sm' 
            : 'bg-gray-50 group-hover:bg-gray-100'
        }`}>
          <div className="flex items-center gap-2 text-logo-blue">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-green">
            <Users className="h-4 w-4" />
            <span className="font-medium">{course.students_numbers}</span>
          </div>
          <div className="flex items-center gap-1 text-primary-yellow">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium">{course.starts}</span>
          </div>
        </div>
        
        {/* Footer Section */}
        <div className="flex items-center justify-between">
          {/* Instructor Info */}
          {showInstructor && (
            <div className={`text-sm ${
              variant === 'featured' ? 'text-gray-100' : 'text-gray-600'
            }`}>
              <span className={`font-medium ${
                variant === 'featured' ? 'text-white' : 'text-primary-dark'
              }`}>المدرب:</span>
              <br />
              <span className={`font-semibold ${
                variant === 'featured' ? 'text-primary-yellow' : 'text-logo-blue'
              }`}>
                {course.Instructor_name}
              </span>
            </div>
          )}
          
          {/* CTA Button */}
          <Link
            href={`/courses/${course.id}`}
            className={`group/btn relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
              variant === 'featured'
                ? 'bg-white text-primary-dark hover:bg-primary-yellow'
                : 'btn-gradient-primary'
            }`}
          >
            <span className="relative z-10">التفاصيل</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Creation Date */}
        <div className={`mt-4 pt-4 border-t text-xs ${
          variant === 'featured' 
            ? 'border-white/20 text-gray-200' 
            : 'border-gray-200 text-gray-500'
        }`}>
          تم الإنشاء: {new Date(course.created_at).toLocaleDateString('ar-EG')}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-logo-blue via-secondary-green to-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default CourseCard;
