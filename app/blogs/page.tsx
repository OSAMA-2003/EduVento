// app/blogs/page.tsx
'use client'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogsGrid from '@/components/BlogsGrid';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BlogsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="md:py-10 bg-gradient text-white" ref={ref}>
        <div className="container mx-auto py-20 px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              المقالات
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              اقرأ أحدث المقالات والنصائح في مجال التعليم والتكنولوجيا من خبراء المجال
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <BlogsGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}