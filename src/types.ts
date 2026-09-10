export type TabType = 'home' | 'about' | 'work' | 'skills' | 'education';

export type TechCategory = 'all' | 'java' | 'python' | 'frontend' | 'database';

export interface ProjectData {
  id: string;
  projectNumber: string;
  badge: string;
  subType: string;
  title: string;
  headline: string;
  description: string;
  categories: string[];
  filterCategories: TechCategory[];
  tags: string[];
  deliverables: string[];
  schemaSnippet?: string;
  schemaTitle?: string;
  schemaType?: string;
  pipelineFlow?: string[];
  borderColor: string;
  accentColor: string;
  promptText: string;
  modalDetails: {
    problemStatement: string;
    col1Title: string;
    col1Text: string;
    col2Title: string;
    col2Text: string;
    extraNote?: string;
  };
}

export interface SkillItem {
  name: string;
  level: string;
  levelColor: string;
}

export interface SkillGroup {
  title: string;
  borderColor: string;
  accentColor: string;
  skills: SkillItem[];
}

export interface EducationEntry {
  period: string;
  badge: string;
  badgeColor: string;
  degree: string;
  institution: string;
  description: string;
  score?: string;
}

export interface CertificationEntry {
  issuer: string;
  type: string;
  title: string;
  description: string;
  badgeColor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
