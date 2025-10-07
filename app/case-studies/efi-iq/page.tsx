'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function EfiIQCase() {
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
              Web & Mobile
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              B2B SaaS
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              Product Design
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
              Lead Designer
            </span>
          </div>

          <h1 className="text-6xl font-normal text-white">EFI IQ</h1>
          <p className="text-2xl text-white/70">Print Shop Management</p>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
            <Image
              src="https://picsum.photos/1200/600?random=21"
              alt="EFI IQ Platform"
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
              <div className="text-4xl font-medium text-white mb-2">92%</div>
              <div className="text-white/60">Satisfaction</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-medium text-white mb-2">78%</div>
              <div className="text-white/60">Adoption Rate</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl font-medium text-white mb-2">-35%</div>
              <div className="text-white/60">Dropoff</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              EFI IQ is a comprehensive print shop management solution designed to
              streamline operations, optimize workflows, and maximize profitability for
              commercial printing businesses. The platform integrates job management,
              production tracking, and business analytics into one unified system.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              As Lead Designer, I led the product design process, creating an intuitive
              interface that simplifies complex print shop operations while providing
              powerful tools for business growth.
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
            Print shops struggled with disconnected systems, manual processes, and limited
            visibility into operations. Shop owners needed a solution that could handle
            complex workflows while remaining accessible to staff with varying levels of
            technical expertise. The existing tools in the market were either too complex
            or lacked essential features.
          </p>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
            <Image
              src="https://picsum.photos/1200/600?random=25"
              alt="User Research"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        {/* Research */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-normal text-white mb-6">Research & Discovery</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            I conducted extensive user research including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">
                On-site Observations
              </h3>
              <p className="text-white/70">
                Spent time in print shops observing workflows, pain points, and daily
                operations to understand the real-world context.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">User Interviews</h3>
              <p className="text-white/70">
                Conducted 25+ interviews with shop owners, operators, and production staff
                to identify key needs and frustrations.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">
                Competitive Analysis
              </h3>
              <p className="text-white/70">
                Analyzed existing solutions to identify gaps and opportunities for
                innovation.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">Workflow Mapping</h3>
              <p className="text-white/70">
                Created detailed maps of print shop workflows to optimize the user
                experience.
              </p>
            </div>
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
            Designed a comprehensive yet intuitive management system with three core
            pillars:
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-normal text-white mb-6">
                Job Management Dashboard
              </h3>
              <p className="text-white/70 mb-6">
                A central hub for tracking all jobs from quote to delivery, with real-time
                status updates and automated notifications.
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="https://picsum.photos/1200/600?random=26"
                  alt="Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-normal text-white mb-6">
                Production Workflow
              </h3>
              <p className="text-white/70 mb-6">
                Streamlined production tracking with drag-and-drop scheduling, resource
                allocation, and bottleneck identification.
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="https://picsum.photos/1200/600?random=27"
                  alt="Production Workflow"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-normal text-white mb-6">
                Business Intelligence
              </h3>
              <p className="text-white/70 mb-6">
                Powerful analytics and reporting tools to track profitability, identify
                trends, and make data-driven decisions.
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="https://picsum.photos/1200/600?random=28"
                  alt="Analytics"
                  fill
                  className="object-cover"
                />
              </div>
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
            EFI IQ achieved a 92% satisfaction rate and 78% adoption rate among target
            users. The streamlined workflows reduced user dropoff by 35% and helped print
            shops increase efficiency and profitability. Many customers reported
            significant time savings and improved visibility into their operations.
          </p>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <blockquote className="text-2xl text-white/90 italic">
              "EFI IQ transformed our shop. What used to take hours now takes minutes, and
              we have complete visibility into every job."
            </blockquote>
            <p className="text-white/60 mt-4">— Print Shop Owner, California</p>
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
            href="/case-studies/yaraplus"
            className="group inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors"
          >
            <span className="text-xl">Next Project: YaraPlus</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
