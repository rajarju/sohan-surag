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
