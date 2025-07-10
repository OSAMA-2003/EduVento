import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CourseDetails from '@/components/CourseDetails';
import { getAllCourses } from '@/lib/data';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default function CoursePage({ params }: CoursePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navigation  />
      <CourseDetails courseId={params.id} />
      <Footer />
    </main>
  );
}