export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  areaOfInterest: string;
}

export interface ProgramCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  coursesCount: number;
  featuredPrograms: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'diplomado' | 'tecnico' | 'ingenieria';
  duration: string;
  modality: string;
  rating: number;
  students: number;
  description: string;
  syllabus: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  program: string;
  comment: string;
  rating: number;
  avatar: string;
}
