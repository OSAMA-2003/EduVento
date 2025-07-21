'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart,
  Star,
  Users,
  Award,
  Send,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/courses', label: 'الكورسات' },
    { href: '/about', label: 'من نحن' },
    { href: '/blogs', label: 'المقالات' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  const courseCategories = [
    'تطوير المواقع',
    'التصميم الجرافيكي', 
    'التسويق الرقمي',
    'إدارة المشاريع',
    'الذكاء الاصطناعي',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const stats = [
    { number: '10K+', label: 'طالب نشط' },
    { number: '150+', label: 'كورس متاح' },
    { number: '98%', label: 'معدل النجاح' },
    { number: '4.9', label: 'تقييم عام' },
  ];

  return (
    <footer className="bg-gradient-primary-enhanced relative overflow-hidden">
      {/* ✅ Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient with mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-95"></div>
        
        {/* Animated background shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-yellow/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary-green/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-logo-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-24 w-4 h-4 bg-primary-yellow/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-secondary-green/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-16 w-3 h-3 bg-logo-blue/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {/* ✅ Top Stats Section */}
        {/* <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">إنجازاتنا بالأرقام</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-yellow to-secondary-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* ✅ Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-secondary-green rounded-2xl flex items-center justify-center shadow-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 w-12 h-12 rounded-2xl border-2 border-primary-yellow/30 animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white block">Eduvento</span>
                <span className="text-primary-yellow text-sm">أكاديمية التعلم</span>
              </div>
            </div>
            
            <p className="text-gray-200 leading-relaxed">
              أكاديمية رائدة في التعليم الرقمي تقدم دورات تدريبية معتمدة في مختلف المجالات التقنية والمهنية لتطوير مهاراتك وتحقيق أهدافك المهنية.
            </p>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary-yellow" />
                تابعنا على
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-secondary-green" />
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Course Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-logo-blue" />
              تصنيفات الدورات
            </h3>
            <ul className="space-y-3">
              {courseCategories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-secondary-green transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Star className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {category}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary-yellow" />
              تواصل معنا
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-primary-yellow/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary-yellow" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  eduvento@academy.com
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-secondary-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-secondary-green" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  +20 12 345 6789
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-logo-blue/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-logo-blue" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  سوهاج، مصر
                </span>
              </div>
            </div>

            {/* Newsletter Signup
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Send className="h-4 w-4 text-secondary-green" />
                النشرة الإخبارية
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                اشترك للحصول على آخر الأخبار والعروض
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 text-sm focus:border-primary-yellow focus:outline-none transition-colors duration-300"
                />
                <button className="bg-primary-yellow text-primary-dark p-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 group">
                  <Send className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* ✅ Enhanced Bottom Section */}
        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary-yellow animate-pulse" />
                © {currentYear} Eduvento Academy. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Users className="h-3 w-3" />
                <span>صُنع بحب في مصر</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-300 hover:text-primary-yellow transition-colors duration-300 flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                سياسة الخصوصية
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-300 hover:text-secondary-green transition-colors duration-300 flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                شروط الاستخدام
              </Link>
              <Link 
                href="/support" 
                className="text-gray-300 hover:text-logo-blue transition-colors duration-300 flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                الدعم الفني
              </Link>
            </div>
          </div>

       
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
