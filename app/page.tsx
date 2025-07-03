import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PopularCourses from '@/components/PopularCourses';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white ">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <PopularCourses />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}