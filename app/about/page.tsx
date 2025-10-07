'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-normal text-white mb-6">
            About Me
          </h1>
          <p className="text-2xl text-white/70 max-w-3xl">
            Product designer based in Berlin, blending design and management to craft
            solutions that drive real results.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5">
            <Image
              src="https://picsum.photos/600/600?random=10"
              alt="Sohan Surag"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-white">My Story</h2>
            <div className="space-y-4 text-xl text-white/80 leading-relaxed">
              <p>
                I'm a product designer with over 8 years of experience creating digital
                products that solve real problems. My journey in design started with a
                passion for understanding how people interact with technology and a drive
                to make those interactions more meaningful.
              </p>
              <p>
                Based in Berlin, I've had the privilege of working with companies across
                60+ countries, designing B2B SaaS products that serve millions of users.
                My approach combines thorough research, strategic thinking, and
                meticulous attention to detail.
              </p>
              <p>
                Beyond pixels and prototypes, I'm passionate about mentoring emerging
                designers and building design systems that empower teams to create
                consistently excellent experiences.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-normal text-white mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">
                Product Design
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• UX/UI Design</li>
                <li>• Design Systems</li>
                <li>• Interaction Design</li>
                <li>• Prototyping</li>
                <li>• Visual Design</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">Research</h3>
              <ul className="space-y-2 text-white/70">
                <li>• User Research</li>
                <li>• Usability Testing</li>
                <li>• User Interviews</li>
                <li>• Data Analysis</li>
                <li>• Journey Mapping</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <h3 className="text-2xl font-normal text-white mb-4">
                Leadership
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Team Management</li>
                <li>• Design Strategy</li>
                <li>• Stakeholder Management</li>
                <li>• Mentoring</li>
                <li>• Process Development</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education & Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-normal text-white mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-white/20 pl-8 pb-8">
              <div className="text-white/60 mb-2">2020 - Present</div>
              <h3 className="text-2xl font-normal text-white mb-2">
                Lead Product Designer
              </h3>
              <p className="text-white/70 mb-4">Yara International</p>
              <p className="text-white/80">
                Leading design for YaraPlus, a global agricultural platform serving
                farmers in 60+ countries. Achieved 85% adoption rate through
                user-centered design and continuous iteration.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-8 pb-8">
              <div className="text-white/60 mb-2">2018 - 2020</div>
              <h3 className="text-2xl font-normal text-white mb-2">
                Senior Product Designer
              </h3>
              <p className="text-white/70 mb-4">Electronics For Imaging (EFI)</p>
              <p className="text-white/80">
                Redesigned print shop management system, achieving 92% user
                satisfaction. Led design system development and mentored junior
                designers.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-8">
              <div className="text-white/60 mb-2">2016 - 2018</div>
              <h3 className="text-2xl font-normal text-white mb-2">
                Product Designer
              </h3>
              <p className="text-white/70 mb-4">Various Startups</p>
              <p className="text-white/80">
                Worked with early-stage startups to establish design processes,
                create brand identities, and ship products from concept to launch.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-normal text-white mb-12">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-8">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-normal text-white mb-2">
                Awwwards Honorable Mention
              </h3>
              <p className="text-white/60">2022</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-normal text-white mb-2">
                FWA Site of the Day
              </h3>
              <p className="text-white/60">2021</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-normal text-white mb-2">
                CSS Design Awards
              </h3>
              <p className="text-white/60">2020</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-normal text-white mb-2">
                Product Hunt Featured
              </h3>
              <p className="text-white/60">2019</p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white/5 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-normal text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach
            out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="mailto:hello@sohansurag.com"
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
            >
              Get in Touch
            </Link>
            <a
              href="https://linkedin.com/in/sohansurag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-medium"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
