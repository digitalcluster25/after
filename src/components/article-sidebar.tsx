'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarSection {
  id: string;
  title: string;
  subsections?: SidebarSection[];
}

interface ArticleSidebarProps {
  sections: SidebarSection[];
  currentSection?: string;
}

export function ArticleSidebar({
  sections,
  currentSection,
}: ArticleSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderSection = (section: SidebarSection, level = 0) => {
    const isExpanded = expandedSections.has(section.id);
    const isCurrent = currentSection === section.id;
    const hasSubsections =
      section.subsections && section.subsections.length > 0;

    return (
      <div key={section.id} className='mb-1'>
        <div
          className={`flex items-center gap-3 py-2 px-3 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
            isCurrent
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground hover:shadow-sm'
          }`}
          style={{ paddingLeft: `${level * 16 + 12}px` }}
          onClick={() => {
            if (hasSubsections) {
              toggleSection(section.id);
            } else {
              scrollToSection(section.id);
            }
          }}
        >
          {hasSubsections && (
            <Button
              variant='ghost'
              size='sm'
              className='h-5 w-5 p-0 hover:bg-transparent transition-colors'
              onClick={e => {
                e.stopPropagation();
                toggleSection(section.id);
              }}
            >
              {isExpanded ? (
                <ChevronDown className='h-4 w-4' />
              ) : (
                <ChevronRight className='h-4 w-4' />
              )}
            </Button>
          )}
          <span className='flex-1 text-left'>{section.title}</span>
        </div>
        {hasSubsections && isExpanded && (
          <div className='mt-1'>
            {section.subsections!.map(subsection =>
              renderSection(subsection, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='w-72 bg-gradient-to-b from-card to-muted/30 border-r border-border p-6 h-full overflow-y-auto sticky top-0'>
      <div className='mb-6'>
        <h3 className='font-bold text-lg text-foreground mb-2'>Содержание</h3>
        <div className='w-12 h-1 bg-primary rounded-full'></div>
      </div>
      <nav className='space-y-2'>
        {sections.map(section => renderSection(section))}
      </nav>
    </div>
  );
}
