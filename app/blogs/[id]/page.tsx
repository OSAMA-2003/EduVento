// app/blogs/[id]/page.tsx
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogDetails from '@/components/BlogDetails';
import { getAllBlogs, getBlogById } from '@/lib/data';
import { notFound } from 'next/navigation';

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

export default async function BlogPage({ params }: BlogPageProps) {
  const blogIdNum = parseInt(params.id);
  const blog = getBlogById(blogIdNum);

  if (!blog) {
    notFound();
  }

  const allBlogs = getAllBlogs();
  const relatedBlogs = allBlogs
    .filter(b => b.id !== blogIdNum)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BlogDetails blog={blog} relatedBlogs={relatedBlogs} />
      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  const blogIdNum = parseInt(params.id);
  const blog = getBlogById(blogIdNum);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post does not exist.',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}