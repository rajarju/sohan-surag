'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function YaraPlusCase() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 mb-16"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              Agronomy
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              B2B SaaS
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              Web & Mobile
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              Lead Design
            </span>
          </div>

          <h1 className="text-6xl font-normal text-white">YaraPlus</h1>
          <p className="text-2xl text-white/70">
            The all-in-one platform for crop nutrition
          </p>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
            <Image
              src="https://picsum.photos/1200/600?random=20"
              alt="YaraPlus Platform"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-normal text-white mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-medium text-white mb-2">60+</div>
              <div className="text-white/60">Countries</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-medium text-white mb-2">85%</div>
              <div className="text-white/60">Avg. Adoption</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-medium text-white mb-2">-40%</div>
              <div className="text-white/60">Dropoff</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              YaraPlus is a comprehensive digital platform designed to revolutionize crop
              nutrition management for farmers and agricultural professionals worldwide.
              The platform combines data-driven insights, expert recommendations, and
              real-time monitoring to optimize crop yields and sustainability.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              As Lead Designer, I spearheaded the end-to-end design process, from initial
              research and strategy to final implementation, working closely with
              cross-functional teams across 60+ countries.
            </p>
          </div>
        </motion.section>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-normal text-white mb-6">The Challenge</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Farmers across different regions faced fragmented tools and inconsistent data
            for managing crop nutrition. The challenge was to create a unified platform
            that could adapt to diverse agricultural practices while maintaining ease of
            use for users with varying technical expertise.
          </p>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
            <Image
              src="https://picsum.photos/1200/600?random=22"
              alt="Research Process"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-normal text-white mb-6">The Solution</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            I designed an intuitive, data-driven platform with a modular architecture that
            allows for regional customization while maintaining a consistent core
            experience. Key features include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">
                Smart Recommendations
              </h3>
              <p className="text-white/70">
                AI-powered nutrition recommendations based on soil analysis, weather data,
                and crop types.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">Real-time Monitoring</h3>
              <p className="text-white/70">
                Dashboard for tracking crop health, nutrient levels, and field conditions
                in real-time.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">
                Multi-platform Access
              </h3>
              <p className="text-white/70">
                Seamless experience across web and mobile devices, even with limited
                connectivity.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">Expert Network</h3>
              <p className="text-white/70">
                Direct connection to agricultural experts for personalized support and
                guidance.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
              <Image
                src="https://picsum.photos/1200/600?random=23"
                alt="Dashboard Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
              <Image
                src="https://picsum.photos/1200/600?random=24"
                alt="Mobile App"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-normal text-white mb-6">Impact</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            The platform launched successfully across 60+ countries, achieving an 85%
            adoption rate among target users and reducing user dropoff by 40%. The
            intuitive design and data-driven approach helped farmers make better decisions,
            leading to improved crop yields and more sustainable farming practices.
          </p>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <blockquote className="text-2xl text-white/90 italic">
              &ldquo;The YaraPlus platform transformed how we approach crop nutrition. The
              interface is incredibly intuitive, and the insights are invaluable.&rdquo;
            </blockquote>
            <p className="text-white/60 mt-4">— Agricultural Professional, Netherlands</p>
          </div>
        </motion.section>

        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
          <Link
            href="/case-studies/efi-iq"
            className="group inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors"
          >
            <span className="text-xl">Next Project: EFI IQ</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
