import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
} from '@/sanity/lib/fetch';

export default async function Home() {
  // Fetch all data from Sanity
  const [hero, caseStudies, testimonials, siteSettings, whyMePoints, leadershipPoints] =
    await Promise.all([
      getHero(),
      getCaseStudies(),
      getTestimonials(),
      getSiteSettings(),
      getWhyMePoints(),
      getLeadershipPoints(),
    ]);

  return (
    <div className="min-h-screen">
      <Navbar name={siteSettings?.name} />
      <Hero
        greeting={hero?.greeting}
        name={hero?.name}
        title={hero?.title || 'Product designer.'}
        subtitle={hero?.subtitle}
        profileImage={hero?.profileImage}
        linkedinUrl={siteSettings?.socialLinks?.linkedin}
      />
      <CaseStudies caseStudies={caseStudies || []} />
      <WhyMe points={whyMePoints || []} />
      <Leadership points={leadershipPoints || []} />
      <References testimonials={testimonials || []} />
      <Contact heading={siteSettings?.contactCTA?.heading} email={siteSettings?.email} />
      <Footer name={siteSettings?.name} />
    </div>
  );
}
