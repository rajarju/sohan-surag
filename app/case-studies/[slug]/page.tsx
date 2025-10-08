import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import { getCaseStudyBySlug, getCaseStudies } from '@/sanity/lib/fetch';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((study: { slug: { current: string } }) => ({
    slug: study.slug.current,
  }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
