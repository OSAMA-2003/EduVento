'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const blogs = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'أهمية التعلم المستمر في عصر التكنولوجيا',
    excerpt: 'في عالم يتطور باستمرار، يصبح التعلم المستمر ضرورة حتمية للبقاء.',
    date: '20/01/2022',
    author: 'علي'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'الذكاء الاصطناعي في بيئة العمل',
    excerpt: 'كيف يُغير الذكاء الاصطناعي طريقة عمل الشركات.',
    date: '22/03/2025',
    author: 'سارة'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'لماذا يجب أن تتعلم البرمجة',
    excerpt: 'البرمجة مهارة العصر الحديث، تعرّف على أهميتها.',
    date: '20/03/2025',
    author: 'محمد'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'تطوير المهارات الرقمية',
    excerpt: 'أهمية تطوير المهارات الرقمية في سوق العمل المعاصر.',
    date: '18/03/2025',
    author: 'نور'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    title: 'الابتكار في التعليم',
    excerpt: 'كيف يمكن للتقنيات الحديثة أن تثري تجربة التعلم.',
    date: '15/03/2025',
    author: 'أحمد'
  }
];

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      dir="rtl"
      className="relative py-24 px-4 md:px-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://imgs.search.brave.com/rsJifnFzjrtZJsKk54gOSjM3O53mKIZvBMLdMJsG5EU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tdXNpbmctZGln/aXRhbC10YWJsZXQt/cHNkLW1vY2t1cC1z/bWFydC10ZWNobm9s/b2d5XzUzODc2LTEx/MDgxNS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              أحدث المقالات
            </h2>
            <p className=" hidden md:block text-gray-300 text-lg">
              أخبار التعليم من جميع أنحاء العالم
            </p>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex gap-2">
           
            <button className="next-btn w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
             <button className="prev-btn w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="news-swiper"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="relative overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Author and date badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black text-sm font-medium px-3 py-1 rounded">
                    {blog.author} - {blog.date}
                  </span>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogsSection;