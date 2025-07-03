import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CourseDetails from '@/components/CourseDetails';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const courseId = params.id;

  

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CourseDetails courseId={courseId} />
      <Footer />
    </main>
  );
}
