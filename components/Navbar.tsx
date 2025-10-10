'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  name?: string;
  blogUrl?: string;
}

export default function Navbar({ name, blogUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-normal tracking-wide hover:opacity-80 transition-opacity">
            {name || 'Sohan Surag'}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-white text-base hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white text-base hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            {blogUrl && (
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base hover:opacity-70 transition-opacity"
              >
                Blog
              </a>
            )}
            {isHomePage ? (
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white text-base hover:opacity-70 transition-opacity"
              >
                Contact
              </button>
            ) : (
              <Link
                href="/#contact"
                className="text-white text-base hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
