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
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;           
  readTime: string;       
  image: string;
  auther: string;         
  tags: string[];
  slug: string;
  
  // Optional fields that might be in your API response
  created_at?: string;    // ✅ Original API field
  author?: string;        // ✅ Alternative spelling
}

// lib/types.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  full_description: string;        // ✅ Add this
  image_url: string;              // ✅ Add this  
  duration: string;
  level: string;
  Instructor_name: string;        // ✅ Add this
  Instructor_image_url: string;   // ✅ Add this
  students_numbers: string;       // ✅ Add this
  starts: string;                 // ✅ Add this (rating)
  created_at: string;
  
  // Optional fields
  price?: number;
  discountedPrice?: number;
  lessons?: any[];
  whatYouWillLearn?: string[];
  requirements?: string[];
  certificate?: boolean;
  language?: string;
  category?: any;
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
