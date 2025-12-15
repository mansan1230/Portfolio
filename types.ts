export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  achievements: string[];
  type: 'web3' | 'general';
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    summary: string;
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
}