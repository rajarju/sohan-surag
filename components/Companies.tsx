'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Company } from '@/types/sanity';
import { useState } from 'react';

interface CompaniesProps {
  companies: Company[];
}

export default function Companies({ companies }: CompaniesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!companies || companies.length === 0) {
    return null;
  }

  // Duplicate companies for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-24 px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl text-[#4A9FFF] font-normal mb-16"
        >
          Worked with these companies
        </motion.h2>

        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Carousel container */}
          <motion.div
            className="flex gap-16 md:gap-24"
            animate={{
              x: [0, -50 * companies.length + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: companies.length * 5, // Adjust speed here
                ease: 'linear',
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => {
              const logoUrl = urlFor(company.logo).width(200).height(100).url();
              const isLink = !!company.website;
              const isHovered = hoveredIndex === index;

              const LogoContent = (
                <>
                  <div className="relative w-[120px] md:w-[160px] h-[60px] md:h-[80px] grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={logoUrl}
                      alt={company.name}
                      fill
                      className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 whitespace-nowrap z-20"
                    >
                      <p className="text-white text-sm font-medium">{company.name}</p>
                      {company.description && (
                        <p className="text-white/70 text-xs mt-1">{company.description}</p>
                      )}
                      {/* Tooltip arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white/10" />
                    </motion.div>
                  )}
                </>
              );

              return (
                <div
                  key={`${company._id}-${index}`}
                  className="flex-shrink-0 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {isLink ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {LogoContent}
                    </a>
                  ) : (
                    <div>{LogoContent}</div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
