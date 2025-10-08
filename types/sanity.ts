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
  overview?: PortableTextBlock[];
  challenge?: {
    text: PortableTextBlock[];
    image?: SanityImage;
  };
  research?: {
    text: PortableTextBlock[];
    points?: {
      title: string;
      description: string;
    }[];
  };
  solution?: {
    text: PortableTextBlock[];
    sections?: {
      title: string;
      description: string;
      image?: SanityImage;
    }[];
  };
  impact?: {
    text: PortableTextBlock[];
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
