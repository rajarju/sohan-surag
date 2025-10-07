import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sohan Surag - Product Designer",
  description: "Product designer based in Berlin. Blending design & management to craft solutions that drive results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${dmSans.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
