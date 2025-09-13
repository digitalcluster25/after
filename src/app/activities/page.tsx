import React from 'react';
import Link from 'next/link';

import { PageHeader } from '@/components/page-header';
import { Separator } from '@/components/ui/separator';

interface ActivityItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  slug: string;
}

const activities: ActivityItem[] = [
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Кардио-тренировки',
    category: 'Энергетика',
    description:
      'Высокоинтенсивные тренировки для сжигания калорий и повышения метаболизма.',
    slug: 'cardio-training',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'HIIT тренировки',
    category: 'Энергетика',
    description:
      'Интервальные тренировки высокой интенсивности для максимального сжигания калорий.',
    slug: 'hiit-training',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Бег',
    category: 'Кардио',
    description:
      'Классическая кардио-нагрузка для укрепления сердечно-сосудистой системы.',
    slug: 'running',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Ходьба',
    category: 'Кардио',
    description:
      'Низкоинтенсивная кардио-нагрузка, подходящая для всех уровней подготовки.',
    slug: 'walking',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Плавание',
    category: 'Плавание',
    description:
      'Полноценная тренировка всего тела в воде с минимальной нагрузкой на суставы.',
    slug: 'swimming',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Гребля',
    category: 'Гребля',
    description:
      'Силовая кардио-тренировка, развивающая мышцы спины, рук и ног.',
    slug: 'rowing',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Велосипед',
    category: 'Велоспорт',
    description:
      'Кардио-тренировка с акцентом на мышцы ног и ягодиц.',
    slug: 'cycling',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Велотренажер',
    category: 'Велоспорт',
    description:
      'Тренировка на велотренажере для развития выносливости и силы ног.',
    slug: 'stationary-bike',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Йога',
    category: 'Метаболизм',
    description:
      'Практика, сочетающая физические упражнения, дыхание и медитацию.',
    slug: 'yoga',
  },
  {
    icon: <div className='w-8 h-8 bg-gray-300 rounded'></div>,
    title: 'Пилатес',
    category: 'Метаболизм',
    description:
      'Система упражнений, направленная на укрепление корпуса и улучшение осанки.',
    slug: 'pilates',
  },
];

export default function ActivitiesPage() {
  return (
    <div className='bg-background'>
      <PageHeader title='Активности' />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='flex flex-col'>
            <Separator />
            {activities.map((activity, index) => (
              <React.Fragment key={index}>
                <Link href={`/activities/${activity.slug}`}>
                  <div className='px-4 py-6 hover:bg-gray-50 transition-colors cursor-pointer'>
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100'>
                        {activity.icon}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                          {activity.title}
                        </h3>
                        <p className='text-sm text-gray-500 mb-2'>
                          {activity.category}
                        </p>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                          {activity.description}
                        </p>
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