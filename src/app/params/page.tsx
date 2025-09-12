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
  Plus,
  Minus,
} from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  unit: string;
  ranges: {
    min: string;
    low: string;
    medium: string;
    high: string;
    max: string;
  };
  physicalEffects: string;
  psychologicalEffects: string;
  measurement: string;
  auto: boolean;
  manual: boolean;
}

const activityParams: ListItem[] = [
  {
    icon: <Flame className='h-6 w-6' />,
    title: 'Активная энергия',
    category: 'Энергетика',
    description: 'Стимулирует метаболизм, способствует контролю веса.',
    unit: 'ккал/день',
    ranges: {
      min: '< 100',
      low: '100 - 300',
      medium: '300 - 600',
      high: '600 - 1000',
      max: '> 1000',
    },
    physicalEffects: 'Стимулирует метаболизм, способствует контролю веса.',
    psychologicalEffects:
      'Высвобождение эндорфинов, улучшает настроение, снижает стресс.',
    measurement:
      'Фитнес-трекер или смарт-часы с пульсометром. Учитывается пульс, тип активности, вес, возраст, пол.',
    auto: true,
    manual: false,
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Активность',
    category: 'Общая активность',
    description: 'Снижает риски, связанные с малоподвижным образом жизни.',
    unit: '% от цели/день',
    ranges: {
      min: '< 25%',
      low: '25% - 50%',
      medium: '50% - 100%',
      high: '100% - 150%',
      max: '> 150%',
    },
    physicalEffects: 'Снижает риски, связанные с малоподвижным образом жизни.',
    psychologicalEffects: 'Повышает общий жизненный тонус и бодрость.',
    measurement:
      'Фитнес-трекер, который отслеживает движение (шаги, минуты активности) и сравнивает с установленной целью.',
    auto: true,
    manual: false,
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Каденс (велосипед)',
    category: 'Велоспорт',
    description: 'Оптимизирует мышечные усилия, снижает нагрузку на суставы.',
    unit: 'об/мин (за тренировку)',
    ranges: {
      min: '< 60',
      low: '60 - 75',
      medium: '75 - 90',
      high: '90 - 105',
      max: '> 105',
    },
    physicalEffects:
      'Оптимизирует мышечные усилия, снижает нагрузку на суставы.',
    psychologicalEffects: 'Способствует концентрации на ритме.',
    measurement:
      'Специальный датчик каденса, установленный на шатуне педали велосипеда.',
    auto: true,
    manual: false,
  },
  {
    icon: <Footprints className='h-6 w-6' />,
    title: 'Дистанция «ходьба + бег»',
    category: 'Кардио',
    description:
      'Укрепляет сердечно-сосудистую систему, улучшает кровообращение.',
    unit: 'км/день',
    ranges: {
      min: '< 1',
      low: '1 - 4',
      medium: '4 - 8',
      high: '8 - 15',
      max: '> 15',
    },
    physicalEffects:
      'Укрепляет сердечно-сосудистую систему, улучшает кровообращение.',
    psychologicalEffects: 'Снижает уровень стресса, улучшает ясность мышления.',
    measurement:
      'GPS-модуль в смартфоне или часах. Для помещений - акселерометр (шагомер).',
    auto: true,
    manual: true,
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Дистанция гребли',
    category: 'Гребля',
    description:
      'Комплексно укрепляет мышцы спины, рук, ног и кора, улучшает осанку.',
    unit: 'м/тренировка',
    ranges: {
      min: '< 500',
      low: '500 - 2000',
      medium: '2000 - 5000',
      high: '5000 - 10000',
      max: '> 10000',
    },
    physicalEffects:
      'Комплексно укрепляет мышцы спины, рук, ног и кора, улучшает осанку.',
    psychologicalEffects:
      'Требует концентрации и ритмичности, что может иметь медитативный эффект.',
    measurement:
      'GPS-модуль (для открытой воды) или встроенный счетчик в гребном тренажере.',
    auto: true,
    manual: true,
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Дистанция гребного заплыва',
    category: 'Плавание',
    description: 'Развивает выносливость и силу верхней части тела.',
    unit: 'м/тренировка',
    ranges: {
      min: '< 500',
      low: '500 - 1500',
      medium: '1500 - 3000',
      high: '3000 - 5000',
      max: '> 5000',
    },
    physicalEffects: 'Развивает выносливость и силу верхней части тела.',
    psychologicalEffects:
      'Повышает уверенность при нахождении в открытой воде.',
    measurement: 'GPS-модуль в водонепроницаемых часах или трекере.',
    auto: true,
    manual: true,
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Дистанция заезда',
    category: 'Велоспорт',
    description: 'Повышает аэробную выносливость, укрепляет мышцы ног.',
    unit: 'км/тренировка',
    ranges: {
      min: '< 5',
      low: '5 - 15',
      medium: '15 - 30',
      high: '30 - 60',
      max: '> 60',
    },
    physicalEffects: 'Повышает аэробную выносливость, укрепляет мышцы ног.',
    psychologicalEffects:
      'Дает ощущение скорости и свободы, помогает исследовать новые места.',
    measurement: 'GPS-модуль в смартфоне, часах или велокомпьютере.',
    auto: true,
    manual: true,
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Дистанция заплыва',
    category: 'Плавание',
    description:
      'Разгружает позвоночник и суставы, улучшает осанку и гибкость.',
    unit: 'м/тренировка',
    ranges: {
      min: '< 200',
      low: '200 - 500',
      medium: '500 - 1500',
      high: '1500 - 3000',
      max: '> 3000',
    },
    physicalEffects:
      'Разгружает позвоночник и суставы, улучшает осанку и гибкость.',
    psychologicalEffects: 'Успокаивает нервную систему, снимает стресс.',
    measurement:
      'GPS-модуль (открытая вода) или подсчет дорожек в бассейне (вручную/часами).',
    auto: true,
    manual: true,
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Дистанция на коньках/роликах',
    category: 'Коньки/Ролики',
    description:
      'Улучшает чувство равновесия и координацию, укрепляет мышцы ног.',
    unit: 'км/тренировка',
    ranges: {
      min: '< 2',
      low: '2 - 5',
      medium: '5 - 10',
      high: '10 - 20',
      max: '> 20',
    },
    physicalEffects:
      'Улучшает чувство равновесия и координацию, укрепляет мышцы ног.',
    psychologicalEffects:
      'Динамичная активность, которая поднимает настроение.',
    measurement: 'GPS-модуль в часах или смартфоне.',
    auto: true,
    manual: true,
  },
  {
    icon: <Mountain className='h-6 w-6' />,
    title: 'Дистанция спуска (снег)',
    category: 'Горные лыжи',
    description: 'Тренирует мышцы ног и кора, развивает баланс и реакцию.',
    unit: 'м/тренировка',
    ranges: {
      min: '< 1000',
      low: '1000 - 5000',
      medium: '5000 - 15000',
      high: '15000 - 25000',
      max: '> 25000',
    },
    physicalEffects: 'Тренирует мышцы ног и кора, развивает баланс и реакцию.',
    psychologicalEffects: 'Дает заряд адреналина, улучшает концентрацию.',
    measurement: 'GPS-модуль и альтиметр (высотомер) в часах или смартфоне.',
    auto: true,
    manual: false,
  },
  {
    icon: <Mountain className='h-6 w-6' />,
    title: 'Дистанция лыжной гонки',
    category: 'Лыжи',
    description:
      'Развивает общую выносливость, задействует все группы мышц, улучшает баланс.',
    unit: 'км/тренировка',
    ranges: {
      min: '< 2',
      low: '2 - 5',
      medium: '5 - 15',
      high: '15 - 30',
      max: '> 30',
    },
    physicalEffects:
      'Развивает общую выносливость, задействует все группы мышц, улучшает баланс.',
    psychologicalEffects:
      'Улучшает настроение благодаря активности на природе.',
    measurement: 'GPS-модуль в часах или смартфоне.',
    auto: true,
    manual: true,
  },
  {
    icon: <Target className='h-6 w-6' />,
    title: 'Глубина погружения',
    category: 'Дайвинг',
    description: 'Тренирует дыхательную систему.',
    unit: 'метры',
    ranges: {
      min: '0',
      low: '1 - 10',
      medium: '10 - 25',
      high: '25 - 40',
      max: '> 40',
    },
    physicalEffects: 'Тренирует дыхательную систему.',
    psychologicalEffects:
      'Развивает контроль над дыханием, повышает стрессоустойчивость.',
    measurement:
      'Специализированный дайв-компьютер или часы с функцией глубиномера.',
    auto: true,
    manual: false,
  },
  {
    icon: <Clock className='h-6 w-6' />,
    title: 'Часы стояния',
    category: 'Повседневная активность',
    description:
      'Активизирует кровообращение, снижает эффекты от длительного сидения.',
    unit: 'ч/день',
    ranges: {
      min: '< 4',
      low: '4 - 7',
      medium: '7 - 10',
      high: '10 - 12',
      max: '> 12',
    },
    physicalEffects:
      'Активизирует кровообращение, снижает эффекты от длительного сидения.',
    psychologicalEffects: 'Повышает бодрость и концентрацию в течение дня.',
    measurement:
      'Акселерометр в смарт-часах, который фиксирует смену положения тела.',
    auto: true,
    manual: false,
  },
  {
    icon: <Heart className='h-6 w-6' />,
    title: 'Энергия в состоянии покоя',
    category: 'Метаболизм',
    description: 'Отражает базовый уровень метаболизма, влияющий на энергию.',
    unit: 'ккал/сутки',
    ranges: {
      min: '< 1200',
      low: '1200 - 1500',
      medium: '1500 - 2000',
      high: '2000 - 2500',
      max: '> 2500',
    },
    physicalEffects:
      'Отражает базовый уровень метаболизма, влияющий на энергию.',
    psychologicalEffects:
      'Косвенно влияет на настроение через уровень энергии.',
    measurement: 'Расчет по формулам или биоимпедансный анализ тела.',
    auto: true,
    manual: false,
  },
  {
    icon: <Zap className='h-6 w-6' />,
    title: 'Мощность бега',
    category: 'Бег',
    description: 'Влияет на рост мышечной силы и анаэробной выносливости.',
    unit: 'Вт (за тренировку)',
    ranges: {
      min: '< 150',
      low: '150 - 250',
      medium: '250 - 350',
      high: '350 - 450',
      max: '> 450',
    },
    physicalEffects: 'Влияет на рост мышечной силы и анаэробной выносливости.',
    psychologicalEffects: 'Дает чувство силы и прогресса, мотивирует.',
    measurement: 'Специализированный датчик мощности (например, Stryd).',
    auto: true,
    manual: false,
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Мощность (велосипед)',
    category: 'Велоспорт',
    description: 'Помогает развивать силовую выносливость.',
    unit: 'Вт (за тренировку)',
    ranges: {
      min: '< 100',
      low: '100 - 180',
      medium: '180 - 280',
      high: '280 - 400',
      max: '> 400',
    },
    physicalEffects: 'Помогает развивать силовую выносливость.',
    psychologicalEffects: 'Дает чувство силы и прогресса, мотивирует.',
    measurement: 'Измеритель мощности (мощемер), установленный на велосипеде.',
    auto: true,
    manual: false,
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Дистанция на коляске',
    category: 'Адаптивный спорт',
    description:
      'Укрепляет сердечно-сосудистую систему, развивает силу верхней части тела.',
    unit: 'км/день',
    ranges: {
      min: '< 1',
      low: '1 - 3',
      medium: '3 - 7',
      high: '7 - 12',
      max: '> 12',
    },
    physicalEffects:
      'Укрепляет сердечно-сосудистую систему, развивает силу верхней части тела.',
    psychologicalEffects: 'Повышает самостоятельность и уверенность в себе.',
    measurement:
      'GPS-модуль в часах или смартфоне, адаптированный для подсчета толчков.',
    auto: true,
    manual: true,
  },
  {
    icon: <Waves className='h-6 w-6' />,
    title: 'Гребки при плавании',
    category: 'Плавание',
    description: 'Показывает эффективность техники, влияет на расход энергии.',
    unit: 'гребков/мин',
    ranges: {
      min: '< 20',
      low: '20 - 30',
      medium: '30 - 45',
      high: '45 - 60',
      max: '> 60',
    },
    physicalEffects:
      'Показывает эффективность техники, влияет на расход энергии.',
    psychologicalEffects:
      'Способствует концентрации и медитативному состоянию.',
    measurement: 'Акселерометр и гироскоп в водонепроницаемых часах.',
    auto: true,
    manual: false,
  },
  {
    icon: <Mountain className='h-6 w-6' />,
    title: 'Пройдено этажей',
    category: 'Повседневная активность',
    description: 'Укрепляет сердечную мышцу и мышцы ног.',
    unit: 'этажей/день',
    ranges: {
      min: '< 2',
      low: '2 - 5',
      medium: '5 - 10',
      high: '10 - 20',
      max: '> 20',
    },
    physicalEffects: 'Укрепляет сердечную мышцу и мышцы ног.',
    psychologicalEffects: 'Дает чувство небольшого ежедневного достижения.',
    measurement: 'Барометрический альтиметр в часах или смартфоне.',
    auto: true,
    manual: false,
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Тренировки',
    category: 'Общая активность',
    description: 'Повышают силу, выносливость, улучшают композицию тела.',
    unit: 'раз в неделю',
    ranges: {
      min: '0',
      low: '1 - 2',
      medium: '2 - 4',
      high: '4 - 6',
      max: '> 6',
    },
    physicalEffects: 'Повышают силу, выносливость, улучшают композицию тела.',
    psychologicalEffects: 'Дисциплинируют, стабилизируют эмоциональный фон.',
    measurement:
      'Фиксируются вручную или автоматически при запуске режима на часах/смартфоне.',
    auto: true,
    manual: true,
  },
  {
    icon: <Clock className='h-6 w-6' />,
    title: 'Минуты упражнений',
    category: 'Интенсивная активность',
    description: 'Ключевой показатель для здоровья сердца и контроля веса.',
    unit: 'мин/день',
    ranges: {
      min: '< 10',
      low: '10 - 30',
      medium: '30 - 60',
      high: '60 - 90',
      max: '> 90',
    },
    physicalEffects: 'Ключевой показатель для здоровья сердца и контроля веса.',
    psychologicalEffects: 'Эффективно снижают стресс и тревожность.',
    measurement:
      'Смарт-часы, анализирующие пульс и темп для определения интенсивности.',
    auto: true,
    manual: false,
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Минуты движения',
    category: 'Общая активность',
    description: 'Учитывает любую активность, способствует повышению тонуса.',
    unit: 'мин/день',
    ranges: {
      min: '< 30',
      low: '30 - 60',
      medium: '60 - 120',
      high: '120 - 180',
      max: '> 180',
    },
    physicalEffects:
      'Учитывает любую активность, способствует повышению тонуса.',
    psychologicalEffects: 'Улучшают настроение и предотвращают апатию.',
    measurement:
      'Акселерометр в любом фитнес-трекере, который фиксирует движение.',
    auto: true,
    manual: false,
  },
  {
    icon: <Footprints className='h-6 w-6' />,
    title: 'Скорость бега',
    category: 'Бег',
    description: 'Влияет на развитие аэробной и анаэробной систем.',
    unit: 'км/ч (за тренировку)',
    ranges: {
      min: '< 6',
      low: '6 - 9',
      medium: '9 - 12',
      high: '12 - 16',
      max: '> 16',
    },
    physicalEffects: 'Влияет на развитие аэробной и анаэробной систем.',
    psychologicalEffects: 'Дает чувство достижения и скорости.',
    measurement:
      'GPS-модуль (для улицы) или акселерометр (для беговой дорожки).',
    auto: true,
    manual: false,
  },
  {
    icon: <Bike className='h-6 w-6' />,
    title: 'Скорость (велосипед)',
    category: 'Велоспорт',
    description: 'Влияет на тренировку сердечно-сосудистой системы.',
    unit: 'км/ч (за тренировку)',
    ranges: {
      min: '< 15',
      low: '15 - 22',
      medium: '22 - 30',
      high: '30 - 40',
      max: '> 40',
    },
    physicalEffects: 'Влияет на тренировку сердечно-сосудистой системы.',
    psychologicalEffects: 'Дает ощущение скорости, свободы и исследования.',
    measurement: 'GPS-модуль или датчик скорости на колесе велосипеда.',
    auto: true,
    manual: false,
  },
  {
    icon: <Heart className='h-6 w-6' />,
    title: 'Частота сердечных сокращений',
    category: 'Кардио',
    description:
      'Основной показатель интенсивности тренировки и состояния сердечно-сосудистой системы.',
    unit: 'уд/мин',
    ranges: {
      min: '< 60',
      low: '60 - 100',
      medium: '100 - 150',
      high: '150 - 180',
      max: '> 180',
    },
    physicalEffects:
      'Основной показатель интенсивности тренировки и состояния сердечно-сосудистой системы.',
    psychologicalEffects:
      'Помогает контролировать нагрузку и избегать перетренированности.',
    measurement: 'Пульсометр, смарт-часы или фитнес-трекер с датчиком пульса.',
    auto: true,
    manual: false,
  },
  {
    icon: <Zap className='h-6 w-6' />,
    title: 'Сожженные калории',
    category: 'Энергетический обмен',
    description:
      'Показывает количество энергии, потраченной во время активности.',
    unit: 'ккал',
    ranges: {
      min: '< 100',
      low: '100 - 300',
      medium: '300 - 600',
      high: '600 - 1000',
      max: '> 1000',
    },
    physicalEffects:
      'Показывает количество энергии, потраченной во время активности.',
    psychologicalEffects:
      'Мотивирует к продолжению тренировок, дает чувство достижения.',
    measurement:
      'Фитнес-трекер или смарт-часы с учетом веса, возраста, пола и интенсивности.',
    auto: true,
    manual: false,
  },
  {
    icon: <Clock className='h-6 w-6' />,
    title: 'Время тренировки',
    category: 'Общая активность',
    description:
      'Продолжительность физической активности влияет на адаптацию организма.',
    unit: 'мин',
    ranges: {
      min: '< 15',
      low: '15 - 30',
      medium: '30 - 60',
      high: '60 - 120',
      max: '> 120',
    },
    physicalEffects:
      'Продолжительность физической активности влияет на адаптацию организма.',
    psychologicalEffects:
      'Развивает дисциплину и привычку к регулярным тренировкам.',
    measurement: 'Секундомер, смарт-часы или фитнес-приложение.',
    auto: true,
    manual: true,
  },
  {
    icon: <Target className='h-6 w-6' />,
    title: 'Шаги',
    category: 'Повседневная активность',
    description: 'Базовый показатель ежедневной активности и подвижности.',
    unit: 'шагов/день',
    ranges: {
      min: '< 5000',
      low: '5000 - 7500',
      medium: '7500 - 10000',
      high: '10000 - 15000',
      max: '> 15000',
    },
    physicalEffects: 'Базовый показатель ежедневной активности и подвижности.',
    psychologicalEffects:
      'Создает мотивацию к движению, дает чувство ежедневного достижения.',
    measurement: 'Шагомер, смарт-часы или фитнес-трекер с акселерометром.',
    auto: true,
    manual: false,
  },
  {
    icon: <Activity className='h-6 w-6' />,
    title: 'Индекс активности',
    category: 'Общая активность',
    description:
      'Комплексный показатель, учитывающий все виды физической активности.',
    unit: 'баллы',
    ranges: {
      min: '< 20',
      low: '20 - 40',
      medium: '40 - 60',
      high: '60 - 80',
      max: '> 80',
    },
    physicalEffects:
      'Комплексный показатель, учитывающий все виды физической активности.',
    psychologicalEffects:
      'Дает общее представление об уровне активности, мотивирует к улучшению.',
    measurement:
      'Алгоритм фитнес-трекера, учитывающий различные виды активности.',
    auto: true,
    manual: false,
  },
  {
    icon: <Brain className='h-6 w-6' />,
    title: 'Физическое усилие',
    category: 'Интенсивность',
    description: 'Отражает уровень нагрузки, влияет на тренировочный стимул.',
    unit: 'шкала RPE (0-10)',
    ranges: {
      min: '0 - 2',
      low: '2 - 4',
      medium: '4 - 6',
      high: '6 - 8',
      max: '8 - 10',
    },
    physicalEffects:
      'Отражает уровень нагрузки, влияет на тренировочный стимул.',
    psychologicalEffects:
      'Развивает ментальную стойкость и умение терпеть дискомфорт.',
    measurement:
      'Субъективная оценка по шкале Борга (RPE) или анализ вариабельности сердечного ритма (HRV).',
    auto: true,
    manual: false,
  },
];

export default function ParamsPage() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className='bg-background'>
      <PageHeader title='Параметры активности' />

      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='flex flex-col'>
            <Separator />
            {activityParams.map((item, index) => {
              const isExpanded = expandedItems.has(index);
              return (
                <React.Fragment key={index}>
                  <div className='grid items-center gap-4 py-5 md:grid-cols-4'>
                    <div className='order-2 flex items-center gap-2 md:order-none'>
                      <span className='flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted'>
                        {item.icon}
                      </span>
                      <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold'>{item.title}</h3>
                        <p className='text-sm text-muted-foreground'>
                          {item.category}
                        </p>
                        <div className='flex gap-1 mt-1'>
                          {item.auto && (
                            <Badge
                              variant='default'
                              className='bg-green-500 text-xs'
                            >
                              Авто
                            </Badge>
                          )}
                          {item.manual && (
                            <Badge variant='outline' className='text-xs'>
                              Ручной
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='order-1 md:order-none md:col-span-2'>
                      <p className='text-lg font-semibold mb-2'>
                        {item.description}
                      </p>
                      <div className='text-sm text-muted-foreground mb-2'>
                        <strong>Единица:</strong> {item.unit}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        <strong>Диапазоны:</strong> {item.ranges.min} |{' '}
                        {item.ranges.low} | {item.ranges.medium} |{' '}
                        {item.ranges.high} | {item.ranges.max}
                      </div>
                    </div>
                    <div className='order-3 flex justify-end'>
                      <button
                        onClick={() => toggleExpanded(index)}
                        className='flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted transition-colors'
                      >
                        {isExpanded ? (
                          <Minus className='h-4 w-4' />
                        ) : (
                          <Plus className='h-4 w-4' />
                        )}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className='px-4 pb-5'>
                      <div className='grid gap-4 md:grid-cols-2'>
                        <div>
                          <div className='text-sm text-muted-foreground mb-1'>
                            <strong>Физические эффекты:</strong>
                          </div>
                          <div className='text-xs text-muted-foreground mb-3'>
                            {item.physicalEffects}
                          </div>
                          <div className='text-sm text-muted-foreground mb-1'>
                            <strong>Психологические эффекты:</strong>
                          </div>
                          <div className='text-xs text-muted-foreground'>
                            {item.psychologicalEffects}
                          </div>
                        </div>
                        <div>
                          <div className='text-sm text-muted-foreground mb-1'>
                            <strong>Способы измерения:</strong>
                          </div>
                          <div className='text-xs text-muted-foreground'>
                            {item.measurement}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <Separator />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
