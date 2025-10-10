'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Company } from '@/types/sanity';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CompaniesProps {
  companies: Company[];
}

export default function Companies({ companies }: CompaniesProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [companiesPerPage, setCompaniesPerPage] = useState(5);

  // Update companies per page based on screen size
  useEffect(() => {
    const updateCompaniesPerPage = () => {
      if (window.innerWidth < 640) {
        setCompaniesPerPage(2); // Mobile: 2 logos
      } else if (window.innerWidth < 1024) {
        setCompaniesPerPage(3); // Tablet: 3 logos
      } else {
        setCompaniesPerPage(5); // Desktop: 5 logos
      }
    };

    updateCompaniesPerPage();
    window.addEventListener('resize', updateCompaniesPerPage);
    return () => window.removeEventListener('resize', updateCompaniesPerPage);
  }, []);

  // Reset to first page when companiesPerPage changes
  useEffect(() => {
    setCurrentPage(0);
  }, [companiesPerPage]);

  if (!companies || companies.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(companies.length / companiesPerPage);
  const startIndex = currentPage * companiesPerPage;
  const endIndex = startIndex + companiesPerPage;
  const visibleCompanies = companies.slice(startIndex, endIndex);

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl text-[#4A9FFF] font-normal mb-12 md:mb-16"
        >
          Worked with these companies
        </motion.h2>

        <div className="relative">
          {/* Companies Grid */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-8 min-h-[100px] flex-wrap">
            {visibleCompanies.map((company) => {
              const logoUrl = urlFor(company.logo).width(300).url();
              const isLink = !!company.website;
              const isHovered = hoveredId === company._id;

              const LogoContent = (
                <div className="relative">
                  <div className="relative h-[100px] sm:h-[80px] md:h-[90px] lg:h-[100px] w-[160px] sm:w-[140px] md:w-[160px] lg:w-[180px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={logoUrl}
                      alt={company.name}
                      width={300}
                      height={300}
                      className="object-contain w-auto h-auto max-w-full max-h-full opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 whitespace-nowrap z-20"
                    >
                      <p className="text-white text-sm font-medium">{company.name}</p>
                      {company.description && (
                        <p className="text-white/70 text-xs mt-1 max-w-[200px] whitespace-normal">
                          {company.description}
                        </p>
                      )}
                      {/* Tooltip arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white/10" />
                    </motion.div>
                  )}
                </div>
              );

              return (
                <div
                  key={company._id}
                  onMouseEnter={() => setHoveredId(company._id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {isLink ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {LogoContent}
                    </a>
                  ) : (
                    <div>{LogoContent}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation - only show if more than one page */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 sm:px-0">
              <button
                onClick={prev}
                className="p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                aria-label="Previous companies"
              >
                <FaChevronLeft className="text-sm md:text-base" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentPage ? 'bg-[#4A9FFF] w-8' : 'bg-white/30 w-2'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                aria-label="Next companies"
              >
                <FaChevronRight className="text-sm md:text-base" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
