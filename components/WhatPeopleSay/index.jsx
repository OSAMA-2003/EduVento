'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    name: "سمير",
    role: 'مطور واجهات أمامية',
    gender: 'male',
    quote: '"LearnPress هو حل ووردبريس متكامل لإنشاء نظام إدارة التعلم (LMS). يمكن أن يساعدني في إنشاء دورات ودروس واختبارات وإدارتها بسهولة كما أريد. لقد تعلمت الكثير، وأنا أوصي به بشدة. شكرًا."',
  },
  {
    id: 2,
    name: 'سارة',
    role: 'مطور ويب',
    gender: 'female',
    quote: '"ساعدني LearnPress على تنظيم المحتوى وتقديم تجربة سلسة للطلاب. فعلاً أداة قوية لتعليم رقمي فعال."',
  },
  {
    id: 3,
    name: 'عمر',
    role: 'مدرب برمجة',
    gender: 'male',
    quote: '"لم أتوقع أن يكون إنشاء دورة تعليمية بهذه السهولة. واجهة المستخدم رائعة وتجعل التفاعل بسيط وسريع."',
  },
  {
    id: 4,
    name: 'نور',
    role: 'كاتبة محتوى',
    gender: 'female',
    quote: '"أحببت كيف يتم دمج الدروس والاختبارات بسلاسة في LearnPress. واجهة جميلة وتجربة رائعة."',
  },
  {
    id: 5,
    name: 'أحمد',
    role: 'مصمم جرافيك',
    gender: 'male',
    quote: '"التجربة مع LearnPress كانت رائعة، واجهة سهلة الاستخدام وتخصيص قوي."',
  },
  {
    id: 6,
    name: 'ليلى',
    role: 'معلمة',
    gender: 'female',
    quote: '"أفضل نظام لإدارة التعلم استخدمته على الإطلاق، ساعدني في تنظيم مواد التدريس."',
  },
];

const WhatPeopleSay = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(testimonials.length / 2));
  const [swiper, setSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getAvatarImage = (gender) => {
    return gender === 'male'
      ? '/images/man.png'
      : '/images/woman.png';
  };

  return (
    <section className="py-20 text-center bg-white" dir="rtl">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">ماذا يقول الناس</h2>
      <p className="text-gray-500 mb-10">آراء حقيقية عن سمة التعليم لووردبريس</p>

      <div className="w-full max-w-xs mx-auto h-px bg-gray-200 mb-10"></div>

      {/* Avatar Navigation */}
      <div className="mb-8 px-4 max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-4 space-x-reverse">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            const isPrev = activeIndex === (index + 1) % testimonials.length;
            const isNext = activeIndex === (index - 1 + testimonials.length) % testimonials.length;
            const isVisible = isActive || isPrev || isNext;
            
            if (!isVisible) return null;
            
            return (
              <div
                key={testimonial.id}
                className={`
                  w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer
                  ${isActive 
                    ? 'border-blue-500 scale-110 shadow-lg opacity-100' 
                    : 'border-gray-300 opacity-50 hover:opacity-75 scale-90'}
                `}
                onClick={() => {
                  if (swiper) {
                    swiper.slideToLoop(index);
                  }
                }}
              >
                <img
                  src={getAvatarImage(testimonial.gender)}
                  alt={`${testimonial.name} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false 
        }}
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance);
          // Start from the middle slide
          swiperInstance.slideToLoop(Math.floor(testimonials.length / 2), 0);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div className="text-center px-4">
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 mb-4">{testimonial.role}</p>
                <p className="text-lg text-gray-800 leading-relaxed px-4 md:px-10">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatPeopleSay;