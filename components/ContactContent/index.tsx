'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  Heart,
  Star,
  Users,
  Headphones
} from 'lucide-react';

const ContactContent = () => {
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);
  
  const isInfoInView = useInView(infoRef, { once: true, margin: '-100px' });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });
  const isFaqInView = useInView(faqRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 2000);
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
      details: ['17818 293 10 20+'],
      description: 'متاح من السبت إلى الخميس',
      color: 'from-logo-blue to-secondary-green',
      bgColor: 'bg-logo-blue/10'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['eduvento@academy.com'],
      // description: 'نرد خلال 24 ساعة',
      color: 'from-secondary-green to-primary-yellow',
      bgColor: 'bg-secondary-green/10'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['سوهاج، مصر'],
      description: 'مفتوح من 9 صباحاً إلى 6 مساءً',
      color: 'from-primary-yellow to-alert-red',
      bgColor: 'bg-primary-yellow/10'
    },
  ];

  const workingHours = [
    { day: 'الاحد - الخميس', hours: '9:00 ص - 6:00 م', available: true },
   
  ];

  const faqs = [
    {
      question: 'كم يستغرق الرد على الاستفسارات؟',
      answer: 'نحن نرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى، وفي أغلب الأحيان خلال ساعات قليلة.',
      icon: <Clock className="h-5 w-5" />
    },
    {
      question: 'هل يمكنني زيارة المكتب شخصياً؟',
      answer: 'نعم، يمكنك زيارتنا خلال ساعات العمل الرسمية. يُفضل تحديد موعد مسبق للحصول على أفضل خدمة.',
      icon: <MapPin className="h-5 w-5" />
    },
    {
      question: 'هل تقدمون استشارات مجانية؟',
      answer: 'نعم، نقدم استشارات مجانية لمساعدتك في اختيار الدورة المناسبة وتخطيط رحلتك التعليمية.',
      icon: <Heart className="h-5 w-5" />
    },
    {
      question: 'ما هي طرق التواصل المتاحة؟',
      answer: 'يمكنك التواصل معنا عبر الهاتف، البريد الإلكتروني، النموذج أدناه، أو زيارة مكتبنا شخصياً.',
      icon: <Headphones className="h-5 w-5" />
    }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* ✅ Enhanced Contact Info Cards */}
      <section className="py-20 bg-gradient-smooth-blend relative overflow-hidden" ref={infoRef}>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              طرق التواصل معنا
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 border border-white/20">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <info.icon className="h-10 w-10 text-logo-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-logo-blue transition-colors duration-300">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  {/* <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {info.description}
                  </p> */}

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Enhanced Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative" ref={formRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-logo-blue via-secondary-green to-primary-yellow"></div>
                
                {isSubmitted ? (
                  /* Success State */
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-20 h-20 bg-secondary-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-green mb-4">
                      تم الإرسال بنجاح! 🎉
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-primary-dark mb-4">
                        أرسل لنا رسالة
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        نحن متحمسون لسماع منك! املأ النموذج أدناه وسنتواصل معك قريباً.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                            الاسم الكامل *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-primary w-full"
                            placeholder="اكتب اسمك الكامل"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                            البريد الإلكتروني *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-primary w-full"
                            placeholder="example@email.com"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <label htmlFor="subject" className="block text-sm font-semibold text-primary-dark mb-2">
                          الموضوع *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="input-primary w-full"
                          placeholder="موضوع الرسالة"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                          الرسالة *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="input-primary w-full resize-none"
                          placeholder="اكتب رسالتك هنا..."
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-gradient-primary relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="spinner-primary w-5 h-5"></div>
                            <span>جاري الإرسال...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <span>إرسال الرسالة</span>
                            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Additional Info Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Working Hours */}
              <div className="card-primary hover:shadow-2xl group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-logo-blue" />
                  </div>
                  <h3 className="text-xl font-bold  text-logo-blue transition-colors duration-300">
                    ساعات العمل
                  </h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                      <span className="font-medium text-primary-dark">{schedule.day}</span>
                      <div className="flex items-center gap-2">
                        <span className={schedule.available ? 'text-secondary-green' : 'text-gray-500'}>
                          {schedule.hours}
                        </span>
                        {schedule.available && (
                          <div className="w-2 h-2 bg-secondary-green rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time Promise */}
              <div className="bg-gradient-to-br from-primary-yellow/90 to-secondary-green/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-primary-dark relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8" />
                    <h3 className="text-xl font-bold">وعدنا لك</h3>
                  </div>
                  <p className="leading-relaxed mb-4">
                    نحن ملتزمون بالرد على جميع استفساراتك خلال 24 ساعة كحد أقصى. 
                    فريقنا متاح لمساعدتك في أي وقت تحتاج فيه إلى الدعم.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>رد سريع</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>خدمة شخصية</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Enhanced FAQ Section */}
      {/* <section className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden" ref={faqRef}>
        <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="text-primary-yellow">أسئلة</span> وأجوبة
            </h2>
            
            <div className="w-24 h-2 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full shadow-lg"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center text-logo-blue flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-3 group-hover:text-logo-blue transition-colors duration-300">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-yellow mb-2">24</div>
                  <div className="text-white/80 text-sm">ساعة وقت الاستجابة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-green mb-2">98%</div>
                  <div className="text-white/80 text-sm">معدل الرضا</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">5000+</div>
                  <div className="text-white/80 text-sm">استفسار تم الرد عليه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-logo-blue mb-2">24/7</div>
                  <div className="text-white/80 text-sm">دعم متواصل</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactContent;
