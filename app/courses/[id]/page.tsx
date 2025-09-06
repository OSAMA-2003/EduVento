// app/courses/[id]/page.tsx

import CourseDetails from '@/components/CourseDetails';
import { fetchAllCourses, fetchCourseById } from '@/lib/api';
import { notFound } from 'next/navigation';

// ✅ params here is NOT a Promise
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
  const { id } = params; // ✅ no await needed
  const courseId = parseInt(id, 10);

  if (isNaN(courseId)) {
    console.warn(`Invalid course ID received: ${id}`);
    notFound();
  }

  const course = await fetchCourseById(courseId);

  if (!course) {
    notFound();
  }

  const allCourses = await fetchAllCourses();
  const relatedCourses = allCourses
    .filter((c) => c.id !== course.id && c.category?.name === course.category?.name)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <CourseDetails course={course} relatedCourses={relatedCourses} />
    </main>
  );
}
