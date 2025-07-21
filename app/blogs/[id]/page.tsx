import { fetchArticleById, fetchAllArticles, fetchRelatedArticles } from '@/lib/api';
import { notFound } from 'next/navigation';
import BlogDetails from '@/components/BlogDetails';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface BlogPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  try {
    console.log('[generateStaticParams] Fetching all articles...');
    const articles = await fetchAllArticles();
    console.log('[generateStaticParams] Articles fetched:', articles.length);
    
    return articles.map((article) => ({
      id: article.id.toString(),
    }));
  } catch (error) {
    console.error('[generateStaticParams] Error:', error);
    return [];
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  console.log('[BlogPage] Rendering page for article ID:', params.id);

  let article;
  let relatedArticles = [];

  try {
    console.log('[BlogPage] Fetching article details...');
    article = await fetchArticleById(Number(params.id));
    console.log('[BlogPage] Article data:', article);

    if (!article) {
      console.error('[BlogPage] Article not found');
      notFound();
    }

    console.log('[BlogPage] Fetching related articles...');
    relatedArticles = await fetchRelatedArticles(
      article.id,
      article.category,
      3
    );
    console.log('[BlogPage] Related articles:', relatedArticles);

  } catch (error) {
    console.error('[BlogPage] Error:', error);
    notFound();
  }

  // Transform data with proper error handling
  const blogData = {
    ...article,
    date: article.date 
      ? new Date(article.date).toLocaleDateString('ar-EG')
      : 'تاريخ غير متوفر',
    author: typeof article.author === 'object'
      ? article.author
      : { name: article.author || 'مؤلف غير معروف' }
  };

  console.log('[BlogPage] Processed blog data:', blogData);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BlogDetails blog={blogData} relatedBlogs={relatedArticles} />
      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  try {
    console.log('[generateMetadata] Fetching article for metadata...');
    const article = await fetchArticleById(Number(params.id));

    if (!article) {
      console.warn('[generateMetadata] Article not found');
      return {
        title: 'مقال غير موجود',
        description: 'المقال المطلوب غير موجود.',
      };
    }

    return {
      title: article.title,
      description: article.excerpt,
      openGraph: {
        images: [article.image],
      },
    };
  } catch (error) {
    console.error('[generateMetadata] Error:', error);
    return {
      title: 'حدث خطأ',
      description: 'حدث خطأ أثناء تحميل المقال.',
    };
  }
}