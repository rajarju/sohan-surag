'use client';

import { motion } from 'framer-motion';

export default function Leadership() {
  const achievements = [
    'Led functional & cross-functional design teams of up to 5 members.',
    'Mentored a junior designer to a middle position in 9 months.',
    'Led budgeting, resource management, project and client management on a daily basis.',
    'Developed UX strategy and design process from scratch in 4 months.',
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
            <h2 className="text-5xl font-normal text-white mb-6">Leadership</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              Fostering growth through collaboration, where everyone learns and grows together.
            </p>
          </div>

          {/* Achievement Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <p className="text-lg text-white/80 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
