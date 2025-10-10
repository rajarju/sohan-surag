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

      {/* Horizon/Planet Glow Effect */}
      <div className="absolute -bottom-[40%] sm:-bottom-[35%] md:-bottom-[30%] left-1/2 -translate-x-1/2 w-[250%] sm:w-[200%] md:w-[180%] lg:w-[150%] aspect-square pointer-events-none">
        {/* Dark planet/sphere base */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-black via-black to-transparent opacity-90" />

        {/* Primary atmospheric glow - bright edge */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-white/30 blur-2xl" style={{ background: 'radial-gradient(circle at center, transparent 45%, rgba(255,255,255,0.15) 48%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.1) 52%, transparent 55%)' }} />

        {/* Secondary glow - softer outer atmosphere */}
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at center, transparent 47%, rgba(200,220,255,0.08) 50%, transparent 54%)', filter: 'blur(40px)' }} />

        {/* Inner subtle glow */}
        <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at center, transparent 48%, rgba(255,255,255,0.06) 50%, transparent 52%)', filter: 'blur(20px)' }} />
      </div>

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
