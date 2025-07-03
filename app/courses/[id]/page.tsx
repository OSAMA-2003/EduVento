import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CourseDetails from '@/components/CourseDetails';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <CourseDetails courseId={params.id} />
      <Footer />
    </main>
  );
}