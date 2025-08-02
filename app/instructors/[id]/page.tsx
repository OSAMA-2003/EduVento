// app/instructors/[id]/page.tsx
import { fetchAllInstructors, fetchInstructorById } from '@/lib/api';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// ✅ Next.js 15-style async params
interface InstructorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const instructors = await fetchAllInstructors();
    return instructors.map(inst => ({ id: inst.id.toString() }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: InstructorPageProps): Promise<Metadata> {
  const { id } = await params;
  const instructor = await fetchInstructorById(Number(id));
  if (!instructor) {
    return {
      title: 'مدرب غير موجود',
      description: 'المدرب المطلوب غير موجود',
    };
  }
  return {
    title: instructor.Instructor_name,
    description: instructor.about_Instructor || 'مدرب في Eduvento',
  };
}

export default async function InstructorDetailsPage({ params }: InstructorPageProps) {
  const { id } = await params;
  const instructor = await fetchInstructorById(Number(id));
  if (!instructor) notFound();

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary-enhanced  overflow-hidden py-20 md:py-28 text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl text-center leading-tight">
          {instructor.Instructor_name}
        </h1>
        <p className="mt-6 max-w-xl text-center text-lg text-indigo-200 whitespace-pre-line">
          {instructor.about_Instructor || 'مدرب محترف في Eduvento'}
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 my-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-600 flex-shrink-0 mx-auto md:mx-0">
            {instructor.Instructor_image_url ? (
              <Image
                src={instructor.Instructor_image_url}
                alt={`صورة ${instructor.Instructor_name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 10rem"
              />
            ) : (
              <div className="flex items-center justify-center bg-gray-100 text-gray-400 h-full rounded-full text-center">
                لا توجد صورة
              </div>
            )}
          </div>

          {/* Details text */}
          <div className="text-center md:text-right">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{instructor.Instructor_name}</h2>
            {instructor.about_Instructor ? (
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{instructor.about_Instructor}</p>
            ) : (
              <p className="text-gray-400 italic">لا تتوفر بيانات السيرة الذاتية لهذا المدرب.</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
