import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import { getSiteSettings } from "@/sanity/lib/fetch";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Get the base URL for metadata
// Priority: Custom domain > Vercel URL > localhost
const getBaseUrl = () => {
  // Custom domain (production)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // Vercel deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local development
  return 'http://localhost:3000';
};

// Default fallback values
const defaultTitle = "Sohan Surag - Product Designer";
const defaultDescription = "Product designer based in Berlin. Blending design & management to craft solutions that drive results.";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  const title = siteSettings?.seoTitle || defaultTitle;
  const description = siteSettings?.seoDescription || defaultDescription;
  const ogTitle = siteSettings?.ogTitle || siteSettings?.seoTitle || defaultTitle;
  const ogDescription = siteSettings?.ogDescription || siteSettings?.seoDescription || defaultDescription;
  const siteName = siteSettings?.name || 'Sohan Surag';

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/favicon/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(getBaseUrl()),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: '/',
      siteName,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: `/og?title=${encodeURIComponent(ogTitle)}&description=${encodeURIComponent(ogDescription)}`,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [`/og?title=${encodeURIComponent(ogTitle)}&description=${encodeURIComponent(ogDescription)}`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black" style={{ viewTransitionName: 'root' }}>
      <body
        className={`${dmSans.variable} antialiased bg-black text-white`}
      >
        <AuroraBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
