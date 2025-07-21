'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CoursesGrid from '@/components/CoursesGrid';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Award, ArrowDown } from 'lucide-react';

export default function CoursesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Enhanced Hero Section with New Gradients */}
      <section className="bg-gradient-primary-enhanced relative overflow-hidden" ref={ref}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Secondary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-80"></div>
          
          {/* Animated shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>

        <div className="container mx-auto py-24 md:py-32 px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-2xl">جميع الدورات</span>
              <br />
              <span className="text-primary-yellow drop-shadow-2xl">التدريبية</span>
            </h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl leading-relaxed text-gray-100 mb-8 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              اكتشف مجموعة واسعة من الدورات التدريبية المتخصصة المصممة لتطوير مهاراتك المهنية
              وتحقيق أهدافك في عالم التكنولوجيا والأعمال
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <BookOpen className="h-5 w-5 text-primary-yellow" />
                <span className="font-semibold text-white">50+ كورس</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Users className="h-5 w-5 text-secondary-green" />
                <span className="font-semibold text-white">5000+ طالب</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Award className="h-5 w-5 text-logo-blue" />
                <span className="font-semibold text-white">شهادات معتمدة</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={() => {
                  const element = document.querySelector('.courses-grid-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-primary-yellow text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3"
              >
                <span>استكشف الكورسات</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="courses-grid-section">
        <CoursesGrid />
      </section>

      <Footer />
    </main>
  );
}
