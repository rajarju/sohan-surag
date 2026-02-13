'use client';

import { useState, useEffect } from 'react';

interface NavSection {
  id: string;
  label: string;
}

interface CaseStudyNavProps {
  sections: NavSection[];
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  if (!sections || sections.length === 0) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="w-64 hidden lg:block flex-shrink-0">
      <nav className="sticky top-32">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`
                  w-full text-left px-4 py-2 rounded-lg transition-all text-sm
                  ${
                    activeSection === section.id
                      ? 'text-[#4A9FFF] bg-[#4A9FFF]/10 font-medium'
                      : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                  }
                `}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
