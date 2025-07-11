// lib/types.ts
export interface Author {
  id: number;
  name: string;
  image: string;
  bio: string;
  role?: string; // Added for course instructors
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  discountedPrice?: number;
  duration: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  category: Category;
  instructor: Author;
  lessons: Lesson[];
  studentsEnrolled: number;
  rating: number;
  reviews: Review[];
  requirements: string[];
  whatYouWillLearn: string[];
  certificate: boolean;
  language: string;
  lastUpdated: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  resources?: Resource[];
  isFree: boolean;
}

export interface Resource {
  id: number;
  name: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  url: string;
}

export interface Review {
  id: number;
  author: Author;
  rating: number;
  content: string;
  date: string;
}

// Component Props Types
export interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    image?: string;
  };
  tags: string[];
}

export interface CourseCardProps {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  price: number;
  discountedPrice?: number;
  duration: string;
  level: string;
  instructor: {
    name: string;
    image?: string;
  };
  rating: number;
  studentsEnrolled: number;
}

export interface BlogDetailsProps {
  blog: Blog;
  relatedBlogs: Blog[];
}

export interface CourseDetailsProps {
  course: Course;
  relatedCourses: Course[];
}