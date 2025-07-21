// app/courses/[id]/page.tsx

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CourseDetails from '@/components/CourseDetails'; // ✅ Now points to correct component
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
    console.error('Error generating static params for courses:', error);
    return [];
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const courseId = parseInt(params.id, 10);

  if (isNaN(courseId)) {
    console.warn(`Invalid course ID received: ${params.id}`);
    notFound();
  }

  const course = await fetchCourseById(courseId);

  if (!course) {
    notFound();
  }

  // ✅ Optionally fetch related courses
  const allCourses = await fetchAllCourses();
  const relatedCourses = allCourses
    .filter(c => c.id !== course.id && c.category?.name === course.category?.name)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CourseDetails course={course} relatedCourses={relatedCourses} />
      <Footer />
    </main>
  );
}
