// lib/types.ts

export interface Author {
  id: number;
  name: string;
  image?: string; // ✅ optional عشان بعضهم ممكن يبقى null
  bio?: string;
  role?: string; // For instructor or author role
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
}

// types.ts
export type Blog = {
  id: number;
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
  category?: string;
  tags?: string[];
  date?: string;
  readTime?: string;
  author: string | {
    // name: string;
    // image?: string;
    // bio?: string;
  };
  slug?: string;
};

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
  lastUpdated: string; // Prefer ISO format
  isPopular?: boolean;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isFree: boolean;
  resources?: Resource[];
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


export interface CourseApiResponse {
  id: number;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  duration: string;
  level: string;
  Instructor_name: string;
  Instructor_image_url: string;
  students_numbers: string;
  starts: string; // rating
  created_at: string;
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
