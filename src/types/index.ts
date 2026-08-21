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
  iconName?: string;
  colorAccent?: string;
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
  price?: number;
  originalPrice?: number;
  badgeTag?: string;
  instructorName?: string;
  startDate?: string;
  hours?: number;
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
  verified?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  cipNumber: string;
  role: string;
  specialty: string;
  experience: string;
  avatar: string;
  degree: string;
}

export interface Alliance {
  id: string;
  name: string;
  type: string;
  badge: string;
  logo: string;
}
