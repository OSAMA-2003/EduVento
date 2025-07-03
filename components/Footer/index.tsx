import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">أكاديمية التعلم</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              أكاديمية رائدة في التعليم الرقمي تقدم دورات تدريبية معتمدة في مختلف المجالات التقنية والمهنية
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  الكورسات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تصنيفات الدورات</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  تطوير المواقع
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  التصميم الجرافيكي
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  التسويق الرقمي
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  إدارة المشاريع
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">eduvento@academy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+20 0123456789</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} أكاديمية التعلم الرقمي. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;