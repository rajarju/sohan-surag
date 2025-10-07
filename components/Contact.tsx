'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <div>
            <p className="text-white/60 text-lg mb-4">Contact</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-8 max-w-4xl mx-auto leading-tight">
              Let&apos;s explore new horizons together
            </h2>
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:hello@sohansurag.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-all"
          >
            <span>Get in Touch</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
