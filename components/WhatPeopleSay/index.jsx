'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  const [slidesPerView, setSlidesPerView] = useState(3);

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

  const getAvatarImage = (gender) => {
    return gender === 'male'
      ? '/images/man.png'
      : '/images/woman.png';
  };

 

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" dir="rtl">
    
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-5 md:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <br></br>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text block ">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف تجارب حقيقية من مستخدمين راضين عن منصة التعلم الخاصة بنا
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative  ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
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
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonials-swiper  "
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className='p-5 md:py-20 md:px-5' key={testimonial.id}>
  {({ isActive }) => (
    <div
      className={`transition-all duration-500 transform flex flex-col justify-between items-start p-6 rounded-2xl shadow-xl h-[360px] w-full max-w-[350px] mx-auto
        ${isActive ? 'bg-gradient scale-105 z-10 text-white' : 'bg-white text-gray-800'}
      `}
    >
      {/* Quote Icon */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4
        ${isActive ? 'bg-white/20 text-white' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600'}
      `}>
        <Quote className="w-5 h-5" />
      </div>

      {/* Quote */}
      <p className={`text-base leading-relaxed mb-4 ${isActive ? 'text-white' : 'text-gray-700'}`}>
        {testimonial.quote}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={getAvatarImage(testimonial.gender)}
            alt={`${testimonial.name} avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className={`font-bold text-md ${isActive ? 'text-white' : 'text-gray-800'}`}>
            {testimonial.name}
          </h4>
          <p className={`${isActive ? 'text-white/80' : 'text-gray-600'}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )}
</SwiperSlide>

            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* <div className="swiper-button-next-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-gray-50 group cursor-pointer">
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </div>
          <div className="swiper-button-prev-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-gray-50 group cursor-pointer">
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </div> */}
        </div>

        {/* Custom Pagination */}
<div className="swiper-pagination-custom flex justify-center items-center gap-3 mt-5 mb-[-30px] z-20 relative" />
      </div>

      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transform: scale(1.25);
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
        
        .testimonials-swiper .swiper-slide > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};
export default WhatPeopleSay;