import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import CaseStudies from '@/components/CaseStudies';
import WhyMe from '@/components/WhyMe';
import Leadership from '@/components/Leadership';
import References from '@/components/References';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {
  getHero,
  getCaseStudies,
  getTestimonials,
  getSiteSettings,
  getWhyMePoints,
  getLeadershipPoints,
  getCompanies,
  getAbout,
} from '@/sanity/lib/fetch';

export async function generateMetadata(): Promise<Metadata> {
  const hero = await getHero();
  const name = hero?.name || 'Sohan Surag';
  const title = hero?.title || 'Product designer.';

  // SEO-optimized metadata
  const pageTitle = `I am ${name}`;
  const ogTitle = `${name} - Product Designer & Design Leader`;
  const ogDescription = `Experienced product designer based in Berlin, blending design expertise and management skills to craft user-centered solutions that drive business results.`;

  return {
    title: pageTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      images: [
        {
          url: `/og`,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [`/og`],
    },
  };
}

export default async function Home() {
  // Fetch all data from Sanity
  const [hero, caseStudies, testimonials, siteSettings, whyMePoints, leadershipPoints, companies, about] =
    await Promise.all([
      getHero(),
      getCaseStudies(),
      getTestimonials(),
      getSiteSettings(),
      getWhyMePoints(),
      getLeadershipPoints(),
      getCompanies(),
      getAbout(),
    ]);

  return (
    <div className="min-h-screen">
      <Navbar name={siteSettings?.name} blogUrl={siteSettings?.blogUrl} resumeUrl={about?.resumeUrl} />
        <Hero
          greeting={hero?.greeting}
          name={hero?.name}
          title={hero?.title || 'Product designer.'}
          subtitle={hero?.subtitle}
          profileImage={hero?.profileImage}
          linkedinUrl={siteSettings?.socialLinks?.linkedin}
        />
        <Companies companies={companies || []} />
        <CaseStudies caseStudies={caseStudies || []} />
        <WhyMe points={whyMePoints || []} />
        <Leadership points={leadershipPoints || []} />
        <References testimonials={testimonials || []} />
      <Contact heading={siteSettings?.contactCTA?.heading} email={siteSettings?.email} />
      <Footer name={siteSettings?.name} blogUrl={siteSettings?.blogUrl} />
    </div>
  );
}
