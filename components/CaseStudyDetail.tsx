'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { CaseStudy } from '@/types/sanity';
import CaseStudyNav from './CaseStudyNav';
import ImageCarousel from './ImageCarousel';

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
    projectInfo,
    overview,
    challenge,
    designProcess,
    research,
    conceptIdeation,
    solution,
    handoff,
    outcome,
    learnings,
    impact,
  } = caseStudy;

  const heroImageUrl = heroImage
    ? urlFor(heroImage).width(1200).height(600).url()
    : 'https://picsum.photos/1200/600?random=20';

  // Helper functions to check if sections have visible content
  const hasOverviewContent = () => {
    if (!overview) return false;
    if (Array.isArray(overview)) return overview.length > 0;
    return Boolean(
      overview.businessContext?.length ||
        overview.problem?.length ||
        overview.opportunity ||
        overview.productGoals?.length ||
        overview.successMetrics?.length ||
        overview.primaryUsers?.length ||
        overview.stakeholders?.length
    );
  };

  const hasDesignProcessContent = () =>
    Boolean(
      designProcess?.description?.length || designProcess?.images?.length
    );

  const hasResearchContent = () =>
    Boolean(
      research?.text?.length ||
        research?.methods?.length ||
        research?.challenges?.length ||
        research?.solutions?.length ||
        research?.images?.length ||
        research?.points?.length
    );

  const hasConceptIdeationContent = () =>
    Boolean(
      conceptIdeation?.text?.length ||
        conceptIdeation?.approaches?.length ||
        conceptIdeation?.challenges?.length ||
        conceptIdeation?.solutions?.length ||
        conceptIdeation?.images?.length
    );

  const hasSolutionContent = () =>
    Boolean(solution?.text?.length || solution?.sections?.length);

  const hasHandoffContent = () =>
    Boolean(
      handoff?.text?.length ||
        handoff?.deliverables?.length ||
        handoff?.images?.length
    );

  const hasOutcomeContent = () =>
    Boolean(outcome?.text?.length || outcome?.results?.length);

  const hasImpactContent = () =>
    Boolean(impact?.text?.length || impact?.testimonial);

  // Build navigation sections based on what content exists
  const navSections = [
    hasOverviewContent() && { id: 'overview', label: 'Overview' },
    (metrics?.length ?? 0) > 0 && { id: 'kpi', label: 'KPI' },
    hasDesignProcessContent() && { id: 'design-process', label: 'Design Process' },
    hasResearchContent() && { id: 'research', label: 'Discovery & Research' },
    hasConceptIdeationContent() && { id: 'concept', label: 'Concept & Ideation' },
    hasSolutionContent() && { id: 'solution', label: 'Solution' },
    hasHandoffContent() && { id: 'handoff', label: 'Handoff' },
    hasOutcomeContent() && { id: 'outcome', label: 'Outcome' },
    (learnings?.length ?? 0) > 0 && { id: 'learnings', label: 'Learnings' },
    hasImpactContent() && { id: 'impact', label: 'Impact' },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <div className="min-h-screen pt-32 pb-24 px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        <div className="flex gap-12">
          {/* Left Navigation */}
          <CaseStudyNav sections={navSections} />

          {/* Main Content */}
          <div className="flex-1 max-w-[900px]">
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

              <div className="mb-2">
                <span className="text-[#4A9FFF] text-lg font-medium">{title}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-normal text-white leading-tight">
                {description}
              </h1>

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

              {/* Project Info */}
              {projectInfo && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-8 border-t border-white/10">
                  {projectInfo.company && (
                    <div>
                      <div className="text-[#4A9FFF] text-sm mb-2">Company</div>
                      <div className="text-white">{projectInfo.company}</div>
                    </div>
                  )}
                  {projectInfo.role && (
                    <div>
                      <div className="text-[#4A9FFF] text-sm mb-2">Role</div>
                      <div className="text-white">{projectInfo.role}</div>
                    </div>
                  )}
                  {projectInfo.team && projectInfo.team.length > 0 && (
                    <div>
                      <div className="text-[#4A9FFF] text-sm mb-2">Team</div>
                      {projectInfo.team.map((member, i) => (
                        <div key={i} className="text-white text-sm">
                          {member}
                        </div>
                      ))}
                    </div>
                  )}
                  {projectInfo.tools && projectInfo.tools.length > 0 && (
                    <div>
                      <div className="text-[#4A9FFF] text-sm mb-2">Tools</div>
                      {projectInfo.tools.map((tool, i) => (
                        <div key={i} className="text-white text-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  )}
                  {projectInfo.timeline && (
                    <div>
                      <div className="text-[#4A9FFF] text-sm mb-2">Timeline</div>
                      {projectInfo.timeline.duration && (
                        <div className="text-white text-sm">
                          {projectInfo.timeline.duration}
                        </div>
                      )}
                      {projectInfo.timeline.status && (
                        <div className="text-white/60 text-sm">
                          {projectInfo.timeline.status}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Overview */}
            {overview && (
              <motion.section
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-8">Overview</h2>

                {/* Handle legacy format (array of PortableTextBlock) */}
                {Array.isArray(overview) ? (
                  <div className="prose prose-invert max-w-none">
                    <div className="text-xl text-white/80 leading-relaxed space-y-6">
                      <PortableText value={overview} />
                    </div>
                  </div>
                ) : (
                  <>
                    {/* New structured format */}
                    {overview.businessContext && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Business Context</h3>
                    <div className="text-lg text-white/80 leading-relaxed">
                      <PortableText value={overview.businessContext} />
                    </div>
                  </div>
                )}

                {overview.problem && overview.problem.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Problem</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/80">
                      {overview.problem.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {overview.opportunity && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Opportunity</h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {overview.opportunity}
                    </p>
                  </div>
                )}

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {overview.productGoals && overview.productGoals.length > 0 && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h3 className="text-xl font-medium text-white mb-4">Product Goals</h3>
                      <ul className="list-disc list-inside space-y-2 text-white/70">
                        {overview.productGoals.map((goal, i) => (
                          <li key={i}>{goal}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {overview.successMetrics && overview.successMetrics.length > 0 && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h3 className="text-xl font-medium text-white mb-4">Success Metrics</h3>
                      <ul className="list-disc list-inside space-y-2 text-white/70">
                        {overview.successMetrics.map((metric, i) => (
                          <li key={i}>{metric}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {overview.primaryUsers && overview.primaryUsers.length > 0 && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h3 className="text-xl font-medium text-white mb-4">Primary Users</h3>
                      <ul className="list-disc list-inside space-y-2 text-white/70">
                        {overview.primaryUsers.map((user, i) => (
                          <li key={i}>{user}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {overview.stakeholders && overview.stakeholders.length > 0 && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h3 className="text-xl font-medium text-white mb-4">Stakeholders</h3>
                      <ul className="list-disc list-inside space-y-2 text-white/70">
                        {overview.stakeholders.map((stakeholder, i) => (
                          <li key={i}>{stakeholder}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Images */}
                {overview.images && overview.images.length > 0 && (
                  <div className="mt-8">
                    <ImageCarousel images={overview.images} altPrefix="Overview" />
                  </div>
                )}
                  </>
                )}
              </motion.section>
            )}

            {/* KPI */}
            {metrics && metrics.length > 0 && (
              <motion.section
                id="kpi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-8">KPI</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-5xl font-medium text-white mb-2">
                        {metric.value}
                      </div>
                      <div className="text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Design Process */}
            {designProcess && (
              <motion.section
                id="design-process"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">Design Process</h2>
                {designProcess.description && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={designProcess.description} />
                  </div>
                )}

                {/* Images */}
                {designProcess.images && designProcess.images.length > 0 && (
                  <div className="mt-8">
                    <ImageCarousel images={designProcess.images} altPrefix="Design Process" />
                  </div>
                )}
              </motion.section>
            )}

            {/* Research & Discovery */}
            {research && (
              <motion.section
                id="research"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">
                  Discovery & Research
                </h2>
                {research.text && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={research.text} />
                  </div>
                )}

                {research.methods && research.methods.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Methods Used</h3>
                    <div className="space-y-4">
                      {research.methods.map((method, i) => (
                        <div key={i}>
                          <h4 className="text-lg font-medium text-white mb-2">
                            {method.title}
                          </h4>
                          {method.description && (
                            <p className="text-white/70">{method.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {research.challenges && research.challenges.length > 0 && (
                  <div className="bg-[#2A2A2A] rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-medium text-white mb-3">
                      Challenges during this phase
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {research.challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {research.solutions && research.solutions.length > 0 && (
                  <div className="bg-[#2A2A2A] rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-medium text-white mb-3">Solution</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {research.solutions.map((sol, i) => (
                        <li key={i}>{sol}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {research.images && research.images.length > 0 && (
                  <div className="mt-6">
                    <ImageCarousel images={research.images} altPrefix="Research" />
                  </div>
                )}
              </motion.section>
            )}

            {/* Concept & Ideation */}
            {conceptIdeation && (
              <motion.section
                id="concept"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">
                  Concept & Ideation Exploration
                </h2>
                {conceptIdeation.text && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={conceptIdeation.text} />
                  </div>
                )}

                {conceptIdeation.approaches && conceptIdeation.approaches.length > 0 && (
                  <div className="mb-8">
                    {conceptIdeation.approaches.map((approach, i) => (
                      <div key={i} className="mb-6">
                        <h4 className="text-lg font-medium text-white mb-2">
                          {approach.title}
                        </h4>
                        {approach.description && (
                          <p className="text-white/70">{approach.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {conceptIdeation.challenges && conceptIdeation.challenges.length > 0 && (
                  <div className="bg-[#2A2A2A] rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-medium text-white mb-3">
                      Challenges during this phase
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {conceptIdeation.challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {conceptIdeation.solutions && conceptIdeation.solutions.length > 0 && (
                  <div className="bg-[#2A2A2A] rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-medium text-white mb-3">Solution</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {conceptIdeation.solutions.map((sol, i) => (
                        <li key={i}>{sol}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {conceptIdeation.images && conceptIdeation.images.length > 0 && (
                  <div className="mt-6">
                    <ImageCarousel images={conceptIdeation.images} altPrefix="Concept" />
                  </div>
                )}
              </motion.section>
            )}

            {/* Solution */}
            {solution && (
              <motion.section
                id="solution"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">Solution</h2>
                {solution.text && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={solution.text} />
                  </div>
                )}

                {solution.sections && solution.sections.length > 0 && (
                  <div className="space-y-12">
                    {solution.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-2xl font-normal text-white mb-4">
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

            {/* Handoff */}
            {handoff && (
              <motion.section
                id="handoff"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">Handoff</h2>
                {handoff.text && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={handoff.text} />
                  </div>
                )}

                {handoff.deliverables && handoff.deliverables.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Deliverables</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {handoff.deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {handoff.images && handoff.images.length > 0 && (
                  <div className="mt-6">
                    <ImageCarousel images={handoff.images} altPrefix="Handoff" />
                  </div>
                )}
              </motion.section>
            )}

            {/* Outcome */}
            {outcome && (
              <motion.section
                id="outcome"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">Outcome</h2>
                {outcome.text && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={outcome.text} />
                  </div>
                )}

                {outcome.results && outcome.results.length > 0 && (
                  <div className="bg-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-medium text-white mb-4">Results</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {outcome.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Images */}
                {outcome.images && outcome.images.length > 0 && (
                  <div className="mt-6">
                    <ImageCarousel images={outcome.images} altPrefix="Outcome" />
                  </div>
                )}
              </motion.section>
            )}

            {/* Learnings */}
            {learnings && learnings.length > 0 && (
              <motion.section
                id="learnings"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">Learnings</h2>
                <div className="space-y-6">
                  {learnings.map((learning, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-6">
                      <h3 className="text-xl font-medium text-white mb-3">
                        {learning.title}
                      </h3>
                      {learning.description && (
                        <p className="text-white/70">{learning.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Impact (Legacy) */}
            {impact && (
              <motion.section
                id="impact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-4xl font-normal text-[#4A9FFF] mb-6">Impact</h2>
                {impact.text && (
                  <div className="text-lg text-white/80 leading-relaxed mb-8">
                    <PortableText value={impact.text} />
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

            {/* Challenge (if exists separately) */}
            {challenge?.text && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <h2 className="text-4xl font-normal text-white mb-6">The Challenge</h2>
                <div className="text-lg text-white/80 leading-relaxed mb-8">
                  <PortableText value={challenge.text} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
