'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { SanityImage } from '@/types/sanity';

interface AboutMeProps {
  description: string;
  profileImage?: SanityImage;
}

export default function AboutMe({ description, profileImage }: AboutMeProps) {
  return (
    <section id="about" className="py-24 px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Profile Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
            {profileImage ? (
              <Image
                src={urlFor(profileImage).width(600).height(600).url()}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <Image
                src="https://picsum.photos/600/600?random=10"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-normal text-white mb-6">About Me</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Learn More Link */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-white hover:gap-4 transition-all"
            >
              <span className="text-lg">Learn more about me</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
