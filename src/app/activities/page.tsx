'use client';

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
  Snowflake,
  Dumbbell,
  Gauge,
} from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ActivityItem {
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

const activities: ActivityItem[] = [
  // Энергетика
  {
    icon: <Flame className='h-6 w-6' />,
    title: 'Кардио-тренировки',
    category: 'Энергетика',
    description: 'Высокоинтенсивные тренировки для сжигания калорий и повышения метаболизма.',
    benefits: ['Сжигание калорий', 'Ускорение метаболизма', 'Улучшение выносливости'],
    equipment: ['Спортивная одежда', 'Кроссовки', 'Вода'],
    difficulty: 'Средний',
    duration: '20-60 минут',
    intensity: 'Высокая',
  },
  {
    icon: <Zap className='h-6 w-6' />,
    title: 'HIIT тренировки',
    category: 'Энергетика',
    description: 'Интервальные тренировки высокой интенсивности для максимального сжигания калорий.',
    benefits: ['Максимальное сжигание калорий', 'Ускорение метаболизма', 'Экономия времени'],
    equipment: ['Спортивная одежда', 'Кроссовки', 'Таймер'],
    difficulty: 'Продвинутый',
    duration: '15-30 минут',
    intensity: 'Высокая',
  },

  // Кардио
  {
    icon: <Heart className='h-6 w-6' />,
    title: 'Бег',
    category: 'Кардио',
    description: 'Классическая кардио-нагрузка для укрепления сердечно-сосудистой системы.',
    benefits: ['Укрепление сердца', 'Улучшение кровообращения', 'Снижение стресса'],
    equipment: ['Кроссовки для бега', 'Спортивная одежда', 'Вода'],
    difficulty: 'Начинающий',
    duration: '20-60 минут',
    intensity: 'Средняя',
  },
  {
    icon: <Footprints className='h-6 w-6' />,
    title: 'Ходьба',
    category: 'Кардио',
    description: 'Низкоинтенсивная кардио-нагрузка, подходящая для всех уровней подготовки.',
    benefits: ['Укрепление сердца', 'Улучшение кровообращения', 'Снижение стресса'],
    equipment: ['Удобная обувь', 'Спортивная одежда'],
    difficulty: 'Начинающий',
    duration: '30-90 минут',
    intensity: 'Низкая',
  },

  // Водные виды
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Плавание',
    category: 'Плавание',
    description: 'Полноценная тренировка всего тела в воде с минимальной нагрузкой на суставы.',
    benefits: ['Укрепление всех мышц', 'Улучшение дыхания', 'Снижение нагрузки на суставы'],
    equipment: ['Купальник/плавки', 'Очки для плавания', 'Шапочка'],
    difficulty: 'Средний',
    duration: '30-60 минут',
    intensity: 'Средняя',
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Гребля',
    category: 'Гребля',
    description: 'Силовая кардио-тренировка, развивающая мышцы спины, рук и ног.',
    benefits: ['Укрепление мышц спины', 'Улучшение осанки', 'Развитие выносливости'],
    equipment: ['Гребной тренажер', 'Спортивная одежда', 'Вода'],
    difficulty: 'Средний',
    duration: '20-45 минут',
    intensity: 'Высокая',
  },

  // Велоспорт
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Велосипед',
    category: 'Велоспорт',
    description: 'Кардио-тренировка с акцентом на мышцы ног и ягодиц.',
    benefits: ['Укрепление ног', 'Улучшение координации', 'Снижение стресса'],
    equipment: ['Велосипед', 'Шлем', 'Спортивная одежда'],
    difficulty: 'Начинающий',
    duration: '30-120 минут',
    intensity: 'Средняя',
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Велотренажер',
    category: 'Велоспорт',
    description: 'Тренировка на велотренажере для развития выносливости и силы ног.',
    benefits: ['Укрепление ног', 'Улучшение выносливости', 'Контроль нагрузки'],
    equipment: ['Велотренажер', 'Спортивная одежда', 'Вода'],
    difficulty: 'Начинающий',
    duration: '20-60 минут',
    intensity: 'Средняя',
  },

  // Зимние виды
  {
    icon: <Snowflake className='h-6 w-6' />,
    title: 'Лыжи',
    category: 'Лыжи',
    description: 'Зимний вид спорта, развивающий координацию и выносливость.',
    benefits: ['Улучшение координации', 'Развитие выносливости', 'Укрепление ног'],
    equipment: ['Лыжи', 'Лыжные палки', 'Лыжные ботинки', 'Теплая одежда'],
    difficulty: 'Средний',
    duration: '60-180 минут',
    intensity: 'Средняя',
  },
  {
    icon: <Snowflake className='h-6 w-6' />,
    title: 'Горные лыжи',
    category: 'Горные лыжи',
    description: 'Скоростной спуск с гор на лыжах, требующий хорошей физической подготовки.',
    benefits: ['Развитие координации', 'Укрепление ног', 'Адреналин'],
    equipment: ['Горные лыжи', 'Лыжные ботинки', 'Шлем', 'Теплая одежда'],
    difficulty: 'Продвинутый',
    duration: '120-300 минут',
    intensity: 'Высокая',
  },
  {
    icon: <Snowflake className='h-6 w-6' />,
    title: 'Коньки',
    category: 'Коньки/Ролики',
    description: 'Зимний вид спорта, развивающий баланс и координацию движений.',
    benefits: ['Улучшение баланса', 'Развитие координации', 'Укрепление ног'],
    equipment: ['Коньки', 'Теплая одежда', 'Перчатки'],
    difficulty: 'Средний',
    duration: '30-90 минут',
    intensity: 'Средняя',
  },

  // Общая активность
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Повседневная активность',
    category: 'Повседневная активность',
    description: 'Ежедневные движения и активности, поддерживающие общий тонус организма.',
    benefits: ['Поддержание тонуса', 'Улучшение настроения', 'Снижение рисков'],
    equipment: ['Удобная одежда', 'Удобная обувь'],
    difficulty: 'Начинающий',
    duration: 'Весь день',
    intensity: 'Низкая',
  },
  {
    icon: <Footprints className='h-6 w-6' />,
    title: 'Ходьба по лестнице',
    category: 'Повседневная активность',
    description: 'Простая и доступная активность для укрепления ног и сердечно-сосудистой системы.',
    benefits: ['Укрепление ног', 'Улучшение сердца', 'Сжигание калорий'],
    equipment: ['Удобная обувь'],
    difficulty: 'Начинающий',
    duration: '10-30 минут',
    intensity: 'Средняя',
  },

  // Интенсивность
  {
    icon: <Gauge className='h-6 w-6' />,
    title: 'Силовые тренировки',
    category: 'Интенсивность',
    description: 'Тренировки с отягощениями для развития силы и мышечной массы.',
    benefits: ['Увеличение силы', 'Рост мышц', 'Укрепление костей'],
    equipment: ['Гантели', 'Штанга', 'Спортивная одежда'],
    difficulty: 'Средний',
    duration: '45-90 минут',
    intensity: 'Высокая',
  },
  {
    icon: <Dumbbell className='h-6 w-6' />,
    title: 'Функциональные тренировки',
    category: 'Интенсивность',
    description: 'Тренировки, имитирующие повседневные движения с повышенной интенсивностью.',
    benefits: ['Улучшение функциональности', 'Развитие координации', 'Укрепление корпуса'],
    equipment: ['Гантели', 'Мяч', 'Спортивная одежда'],
    difficulty: 'Средний',
    duration: '30-60 минут',
    intensity: 'Высокая',
  },

  // Адаптивный спорт
  {
    icon: <Target className='h-6 w-6' />,
    title: 'Адаптивная физкультура',
    category: 'Адаптивный спорт',
    description: 'Специально адаптированные физические упражнения для людей с ограниченными возможностями.',
    benefits: ['Улучшение подвижности', 'Укрепление мышц', 'Повышение уверенности'],
    equipment: ['Специальное оборудование', 'Спортивная одежда'],
    difficulty: 'Начинающий',
    duration: '30-60 минут',
    intensity: 'Низкая',
  },

  // Метаболизм
  {
    icon: <Brain className='h-6 w-6' />,
    title: 'Йога',
    category: 'Метаболизм',
    description: 'Практика, сочетающая физические упражнения, дыхание и медитацию.',
    benefits: ['Улучшение гибкости', 'Снижение стресса', 'Улучшение осанки'],
    equipment: ['Коврик для йоги', 'Удобная одежда'],
    difficulty: 'Начинающий',
    duration: '30-90 минут',
    intensity: 'Низкая',
  },
  {
    icon: <Clock className='h-6 w-6' />,
    title: 'Пилатес',
    category: 'Метаболизм',
    description: 'Система упражнений, направленная на укрепление корпуса и улучшение осанки.',
    benefits: ['Укрепление корпуса', 'Улучшение осанки', 'Развитие гибкости'],
    equipment: ['Коврик', 'Удобная одежда'],
    difficulty: 'Начинающий',
    duration: '30-60 минут',
    intensity: 'Средняя',
  },
];

const categories = [
  'Энергетика',
  'Кардио',
  'Плавание',
  'Гребля',
  'Велоспорт',
  'Лыжи',
  'Горные лыжи',
  'Коньки/Ролики',
  'Повседневная активность',
  'Интенсивность',
  'Адаптивный спорт',
  'Метаболизм',
];

export default function ActivitiesPage() {
  return (
    <div className='bg-background'>
      <PageHeader title='Активности' />

      <section className='py-32'>
        <div className='container px-0 md:px-8'>
          <h1 className='mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl'>
            Справочник активностей
          </h1>
          <p className='mb-10 px-4 text-lg text-muted-foreground'>
            Выберите активность, соответствующую категории из параметров активности
          </p>

          <div className='flex flex-col'>
            <Separator />
            {activities.map((activity, index) => (
              <React.Fragment key={index}>
                <div className='grid items-center gap-4 px-4 py-5 md:grid-cols-4'>
                  <div className='order-2 flex items-center gap-2 md:order-none'>
                    <span className='flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted'>
                      {activity.icon}
                    </span>
                    <div className='flex flex-col gap-1'>
                      <h3 className='font-semibold'>{activity.title}</h3>
                      <p className='text-sm text-muted-foreground'>
                        {activity.category}
                      </p>
                      <div className='flex gap-1 mt-1'>
                        <Badge variant='outline' className='text-xs'>
                          {activity.difficulty}
                        </Badge>
                        <Badge variant='outline' className='text-xs'>
                          {activity.intensity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className='order-1 md:order-none md:col-span-2'>
                    <p className='text-lg font-semibold mb-2'>
                      {activity.description}
                    </p>
                    <div className='text-sm text-muted-foreground mb-2'>
                      <strong>Продолжительность:</strong> {activity.duration}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      <strong>Польза:</strong> {activity.benefits.join(', ')}
                    </div>
                  </div>
                  <div className='order-3 flex justify-end'>
                    <div className='text-xs text-muted-foreground'>
                      {activity.equipment.length} предметов
                    </div>
                  </div>
                </div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
