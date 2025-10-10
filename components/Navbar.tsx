'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavbarProps {
  name?: string;
  blogUrl?: string;
}

export default function Navbar({ name, blogUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-white text-xl font-normal tracking-wide hover:opacity-80 transition-opacity">
              {name || 'Sohan Surag'}
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white text-2xl p-2 hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full space-y-8 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            className="text-white text-2xl hover:text-[#4A9FFF] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl hover:text-[#4A9FFF] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          {blogUrl && (
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#4A9FFF] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
          )}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white text-2xl hover:text-[#4A9FFF] transition-colors"
            >
              Contact
            </button>
          ) : (
            <Link
              href="/#contact"
              className="text-white text-2xl hover:text-[#4A9FFF] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
