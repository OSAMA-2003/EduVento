import { notFound } from 'next/navigation';
import sanitizeHtml from 'sanitize-html';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogDetails from '@/components/BlogDetails';

import {
  fetchArticleById,
  fetchAllArticles,
  fetchRelatedArticles,
} from '@/lib/api';

interface BlogPageProps {
  params: {
    id: string;
  };
}

// ✅ Static path generation
export async function generateStaticParams() {
  try {
    const articles = await fetchAllArticles();
    return articles.map((article) => ({
      id: article.id.toString(),
    }));
  } catch (error) {
    console.error('[generateStaticParams] Error:', error);
    return [];
  }
}

// ✅ Metadata generation
export async function generateMetadata({ params }: BlogPageProps) {
  try {
    const article = await fetchArticleById(Number(params.id));

    if (!article) {
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

// ✅ Page component
export default async function BlogPage({ params }: BlogPageProps) {
  let article;
  let relatedArticles = [];

  try {
    article = await fetchArticleById(Number(params.id));

    if (!article) return notFound();

    relatedArticles = await fetchRelatedArticles(
      article.id,
      article.category,
      3
    );
  } catch (error) {
    console.error('[BlogPage] Error:', error);
    return notFound();
  }

  // ✅ Sanitize blog content
  const sanitizedContent = sanitizeHtml(article.content || '', {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title', 'width', 'height'],
    },
  });

  const blogData = {
    ...article,
    content: sanitizedContent, // ✅ Use only safe content
    date: article?.date
      ? new Date(article.date).toLocaleDateString('ar-EG')
      : 'تاريخ غير متوفر',
    author:
      typeof article?.author === 'object'
        ? article.author
        : { name: article?.author || 'مؤلف غير معروف' },
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BlogDetails blog={blogData} relatedBlogs={relatedArticles} />
      <Footer />
    </main>
  );
}
