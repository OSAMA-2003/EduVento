import { supabase } from './supabase';
import { Blog, Course } from './types';



// ✅ Unified error handler
const handleSupabaseError = (error: any, context: string) => {
  if (error) {
    console.error(`Supabase Error [${context}]:`, error);
    throw new Error(`${context} failed: ${error.message}`);
  }
};

// ✅ Fetch all courses
export async function fetchAllCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('Courses')
    .select('*')
    .order('created_at', { ascending: false });

  handleSupabaseError(error, 'fetchAllCourses');
  return data || [];
}

// ✅ Fetch single course by ID
export async function fetchCourseById(id: number): Promise<Course | null> {
  const { data, error } = await supabase
    .from('Courses')
    .select('*')
    .eq('id', id)
    .single();

  handleSupabaseError(error, 'fetchCourseById');
  return data;
}



// ✅ Fetch all articles (blogs)
export async function fetchAllArticles(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  handleSupabaseError(error, 'fetchAllArticles');
  return data || [];
}

// ✅ Fetch single article by ID (still useful)
export async function fetchArticleById(id: number): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();

  handleSupabaseError(error, 'fetchArticleById');
  return data;
}

// ✅ Fetch single article by Slug
export async function fetchArticleBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', decodeURIComponent(slug)) // Important for encoded URLs
    .single();

  if (error) {
    console.error('Error fetching article by slug:', error);
    return null;
  }
  return data;
}


// ✅ Fetch related articles (by category)
export async function fetchRelatedArticles(
  currentArticleId: number,
  category: string,
  limit: number = 3
): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .neq('id', currentArticleId) // Exclude current article
    .eq('category', category)
    .limit(limit)
    .order('created_at', { ascending: false });

  handleSupabaseError(error, 'fetchRelatedArticles');
  return data || [];
}

// Deprecated - Use fetchAllArticles instead
export const fetchBlogsFromSupabase = fetchAllArticles;
