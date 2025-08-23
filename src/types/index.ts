export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  readTime?: number;
  published: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "languages" | "frameworks";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export type Theme = "light" | "dark";
