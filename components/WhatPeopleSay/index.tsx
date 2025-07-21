'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Quote, Star, ThumbsUp, Heart } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "سمير أحمد",
    role: 'مطور واجهات أمامية',
    company: 'شركة التكنولوجيا المتقدمة',
    gender: 'male',
    rating: 5,
    quote: '"منصة Eduvento غيرت مساري المهني بالكامل. تعلمت مهارات عملية حقيقية ساعدتني في الحصول على وظيفة أحلامي. المحتوى ممتاز والدعم رائع."',
  },
  {
    id: 2,
    name: 'سارة محمد',
    role: 'مطورة تطبيقات',
    company: 'فريلانسر',
    gender: 'female',
    rating: 5,
    quote: '"الكورسات هنا مختلفة تماماً عن أي منصة أخرى. كل شيء عملي ومباشر، والمدربين خبراء حقيقيين في مجالاتهم. أنصح بها بشدة."',
  },
  {
    id: 3,
    name: 'عمر خالد',
    role: 'مهندس برمجيات',
    company: 'شركة ناشئة',
    gender: 'male',
    rating: 5,
    quote: '"بعد سنين من التعلم النظري، أخيراً وجدت منصة تركز على التطبيق العملي. حصلت على ترقية في الشغل بفضل المهارات اللي تعلمتها هنا."',
  },
  {
    id: 4,
    name: 'نور فاطمة',
    role: 'مصممة UX/UI',
    company: 'وكالة إبداعية',
    gender: 'female',
    rating: 5,
    quote: '"التجربة التعليمية هنا استثنائية. المنصة سهلة الاستخدام والمحتوى منظم بشكل ممتاز. تعلمت أكثر مما تعلمته في الجامعة."',
  },
  {
    id: 5,
    name: 'أحمد علي',
    role: 'مختص تسويق رقمي',
    company: 'شركة تسويق',
    gender: 'male',
    rating: 5,
    quote: '"الكورسات التسويقية هنا على مستوى عالمي. تعلمت استراتيجيات حديثة وطبقتها مباشرة في شغلي. النتائج كانت مذهلة."',
  },
  {
    id: 6,
    name: 'ليلى حسن',
    role: 'مطورة مواقع',
    company: 'فريلانسر',
    gender: 'female',
    rating: 5,
    quote: '"منصة Eduvento ساعدتني أبدأ مسيرة الفريلانسينج. المشاريع العملية والتوجيه المستمر خلاني أثق في قدراتي وأحقق دخل ممتاز."',
  },
];

const WhatPeopleSay = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getAvatarImage = (gender: string) => {
    return gender === 'male' 
      ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      : 'https://images.unsplash.com/photo-1494790108755-2616b6e25b1d?w=150&h=150&fit=crop&crop=face';
  };

  return (
    <section className="py-20 bg-gradient-primary-enhanced relative overflow-hidden" ref={ref} dir="rtl">
      {/* ✅ Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient with mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
        
        {/* Animated background shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-logo-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-32 w-4 h-4 bg-primary-yellow/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-secondary-green/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-20 w-3 h-3 bg-logo-blue/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* ✅ Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-yellow to-secondary-green rounded-full flex items-center justify-center shadow-2xl">
                <Quote className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-white/30 animate-ping"></div>
            </div>
          </motion.div>

          

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            <span className="text-primary-yellow">ماذا يقول</span>{" "}
            <span className="text-white">عملاؤنا</span>
          </h2>
          
          <motion.div
            className="w-32 h-2 bg-gradient-to-r from-primary-yellow via-secondary-green to-logo-blue mx-auto rounded-full shadow-lg mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: '128px' } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            اكتشف تجارب حقيقية من خريجينا الذين غيروا مساراتهم المهنية معنا
          </motion.p>
        </motion.div>

        {/* ✅ Enhanced Swiper Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="py-8 px-2" key={testimonial.id}>
                {({ isActive }) => (
                  <motion.div
                    className={`relative transition-all duration-700 transform flex flex-col justify-between p-8 rounded-2xl shadow-2xl h-auto min-h-[420px] w-full max-w-[380px] mx-auto border overflow-hidden group
                      ${isActive 
                        ? 'bg-gradient-to-br from-primary-yellow to-secondary-green scale-105 z-10 text-primary border-white/30 shadow-3xl' 
                        : 'bg-white/95 backdrop-blur-sm text-gray-800 border-white/20 hover:shadow-2xl hover:scale-102'
                      }
                    `}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

                    {/* Quote Icon */}
                    <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg
                      ${isActive 
                        ? 'bg-white/20 text-primary-dark border-2 border-white/30' 
                        : 'bg-gradient-to-br from-logo-blue to-secondary-green text-primary'
                      }
                    `}>
                      <Quote className="w-6 h-6" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 fill-current ${
                            isActive ? 'text-primary-yellow' : 'text-yellow/20'
                          }`} 
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className={`text-base md:text-lg leading-relaxed mb-6 flex-grow font-medium relative z-10 ${
                      isActive ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {testimonial.quote}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mt-auto relative z-10">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-3 shadow-xl border-white">
                          <img
                            src={getAvatarImage(testimonial.gender)}
                            alt={`${testimonial.name} avatar`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Success badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-green rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                          <ThumbsUp className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg leading-tight ${
                          isActive ? 'text-gray-400' : 'text-gray-900'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm font-medium ${
                          isActive ? 'text-primary-dark/80' : 'text-logo-blue'
                        }`}>
                          {testimonial.role}
                        </p>
                        <p className={`text-xs ${
                          isActive ? 'text-primary-dark/60' : 'text-gray-500'
                        }`}>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className={`absolute top-4 left-4 transition-all duration-700 ${
                      isActive ? 'opacity-30' : 'opacity-0'
                    }`}>
                      <Heart className="w-6 h-6 text-white/60" />
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Enhanced Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center items-center gap-3 mt-8 relative z-20" />
        </motion.div>

        {/* ✅ Success Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">98%</div>
                <div className="text-white/80 text-sm">معدل الرضا</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-green mb-2">5000+</div>
                <div className="text-white/80 text-sm">خريج ناجح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9</div>
                <div className="text-white/80 text-sm">تقييم عام</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-logo-blue mb-2">85%</div>
                <div className="text-white/80 text-sm">حصلوا على وظائف</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ✅ Enhanced Custom Styles */}
      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(135deg, #FFD166, #06D6A0);
          transform: scale(1.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 12px rgba(255, 209, 102, 0.4);
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
        }

        .testimonials-swiper .swiper-slide > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .border-3 {
          border-width: 3px;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default WhatPeopleSay;
