// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: string;
  linkedinLink: string;
  profileSummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: string;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issueddate: string;
  link: string;
  iconname: string;
}

export interface ContactMe {
  profile: string;
  name: string;
  title: string;
  summary: string;
  companyuniversity: string;
  linkedin: string;
  email: string;
  phonenumber: string;
}
export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string
}
