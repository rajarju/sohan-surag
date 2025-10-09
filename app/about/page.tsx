import { getAbout, getSiteSettings } from '@/sanity/lib/fetch';
import AboutPageClient from './AboutPageClient';

export default async function AboutPage() {
  const [about, siteSettings] = await Promise.all([getAbout(), getSiteSettings()]);

  return (
    <AboutPageClient
      about={about}
      siteSettings={siteSettings}
    />
  );
}
