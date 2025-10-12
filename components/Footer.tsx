'use client';

import Link from 'next/link';

interface FooterProps {
  name?: string;
  blogUrl?: string;
}

export default function Footer({ name, blogUrl }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-10 border-t border-white/10 relative overflow-visible">
      {/* Planet Horizon Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 w-[250vw] h-[250vw] sm:w-[200vw] sm:h-[200vw] rounded-full bg-black"
          style={{
            top: '70%',
            transform: 'translateX(-50%)',
            boxShadow: '0 -40px 120px 40px rgba(59, 130, 246, 0.2), 0 -15px 60px 10px rgba(59, 130, 246, 0.3), 0 -2px 10px 0px rgba(200, 220, 255, 0.5)'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
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
            {blogUrl && (
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Blog
              </a>
            )}
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
