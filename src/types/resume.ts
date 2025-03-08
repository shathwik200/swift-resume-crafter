
export interface ResumeData {
  profile: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
    summary: string;
  };
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
  projects?: Project[];
  certifications?: Certification[];
  languages?: Language[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | "Present";
  location?: string;
  description: string[];
  highlights?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location?: string;
  gpa?: string;
  courses?: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  startDate?: string;
  endDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  expiration?: string;
}

export interface Language {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Fluent" | "Native";
}

export enum ResumeTemplate {
  MODERN = "Modern",
  PROFESSIONAL = "Professional",
  MINIMAL = "Minimal",
  CREATIVE = "Creative",
  EXECUTIVE = "Executive",
}

export interface ATSScore {
  score: number; // 0-100
  keywordMatches: {
    matched: string[];
    missing: string[];
  };
  suggestions: string[];
}
