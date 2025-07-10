import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogDetails from '@/components/BlogDetails'; // Assuming BlogDetails component takes blogId as prop
import { getAllBlogs, getBlogById, getLatestBlogs } from '@/lib/data';
import { notFound } from 'next/navigation';

// Define the props for your default page component
interface BlogPageProps {
  params: {
    id: string; // The dynamic segment [id] will be a string
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Your default page component
export default function BlogPage({ params }: BlogPageProps) {
  const blogId = parseInt(params.id, 10);

  // It's better to validate if params.id is a valid number
  if (isNaN(blogId)) {
    notFound();
  }

  const blog = getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getLatestBlogs(4)
    .filter((b) => b.id !== blogId)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BlogDetails blog={blog} relatedBlogs={relatedBlogs} />
      <Footer />
    </main>
  );
}