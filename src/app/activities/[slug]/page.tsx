import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Функция для получения мастер-классов по активности
function getMasterclassesForActivity(activityTitle: string) {
  const masterclassesMap: Record<
    string,
    Array<{
      title: string;
      instructor: string;
      duration: string;
      level: string;
      slug: string;
    }>
  > = {
    'Кардио-тренировки': [
      {
        title: 'Основы кардио-тренировок',
        instructor: 'Анна Петрова',
        duration: '60 минут',
        level: 'Начинающий',
        slug: 'cardio-basics',
      },
    ],
    'HIIT тренировки': [
      {
        title: 'Продвинутые HIIT техники',
        instructor: 'Михаил Козлов',
        duration: '90 минут',
        level: 'Продвинутый',
        slug: 'hiit-advanced',
      },
    ],
    Бег: [
      {
        title: 'Техника бега для начинающих',
        instructor: 'Елена Смирнова',
        duration: '45 минут',
        level: 'Начинающий',
        slug: 'running-technique',
      },
    ],
    Ходьба: [
      {
        title: 'Оздоровительная ходьба',
        instructor: 'Ольга Иванова',
        duration: '30 минут',
        level: 'Начинающий',
        slug: 'health-walking',
      },
    ],
    Плавание: [
      {
        title: 'Стили плавания',
        instructor: 'Дмитрий Волков',
        duration: '75 минут',
        level: 'Средний',
        slug: 'swimming-styles',
      },
    ],
    Гребля: [
      {
        title: 'Гребля на тренажере',
        instructor: 'Алексей Морозов',
        duration: '50 минут',
        level: 'Средний',
        slug: 'rowing-technique',
      },
    ],
    Велосипед: [
      {
        title: 'Велосипедная подготовка',
        instructor: 'Игорь Соколов',
        duration: '60 минут',
        level: 'Начинающий',
        slug: 'cycling-basics',
      },
    ],
    Йога: [
      {
        title: 'Йога для начинающих',
        instructor: 'Мария Новикова',
        duration: '90 минут',
        level: 'Начинающий',
        slug: 'yoga-basics',
      },
    ],
    Пилатес: [
      {
        title: 'Пилатес для укрепления корпуса',
        instructor: 'Татьяна Лебедева',
        duration: '60 минут',
        level: 'Средний',
        slug: 'pilates-core',
      },
    ],
  };

  return masterclassesMap[activityTitle] || [];
}

interface ActivityData {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  equipment: string[];
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  duration: string;
  intensity: 'Низкая' | 'Средняя' | 'Высокая';
}

const activitiesData: Record<string, ActivityData> = {
  'cardio-training': {
    icon: <span className='text-4xl'>🔥</span>,
    title: 'Кардио-тренировки',
    category: 'Энергетика',
    description:
      'Высокоинтенсивные тренировки для сжигания калорий и повышения метаболизма.',
    benefits: [
      'Сжигание калорий',
      'Ускорение метаболизма',
      'Улучшение выносливости',
    ],
    equipment: ['Спортивная одежда', 'Кроссовки', 'Вода'],
    difficulty: 'Средний',
    duration: '20-60 минут',
    intensity: 'Высокая',
  },
  'hiit-training': {
    icon: <span className='text-4xl'>⚡</span>,
    title: 'HIIT тренировки',
    category: 'Энергетика',
    description:
      'Интервальные тренировки высокой интенсивности для максимального сжигания калорий.',
    benefits: [
      'Максимальное сжигание калорий',
      'Ускорение метаболизма',
      'Экономия времени',
    ],
    equipment: ['Спортивная одежда', 'Кроссовки', 'Таймер'],
    difficulty: 'Продвинутый',
    duration: '15-30 минут',
    intensity: 'Высокая',
  },
  running: {
    icon: <span className='text-4xl'>❤️</span>,
    title: 'Бег',
    category: 'Кардио',
    description:
      'Классическая кардио-нагрузка для укрепления сердечно-сосудистой системы.',
    benefits: [
      'Укрепление сердца',
      'Улучшение кровообращения',
      'Снижение стресса',
    ],
    equipment: ['Кроссовки для бега', 'Спортивная одежда', 'Вода'],
    difficulty: 'Начинающий',
    duration: '20-60 минут',
    intensity: 'Средняя',
  },
  walking: {
    icon: <span className='text-4xl'>👣</span>,
    title: 'Ходьба',
    category: 'Кардио',
    description:
      'Низкоинтенсивная кардио-нагрузка, подходящая для всех уровней подготовки.',
    benefits: [
      'Укрепление сердца',
      'Улучшение кровообращения',
      'Снижение стресса',
    ],
    equipment: ['Удобная обувь', 'Спортивная одежда'],
    difficulty: 'Начинающий',
    duration: '30-90 минут',
    intensity: 'Низкая',
  },
  swimming: {
    icon: <span className='text-4xl'>🌊</span>,
    title: 'Плавание',
    category: 'Плавание',
    description:
      'Полноценная тренировка всего тела в воде с минимальной нагрузкой на суставы.',
    benefits: [
      'Укрепление всех мышц',
      'Улучшение дыхания',
      'Снижение нагрузки на суставы',
    ],
    equipment: ['Купальник/плавки', 'Очки для плавания', 'Шапочка'],
    difficulty: 'Средний',
    duration: '30-60 минут',
    intensity: 'Средняя',
  },
  rowing: {
    icon: <span className='text-4xl'>🚣</span>,
    title: 'Гребля',
    category: 'Гребля',
    description:
      'Силовая кардио-тренировка, развивающая мышцы спины, рук и ног.',
    benefits: [
      'Укрепление мышц спины',
      'Улучшение осанки',
      'Развитие выносливости',
    ],
    equipment: ['Гребной тренажер', 'Спортивная одежда', 'Вода'],
    difficulty: 'Средний',
    duration: '20-45 минут',
    intensity: 'Высокая',
  },
  cycling: {
    icon: <span className='text-4xl'>🚴</span>,
    title: 'Велосипед',
    category: 'Велоспорт',
    description: 'Кардио-тренировка с акцентом на мышцы ног и ягодиц.',
    benefits: ['Укрепление ног', 'Улучшение координации', 'Снижение стресса'],
    equipment: ['Велосипед', 'Шлем', 'Спортивная одежда'],
    difficulty: 'Начинающий',
    duration: '30-120 минут',
    intensity: 'Средняя',
  },
  'stationary-bike': {
    icon: <span className='text-4xl'>🚴‍♂️</span>,
    title: 'Велотренажер',
    category: 'Велоспорт',
    description:
      'Тренировка на велотренажере для развития выносливости и силы ног.',
    benefits: ['Укрепление ног', 'Улучшение выносливости', 'Снижение стресса'],
    equipment: ['Велотренажер', 'Спортивная одежда', 'Вода'],
    difficulty: 'Начинающий',
    duration: '20-60 минут',
    intensity: 'Средняя',
  },
  yoga: {
    icon: <span className='text-4xl'>🧘</span>,
    title: 'Йога',
    category: 'Метаболизм',
    description:
      'Практика, сочетающая физические упражнения, дыхание и медитацию.',
    benefits: ['Улучшение гибкости', 'Снижение стресса', 'Улучшение осанки'],
    equipment: ['Коврик для йоги', 'Удобная одежда'],
    difficulty: 'Начинающий',
    duration: '30-90 минут',
    intensity: 'Низкая',
  },
  pilates: {
    icon: <span className='text-4xl'>⏰</span>,
    title: 'Пилатес',
    category: 'Метаболизм',
    description:
      'Система упражнений, направленная на укрепление корпуса и улучшение осанки.',
    benefits: ['Укрепление корпуса', 'Улучшение осанки', 'Развитие гибкости'],
    equipment: ['Коврик', 'Удобная одежда'],
    difficulty: 'Начинающий',
    duration: '30-60 минут',
    intensity: 'Средняя',
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ActivityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const activity = activitiesData[slug];

  if (!activity) {
    notFound();
  }

  return (
    <div className='bg-background'>
      <PageHeader title={activity.title} />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='flex flex-col'>
            <Separator />

            <div className='px-4 py-6'>
              {/* Заголовок и иконка */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100'>
                  {activity.icon}
                </div>
                <div className='flex-1 min-w-0'>
                  <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                    {activity.title}
                  </h2>
                  <p className='text-gray-600 text-base leading-relaxed'>
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Основная информация */}
              <div className='grid gap-6 md:grid-cols-2 mb-6'>
                {/* Левая колонка - категория и параметры */}
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Категория
                    </h3>
                    <div className='flex items-center gap-2'>
                      <span className='text-base text-gray-600'>
                        {activity.category}
                      </span>
                      <span className='text-sm text-gray-500'>
                        (категория активности по типу воздействия)
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Параметры
                    </h3>
                    <div className='space-y-2'>
                      <div className='flex items-center gap-2'>
                        <Badge
                          variant='outline'
                          className='text-sm bg-gray-50 text-gray-700 border-gray-300'
                        >
                          {activity.difficulty}
                        </Badge>
                        <span className='text-sm text-gray-500'>
                          (уровень сложности выполнения)
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Badge
                          variant='outline'
                          className='text-sm bg-gray-50 text-gray-700 border-gray-300'
                        >
                          {activity.intensity}
                        </Badge>
                        <span className='text-sm text-gray-500'>
                          (интенсивность нагрузки)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Правая колонка - продолжительность и оборудование */}
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Продолжительность
                    </h3>
                    <span className='text-base text-gray-600'>
                      {activity.duration}
                    </span>
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Оборудование
                    </h3>
                    <div className='text-base text-gray-600'>
                      {activity.equipment.join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Польза */}
              <div className='bg-gray-50 rounded-lg p-6 mb-6'>
                <h3 className='text-lg font-medium text-gray-700 mb-4'>
                  Польза
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {activity.benefits.map((benefit, benefitIndex) => (
                    <span
                      key={benefitIndex}
                      className='inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-gray-800'
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Мастер-классы */}
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg font-medium text-gray-700 mb-4'>
                  Мастер-классы по этой активности
                </h3>
                <div className='space-y-3'>
                  {getMasterclassesForActivity(activity.title).map(
                    (masterclass, index) => (
                      <Link
                        key={index}
                        href={`/masterclasses/${masterclass.slug}`}
                        className='block p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors'
                      >
                        <div className='flex items-center justify-between'>
                          <div>
                            <h4 className='font-medium text-gray-900'>
                              {masterclass.title}
                            </h4>
                            <p className='text-sm text-gray-500'>
                              {masterclass.instructor} • {masterclass.duration}
                            </p>
                          </div>
                          <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700'>
                            {masterclass.level}
                          </span>
                        </div>
                      </Link>
                    )
                  )}
                </div>
                <div className='mt-4'>
                  <Link
                    href='/masterclasses'
                    className='text-sm text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Посмотреть все мастер-классы →
                  </Link>
                </div>
              </div>

              {/* Кнопка назад */}
              <div className='mt-6'>
                <Link
                  href='/activities'
                  className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors'
                >
                  <ArrowLeft className='h-4 w-4' />
                  Назад к списку активностей
                </Link>
              </div>
            </div>

            <Separator />
          </div>
        </div>
      </section>
    </div>
  );
}
