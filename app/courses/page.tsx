'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CoursesGrid from '@/components/CoursesGrid';
import { BookOpen, Users, Award } from 'lucide-react';
import HeroComponent from '@/components/HeroComponent';

export default function CoursesPage() {


  return (
    <main className="min-h-screen">




      {/* Hero */}
              <HeroComponent
                headingTop=" جميع الدورات "
                headingHighlight="التدريبية"
                subtitle={`اكتشف مجموعة واسعة من الدورات التدريبية المتخصصة المصممة لتطوير مهاراتك المهنية
              وتحقيق أهدافك في عالم التكنولوجيا والأعمال`}
                stats={[
                  { icon: <BookOpen className="h-5 w-5 text-secondary-green" />, label: '50+ كورس ' },
                  { icon: <Users className="h-5 w-5 text-primary-yellow" />, label: '5000+ طالب' },
                  { icon: <Award className="h-5 w-5 text-logo-blue" />, label: ' شهادات معتمدة' },
                ]}
                ctaText=" استكشف الكورسات "
                scrollToClass="courses-grid-section"
              />
      
                
      {/* Courses Grid Section */}
      <section className="courses-grid-section">
        <CoursesGrid />
      </section>

    </main>
  );
}
