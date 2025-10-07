'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaArrowRight } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="py-16 px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6"
        >
          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/sohansurag"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all"
          >
            <FaLinkedin className="text-xl" />
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* Secondary CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            <span className="font-medium">Get in touch</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
