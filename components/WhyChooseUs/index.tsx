'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, ArrowLeft, Users, Target, BookOpen, Briefcase } from 'react-feather';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section ref={ref} className="py-16 md:py-24 px-5 md:px-10 lg:px-20 bg-gradient-to-b from-white to-blue-50 text-right rtl">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Hero Header */}
        <motion.div className="text-center" {...fadeIn(0)}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#132cb2] mb-4">
            ليه تختار <span className="text-blue-600">Eduvento</span>؟
          </h2>
          <div className="w-20 h-1.5 bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
          {...fadeIn(0.2)}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">رحلة متكاملة وليست مجرد كورسات</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                نبدأ معك من حيث أنت الآن ونوصلك إلى حيث تريد أن تكون. ليست مجرد محتوى تعليمي، بل خطة تطوير شخصية ومهنية شاملة.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div className="grid md:grid-cols-2 gap-6" {...fadeIn(0.4)}>


          {/* Eduvento */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
              <CheckCircle size={20} /> ما يميز Eduvento:
            </h3>
            <ul className="space-y-4 text-xl  ">
              {[
                "تقييم مبدئي لمستواك واحتياجاتك",
                "تركيز على التطبيق العملي والمشاريع",
                "متابعة حتى تحقيق النتائج",
                "خطط شخصية لكل متدرب"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100">
            <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <ArrowLeft size={20} /> ما يقدمه الآخرون:
            </h3>
            <ul className="space-y-4 text-xl ">
              {[
                "محتوى نظري بدون تطبيق عملي",
                "تدريب بدون متابعة أو تقييم",
                "إنتهى الكورس وإنتهت العلاقة",
                "قوالب جاهزة للجميع"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Features Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" {...fadeIn(0.6)}>
          {[
            {
              icon: <BookOpen size={24} />,
              title: "محتوى عملي",
              desc: "مصمم لتحقيق نتائج فعلية في سوق العمل"
            },
            {
              icon: <Users size={24} />,
              title: "مجتمع داعم",
              desc: "ليست رحلة فردية بل مع مجموعة متعاونة"
            },
            {
              icon: <Briefcase size={24} />,
              title: "توجيه مهني",
              desc: "إعداد CV، تحضير للمقابلات، فرص عمل"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-50">
              <div className="text-blue-500 mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial/CTA */}
        <motion.div className="text-center bg-blue-600 text-white p-8 rounded-2xl" {...fadeIn(0.8)}>
          <h3 className="text-2xl font-bold mb-4">لست وحدك في هذه الرحلة</h3>
          <p className="text-lg mb-6 opacity-90">
            انضم إلى مئات الطلاب الذين حققوا أهدافهم المهنية بمساعدة خبرائنا
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            إبدأ رحلتك الآن
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;