'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const ContactContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 50 123 4567', '+966 11 456 7890'],
      description: 'متاح من السبت إلى الخميس',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@academy.com', 'support@academy.com'],
      description: 'نرد خلال 24 ساعة',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['سوهاج،مصر'],
      description: 'مفتوح من 9 صباحاً إلى 6 مساءً',
    },
  ];

  const workingHours = [
    { day: 'السبت - الأربعاء', hours: '9:00 ص - 6:00 م' },
    { day: 'الخميس', hours: '9:00 ص - 3:00 م' },
    { day: 'الجمعة', hours: 'مغلق' },
  ];

  return (
    <div className="pb-16 overflow-hidden " ref={ref}>
      {/* Hero Section */}
      <section className="py-14  md:py-20 bg-gradient text-white">
        <div className="container pt-10 mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              تواصل معنا
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              نحن هنا لمساعدتك في رحلتك التعليمية. تواصل معنا وسنكون سعداء بالإجابة على جميع استفساراتك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pt-24 pb-20 bg-white">
        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  أرسل لنا رسالة
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="اكتب اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      الموضوع *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    إرسال الرسالة
                    <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Working Hours */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    ساعات العمل
                  </h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    الأسئلة الشائعة
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      كم يستغرق الرد على الاستفسارات؟
                    </h4>
                    <p className="text-gray-600 text-sm">
                      نحن نرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      هل يمكنني زيارة المكتب شخصياً؟
                    </h4>
                    <p className="text-gray-600 text-sm">
                      نعم، يمكنك زيارتنا خلال ساعات العمل الرسمية. يُفضل تحديد موعد مسبق.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      هل تقدمون استشارات مجانية؟
                    </h4>
                    <p className="text-gray-600 text-sm">
                      نعم، نقدم استشارات مجانية لمساعدتك في اختيار الدورة المناسبة.
                    </p>
                  </div>
                </div>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;