'use client';

import { useEffect, useState } from 'react';

interface ActiveSectionProps {
  children: React.ReactNode;
  sections: string[];
}

export function ActiveSection({ children, sections }: ActiveSectionProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return <div data-active-section={activeSection}>{children}</div>;
}
