'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Headphones, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Award,
      title: 'شهادات معتمدة',
      description: 'احصل على شهادات معتمدة دولياً تساعدك في تطوير مسيرتك المهنية',
    },
    {
      icon: Users,
      title: 'مدربين محترفين',
      description: 'تعلم من خبراء المجال الذين يتمتعون بسنوات من الخبرة العملية',
    },
    {
      icon: Headphones,
      title: 'دعم فني 24/7',
      description: 'فريق دعم متاح على مدار الساعة لمساعدتك في رحلتك التعليمية',
    },
    {
      icon: DollarSign,
      title: 'أسعار تنافسية',
      description: 'جودة عالية بأسعار مناسبة للجميع مع إمكانية الدفع بالتقسيط',
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
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن نقدم تجربة تعليمية متميزة تجمع بين الجودة والمرونة والدعم المستمر
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl   text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-[#132cb2] transition-colors ">
                  <feature.icon className="h-8 w-8 text-[#132cb2] group-hover:text-white transition-colors " />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;