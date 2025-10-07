'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyProps {
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  url: string;
  delay?: number;
}

function CaseStudyCard({ title, description, tags, metrics, image, url, delay = 0 }: CaseStudyProps) {
  return (
    <Link href={url}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-white/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-3xl font-normal text-white mb-2">{title}</h3>
            <p className="text-lg text-white/70">{description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-2xl font-medium text-white mb-1">{metric.value}</div>
                <div className="text-sm text-white/60">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
            <span>View Case Study</span>
            <FaArrowRight className="text-sm" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'YaraPlus',
      description: 'The all-in-one platform for crop nutrition',
      tags: ['Agronomy', 'B2B SaaS', 'Web & Mobile', 'Lead Design'],
      metrics: [
        { label: 'Countries', value: '60+' },
        { label: 'Avg. Adoption', value: '85%' },
        { label: 'Dropoff', value: '-40%' },
      ],
      image: 'https://picsum.photos/800/600?random=20',
      url: '/case-studies/yaraplus',
    },
    {
      title: 'EFI IQ',
      description: 'Print Shop Management',
      tags: ['Web & Mobile', 'B2B SaaS', 'Product Design', 'Lead Designer'],
      metrics: [
        { label: 'Satisfaction', value: '92%' },
        { label: 'Adoption Rate', value: '78%' },
        { label: 'Dropoff', value: '-35%' },
      ],
      image: 'https://picsum.photos/800/600?random=21',
      url: '/case-studies/efi-iq',
    },
  ];

  return (
    <section className="py-24 px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-white/60 text-lg mb-2">Work</p>
          <h2 className="text-5xl font-normal text-white">Selected Case Studies</h2>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
