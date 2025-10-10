import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCaseStudyBySlug, getCaseStudies, getSiteSettings } from '@/sanity/lib/fetch';

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
  const [caseStudy, siteSettings] = await Promise.all([
    getCaseStudyBySlug(slug),
    getSiteSettings(),
  ]);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar name={siteSettings?.name} blogUrl={siteSettings?.blogUrl} />
      <CaseStudyDetail caseStudy={caseStudy} />
      <Footer name={siteSettings?.name} blogUrl={siteSettings?.blogUrl} />
    </>
  );
}
