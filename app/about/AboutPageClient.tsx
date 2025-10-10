'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { About } from '@/types/sanity';
import { useState, useEffect } from 'react';

interface SiteSettings {
  name?: string;
  email?: string;
  blogUrl?: string;
  contactCTA?: {
    heading?: string;
    subheading?: string;
  };
  socialLinks?: {
    linkedin?: string;
  };
}

interface AboutPageClientProps {
  about: About;
  siteSettings: SiteSettings;
}

export default function AboutPageClient({ about, siteSettings }: AboutPageClientProps) {
  const [activeSection, setActiveSection] = useState('experience');
  const heroImageUrl = about?.heroImage
    ? urlFor(about.heroImage).width(600).height(600).url()
    : null;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'education', 'outside-work'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Navbar name={siteSettings?.name} blogUrl={siteSettings?.blogUrl} />
      <div className="min-h-screen pt-32 pb-24 px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32"
          >
            {/* Left: Text */}
            <div className="flex flex-col justify-center">
              <div className="space-y-2 mb-8">
                <h1 className="text-5xl md:text-6xl font-normal text-white">
                  {about?.tagline1 || 'Designer by craft.'}
                </h1>
                <h1 className="text-5xl md:text-6xl font-normal text-white">
                  {about?.tagline2 || 'Strategist by mindset.'}
                </h1>
                <h1 className="text-5xl md:text-6xl font-normal text-white">
                  {about?.tagline3 || 'Storyteller at heart.'}
                </h1>
              </div>

              <p className="text-xl text-white/70 mb-8 max-w-xl">
                {about?.subtitle || 'Bridging people, ideas, and products with thoughtful designs.'}
              </p>

              <div className="flex flex-wrap gap-4">
                {siteSettings?.socialLinks?.linkedin && (
                  <a
                    href={siteSettings.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A9FFF] text-white rounded-full hover:bg-[#3A8FEF] transition-all font-medium"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                )}
                {about?.resumeUrl && (
                  <a
                    href={about.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-medium"
                  >
                    Resume
                  </a>
                )}
              </div>
            </div>

            {/* Right: Illustration */}
            {heroImageUrl && (
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src={heroImageUrl}
                    alt="Profile illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
            {/* Left Sidebar Navigation */}
            <aside className="lg:sticky lg:top-32 h-fit">
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection('experience')}
                  className={`block text-left transition-colors ${
                    activeSection === 'experience'
                      ? 'text-[#4A9FFF] font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('education')}
                  className={`block text-left transition-colors ${
                    activeSection === 'education'
                      ? 'text-[#4A9FFF] font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection('outside-work')}
                  className={`block text-left transition-colors ${
                    activeSection === 'outside-work'
                      ? 'text-[#4A9FFF] font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Outside Work
                </button>
              </nav>
            </aside>

            {/* Right Content */}
            <div className="space-y-24">
              {/* Experience Section */}
              <motion.section
                id="experience"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-8">Experience</h2>

                {/* Introduction */}
                {about?.experienceIntro && about.experienceIntro.length > 0 && (
                  <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-12">
                    {about.experienceIntro.map((paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* Experience List */}
                {about?.experience && about.experience.length > 0 && (
                  <div className="space-y-6">
                    {about.experience.map((exp, index: number) => (
                      <div
                        key={index}
                        className="border-l-2 border-white/20 pl-6 pb-2"
                      >
                        <h3 className="text-xl font-normal text-white mb-1">{exp.company}</h3>
                        <p className="text-white/70 mb-1">{exp.role}</p>
                        <p className="text-white/50 text-sm">{exp.period}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>

              {/* Education Section */}
              <motion.section
                id="education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-8">Education</h2>

                {about?.education && about.education.length > 0 && (
                  <div className="space-y-6">
                    {about.education.map((edu, index: number) => (
                      <div
                        key={index}
                        className="border-l-2 border-white/20 pl-6 pb-2"
                      >
                        <h3 className="text-xl font-normal text-white mb-1">{edu.degree}</h3>
                        <p className="text-white/70 mb-1">{edu.institution}</p>
                        <p className="text-white/50 text-sm">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>

              {/* Outside Work Section */}
              <motion.section
                id="outside-work"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-8">Outside Work</h2>

                {/* Goodreads Link */}
                {about?.goodreadsUrl && (
                  <p className="text-lg text-white/80 mb-6">
                    Love reading books. You can find me on{' '}
                    <a
                      href={about.goodreadsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A9FFF] hover:underline"
                    >
                      Goodreads
                    </a>
                  </p>
                )}

                {/* Favorite Quote */}
                {about?.favoriteQuote && (
                  <div className="bg-white/5 rounded-2xl p-8 mb-8">
                    <p className="text-sm text-white/60 mb-2">Favorite Quote:</p>
                    <p className="text-xl text-white/90 italic leading-relaxed">
                      &ldquo;{about.favoriteQuote}&rdquo;
                    </p>
                  </div>
                )}

                {/* Hobbies */}
                {about?.hobbies && about.hobbies.length > 0 && (
                  <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                    {about.hobbies.map((hobby: string, index: number) => (
                      <p key={index}>{hobby}</p>
                    ))}
                  </div>
                )}
              </motion.section>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Section - using same component as home page */}
      <Contact
        heading={siteSettings?.contactCTA?.heading}
        email={siteSettings?.email}
      />

      <Footer name={siteSettings?.name} blogUrl={siteSettings?.blogUrl} />
    </>
  );
}
