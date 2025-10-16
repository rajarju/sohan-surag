import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sohan Surag - Product Designer",
  description: "Product designer based in Berlin. Blending design & management to craft solutions that drive results.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
