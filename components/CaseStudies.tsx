'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { CaseStudy } from '@/types/sanity';

interface CaseStudyCardProps extends CaseStudy {
  delay?: number;
}

function CaseStudyCard({ title, description, tags, metrics, thumbnailImage, slug, delay = 0 }: CaseStudyCardProps) {
  const imageUrl = thumbnailImage
    ? urlFor(thumbnailImage).width(800).height(600).url()
    : 'https://picsum.photos/800/600?random=20';

  return (
    <Link href={`/case-studies/${slug.current}`}>
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
            src={imageUrl}
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

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
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
            <CaseStudyCard key={study._id} {...study} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
