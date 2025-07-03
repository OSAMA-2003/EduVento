'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ArrowLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'تعلم المهارات التقنية الحديثة',
      subtitle: 'انضم إلى آلاف الطلاب واكتسب مهارات جديدة في البرمجة والتصميم',
    },
    {
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'دورات معتمدة من خبراء المجال',
      subtitle: 'احصل على شهادات معتمدة من مدربين محترفين لتطوير مسيرتك المهنية',
    },
    {
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'تعلم من أي مكان وفي أي وقت',
      subtitle: 'مرونة كاملة في التعلم مع دعم فني متواصل على مدار الساعة',
    },
  ];

  return (
    <section className="relative mt-14 h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {slides[activeSlide].title}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[activeSlide].subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-[#132cb2] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  ابدأ التعلم الآن
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#132cb2] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  تصفح الكورسات
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;