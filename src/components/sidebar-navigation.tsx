'use client';

import { useEffect, useState } from 'react';

interface SidebarNavigationProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export function SidebarNavigation({ sections }: SidebarNavigationProps) {
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

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return (
    <div>
      <h3 className='font-semibold text-lg mb-4'>На этой странице</h3>
      <nav className='space-y-2'>
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block text-sm transition-all duration-200 py-1 px-2 rounded ${
              activeSection === section.id
                ? 'text-foreground bg-accent/50 font-medium'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            }`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
