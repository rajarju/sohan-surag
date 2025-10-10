'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import { SanityImage } from '@/types/sanity';

interface HeroProps {
  greeting?: string;
  name?: string;
  title: string;
  subtitle?: string;
  profileImage?: SanityImage;
  linkedinUrl?: string;
}

export default function Hero({
  greeting,
  name,
  title,
  subtitle,
  profileImage,
  linkedinUrl,
}: HeroProps) {
  const profileImageUrl = profileImage
    ? urlFor(profileImage).width(500).height(500).url()
    : null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-10 pt-24">
      <div className="max-w-[1400px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Greeting + Name */}
            {(greeting || name) && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl md:text-3xl text-white/80"
              >
                {greeting} {name}
              </motion.p>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl text-white/80"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {linkedinUrl && (
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A9FFF] text-white rounded-full hover:bg-[#4A9FFF]/90 transition-colors text-lg font-medium"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                  <span className="text-sm">↗</span>
                </Link>
              )}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition-all text-lg font-medium"
              >
                <span>Get in touch</span>
                <span className="text-sm">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            {profileImageUrl && (
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                <div className="absolute inset-0 rounded-full overflow-hidden bg-white/5">
                  <Image
                    src={profileImageUrl}
                    alt={name || 'Profile'}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
