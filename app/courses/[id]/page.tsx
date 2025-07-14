// app/courses/[id]/page.tsx

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CourseDetails from '@/components/CourseDetails';
import { fetchAllCourses, fetchCourseById } from '@/lib/api';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  try {
    const courses = await fetchAllCourses();

    return courses.map((course) => ({
      id: course.id.toString(),
    }));
  } catch (error) {
    // يفضل logging الخطأ هنا عشان تعرف لو فيه مشكلة في جلب الكورسات
    console.error('Error generating static params for courses:', error);
    return [];
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  // التصحيح هنا: إضافة 10 كبارامتر ثانٍ لـ parseInt
  const courseId = parseInt(params.id, 10);

  // تأكد من أن الـ ID رقم صالح قبل المتابعة
  if (isNaN(courseId)) {
    console.warn(`Invalid course ID received: ${params.id}`);
    notFound(); // أو يمكنك توجيه المستخدم لصفحة خطأ أو صفحة رئيسية
  }

  const course = await fetchCourseById(courseId);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CourseDetails course={course} />
      <Footer />
    </main>
  );
}