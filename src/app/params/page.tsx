import React from 'react';
import {
  Activity,
  Bike,
  Brain,
  Clock,
  Flame,
  Heart,
  Mountain,
  Waves,
  Footprints,
  Target,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { PageHeader } from '@/components/page-header';
import { Separator } from '@/components/ui/separator';

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  unit: string;
  ranges: {
    min: string;
    low: string;
    medium: string;
    high: string;
    max: string;
  };
  slug: string;
}

const activityParams: ListItem[] = [
  {
    icon: <Flame className='h-6 w-6' />,
    title: 'Активная энергия',
    category: 'Энергетика',
    unit: 'ккал/день',
    ranges: {
      min: '< 100',
      low: '100 - 300',
      medium: '300 - 600',
      high: '600 - 1000',
      max: '> 1000',
    },
    slug: 'active-energy',
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Активность',
    category: 'Общая активность',
    unit: '% от цели/день',
    ranges: {
      min: '< 25%',
      low: '25% - 50%',
      medium: '50% - 100%',
      high: '100% - 150%',
      max: '> 150%',
    },
    slug: 'activity',
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Каденс (велосипед)',
    category: 'Велоспорт',
    unit: 'об/мин (за тренировку)',
    ranges: {
      min: '< 60',
      low: '60 - 75',
      medium: '75 - 90',
      high: '90 - 105',
      max: '> 105',
    },
    slug: 'cycling-cadence',
  },
  {
    icon: <Footprints className='h-6 w-6' />,
    title: 'Дистанция «ходьба + бег»',
    category: 'Кардио',
    unit: 'км/день',
    ranges: {
      min: '< 1',
      low: '1 - 4',
      medium: '4 - 8',
      high: '8 - 15',
      max: '> 15',
    },
    slug: 'walking-running-distance',
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Дистанция гребли',
    category: 'Гребля',
    unit: 'м/тренировка',
    ranges: {
      min: '< 500',
      low: '500 - 2000',
      medium: '2000 - 5000',
      high: '5000 - 10000',
      max: '> 10000',
    },
    slug: 'rowing-distance',
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Дистанция гребного заплыва',
    category: 'Плавание',
    unit: 'м/тренировка',
    ranges: {
      min: '< 500',
      low: '500 - 1500',
      medium: '1500 - 3000',
      high: '3000 - 5000',
      max: '> 5000',
    },
    slug: 'swimming-distance',
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Дистанция заезда',
    category: 'Велоспорт',
    unit: 'км/тренировка',
    ranges: {
      min: '< 5',
      low: '5 - 15',
      medium: '15 - 30',
      high: '30 - 60',
      max: '> 60',
    },
    slug: 'cycling-distance',
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Дистанция заплыва',
    category: 'Плавание',
    unit: 'м/тренировка',
    ranges: {
      min: '< 200',
      low: '200 - 500',
      medium: '500 - 1500',
      high: '1500 - 3000',
      max: '> 3000',
    },
    slug: 'swimming-pool-distance',
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Дистанция на коньках/роликах',
    category: 'Коньки/Ролики',
    unit: 'км/тренировка',
    ranges: {
      min: '< 2',
      low: '2 - 5',
      medium: '5 - 10',
      high: '10 - 20',
      max: '> 20',
    },
    slug: 'skating-distance',
  },
  {
    icon: <Heart className='h-6 w-6' />,
    title: 'Зоны пульса',
    category: 'Кардио',
    unit: 'уд/мин',
    ranges: {
      min: '< 100',
      low: '100 - 120',
      medium: '120 - 140',
      high: '140 - 160',
      max: '> 160',
    },
    slug: 'heart-rate-zones',
  },
  {
    icon: <Target className='h-6 w-6' />,
    title: 'Индекс активности',
    category: 'Общая активность',
    unit: 'баллы',
    ranges: {
      min: '< 20',
      low: '20 - 40',
      medium: '40 - 60',
      high: '60 - 80',
      max: '> 80',
    },
    slug: 'activity-index',
  },
  {
    icon: <Brain className='h-6 w-6' />,
    title: 'Физическое усилие',
    category: 'Интенсивность',
    unit: 'шкала RPE (0-10)',
    ranges: {
      min: '0 - 2',
      low: '2 - 4',
      medium: '4 - 6',
      high: '6 - 8',
      max: '8 - 10',
    },
    slug: 'physical-effort',
  },
  {
    icon: <Clock className='h-6 w-6' />,
    title: 'Время активности',
    category: 'Общая активность',
    unit: 'минуты/день',
    ranges: {
      min: '< 30',
      low: '30 - 60',
      medium: '60 - 90',
      high: '90 - 120',
      max: '> 120',
    },
    slug: 'activity-time',
  },
  {
    icon: <Mountain className='h-6 w-6' />,
    title: 'Высота подъема',
    category: 'Горные виды спорта',
    unit: 'м/тренировка',
    ranges: {
      min: '< 100',
      low: '100 - 300',
      medium: '300 - 600',
      high: '600 - 1000',
      max: '> 1000',
    },
    slug: 'elevation-gain',
  },
  {
    icon: <Zap className='h-6 w-6' />,
    title: 'Мощность (велосипед)',
    category: 'Велоспорт',
    unit: 'Вт',
    ranges: {
      min: '< 100',
      low: '100 - 200',
      medium: '200 - 300',
      high: '300 - 400',
      max: '> 400',
    },
    slug: 'cycling-power',
  },
  {
    icon: <Footprints className='h-6 w-6' />,
    title: 'Шаги',
    category: 'Общая активность',
    unit: 'шагов/день',
    ranges: {
      min: '< 5000',
      low: '5000 - 7500',
      medium: '7500 - 10000',
      high: '10000 - 15000',
      max: '> 15000',
    },
    slug: 'steps',
  },
];

export default function ParamsPage() {
  return (
    <div className='bg-background'>
      <PageHeader title='Параметры активности' />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='flex flex-col'>
            {activityParams.map((param, index) => (
              <React.Fragment key={param.slug}>
                <div className='grid items-center gap-4 py-5 md:grid-cols-4'>
                  <div className='order-2 flex items-center gap-2 md:order-none'>
                    <span className='flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted'>
                      {param.icon}
                    </span>
                    <div className='flex flex-col gap-1'>
                      <h3 className='font-semibold'>{param.title}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {param.category}
                      </p>
                    </div>
                  </div>

                  <div className='order-1 md:order-none md:col-span-2'>
                    <div className='text-sm text-muted-foreground mb-2'>
                      <strong>Единица:</strong> {param.unit}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      <strong>Диапазоны:</strong> {param.ranges.min} |{' '}
                      {param.ranges.low} | {param.ranges.medium} |{' '}
                      {param.ranges.high} | {param.ranges.max}
                    </div>
                  </div>

                  <div className='order-3 flex justify-end'>
                    <Link href={`/params/${param.slug}`}>
                      <button className='flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted transition-colors'>
                        <span className='text-sm'>→</span>
                      </button>
                    </Link>
                  </div>
                </div>
                {index < activityParams.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
