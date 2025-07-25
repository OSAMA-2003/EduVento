'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogsGrid from '@/components/BlogsGrid';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Eye, ArrowDown, PenTool, TrendingUp } from 'lucide-react';

export default function BlogsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* ✅ Enhanced Hero Section with New Gradients */}
      <section className="bg-gradient-primary-enhanced relative overflow-hidden" ref={ref}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Secondary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-80"></div>
          
          {/* Animated shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-logo-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          {/* Floating elements */}
          <div className="absolute top-32 left-1/4 w-4 h-4 bg-primary-yellow/50 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-secondary-green/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              <span className="text-white drop-shadow-2xl">مكتبة</span>
              <br />
              <span className="text-primary-yellow drop-shadow-2xl">المقالات</span>
            </h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl leading-relaxed text-gray-100 mb-8 drop-shadow-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              اقرأ أحدث المقالات والنصائح في مجال التعليم والتكنولوجيا من خبراء المجال 
              واكتشف آخر الاتجاهات في عالم البرمجة والتصميم
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
                <span className="font-semibold text-white">200+ مقال</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Users className="h-5 w-5 text-secondary-green" />
                <span className="font-semibold text-white">50K+ قارئ</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <TrendingUp className="h-5 w-5 text-logo-blue" />
                <span className="font-semibold text-white">محدث يومياً</span>
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
                  const element = document.querySelector('.blogs-grid-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-primary-yellow text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3"
              >
                <span>استكشف المقالات</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Featured Categories */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {['تقنية', 'تعليم', 'برمجة', 'تصميم', 'ذكاء اصطناعي'].map((category, index) => (
                <motion.div
                  key={category}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {category}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Enhanced Content Section */}
      <section className="blogs-grid-section relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/20 to-transparent"></div>
        
        <div className="relative z-10">
          <BlogsGrid />
        </div>
      </section>

  

      {/* ✅ Newsletter Section */}
      {/* <section className="py-16 bg-gradient-secondary-enhanced relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                ابق على اطلاع دائم
              </h2>
              <p className="text-gray-100 mb-6">
                اشترك في نشرتنا الإخبارية للحصول على أحدث المقالات مباشرة في بريدك الإلكتروني
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-primary-yellow focus:ring-2 focus:ring-primary-yellow/20 outline-none transition-all duration-300"
                />
                <button className="btn-primary whitespace-nowrap">
                  اشتراك
                </button>
              </div>
              
              <p className="text-white/60 text-sm mt-4">
                نحترم خصوصيتك ولن نرسل لك رسائل غير مرغوب فيها
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
