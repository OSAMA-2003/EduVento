'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Heart,
  Star,
  Users
} from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });
  const isInfoInView = useInView(infoRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden" ref={ref}>
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
        <div className="absolute top-32 right-24 w-4 h-4 bg-primary-yellow/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-secondary-green/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-20 w-3 h-3 bg-logo-blue/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ✅ Enhanced Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary-yellow backdrop-blur-sm text-primary-dark px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>تواصل معنا</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            <span className="text-primary-yellow">ابدأ</span>{" "}
            <span className="text-white">رحلتك معنا</span>
          </h2>
          
          <motion.div
            className="w-32 h-2 bg-gradient-to-r from-primary-yellow via-secondary-green to-logo-blue mx-auto rounded-full shadow-lg mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: '128px' } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            سواء كنت لسه طالب بتدور على طريقك، أو خريج محتار تبدأ منين…
            <br />
            تعالى نساعدك تلاقي الاتجاه الصح، وتبدأ أول خطوة حقيقية ناحية مستقبلك.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* ✅ Enhanced Contact Info */}
          <motion.div
            ref={infoRef}
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Information Cards */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: 'الهاتف',
                    value: '+20 12 345 6789',
                    color: 'from-logo-blue to-secondary-green',
                    bgColor: 'bg-logo-blue/10'
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: 'البريد الإلكتروني',
                    value: 'eduvento@academy.com',
                    color: 'from-secondary-green to-primary-yellow',
                    bgColor: 'bg-secondary-green/10'
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: 'العنوان',
                    value: 'سوهاج، مصر',
                    color: 'from-primary-yellow to-alert-red',
                    bgColor: 'bg-primary-yellow/10'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    style={{ backgroundColor: `var(--${item.bgColor.replace('bg-', '').replace('/10', '')})10` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-primary-dark group-hover:text-logo-blue transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Message Card */}
            <motion.div
              className="bg-gradient-to-br from-primary-yellow/90 to-secondary-green/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-primary-dark relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInfoInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-red-100" />
                  </div>
                  <h4 className="text-xl font-bold">
                    في Eduvento، مش بنجمع بياناتك وخلاص…
                  </h4>
                </div>
                
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    إحنا فعلاً بنقرا كل رسالة، وبنرد عليك بشكل يناسب حالتك أنت.
                  </p>
                  <p>
                    اكتبلنا إنت فين دلوقتي، بتفكر في إيه، وإيه نفسك توصله...
                    وهنرجع لك برد مفيد وواضح يساعدك بشكل 
                    <span className="font-bold text-primary-yellow px-2 py-1 rounded-lg mx-1">
                      "مجاني تماماً"
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    يمكن تكون الرسالة دي هي أول خطوة في أكبر تغيير في حياتك.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-yellow mb-1">24</div>
                  <div className="text-white/80 text-xs">ساعة رد</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-green mb-1">98%</div>
                  <div className="text-white/80 text-xs">معدل الرضا</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">1K+</div>
                  <div className="text-white/80 text-xs">استفسار تم الرد عليه</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ✅ Enhanced Contact Form */}
          <motion.div
            ref={formRef}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                /* Contact Form */
                <>
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-primary-dark mb-3">
                      أرسل لنا رسالة
                    </h3>
                    <p className="text-gray-600">
                      نحن هنا لمساعدتك في بناء مستقبلك المهني
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                        الاسم الكامل
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

                    {/* Email Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                        البريد الإلكتروني
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

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-primary w-full resize-none"
                        placeholder="اكتب رسالتك هنا... حدثنا عن وضعك الحالي وأهدافك"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient-primary relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9, duration: 0.6 }}
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

                  {/* Additional Info */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-200 text-center"
                    initial={{ opacity: 0 }}
                    animate={isFormInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-logo-blue" />
                        <span>رد خلال 24 ساعة</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-secondary-green" />
                        <span>استشارة مجانية</span>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* ✅ Additional Trust Elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary-yellow" />
              <h3 className="text-xl font-bold text-white">لماذا يثق بنا آلاف الطلاب؟</h3>
              <Star className="h-5 w-5 text-primary-yellow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <Users className="h-8 w-8 text-secondary-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">5000+</div>
                <div className="text-gray-200 text-sm">طالب استفاد</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-primary-yellow mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-200 text-sm">معدل النجاح</div>
              </div>
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-logo-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-200 text-sm">دعم متواصل</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
