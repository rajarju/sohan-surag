'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaLinkedin } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Skill {
  category: string;
  items?: string[];
}

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

interface Recognition {
  emoji: string;
  title: string;
  year: string;
}

interface About {
  title?: string;
  description?: string;
  profileImage?: { _type: 'image'; asset: { _ref: string; _type: 'reference' } };
  storyParagraphs?: string[];
  skills?: Skill[];
  experience?: Experience[];
  recognition?: Recognition[];
}

interface SiteSettings {
  name?: string;
  email?: string;
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
  const profileImageUrl = about?.profileImage
    ? urlFor(about.profileImage).width(600).height(600).url()
    : 'https://picsum.photos/600/600?random=10';

  return (
    <>
      <Navbar name={siteSettings?.name} />
      <div className="min-h-screen pt-32 pb-24 px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-normal text-white mb-6">
            {about?.title || 'About Me'}
          </h1>
          <p className="text-2xl text-white/70 max-w-3xl">
            {about?.description || ''}
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
            <Image
              src={profileImageUrl}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-white">My Story</h2>
            <div className="space-y-4 text-xl text-white/80 leading-relaxed">
              {about?.storyParagraphs?.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        {about?.skills && about.skills.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-normal text-white mb-12">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.skills.map((skill: Skill, index: number) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-normal text-white mb-4">{skill.category}</h3>
                  <ul className="space-y-2 text-white/70">
                    {skill.items?.map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Experience Timeline */}
        {about?.experience && about.experience.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-normal text-white mb-12">Experience</h2>
            <div className="space-y-8">
              {about.experience.map((exp: Experience, index: number) => (
                <div
                  key={index}
                  className="border-l-2 border-white/20 pl-8 pb-8"
                >
                  <div className="text-white/60 mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-normal text-white mb-2">{exp.role}</h3>
                  <p className="text-white/70 mb-4">{exp.company}</p>
                  <p className="text-white/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Recognition */}
        {about?.recognition && about.recognition.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-normal text-white mb-12">Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.recognition.map((award: Recognition, index: number) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8">
                  <div className="text-5xl mb-4">{award.emoji}</div>
                  <h3 className="text-xl font-normal text-white mb-2">{award.title}</h3>
                  <p className="text-white/60">{award.year}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white/5 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-normal text-white mb-6">
            {siteSettings?.contactCTA?.heading || "Let's Work Together"}
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            {siteSettings?.contactCTA?.subheading ||
              "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`mailto:${siteSettings?.email || 'hello@sohansurag.com'}`}
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
            >
              Get in Touch
            </Link>
            {siteSettings?.socialLinks?.linkedin && (
              <a
                href={siteSettings.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-medium"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </motion.section>
      </div>
      </div>
      <Footer name={siteSettings?.name} />
    </>
  );
}
