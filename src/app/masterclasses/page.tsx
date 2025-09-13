import React from 'react';
import Link from 'next/link';

import { PageHeader } from '@/components/page-header';
import { Separator } from '@/components/ui/separator';

interface MasterclassItem {
  icon: React.ReactNode;
  title: string;
  activity: string;
  instructor: string;
  duration: string;
  level: 'Начинающий' | 'Средний' | 'Продвинутый';
  description: string;
  slug: string;
}

const masterclasses: MasterclassItem[] = [
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Основы кардио-тренировок',
    activity: 'Кардио-тренировки',
    instructor: 'Анна Петрова',
    duration: '60 минут',
    level: 'Начинающий',
    description: 'Изучите базовые принципы кардио-тренировок и правильную технику выполнения упражнений.',
    slug: 'cardio-basics',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Продвинутые HIIT техники',
    activity: 'HIIT тренировки',
    instructor: 'Михаил Козлов',
    duration: '90 минут',
    level: 'Продвинутый',
    description: 'Освойте продвинутые техники интервальных тренировок для максимальной эффективности.',
    slug: 'hiit-advanced',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Техника бега для начинающих',
    activity: 'Бег',
    instructor: 'Елена Смирнова',
    duration: '45 минут',
    level: 'Начинающий',
    description: 'Научитесь правильной технике бега, дыханию и выбору обуви.',
    slug: 'running-technique',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Оздоровительная ходьба',
    activity: 'Ходьба',
    instructor: 'Ольга Иванова',
    duration: '30 минут',
    level: 'Начинающий',
    description: 'Освойте технику оздоровительной ходьбы для максимальной пользы.',
    slug: 'health-walking',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Стили плавания',
    activity: 'Плавание',
    instructor: 'Дмитрий Волков',
    duration: '75 минут',
    level: 'Средний',
    description: 'Изучите различные стили плавания и технику выполнения.',
    slug: 'swimming-styles',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Гребля на тренажере',
    activity: 'Гребля',
    instructor: 'Алексей Морозов',
    duration: '50 минут',
    level: 'Средний',
    description: 'Освойте правильную технику гребли на тренажере.',
    slug: 'rowing-technique',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Велосипедная подготовка',
    activity: 'Велосипед',
    instructor: 'Игорь Соколов',
    duration: '60 минут',
    level: 'Начинающий',
    description: 'Научитесь правильной посадке и технике езды на велосипеде.',
    slug: 'cycling-basics',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Йога для начинающих',
    activity: 'Йога',
    instructor: 'Мария Новикова',
    duration: '90 минут',
    level: 'Начинающий',
    description: 'Изучите базовые асаны йоги и принципы дыхания.',
    slug: 'yoga-basics',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Пилатес для укрепления корпуса',
    activity: 'Пилатес',
    instructor: 'Татьяна Лебедева',
    duration: '60 минут',
    level: 'Средний',
    description: 'Освойте упражнения пилатеса для укрепления мышц корпуса.',
    slug: 'pilates-core',
  },
];

export default function MasterclassesPage() {
  return (
    <div className='bg-background'>
      <PageHeader title='Мастер-классы' />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='flex flex-col'>
            <Separator />
            {masterclasses.map((masterclass, index) => (
              <React.Fragment key={index}>
                <Link href={`/masterclasses/${masterclass.slug}`}>
                  <div className='px-4 py-6 hover:bg-gray-50 transition-colors cursor-pointer'>
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100'>
                        {masterclass.icon}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                          {masterclass.title}
                        </h3>
                        <p className='text-sm text-gray-500 mb-2'>
                          {masterclass.activity} • {masterclass.instructor} • {masterclass.duration}
                        </p>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                          {masterclass.description}
                        </p>
                      </div>
                      <div className='flex flex-col items-end gap-1'>
                        <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700'>
                          {masterclass.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
