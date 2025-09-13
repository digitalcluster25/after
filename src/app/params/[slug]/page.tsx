import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PageHeader } from '@/components/page-header';

interface ParamData {
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
  description: string;
  physicalEffects: string;
  psychologicalEffects: string;
  measurement: string;
  auto: boolean;
  manual: boolean;
}

const paramsData: Record<string, ParamData> = {
  'active-energy': {
    icon: <span className='text-4xl'>🔥</span>,
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
    description: 'Стимулирует метаболизм, способствует контролю веса.',
    physicalEffects: 'Стимулирует метаболизм, способствует контролю веса.',
    psychologicalEffects:
      'Высвобождение эндорфинов, улучшает настроение, снижает стресс.',
    measurement:
      'Фитнес-трекер или смарт-часы с пульсометром. Учитывается пульс, тип активности, вес, возраст, пол.',
    auto: true,
    manual: false,
  },
  activity: {
    icon: <span className='text-4xl'>📊</span>,
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
    description: 'Снижает риски, связанные с малоподвижным образом жизни.',
    physicalEffects: 'Снижает риски, связанные с малоподвижным образом жизни.',
    psychologicalEffects: 'Повышает общий жизненный тонус и бодрость.',
    measurement:
      'Фитнес-трекер, который отслеживает движение (шаги, минуты активности) и сравнивает с установленной целью.',
    auto: true,
    manual: false,
  },
  'cycling-cadence': {
    icon: <span className='text-4xl'>🚴</span>,
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
    description: 'Оптимизирует мышечные усилия, снижает нагрузку на суставы.',
    physicalEffects:
      'Оптимизирует мышечные усилия, снижает нагрузку на суставы.',
    psychologicalEffects: 'Способствует концентрации на ритме.',
    measurement:
      'Специальный датчик каденса, установленный на шатуне педали велосипеда.',
    auto: true,
    manual: false,
  },
  'walking-running-distance': {
    icon: <span className='text-4xl'>🏃</span>,
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
    description:
      'Укрепляет сердечно-сосудистую систему, улучшает кровообращение.',
    physicalEffects:
      'Укрепляет сердечно-сосудистую систему, улучшает кровообращение.',
    psychologicalEffects:
      'Снижает стресс, улучшает сон, повышает выносливость.',
    measurement:
      'GPS-трекер, фитнес-трекер с GPS или смартфон с приложением для бега.',
    auto: true,
    manual: true,
  },
  'rowing-distance': {
    icon: <span className='text-4xl'>🚣</span>,
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
    description:
      'Комплексно укрепляет мышцы спины, рук, ног и кора, улучшает осанку.',
    physicalEffects:
      'Комплексно укрепляет мышцы спины, рук, ног и кора, улучшает осанку.',
    psychologicalEffects:
      'Развивает концентрацию, улучшает координацию движений.',
    measurement: 'Встроенный счетчик на гребном тренажере или внешний датчик.',
    auto: true,
    manual: true,
  },
  'swimming-distance': {
    icon: <span className='text-4xl'>🏊</span>,
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
    description: 'Развивает выносливость и силу верхней части тела.',
    physicalEffects: 'Развивает выносливость и силу верхней части тела.',
    psychologicalEffects:
      'Улучшает дыхательную технику, развивает выносливость.',
    measurement: 'Счетчик бассейна или GPS-часы для плавания.',
    auto: true,
    manual: true,
  },
  'cycling-distance': {
    icon: <span className='text-4xl'>🚴</span>,
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
    description: 'Повышает аэробную выносливость, укрепляет мышцы ног.',
    physicalEffects: 'Повышает аэробную выносливость, укрепляет мышцы ног.',
    psychologicalEffects: 'Развивает выносливость, улучшает координацию.',
    measurement:
      'GPS-трекер, велокомпьютер или смартфон с приложением для велоспорта.',
    auto: true,
    manual: true,
  },
  'swimming-pool-distance': {
    icon: <span className='text-4xl'>🏊</span>,
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
    description:
      'Разгружает позвоночник и суставы, улучшает осанку и гибкость.',
    physicalEffects:
      'Разгружает позвоночник и суставы, улучшает осанку и гибкость.',
    psychologicalEffects: 'Снижает стресс, улучшает дыхательную технику.',
    measurement: 'Счетчик бассейна или GPS-часы для плавания.',
    auto: true,
    manual: true,
  },
  'skating-distance': {
    icon: <span className='text-4xl'>⛸️</span>,
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
    description:
      'Улучшает чувство равновесия и координацию, укрепляет мышцы ног.',
    physicalEffects:
      'Улучшает чувство равновесия и координацию, укрепляет мышцы ног.',
    psychologicalEffects: 'Развивает баланс, улучшает координацию движений.',
    measurement: 'GPS-трекер или смартфон с приложением для коньков/роликов.',
    auto: true,
    manual: true,
  },
  'heart-rate-zones': {
    icon: <span className='text-4xl'>❤️</span>,
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
    description:
      'Оптимизирует тренировочную нагрузку, улучшает сердечно-сосудистую систему.',
    physicalEffects:
      'Оптимизирует тренировочную нагрузку, улучшает сердечно-сосудистую систему.',
    psychologicalEffects:
      'Помогает контролировать интенсивность, снижает риск перетренированности.',
    measurement: 'Пульсометр, фитнес-трекер с пульсометром или смарт-часы.',
    auto: true,
    manual: false,
  },
  'activity-index': {
    icon: <span className='text-4xl'>📈</span>,
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
    description:
      'Комплексный показатель, учитывающий все виды физической активности.',
    physicalEffects:
      'Комплексный показатель, учитывающий все виды физической активности.',
    psychologicalEffects:
      'Дает общую оценку физической активности, мотивирует к улучшению.',
    measurement: 'Автоматический расчет на основе данных фитнес-трекера.',
    auto: true,
    manual: false,
  },
  'physical-effort': {
    icon: <span className='text-4xl'>💪</span>,
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
    description: 'Отражает уровень нагрузки, влияет на тренировочный стимул.',
    physicalEffects:
      'Отражает уровень нагрузки, влияет на тренировочный стимул.',
    psychologicalEffects:
      'Помогает контролировать интенсивность, предотвращает перетренированность.',
    measurement:
      'Субъективная оценка по шкале RPE (Rate of Perceived Exertion).',
    auto: false,
    manual: true,
  },
  'activity-time': {
    icon: <span className='text-4xl'>⏱️</span>,
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
    description: 'Базовый показатель ежедневной активности и подвижности.',
    physicalEffects: 'Базовый показатель ежедневной активности и подвижности.',
    psychologicalEffects:
      'Повышает общий жизненный тонус, улучшает настроение.',
    measurement: 'Фитнес-трекер, который отслеживает время активных движений.',
    auto: true,
    manual: false,
  },
  'elevation-gain': {
    icon: <span className='text-4xl'>⛰️</span>,
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
    description: 'Развивает силу ног, улучшает аэробную выносливость.',
    physicalEffects: 'Развивает силу ног, улучшает аэробную выносливость.',
    psychologicalEffects: 'Развивает выносливость, улучшает координацию.',
    measurement:
      'GPS-трекер с барометрическим альтиметром или смартфон с приложением для горных видов спорта.',
    auto: true,
    manual: true,
  },
  'cycling-power': {
    icon: <span className='text-4xl'>⚡</span>,
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
    description:
      'Точный показатель тренировочной нагрузки, независимый от внешних условий.',
    physicalEffects:
      'Точный показатель тренировочной нагрузки, независимый от внешних условий.',
    psychologicalEffects:
      'Помогает контролировать интенсивность, мотивирует к улучшению.',
    measurement:
      'Датчик мощности, установленный на педалях или шатуне велосипеда.',
    auto: true,
    manual: false,
  },
  steps: {
    icon: <span className='text-4xl'>👣</span>,
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
    description: 'Базовый показатель ежедневной активности и подвижности.',
    physicalEffects: 'Базовый показатель ежедневной активности и подвижности.',
    psychologicalEffects:
      'Повышает общий жизненный тонус, улучшает настроение.',
    measurement: 'Фитнес-трекер, смарт-часы или смартфон с акселерометром.',
    auto: true,
    manual: false,
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ParamPage({ params }: PageProps) {
  const { slug } = await params;
  const param = paramsData[slug];

  if (!param) {
    notFound();
  }

  return (
    <div className='bg-background'>
      <PageHeader title={param.title} />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='space-y-8'>
            {/* Back button */}
            <Link
              href='/params'
              className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
            >
              <ArrowLeft className='h-4 w-4' />
              Назад к списку параметров
            </Link>

            {/* Parameter info */}
            <div className='grid gap-8 md:grid-cols-2'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='text-6xl'>{param.icon}</div>
                  <div>
                    <h2 className='text-2xl font-bold'>{param.title}</h2>
                    <p className='text-muted-foreground'>{param.category}</p>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div>
                    <h3 className='font-semibold mb-2'>Описание</h3>
                    <p className='text-muted-foreground'>{param.description}</p>
                  </div>

                  <div>
                    <h3 className='font-semibold mb-2'>Физические эффекты</h3>
                    <p className='text-muted-foreground'>
                      {param.physicalEffects}
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold mb-2'>
                      Психологические эффекты
                    </h3>
                    <p className='text-muted-foreground'>
                      {param.psychologicalEffects}
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='border rounded-lg p-6'>
                  <h3 className='font-semibold mb-4'>
                    Технические характеристики
                  </h3>
                  <div className='space-y-3'>
                    <div>
                      <span className='font-medium'>Единица измерения:</span>
                      <span className='ml-2 text-muted-foreground'>
                        {param.unit}
                      </span>
                    </div>
                    <div>
                      <span className='font-medium'>Диапазоны значений:</span>
                      <div className='mt-1 text-sm text-muted-foreground'>
                        <div>
                          {param.ranges.min} | {param.ranges.low} |{' '}
                          {param.ranges.medium}
                        </div>
                        <div>
                          {param.ranges.high} | {param.ranges.max}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='border rounded-lg p-6'>
                  <h3 className='font-semibold mb-4'>Измерение</h3>
                  <div className='space-y-3'>
                    <div>
                      <span className='font-medium'>Способ измерения:</span>
                      <p className='mt-1 text-sm text-muted-foreground'>
                        {param.measurement}
                      </p>
                    </div>
                    <div className='flex gap-4'>
                      <div className='flex items-center gap-2'>
                        <span
                          className={`w-2 h-2 rounded-full ${param.auto ? 'bg-gray-600' : 'bg-gray-300'}`}
                        ></span>
                        <span className='text-sm'>Автоматическое</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span
                          className={`w-2 h-2 rounded-full ${param.manual ? 'bg-gray-600' : 'bg-gray-300'}`}
                        ></span>
                        <span className='text-sm'>Ручное</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
