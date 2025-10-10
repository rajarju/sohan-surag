'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface ContactProps {
  heading?: string;
  email?: string;
}

export default function Contact({ heading, email }: ContactProps) {
  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 md:space-y-12"
        >
          {/* Header */}
          <div>
            <p className="text-white/60 text-base md:text-lg mb-3 md:mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-6 md:mb-8 max-w-4xl mx-auto leading-tight px-4">
              {heading || "Let's explore new horizons together"}
            </h2>
          </div>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${email || 'hello@sohansurag.com'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-full text-base md:text-lg font-medium hover:bg-white/90 transition-all"
          >
            <span>Get in Touch</span>
            <FaArrowRight className="text-sm md:text-base group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
