import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'أكاديمية التعلم الرقمي - دورات تدريبية معتمدة',
    template: '%s | أكاديمية التعلم الرقمي',
  },
  description: 'أكاديمية رائدة في التعليم الرقمي تقدم دورات تدريبية معتمدة في مختلف المجالات التقنية والمهنية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}