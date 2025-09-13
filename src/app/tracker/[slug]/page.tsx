import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Heart, Footprints, Zap, Target, TrendingUp, Clock, ArrowLeft, Calendar, BarChart3 } from 'lucide-react';
import Link from 'next/link';

interface ParameterDetail {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  currentValue: string;
  targetValue: string;
  unit: string;
  progress: number;
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  category: 'Физическая активность' | 'Сердечно-сосудистая система' | 'Общее здоровье';
  relatedGoals: string[]; // ID связанных целей
  dailyHistory: {
    date: string;
    value: string;
    progress: number;
  }[];
  weeklyStats: {
    average: string;
    best: string;
    worst: string;
    consistency: number;
  };
  tips: string[];
}

const parametersData: Record<string, ParameterDetail> = {
  'walking-running-distance': {
    id: 'walking-running-distance',
    name: 'Дистанция «ходьба + бег»',
    description: 'Общая дистанция пеших прогулок и бега за день',
    icon: <Footprints className="h-6 w-6" />,
    currentValue: '8.2',
    targetValue: '10.0',
    unit: 'км',
    progress: 82,
    trend: 'up',
    lastUpdated: '2 часа назад',
    category: 'Физическая активность',
    relatedGoals: ['weight-loss', 'muscle-gain', 'cardiovascular-health'],
    dailyHistory: [
      { date: '2024-01-15', value: '8.2', progress: 82 },
      { date: '2024-01-14', value: '7.8', progress: 78 },
      { date: '2024-01-13', value: '9.1', progress: 91 },
      { date: '2024-01-12', value: '6.5', progress: 65 },
      { date: '2024-01-11', value: '8.9', progress: 89 },
      { date: '2024-01-10', value: '7.2', progress: 72 },
      { date: '2024-01-09', value: '9.5', progress: 95 },
    ],
    weeklyStats: {
      average: '8.2 км',
      best: '9.5 км',
      worst: '6.5 км',
      consistency: 85
    },
    tips: [
      'Начните с коротких прогулок и постепенно увеличивайте дистанцию',
      'Используйте приложения для отслеживания маршрутов',
      'Чередуйте ходьбу и бег для разнообразия',
      'Планируйте маршруты заранее',
      'Слушайте музыку или подкасты во время активности'
    ]
  },
  'active-energy': {
    id: 'active-energy',
    name: 'Активная энергия',
    description: 'Количество калорий, сожженных во время физической активности',
    icon: <Zap className="h-6 w-6" />,
    currentValue: '420',
    targetValue: '500',
    unit: 'ккал',
    progress: 84,
    trend: 'up',
    lastUpdated: '1 час назад',
    category: 'Физическая активность',
    relatedGoals: ['weight-loss', 'muscle-gain', 'energy-boost'],
    dailyHistory: [
      { date: '2024-01-15', value: '420', progress: 84 },
      { date: '2024-01-14', value: '380', progress: 76 },
      { date: '2024-01-13', value: '520', progress: 104 },
      { date: '2024-01-12', value: '290', progress: 58 },
      { date: '2024-01-11', value: '480', progress: 96 },
      { date: '2024-01-10', value: '350', progress: 70 },
      { date: '2024-01-09', value: '510', progress: 102 },
    ],
    weeklyStats: {
      average: '420 ккал',
      best: '520 ккал',
      worst: '290 ккал',
      consistency: 78
    },
    tips: [
      'Интенсивные тренировки сжигают больше калорий',
      'HIIT тренировки эффективны для сжигания калорий',
      'Силовые тренировки увеличивают базовый метаболизм',
      'Пейте воду до и после тренировок',
      'Отслеживайте питание для точного подсчета калорий'
    ]
  },
  'heart-rate-zones': {
    id: 'heart-rate-zones',
    name: 'Зоны пульса',
    description: 'Время в различных зонах пульса во время тренировок',
    icon: <Heart className="h-6 w-6" />,
    currentValue: '45',
    targetValue: '60',
    unit: 'мин',
    progress: 75,
    trend: 'stable',
    lastUpdated: '30 минут назад',
    category: 'Сердечно-сосудистая система',
    relatedGoals: ['cardiovascular-health', 'stress-reduction', 'energy-boost'],
    dailyHistory: [
      { date: '2024-01-15', value: '45', progress: 75 },
      { date: '2024-01-14', value: '38', progress: 63 },
      { date: '2024-01-13', value: '52', progress: 87 },
      { date: '2024-01-12', value: '28', progress: 47 },
      { date: '2024-01-11', value: '48', progress: 80 },
      { date: '2024-01-10', value: '35', progress: 58 },
      { date: '2024-01-09', value: '55', progress: 92 },
    ],
    weeklyStats: {
      average: '43 мин',
      best: '55 мин',
      worst: '28 мин',
      consistency: 72
    },
    tips: [
      'Используйте пульсометр для точного измерения',
      'Разогревайтесь перед интенсивными тренировками',
      'Следите за восстановлением между тренировками',
      'Избегайте перетренированности',
      'Консультируйтесь с врачом при проблемах с сердцем'
    ]
  },
  'steps': {
    id: 'steps',
    name: 'Шаги',
    description: 'Общее количество шагов за день',
    icon: <Activity className="h-6 w-6" />,
    currentValue: '12,450',
    targetValue: '15,000',
    unit: 'шагов',
    progress: 83,
    trend: 'up',
    lastUpdated: '15 минут назад',
    category: 'Общее здоровье',
    relatedGoals: ['weight-loss', 'energy-boost', 'flexibility'],
    dailyHistory: [
      { date: '2024-01-15', value: '12,450', progress: 83 },
      { date: '2024-01-14', value: '11,200', progress: 75 },
      { date: '2024-01-13', value: '14,800', progress: 99 },
      { date: '2024-01-12', value: '8,900', progress: 59 },
      { date: '2024-01-11', value: '13,600', progress: 91 },
      { date: '2024-01-10', value: '10,500', progress: 70 },
      { date: '2024-01-09', value: '15,200', progress: 101 },
    ],
    weeklyStats: {
      average: '12,450 шагов',
      best: '15,200 шагов',
      worst: '8,900 шагов',
      consistency: 80
    },
    tips: [
      'Используйте лестницу вместо лифта',
      'Паркуйтесь дальше от входа',
      'Делайте короткие прогулки в течение дня',
      'Используйте шагомер или фитнес-трекер',
      'Ставьте напоминания о движении каждый час'
    ]
  }
};

const goalsMap: Record<string, string> = {
  'weight-loss': 'Снижение веса',
  'muscle-gain': 'Набор мышечной массы',
  'cardiovascular-health': 'Улучшение сердечно-сосудистой системы',
  'energy-boost': 'Повышение энергии',
  'stress-reduction': 'Снижение стресса',
  'flexibility': 'Развитие гибкости',
  'sleep-optimization': 'Оптимизация сна',
  'social-connection': 'Социальные связи'
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ParameterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const parameter = parametersData[slug];

  if (!parameter) {
    return (
      <div className="bg-background">
        <PageHeader title="Параметр не найден" />
        <section className="pt-8 pb-8 md:pb-16">
          <div className="container px-0">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Запрашиваемый параметр не найден.</p>
              <Link 
                href="/tracker"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Вернуться к трекеру
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <PageHeader title={parameter.name} />
      <section className="pt-8 pb-8 md:pb-16">
        <div className="container px-0">
          <div className="space-y-8">
            {/* Заголовок и основная информация */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                {parameter.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{parameter.name}</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-4">{parameter.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Категория:</span>
                    <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-300">
                      {parameter.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Тренд:</span>
                    <div className="flex items-center gap-1">
                      {parameter.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-600" />}
                      {parameter.trend === 'down' && <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />}
                      {parameter.trend === 'stable' && <Target className="h-4 w-4 text-gray-600" />}
                      <span className={`font-medium ${
                        parameter.trend === 'up' ? 'text-green-600' : 
                        parameter.trend === 'down' ? 'text-red-600' : 
                        'text-gray-600'
                      }`}>
                        {parameter.trend === 'up' ? 'Растет' : 
                         parameter.trend === 'down' ? 'Снижается' : 
                         'Стабильно'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Обновлено {parameter.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Текущие значения */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Текущее значение</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{parameter.currentValue}</div>
                  <div className="text-sm text-gray-500">{parameter.unit}</div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Целевое значение</h3>
                  <div className="text-3xl font-bold text-gray-700 mb-1">{parameter.targetValue}</div>
                  <div className="text-sm text-gray-500">{parameter.unit}</div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Прогресс</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{parameter.progress}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-gray-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${parameter.progress}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Связанные цели */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Связанные цели</h3>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {parameter.relatedGoals.map((goalId) => (
                      <Link
                        key={goalId}
                        href={`/goals/${goalId}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        {goalsMap[goalId]}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* История за неделю */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">История за неделю</h3>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {parameter.dailyHistory.map((day, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {new Date(day.date).toLocaleDateString('ru-RU', { 
                              weekday: 'short', 
                              day: 'numeric', 
                              month: 'short' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-gray-900">{day.value} {parameter.unit}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-gray-600 h-1.5 rounded-full"
                                style={{ width: `${day.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500 w-8">{day.progress}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Статистика недели */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Статистика недели</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Среднее</h4>
                    <p className="text-lg font-semibold text-gray-900">{parameter.weeklyStats.average}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Лучший результат</h4>
                    <p className="text-lg font-semibold text-gray-900">{parameter.weeklyStats.best}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2 rotate-180" />
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Худший результат</h4>
                    <p className="text-lg font-semibold text-gray-900">{parameter.weeklyStats.worst}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Постоянство</h4>
                    <p className="text-lg font-semibold text-gray-900">{parameter.weeklyStats.consistency}%</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Советы */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Рекомендации</h3>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {parameter.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-3">
                        <span className="text-gray-400 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Навигация */}
            <div className="pt-6 border-t border-gray-200">
              <Link 
                href="/tracker"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Вернуться к трекеру
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
