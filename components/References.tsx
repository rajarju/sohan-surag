'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Testimonial } from '@/types/sanity';

interface ReferencesProps {
  testimonials: Testimonial[];
}

export default function References({ testimonials }: ReferencesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {/* Header */}
          <div>
            <p className="text-white/60 text-base md:text-lg mb-2">References</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white">Peer Reviews</h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between">
              {/* Quote */}
              <div className="mb-6 md:mb-8">
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed italic">
                  &ldquo;{current.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                  {current.image ? (
                    <Image
                      src={urlFor(current.image).width(100).height(100).url()}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src="https://picsum.photos/100/100?random=30"
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg md:text-xl font-medium text-white truncate">{current.name}</div>
                  <div className="text-sm md:text-base text-white/60 truncate">{current.role}</div>
                </div>
                {current.linkedin && (
                  <a
                    href={current.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors flex-shrink-0"
                  >
                    <FaLinkedin className="text-xl md:text-2xl" />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 md:mt-8">
              <button
                onClick={prev}
                className="p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-sm md:text-base" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white w-8' : 'bg-white/30 w-2'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-sm md:text-base" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
