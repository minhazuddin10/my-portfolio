export interface NavItem {
  id: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Link {
  label: string;
  url: string;
}

/** Everything the shared <DetailModal> needs to show an item's details. */
export interface Detail {
  title: string;
  subtitle?: string;
  meta?: string;
  paragraphs: string[];
  tags?: string[];
  images?: GalleryImage[];
  links?: Link[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  details: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  summary: string;
  details: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  details: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  images?: GalleryImage[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  /** Path under /public. If the file is missing a placeholder is shown. */
  image?: string;
  summary: string;
  points: string[];
  credentialId?: string;
}

export interface EventItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  role: string;
  cover: string;
  summary: string;
  details: string[];
  images: GalleryImage[];
}

export interface Person {
  name: string;
  role: string;
  linkedin: string;
}

export interface ResearchUpdate {
  title: string;
  paragraphs: string[];
  image?: string;
}

export interface YoutubeChannel {
  name: string;
  handle: string;
  /** Which Contact card this channel is listed under. */
  owner: "personal" | "company";
  url: string;
  description: string;
}
