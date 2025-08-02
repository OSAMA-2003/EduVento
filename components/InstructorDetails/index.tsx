"use client";

import Image from "next/image";
import Link from "next/link";

interface InstructorDetailsProps {
  instructor: {
    id: number;
    Instructor_name: string;
    Instructor_image_url?: string;
    about_Instructor?: string;
    specialty?: string;
  };
}

export default function InstructorDetails({ instructor }: InstructorDetailsProps) {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 md:flex md:items-center md:gap-10">
        {/* Image */}
        <div className="relative w-48 h-48 rounded-full mx-auto md:mx-0 mb-8 md:mb-0 border-4 border-primary-dark flex-shrink-0 overflow-hidden">
          {instructor.Instructor_image_url ? (
            <Image
              src={instructor.Instructor_image_url}
              alt={`صورة ${instructor.Instructor_name}`}
              fill
              sizes="(max-width: 768px) 12rem"
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-200 text-gray-500 h-full rounded-full">
              لا توجد صورة
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{instructor.Instructor_name}</h2>
          {instructor.specialty && (
            <p className="text-lg font-semibold text-secondary mb-6">{instructor.specialty}</p>
          )}
          {instructor.about_Instructor ? (
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {instructor.about_Instructor}
            </p>
          ) : (
            <p className="text-gray-500 italic">لا تتوفر بيانات السيرة الذاتية لهذا المدرب.</p>
          )}
          <Link href="/instructors" className="inline-block mt-8 text-logo-blue hover:text-secondary transition-colors">
            ← رجوع إلى قائمة المدربين
          </Link>
        </div>
      </div>
    </main>
  );
}
