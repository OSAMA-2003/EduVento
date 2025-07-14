"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Star,
  Award,
  Play,
  CheckCircle,
  User,
  Globe,
  BookOpen,
} from "lucide-react";
import { fetchCourseById } from "@/lib/api";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CourseDetailsProps {
  courseId: string;
}

const CourseDetails = ({ courseId }: CourseDetailsProps) => {
  const [course, setCourse] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const fetched = await fetchCourseById(parseInt(courseId));
        setCourse(fetched);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        جاري تحميل بيانات الدورة...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            الدورة غير موجودة
          </h1>
          <p className="text-gray-600">
            عذراً، لم نتمكن من العثور على الدورة المطلوبة.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="pt-10 mb-10 bg-gradient text-white">
        <div className="container mx-auto py-14 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {course.title}
            </h1>
          </div>
        </div>
      </section>

      <motion.nav
        className="mb-8 px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">الرئيسية</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-blue-600">الكورسات</Link>
          <span>/</span>
          <span className="text-gray-900">{course.title}</span>
        </div>
      </motion.nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 mb-10 px-5 gap-12">
        {/* المحتوى الرئيسي */}
        <div className="lg:col-span-2">
          {/* صورة وفيديو */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mb-8 rounded-xl overflow-hidden">
              <img
                src={course.video || course.image}
                alt={course.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-colors">
                  <Play className="h-8 w-8 text-blue-600 fill-current mr-1" />
                </button>
              </div>
            </div>

            {/* معلومات الكورس */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
              <InfoIcon icon={<Clock />} label={course.duration} />
              <InfoIcon icon={<Users />} label={`${course.studentsEnrolled} طالب`} />
              <InfoIcon icon={<Star className="text-yellow-400 fill-current" />} label={course.rating} />
              <InfoIcon icon={<BookOpen />} label={course.level} />
              <InfoIcon icon={<Globe />} label={course.language} />
            </div>

            {/* الوصف */}
            <Section title="وصف الدورة">
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </Section>

            {/* المحتوى */}
            <Section title="محتوى الدورة">
              <div className="space-y-3">
                {course.lessons?.map((lesson: any, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">{lesson.title}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* المتطلبات */}
            <Section title="المتطلبات">
              <ul className="space-y-2">
                {course.requirements?.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ماذا ستتعلم */}
            <Section title="ماذا ستتعلم">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn?.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </Section>
          </motion.div>
        </div>

        {/* الشريط الجانبي */}
        <div className="lg:col-span-1">
          <motion.div
            className="sticky top-24"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* معلومات الدفع */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {course.price} ج
                </div>
                <p className="text-gray-600">دفعة واحدة أو بالتقسيط</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-4">
                سجل الآن
              </button>
              <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold">
                أضف إلى المفضلة
              </button>
              {course.certificate && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">شهادة معتمدة</span>
                  </div>
                </div>
              )}
            </div>

            {/* معلومات المدرب */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">المدرب</h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={course.instructor?.image}
                  alt={course.instructor?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {course.instructor?.name}
                  </h4>
                  {course.instructor?.experience && (
                    <p className="text-sm text-blue-600">
                      {course.instructor.experience} خبرة
                    </p>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.instructor?.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

// عناصر مساعدة
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
    {children}
  </motion.div>
);

const InfoIcon = ({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{label}</span>
  </div>
);
