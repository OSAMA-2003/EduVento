import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PopularCourses from '@/components/PopularCourses';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';
import WhatPeopleSay from '@/components/WhatPeopleSay';
import Footer from '@/components/Footer';
import StorySection from '@/components/StorySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden ">
      <Navigation />
      <HeroSection />
      <StorySection/>
      <WhyChooseUs />
      <PopularCourses />
      <WhatPeopleSay/>
      <BlogsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}