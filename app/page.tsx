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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CTASection />
      <AboutMe />
      <CaseStudies />
      <WhyMe />
      <Leadership />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}
