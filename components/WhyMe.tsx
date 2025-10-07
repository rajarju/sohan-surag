'use client';

import { motion } from 'framer-motion';

export default function WhyMe() {
  const stats = [
    { value: '8+', label: 'Years of Experience' },
    { value: '50+', label: 'Successful Projects' },
    { value: '25+', label: 'Happy Clients' },
  ];

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
            <p className="text-white/60 text-lg mb-2">Why Me</p>
            <h2 className="text-5xl font-normal text-white mb-6">Results</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              Great UX = listen to your users, clear workflows, zero guesswork.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="text-6xl font-medium text-white mb-3">{stat.value}</div>
                <div className="text-lg text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
