import { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  thumbnailImage?: SanityImage;
  heroImage?: SanityImage;
  projectInfo?: {
    company?: string;
    role?: string;
    team?: string[];
    tools?: string[];
    timeline?: {
      duration?: string;
      status?: string;
    };
  };
  overview?:
    | PortableTextBlock[] // Legacy format
    | { // New structured format
        businessContext?: PortableTextBlock[];
        problem?: string[];
        opportunity?: string;
        productGoals?: string[];
        successMetrics?: string[];
        primaryUsers?: string[];
        stakeholders?: string[];
        images?: SanityImage[];
      };
  challenge?: {
    text?: PortableTextBlock[];
    image?: SanityImage;
  };
  designProcess?: {
    description?: PortableTextBlock[];
    images?: SanityImage[];
  };
  research?: {
    text?: PortableTextBlock[];
    methods?: {
      title: string;
      description?: string;
    }[];
    challenges?: string[];
    solutions?: string[];
    images?: SanityImage[];
    points?: {
      title: string;
      description: string;
    }[];
  };
  conceptIdeation?: {
    text?: PortableTextBlock[];
    approaches?: {
      title: string;
      description?: string;
    }[];
    challenges?: string[];
    solutions?: string[];
    images?: SanityImage[];
  };
  solution?: {
    text?: PortableTextBlock[];
    sections?: {
      title: string;
      description: string;
      image?: SanityImage;
    }[];
  };
  handoff?: {
    text?: PortableTextBlock[];
    deliverables?: string[];
    images?: SanityImage[];
  };
  outcome?: {
    text?: PortableTextBlock[];
    results?: string[];
    images?: SanityImage[];
  };
  learnings?: {
    title: string;
    description?: string;
  }[];
  impact?: {
    text?: PortableTextBlock[];
    testimonial?: {
      quote: string;
      author: string;
    };
  };
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: SanityImage;
  linkedin?: string;
}

export interface Company {
  _id: string;
  name: string;
  logo: SanityImage;
  website?: string;
  description?: string;
  order?: number;
}

export interface About {
  // Hero Section
  tagline1: string;
  tagline2: string;
  tagline3: string;
  subtitle: string;
  heroImage?: SanityImage;
  resumeUrl?: string;

  // Legacy fields (kept for backward compatibility)
  title?: string;
  description?: string;
  profileImage?: SanityImage;
  storyParagraphs?: string[];

  // Experience Section
  experienceIntro?: string[];
  experience?: {
    company: string;
    role: string;
    period: string;
    description?: string; // Optional detailed description
  }[];

  // Skills & Expertise
  skills?: {
    category: string;
    items?: string[];
  }[];

  // Education Section
  education?: {
    degree: string;
    institution: string;
    period: string;
  }[];

  // Recognition & Awards
  recognition?: {
    emoji: string;
    title: string;
    year: string;
  }[];

  // Outside Work Section
  goodreadsUrl?: string;
  favoriteQuote?: string;
  hobbies?: string[];
  outsideWorkImages?: SanityImage[];
}

export interface SiteSettings {
  title?: string;
  description?: string;
  email?: string;
  name?: string;
  blogUrl?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
    behance?: string;
  };
  contactCTA?: {
    heading?: string;
    subheading?: string;
  };
  // SEO Metadata
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImage;
}
