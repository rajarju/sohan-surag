'use client';

import Link from 'next/link';

interface FooterProps {
  name?: string;
}

export default function Footer({ name }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-white/60 text-sm">
            Crafted by {name || 'Sohan Surag'} ©️ {new Date().getFullYear()}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Home
            </button>
            <Link
              href="/about"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              About
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
