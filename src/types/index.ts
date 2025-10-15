export type Language = 'ja' | 'en';

export interface Project {
  id: string;
  title: string;
  description: { ja: string; en: string };
  technologies: string[];
  field: 'enterprise' | 'education' | 'industry' | 'medical' | 'beauty' | 'other';
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
  details?: {
    ja: string;
    en: string;
  };
  role?: { ja: string; en: string };
  architecture?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'infrastructure' | 'other';
  description?: { ja: string; en: string };
}

export interface Experience {
  id: string;
  title: { ja: string; en: string };
  company: { ja: string; en: string };
  period: { ja: string; en: string };
  role: { ja: string; en: string };
  achievements: { ja: string[]; en: string[] };
  team?: { ja: string; en: string };
}

export interface Testimonial {
  id: string;
  name: string;
  role: { ja: string; en: string };
  company?: { ja: string; en: string };
  content: { ja: string; en: string };
  avatar?: string;
  anonymous?: boolean;
}
