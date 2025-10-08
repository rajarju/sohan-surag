'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-10 pt-24">
      <div className="max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-normal text-white leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-white/80"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
