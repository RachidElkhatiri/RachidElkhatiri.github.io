export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export interface Experience {
  period: string;
  title: string;
  context: string;
  technologies: string[];
  responsibilities: string[];
}

export interface Contact {
  label: string;
  value: string;
  link: string;
  iconClass: string;
}

export interface RepoHighlight {
  name: string;
  description: string;
  link: string;
}

export interface ProfileData {
  fullName: string;
  role: string;
  shortIntro: string;
  heroDescription: string;
  yearsExperience: number;
  avatar: string;
  cvLink: string;
  email: string;
  githubUsername: string;
  aboutSummary: string;
  expertiseAreas: string[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
  highlightRepos: RepoHighlight[];
  contacts: Contact[];
}
