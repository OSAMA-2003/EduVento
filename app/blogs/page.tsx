'use client';

import BlogsGrid from '@/components/BlogsGrid';
import { BookOpen, Users,TrendingUp } from 'lucide-react';
import HeroComponent from '@/components/HeroComponent';

export default function BlogsPage() {

  return (
    <main className="min-h-screen">

      {/* Hero */}
                      <HeroComponent
                        headingTop="مكتبة"
                        headingHighlight="المقالات"
                        subtitle={`اقرأ أحدث المقالات والنصائح في مجال التعليم والتكنولوجيا من خبراء المجال 
              واكتشف آخر الاتجاهات في عالم البرمجة والتصميم`}
                        stats={[
                          { icon: <BookOpen className="h-5 w-5 text-secondary-green" />, label: '200+ مقال  ' },
                          { icon: <Users className="h-5 w-5 text-primary-yellow" />, label: ' 50K+ قارئ' },
                          { icon: <TrendingUp className="h-5 w-5 text-logo-blue" />, label: 'محدث يومياً ' },
                        ]}
                        ctaText="استكشف المقالات"
                        scrollToClass="blogs-grid-section"
                      />

                      

      {/* ✅ Enhanced Content Section */}
      <section className="blogs-grid-section relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark/20 to-transparent"></div>
        
        <div className="relative z-10">
          <BlogsGrid />
        </div>
      </section>

  
    </main>
  );
}
