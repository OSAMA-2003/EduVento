import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CoursesGrid from '@/components/CoursesGrid';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              جميع الدورات التدريبية
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعة واسعة من الدورات التدريبية المتخصصة المصممة لتطوير مهاراتك المهنية
            </p>
          </div>
          <CoursesGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}