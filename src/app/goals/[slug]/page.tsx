import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Target,
  ArrowLeft,
  CheckCircle,
  Calendar,
  TrendingUp,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

interface GoalDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  duration: string;
  benefits: string[];
  methods: {
    title: string;
    description: string;
    steps: string[];
  }[];
  timeline: {
    week: string;
    focus: string;
    activities: string[];
  }[];
  tips: string[];
  measurements: string[];
}

const goalsData: Record<string, GoalDetail> = {
  'weight-loss': {
    id: 'weight-loss',
    title: 'Снижение веса',
    description:
      'Эффективное и безопасное снижение массы тела с помощью сбалансированного подхода к питанию и физическим нагрузкам.',
    category: 'Физическое здоровье',
    icon: <Target className='h-6 w-6' />,
    difficulty: 'Средний',
    duration: '3-6 месяцев',
    benefits: [
      'Улучшение самочувствия',
      'Повышение энергии',
      'Снижение риска заболеваний',
      'Улучшение сна',
    ],
    methods: [
      {
        title: 'Дефицит калорий',
        description:
          'Создание умеренного дефицита калорий для безопасного снижения веса',
        steps: [
          'Рассчитайте свой базовый метаболизм (BMR)',
          'Создайте дефицит 300-500 калорий в день',
          'Отслеживайте потребление калорий с помощью приложений',
          'Ведите дневник питания',
        ],
      },
      {
        title: 'Сбалансированное питание',
        description: 'Оптимизация рациона для поддержания здоровья и энергии',
        steps: [
          'Увеличьте потребление белка до 1.2-1.6г на кг веса',
          'Сократите простые углеводы и сахара',
          'Увеличьте потребление овощей и клетчатки',
          'Пейте достаточное количество воды (2-3 литра в день)',
        ],
      },
      {
        title: 'Регулярные тренировки',
        description:
          'Комбинация кардио и силовых тренировок для максимального эффекта',
        steps: [
          'Кардио тренировки 3-4 раза в неделю по 30-45 минут',
          'Силовые тренировки 2-3 раза в неделю',
          'Включите HIIT тренировки 1-2 раза в неделю',
          'Увеличьте ежедневную активность (ходьба, подъем по лестнице)',
        ],
      },
    ],
    timeline: [
      {
        week: 'Недели 1-2',
        focus: 'Адаптация и формирование привычек',
        activities: [
          'Начните вести дневник питания',
          'Установите режим питания (3 основных приема + 2 перекуса)',
          'Начните с легких кардио тренировок',
          'Установите реалистичные цели',
        ],
      },
      {
        week: 'Недели 3-8',
        focus: 'Интенсификация и стабилизация',
        activities: [
          'Увеличьте интенсивность тренировок',
          'Оптимизируйте питание на основе результатов',
          'Добавьте силовые тренировки',
          'Мониторьте прогресс еженедельно',
        ],
      },
      {
        week: 'Недели 9-24',
        focus: 'Долгосрочное поддержание',
        activities: [
          'Корректируйте план по мере необходимости',
          'Добавьте разнообразие в тренировки',
          'Фокусируйтесь на качестве тела, а не только на весе',
          'Поддерживайте социальную поддержку',
        ],
      },
    ],
    tips: [
      'Не спешите - безопасная скорость снижения веса 0.5-1 кг в неделю',
      'Фокусируйтесь на изменениях образа жизни, а не на диетах',
      'Планируйте читмилы заранее, чтобы избежать срывов',
      'Окружите себя поддерживающими людьми',
      'Отмечайте не только вес, но и другие улучшения (энергия, сон, настроение)',
    ],
    measurements: [
      'Вес тела (еженедельно)',
      'Обхваты (талия, бедра, грудь) - ежемесячно',
      'Процент жира в теле - ежемесячно',
      'Фото прогресса - ежемесячно',
      'Уровень энергии и самочувствие - ежедневно',
    ],
  },
  'muscle-gain': {
    id: 'muscle-gain',
    title: 'Набор мышечной массы',
    description:
      'Систематическое увеличение мышечной массы через силовые тренировки и правильное питание.',
    category: 'Физическое здоровье',
    icon: <Activity className='h-6 w-6' />,
    difficulty: 'Продвинутый',
    duration: '6-12 месяцев',
    benefits: [
      'Увеличение силы',
      'Улучшение метаболизма',
      'Укрепление костей',
      'Повышение уверенности',
    ],
    methods: [
      {
        title: 'Прогрессивная перегрузка',
        description:
          'Постепенное увеличение нагрузки для стимуляции роста мышц',
        steps: [
          'Увеличивайте вес на 2.5-5% каждые 1-2 недели',
          'Добавляйте повторения или подходы',
          'Сокращайте время отдыха между подходами',
          'Варьируйте упражнения каждые 6-8 недель',
        ],
      },
      {
        title: 'Питание для роста мышц',
        description: 'Обеспечение достаточного количества белка и калорий',
        steps: [
          'Потребляйте 1.6-2.2г белка на кг веса в день',
          'Создайте профицит калорий 200-500 в день',
          'Ешьте каждые 3-4 часа',
          'Включите качественные углеводы и жиры',
        ],
      },
    ],
    timeline: [
      {
        week: 'Месяцы 1-2',
        focus: 'Освоение техники и адаптация',
        activities: [
          'Изучите правильную технику основных упражнений',
          'Начните с базовых движений (приседания, жим, тяга)',
          'Тренируйтесь 3 раза в неделю',
          'Ведите дневник тренировок',
        ],
      },
    ],
    tips: [
      'Качество техники важнее веса',
      'Спите 7-9 часов для восстановления',
      'Не пропускайте тренировки ног',
      'Пейте достаточно воды',
    ],
    measurements: [
      'Вес тела (еженедельно)',
      'Силовые показатели (ежемесячно)',
      'Обхваты мышц (ежемесячно)',
      'Фото прогресса (ежемесячно)',
    ],
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GoalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const goal = goalsData[slug];

  if (!goal) {
    return (
      <div className='bg-background'>
        <PageHeader title='Цель не найдена' />
        <section className='pt-8 pb-8 md:pb-16'>
          <div className='container px-0'>
            <div className='text-center'>
              <p className='text-gray-600 mb-4'>
                Запрашиваемая цель не найдена.
              </p>
              <Link
                href='/goals'
                className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors'
              >
                <ArrowLeft className='h-4 w-4' />
                Вернуться к списку целей
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className='bg-background'>
      <PageHeader title={goal.title} />
      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='space-y-8'>
            {/* Заголовок и основная информация */}
            <div className='flex items-start gap-4 mb-6'>
              <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600'>
                {goal.icon}
              </div>
              <div className='flex-1 min-w-0'>
                <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                  {goal.title}
                </h2>
                <p className='text-gray-600 text-base leading-relaxed mb-4'>
                  {goal.description}
                </p>
                <div className='flex flex-wrap gap-4 text-sm'>
                  <div className='flex items-center gap-2'>
                    <span className='text-gray-500'>Категория:</span>
                    <Badge
                      variant='outline'
                      className='text-xs bg-gray-50 text-gray-700 border-gray-300'
                    >
                      {goal.category}
                    </Badge>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-gray-500'>Сложность:</span>
                    <Badge
                      variant='outline'
                      className={`text-xs ${
                        goal.difficulty === 'Начинающий'
                          ? 'bg-green-50 text-green-700 border-green-300'
                          : goal.difficulty === 'Средний'
                            ? 'bg-yellow-50 text-yellow-700 border-yellow-300'
                            : 'bg-red-50 text-red-700 border-red-300'
                      }`}
                    >
                      {goal.difficulty}
                    </Badge>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-gray-500'>Продолжительность:</span>
                    <span className='text-gray-700 font-medium'>
                      {goal.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Методы достижения */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-gray-900'>
                Способы достижения цели
              </h3>
              <div className='grid gap-6 md:grid-cols-2'>
                {goal.methods.map((method, index) => (
                  <Card key={index} className='border border-gray-200'>
                    <CardContent className='p-6'>
                      <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                        {method.title}
                      </h4>
                      <p className='text-gray-600 text-sm mb-4'>
                        {method.description}
                      </p>
                      <div className='space-y-2'>
                        <h5 className='text-sm font-medium text-gray-700'>
                          Пошаговый план:
                        </h5>
                        <ul className='space-y-1'>
                          {method.steps.map((step, stepIndex) => (
                            <li
                              key={stepIndex}
                              className='text-sm text-gray-600 flex items-start gap-2'
                            >
                              <CheckCircle className='h-4 w-4 text-gray-400 mt-0.5 shrink-0' />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Временная шкала */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-gray-900'>
                План по неделям
              </h3>
              <div className='space-y-4'>
                {goal.timeline.map((period, index) => (
                  <Card key={index} className='border border-gray-200'>
                    <CardContent className='p-6'>
                      <div className='flex items-center gap-3 mb-3'>
                        <Calendar className='h-5 w-5 text-gray-500' />
                        <h4 className='text-lg font-semibold text-gray-900'>
                          {period.week}
                        </h4>
                        <Badge
                          variant='outline'
                          className='text-xs bg-blue-50 text-blue-700 border-blue-300'
                        >
                          {period.focus}
                        </Badge>
                      </div>
                      <ul className='space-y-2'>
                        {period.activities.map((activity, activityIndex) => (
                          <li
                            key={activityIndex}
                            className='text-sm text-gray-600 flex items-start gap-2'
                          >
                            <TrendingUp className='h-4 w-4 text-gray-400 mt-0.5 shrink-0' />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Советы и измерения */}
            <div className='grid gap-6 md:grid-cols-2'>
              <Card className='border border-gray-200'>
                <CardContent className='p-6'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                    Важные советы
                  </h4>
                  <ul className='space-y-2'>
                    {goal.tips.map((tip, index) => (
                      <li
                        key={index}
                        className='text-sm text-gray-600 flex items-start gap-2'
                      >
                        <span className='text-gray-400 mt-1'>•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className='border border-gray-200'>
                <CardContent className='p-6'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                    Что измерять
                  </h4>
                  <ul className='space-y-2'>
                    {goal.measurements.map((measurement, index) => (
                      <li
                        key={index}
                        className='text-sm text-gray-600 flex items-start gap-2'
                      >
                        <span className='text-gray-400 mt-1'>•</span>
                        {measurement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Навигация */}
            <div className='pt-6 border-t border-gray-200'>
              <Link
                href='/goals'
                className='inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors'
              >
                <ArrowLeft className='h-4 w-4' />
                Вернуться к списку целей
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
