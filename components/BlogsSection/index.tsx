'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';

interface Blog {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogs: Blog[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'أهمية التعلم المستمر في عصر التكنولوجيا',
      excerpt: 'في عالم يتطور باستمرار، يصبح التعلم المستمر ضرورة حتمية للبقاء في المقدمة والتأقلم مع التطورات السريعة.',
      date: '15 يناير 2024',
      readTime: '5 دقائق',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'مستقبل البرمجة والذكاء الاصطناعي',
      excerpt: 'كيف سيؤثر الذكاء الاصطناعي على مجال البرمجة وما هي المهارات المطلوبة للنجاح في المستقبل القريب.',
      date: '12 يناير 2024',
      readTime: '7 دقائق',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'نصائح لتحسين مهارات التصميم الجرافيكي',
      excerpt: 'اكتشف أهم النصائح والتقنيات التي تساعدك على تطوير مهاراتك في التصميم الجرافيكي بشكل احترافي.',
      date: '10 يناير 2024',
      readTime: '4 دقائق',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'أساسيات تطوير المواقع الإلكترونية',
      excerpt: 'دليل شامل للمبتدئين في تعلم أساسيات تطوير المواقع الإلكترونية والأدوات المطلوبة للبدء.',
      date: '8 يناير 2024',
      readTime: '6 دقائق',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'استراتيجيات التسويق الرقمي الحديثة',
      excerpt: 'تعرف على أحدث استراتيجيات التسويق الرقمي وكيفية تطبيقها بفعالية لتحقيق أفضل النتائج.',
      date: '5 يناير 2024',
      readTime: '8 دقائق',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'مهارات القيادة في العصر الرقمي',
      excerpt: 'كيف تطور مهارات القيادة في عالم رقمي متغير وما هي الصفات المطلوبة للقائد الناجح.',
      date: '3 يناير 2024',
      readTime: '5 دقائق',
    },
  ];

  const BlogCard = ({ blog }: BlogCardProps) => (
    <div className="bg-white mx-5 md:mx-2 rounded-3xl shadow-md group text-center w-52 md:w-72 pt-12 pb-8 px-4 relative hover:shadow-xl transition duration-300 hover:scale-105">
      {/* صورة دائرية بارزة */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

        <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm">
          اقرأ المزيد
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const Marquee = ({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) => {
    return (
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]" dir="ltr">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{
            x: reverse ? [0, -100 * blogs.length] : [-100 * blogs.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 px-5 md:px-20 bg-gradient-to-br from-gray-50 to-gray-100" ref={ref} dir="ltr">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            أحدث المقالات
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            اقرأ أحدث المقالات والنصائح في مجال التعليم والتكنولوجيا
          </motion.p>
        </motion.div>

        {/* صفين للمدونات بالتمرير التلقائي */}
        <div className="relative">
          <Marquee>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </Marquee>

          <div className="mt-8">
            <Marquee reverse>
              {blogs.map((blog) => (
                <BlogCard key={`reverse-${blog.id}`} blog={blog} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* زر CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            عرض جميع المقالات
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogsSection;
