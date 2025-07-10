import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogDetails from '@/components/BlogDetails';
import { getAllBlogs } from '@/lib/data';

interface BlogPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BlogDetails blogId={params.id} />
      <Footer />
    </main>
  );
}