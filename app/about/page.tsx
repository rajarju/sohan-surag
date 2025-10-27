import { Metadata } from 'next';
import { getAbout, getSiteSettings } from '@/sanity/lib/fetch';
import AboutPageClient from './AboutPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();
  const title = `About ${about?.name || 'Sohan Surag'}`;
  const description = about?.bio || 'Learn more about my journey as a product designer';

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'profile',
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`],
    },
  };
}

export default async function AboutPage() {
  const [about, siteSettings] = await Promise.all([getAbout(), getSiteSettings()]);

  return (
    <AboutPageClient
      about={about}
      siteSettings={siteSettings}
    />
  );
}
