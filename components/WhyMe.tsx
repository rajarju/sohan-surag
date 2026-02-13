'use client';

import { motion } from 'framer-motion';

interface WhyMePoint {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

interface WhyMeProps {
  points: WhyMePoint[];
}

export default function WhyMe({ points }: WhyMeProps) {
  if (!points || points.length === 0) {
    return null;
  }

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
            <p className="text-white/60 text-base md:text-lg mb-2">Why Me</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 md:mb-6">Results</h2>
            {points.length > 0 && (
              <p className="text-lg md:text-xl text-white/70 max-w-3xl">
                {points[0].description}
              </p>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {points.map((point, index) => (
              <motion.div
                key={point._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all"
              >
                <div className="text-5xl md:text-6xl font-medium text-white mb-3">{point.icon}</div>
                <div className="text-base md:text-lg text-white/70">{point.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
