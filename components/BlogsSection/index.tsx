'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogs = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'أهمية التعلم المستمر في عصر التكنولوجيا',
      excerpt: 'في عالم يتطور باستمرار، يصبح التعلم المستمر ضرورة حتمية للبقاء في المقدمة...',
      date: '15 يناير 2024',
      readTime: '5 دقائق',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'مستقبل البرمجة والذكاء الاصطناعي',
      excerpt: 'كيف سيؤثر الذكاء الاصطناعي على مجال البرمجة وما هي المهارات المطلوبة للمستقبل...',
      date: '12 يناير 2024',
      readTime: '7 دقائق',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'نصائح لتحسين مهارات التصميم الجرافيكي',
      excerpt: 'اكتشف أهم النصائح والتقنيات التي تساعدك على تطوير مهاراتك في التصميم الجرافيكي...',
      date: '10 يناير 2024',
      readTime: '4 دقائق',
    },
  ];

  return (
    <section className="py-20 px-5 md:px-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            أحدث المقالات
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اقرأ أحدث المقالات والنصائح في مجال التعليم والتكنولوجيا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl   group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.date}</span>
                  </div>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  اقرأ المزيد
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;