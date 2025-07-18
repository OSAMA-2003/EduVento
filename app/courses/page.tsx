'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CoursesGrid from '@/components/CoursesGrid';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CoursesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Gradient */}
      <section className="md:py-10  bg-gradient text-white" ref={ref}>
        <div className="container mx-auto py-20 px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              جميع الدورات التدريبية
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              اكتشف مجموعة واسعة من الدورات التدريبية المتخصصة المصممة لتطوير مهاراتك المهنية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <CoursesGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
