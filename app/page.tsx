import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import AboutMe from '@/components/AboutMe';
import CaseStudies from '@/components/CaseStudies';
import WhyMe from '@/components/WhyMe';
import Leadership from '@/components/Leadership';
import References from '@/components/References';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getHero, getAbout, getCaseStudies, getTestimonials } from '@/sanity/lib/fetch';

export default async function Home() {
  // Fetch all data from Sanity
  const [hero, about, caseStudies, testimonials] = await Promise.all([
    getHero(),
    getAbout(),
    getCaseStudies(),
    getTestimonials(),
  ]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero title={hero?.title || 'Product designer.'} subtitle={hero?.subtitle} />
      <CTASection />
      <AboutMe
        description={about?.description || ''}
        profileImage={about?.profileImage}
      />
      <CaseStudies caseStudies={caseStudies || []} />
      <WhyMe />
      <Leadership />
      <References testimonials={testimonials || []} />
      <Contact />
      <Footer />
    </div>
  );
}
