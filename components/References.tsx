'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
  linkedin?: string;
}

export default function References() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Frank Esteban',
      role: 'Web Development',
      company: 'Tech Corp',
      text: 'Sohan is one of the BEST PRODUCT DESIGNERS I\'ve worked with. Her thorough, in-depth research approach, including user interviews, helps better understand the audience and their needs.',
      image: 'https://picsum.photos/100/100?random=30',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Design Studio',
      text: 'Working with Sohan was an absolute pleasure. Their attention to detail and user-centric approach resulted in a product that exceeded all our expectations.',
      image: 'https://picsum.photos/100/100?random=31',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      text: 'Sohan\'s ability to translate complex requirements into elegant, intuitive designs is remarkable. They truly understand what users need.',
      image: 'https://picsum.photos/100/100?random=32',
      linkedin: 'https://linkedin.com',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div>
            <p className="text-white/60 text-lg mb-2">References</p>
            <h2 className="text-5xl font-normal text-white">Peer Reviews</h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-12 min-h-[400px] flex flex-col justify-between">
              {/* Quote */}
              <div className="mb-8">
                <p className="text-2xl text-white/90 leading-relaxed italic">
                  &ldquo;{current.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/10">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xl font-medium text-white">{current.name}</div>
                  <div className="text-white/60">{current.role}</div>
                </div>
                {current.linkedin && (
                  <a
                    href={current.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prev}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
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
                className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
