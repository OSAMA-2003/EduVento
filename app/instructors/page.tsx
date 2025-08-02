import { fetchAllInstructors } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'مدربينا',
  description: 'تعرف على فريق المدربين المحترفين في Eduvento',
};

export default async function InstructorsPage() {
  const instructors = await fetchAllInstructors();

  // Server-side log; if you want client log, use client component + useEffect
  console.log('Instructors:', instructors);

  return (
    <>
      {/* Navigation at top */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary-enhanced text-white py-24 md:py-32 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-mesh opacity-70 rounded-b-3xl"></div>
        <h1
          className="z-10 text-5xl md:text-6xl font-extrabold drop-shadow-lg max-w-4xl text-center"
         
        >
          فريق المدربين
        </h1>
        <p className="z-10 mt-6 max-w-3xl text-center text-lg md:text-xl text-white/90">
          تعرف على فريق المدربين المحترفين في Eduvento
        </p>
      </section>

      {/* Main content */}
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        {instructors.length === 0 ? (
          <p className="text-center text-gray-500">لا يوجد مدربون حالياً.</p>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <Link
                href={`/instructors/${instructor.id}`}
                key={instructor.id}
                className="block border rounded-xl bg-white shadow-lg p-4 hover:shadow-2xl transition"
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  {instructor.Instructor_image_url ? (
                    <Image
                      src={instructor.Instructor_image_url}
                      alt={`صورة ${instructor.Instructor_name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-200 text-gray-500 h-full rounded-lg">
                      لا توجد صورة
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-center text-primary-dark">
                  {instructor.Instructor_name}
                </h2>
                {instructor.specialization && (
                  <h3 className="text-center font-bold capitalize text-gray-600 mt-2">{instructor.specialization}</h3>
                )}
                {instructor.about_Instructor && (
                  <p className="text-center text-gray-600 mt-2">{instructor.about_Instructor}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer at bottom */}
      <Footer />
    </>
  );
}
