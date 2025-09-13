import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Target } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface MasterclassData {
  icon: React.ReactNode;
  title: string;
  activity: string;
  instructor: string;
  duration: string;
  level: 'Начинающий' | 'Средний' | 'Продвинутый';
  description: string;
  objectives: string[];
  requirements: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
}

const masterclassesData: Record<string, MasterclassData> = {
  'cardio-basics': {
    icon: <span className='text-4xl'>🔥</span>,
    title: 'Основы кардио-тренировок',
    activity: 'Кардио-тренировки',
    instructor: 'Анна Петрова',
    duration: '60 минут',
    level: 'Начинающий',
    description:
      'Изучите базовые принципы кардио-тренировок и правильную технику выполнения упражнений для максимальной эффективности и безопасности.',
    objectives: [
      'Изучить основы кардио-тренировок',
      'Освоить правильную технику выполнения',
      'Научиться контролировать пульс',
      'Понять принципы прогрессии нагрузок',
    ],
    requirements: ['Спортивная одежда', 'Кроссовки', 'Вода', 'Полотенце'],
    schedule: [
      { time: '0-10 мин', activity: 'Разминка и подготовка' },
      { time: '10-20 мин', activity: 'Теория кардио-тренировок' },
      { time: '20-45 мин', activity: 'Практические упражнения' },
      { time: '45-55 мин', activity: 'Заминка и растяжка' },
      { time: '55-60 мин', activity: 'Вопросы и ответы' },
    ],
  },
  'hiit-advanced': {
    icon: <span className='text-4xl'>⚡</span>,
    title: 'Продвинутые HIIT техники',
    activity: 'HIIT тренировки',
    instructor: 'Михаил Козлов',
    duration: '90 минут',
    level: 'Продвинутый',
    description:
      'Освойте продвинутые техники интервальных тренировок для максимальной эффективности и достижения лучших результатов.',
    objectives: [
      'Изучить продвинутые HIIT протоколы',
      'Освоить сложные упражнения',
      'Научиться составлять программы',
      'Понять принципы восстановления',
    ],
    requirements: [
      'Спортивная одежда',
      'Кроссовки',
      'Таймер',
      'Вода',
      'Полотенце',
    ],
    schedule: [
      { time: '0-15 мин', activity: 'Разминка и подготовка' },
      { time: '15-30 мин', activity: 'Теория HIIT тренировок' },
      { time: '30-75 мин', activity: 'Практические упражнения' },
      { time: '75-85 мин', activity: 'Заминка и растяжка' },
      { time: '85-90 мин', activity: 'Вопросы и ответы' },
    ],
  },
  'running-technique': {
    icon: <span className='text-4xl'>❤️</span>,
    title: 'Техника бега для начинающих',
    activity: 'Бег',
    instructor: 'Елена Смирнова',
    duration: '45 минут',
    level: 'Начинающий',
    description:
      'Научитесь правильной технике бега, дыханию и выбору обуви для безопасных и эффективных тренировок.',
    objectives: [
      'Изучить правильную технику бега',
      'Освоить дыхательные техники',
      'Научиться выбирать обувь',
      'Понять принципы тренировок',
    ],
    requirements: ['Кроссовки для бега', 'Спортивная одежда', 'Вода'],
    schedule: [
      { time: '0-10 мин', activity: 'Разминка и подготовка' },
      { time: '10-20 мин', activity: 'Теория техники бега' },
      { time: '20-35 мин', activity: 'Практические упражнения' },
      { time: '35-40 мин', activity: 'Заминка и растяжка' },
      { time: '40-45 мин', activity: 'Вопросы и ответы' },
    ],
  },
  'health-walking': {
    icon: <span className='text-4xl'>👣</span>,
    title: 'Оздоровительная ходьба',
    activity: 'Ходьба',
    instructor: 'Ольга Иванова',
    duration: '30 минут',
    level: 'Начинающий',
    description:
      'Освойте технику оздоровительной ходьбы для максимальной пользы и эффективности.',
    objectives: [
      'Изучить технику ходьбы',
      'Освоить правильную осанку',
      'Научиться контролировать темп',
      'Понять принципы оздоровления',
    ],
    requirements: ['Удобная обувь', 'Спортивная одежда'],
    schedule: [
      { time: '0-5 мин', activity: 'Разминка' },
      { time: '5-15 мин', activity: 'Теория ходьбы' },
      { time: '15-25 мин', activity: 'Практические упражнения' },
      { time: '25-30 мин', activity: 'Заминка' },
    ],
  },
  'swimming-styles': {
    icon: <span className='text-4xl'>🌊</span>,
    title: 'Стили плавания',
    activity: 'Плавание',
    instructor: 'Дмитрий Волков',
    duration: '75 минут',
    level: 'Средний',
    description:
      'Изучите различные стили плавания и технику выполнения для эффективных тренировок в воде.',
    objectives: [
      'Изучить стили плавания',
      'Освоить технику выполнения',
      'Научиться дыханию в воде',
      'Понять принципы тренировок',
    ],
    requirements: ['Купальник/плавки', 'Очки для плавания', 'Шапочка'],
    schedule: [
      { time: '0-15 мин', activity: 'Разминка в воде' },
      { time: '15-30 мин', activity: 'Теория стилей плавания' },
      { time: '30-60 мин', activity: 'Практические упражнения' },
      { time: '60-75 мин', activity: 'Заминка и растяжка' },
    ],
  },
  'rowing-technique': {
    icon: <span className='text-4xl'>🚣</span>,
    title: 'Гребля на тренажере',
    activity: 'Гребля',
    instructor: 'Алексей Морозов',
    duration: '50 минут',
    level: 'Средний',
    description:
      'Освойте правильную технику гребли на тренажере для эффективных тренировок.',
    objectives: [
      'Изучить технику гребли',
      'Освоить правильную посадку',
      'Научиться ритму движений',
      'Понять принципы тренировок',
    ],
    requirements: ['Гребной тренажер', 'Спортивная одежда', 'Вода'],
    schedule: [
      { time: '0-10 мин', activity: 'Разминка' },
      { time: '10-20 мин', activity: 'Теория гребли' },
      { time: '20-40 мин', activity: 'Практические упражнения' },
      { time: '40-50 мин', activity: 'Заминка' },
    ],
  },
  'cycling-basics': {
    icon: <span className='text-4xl'>🚴</span>,
    title: 'Велосипедная подготовка',
    activity: 'Велосипед',
    instructor: 'Игорь Соколов',
    duration: '60 минут',
    level: 'Начинающий',
    description:
      'Научитесь правильной посадке и технике езды на велосипеде для безопасных тренировок.',
    objectives: [
      'Изучить технику езды',
      'Освоить правильную посадку',
      'Научиться переключению передач',
      'Понять принципы безопасности',
    ],
    requirements: ['Велосипед', 'Шлем', 'Спортивная одежда'],
    schedule: [
      { time: '0-10 мин', activity: 'Разминка' },
      { time: '10-20 мин', activity: 'Теория езды' },
      { time: '20-50 мин', activity: 'Практические упражнения' },
      { time: '50-60 мин', activity: 'Заминка' },
    ],
  },
  'yoga-basics': {
    icon: <span className='text-4xl'>🧘</span>,
    title: 'Йога для начинающих',
    activity: 'Йога',
    instructor: 'Мария Новикова',
    duration: '90 минут',
    level: 'Начинающий',
    description:
      'Изучите базовые асаны йоги и принципы дыхания для начала практики.',
    objectives: [
      'Изучить базовые асаны',
      'Освоить дыхательные техники',
      'Научиться медитации',
      'Понять принципы йоги',
    ],
    requirements: ['Коврик для йоги', 'Удобная одежда'],
    schedule: [
      { time: '0-15 мин', activity: 'Медитация и дыхание' },
      { time: '15-30 мин', activity: 'Теория йоги' },
      { time: '30-75 мин', activity: 'Практические асаны' },
      { time: '75-90 мин', activity: 'Релаксация' },
    ],
  },
  'pilates-core': {
    icon: <span className='text-4xl'>⏰</span>,
    title: 'Пилатес для укрепления корпуса',
    activity: 'Пилатес',
    instructor: 'Татьяна Лебедева',
    duration: '60 минут',
    level: 'Средний',
    description:
      'Освойте упражнения пилатеса для укрепления мышц корпуса и улучшения осанки.',
    objectives: [
      'Изучить упражнения пилатеса',
      'Освоить технику выполнения',
      'Научиться контролю корпуса',
      'Понять принципы укрепления',
    ],
    requirements: ['Коврик', 'Удобная одежда'],
    schedule: [
      { time: '0-10 мин', activity: 'Разминка' },
      { time: '10-20 мин', activity: 'Теория пилатеса' },
      { time: '20-50 мин', activity: 'Практические упражнения' },
      { time: '50-60 мин', activity: 'Заминка' },
    ],
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MasterclassDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const masterclass = masterclassesData[slug];

  if (!masterclass) {
    notFound();
  }

  return (
    <div className='bg-background'>
      <PageHeader title={masterclass.title} />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='flex flex-col'>
            <Separator />

            <div className='px-4 py-6'>
              {/* Заголовок и иконка */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100'>
                  {masterclass.icon}
                </div>
                <div className='flex-1 min-w-0'>
                  <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                    {masterclass.title}
                  </h2>
                  <p className='text-gray-600 text-base leading-relaxed'>
                    {masterclass.description}
                  </p>
                </div>
              </div>

              {/* Основная информация */}
              <div className='grid gap-6 md:grid-cols-2 mb-6'>
                {/* Левая колонка - детали мастер-класса */}
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Активность
                    </h3>
                    <span className='text-base text-gray-600'>
                      {masterclass.activity}
                    </span>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Инструктор
                    </h3>
                    <div className='flex items-center gap-2'>
                      <User className='h-4 w-4 text-gray-500' />
                      <span className='text-base text-gray-600'>
                        {masterclass.instructor}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Продолжительность
                    </h3>
                    <div className='flex items-center gap-2'>
                      <Clock className='h-4 w-4 text-gray-500' />
                      <span className='text-base text-gray-600'>
                        {masterclass.duration}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Уровень
                    </h3>
                    <Badge
                      variant='outline'
                      className='text-sm bg-gray-50 text-gray-700 border-gray-300'
                    >
                      {masterclass.level}
                    </Badge>
                  </div>
                </div>

                {/* Правая колонка - цели и требования */}
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Цели мастер-класса
                    </h3>
                    <ul className='space-y-1'>
                      {masterclass.objectives.map((objective, index) => (
                        <li
                          key={index}
                          className='flex items-start gap-2 text-sm text-gray-600'
                        >
                          <Target className='h-4 w-4 text-gray-400 mt-0.5 shrink-0' />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium text-gray-700 mb-2'>
                      Что понадобится
                    </h3>
                    <ul className='space-y-1'>
                      {masterclass.requirements.map((requirement, index) => (
                        <li key={index} className='text-sm text-gray-600'>
                          • {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Программа мастер-класса */}
              <div className='bg-gray-50 rounded-lg p-6 mb-6'>
                <h3 className='text-lg font-medium text-gray-700 mb-4'>
                  Программа мастер-класса
                </h3>
                <div className='space-y-3'>
                  {masterclass.schedule.map((item, index) => (
                    <div key={index} className='flex items-center gap-4 py-2'>
                      <span className='text-sm font-medium text-gray-500 w-20 shrink-0'>
                        {item.time}
                      </span>
                      <span className='text-sm text-gray-700'>
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка назад */}
              <div className='mt-6'>
                <Link
                  href='/masterclasses'
                  className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors'
                >
                  <ArrowLeft className='h-4 w-4' />
                  Назад к списку мастер-классов
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
