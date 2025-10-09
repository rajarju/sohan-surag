'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { CaseStudy } from '@/types/sanity';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const {
    title,
    description,
    tags,
    metrics,
    heroImage,
    overview,
    challenge,
    research,
    solution,
    impact,
  } = caseStudy;

  const heroImageUrl = heroImage
    ? urlFor(heroImage).width(1200).height(600).url()
    : 'https://picsum.photos/1200/600?random=20';

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
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-6xl font-normal text-white">{title}</h1>
          <p className="text-2xl text-white/70">{description}</p>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
            <Image
              src={heroImageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Project Overview */}
        {(overview || metrics) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-normal text-white mb-8">Overview</h2>
            {metrics && metrics.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {metrics.map((metric, index: number) => (
                  <div key={index} className="bg-white/5 rounded-2xl p-6">
                    <div className="text-4xl font-medium text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-white/60">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {overview && (
              <div className="prose prose-invert max-w-none">
                <div className="text-xl text-white/80 leading-relaxed space-y-6">
                  <PortableText value={overview} />
                </div>
              </div>
            )}
          </motion.section>
        )}

        {/* Challenge */}
        {challenge?.text && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-normal text-white mb-6">The Challenge</h2>
            <div className="prose prose-invert max-w-none mb-8">
              <div className="text-xl text-white/80 leading-relaxed space-y-6">
                <PortableText value={challenge.text} />
              </div>
            </div>
            {challenge.image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src={urlFor(challenge.image).width(1200).height(600).url()}
                  alt="Challenge"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.section>
        )}

        {/* Research */}
        {research && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-normal text-white mb-6">
              Research & Discovery
            </h2>
            {research.text && (
              <div className="prose prose-invert max-w-none mb-8">
                <div className="text-xl text-white/80 leading-relaxed">
                  <PortableText value={research.text} />
                </div>
              </div>
            )}

            {research.points && research.points.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {research.points.map((point, index: number) => (
                  <div key={index} className="bg-white/5 rounded-2xl p-8">
                    <h3 className="text-2xl font-normal text-white mb-4">
                      {point.title}
                    </h3>
                    <p className="text-white/70">{point.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Solution */}
        {solution && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-normal text-white mb-6">The Solution</h2>
            {solution.text && (
              <div className="prose prose-invert max-w-none mb-8">
                <div className="text-xl text-white/80 leading-relaxed">
                  <PortableText value={solution.text} />
                </div>
              </div>
            )}

            {solution.sections && solution.sections.length > 0 && (
              <div className="space-y-12">
                {solution.sections.map((section, index: number) => (
                  <div key={index}>
                    <h3 className="text-3xl font-normal text-white mb-6">
                      {section.title}
                    </h3>
                    <p className="text-white/70 mb-6">{section.description}</p>
                    {section.image && (
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                        <Image
                          src={urlFor(section.image).width(1200).height(600).url()}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Impact */}
        {impact && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-normal text-white mb-6">Impact</h2>
            {impact.text && (
              <div className="prose prose-invert max-w-none mb-8">
                <div className="text-xl text-white/80 leading-relaxed">
                  <PortableText value={impact.text} />
                </div>
              </div>
            )}

            {impact.testimonial && (
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <blockquote className="text-2xl text-white/90 italic">
                  &ldquo;{impact.testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-white/60 mt-4">— {impact.testimonial.author}</p>
              </div>
            )}
          </motion.section>
        )}
      </div>
    </div>
  );
}
