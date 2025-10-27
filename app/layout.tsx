import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";

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

// Default OG metadata for root layout
const defaultOGTitle = "Sohan Surag - Product Designer";
const defaultOGDescription = "Product designer based in Berlin. Blending design & management to craft solutions that drive results.";

export const metadata: Metadata = {
  title: defaultOGTitle,
  description: defaultOGDescription,
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
    siteName: 'Sohan Surag',
    title: defaultOGTitle,
    description: defaultOGDescription,
    images: [
      {
        url: `/og?title=${encodeURIComponent(defaultOGTitle)}&description=${encodeURIComponent(defaultOGDescription)}`,
        width: 1200,
        height: 630,
        alt: defaultOGTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultOGTitle,
    description: defaultOGDescription,
    images: [`/og?title=${encodeURIComponent(defaultOGTitle)}&description=${encodeURIComponent(defaultOGDescription)}`],
  },
};

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
