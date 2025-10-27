import { Metadata } from 'next';
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  const title = caseStudy.title || 'Case Study';
  const description = caseStudy.description || 'View this case study';

  return {
    title: `${title} - Case Study`,
    description: description,
    openGraph: {
      title: `${title} - Case Study`,
      description: description,
      type: 'article',
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&type=case-study`,
          width: 1200,
          height: 630,
          alt: `${title} - Case Study`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Case Study`,
      description: description,
      images: [`/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&type=case-study`],
    },
  };
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
