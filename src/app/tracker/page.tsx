import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Heart, Footprints, Zap, Target, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TrackedParameter {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  currentValue: string;
  targetValue: string;
  unit: string;
  progress: number; // 0-100
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  category: 'Физическая активность' | 'Сердечно-сосудистая система' | 'Общее здоровье';
  relatedGoals: string[]; // ID связанных целей
}

const trackedParameters: TrackedParameter[] = [
  {
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
    relatedGoals: ['weight-loss', 'muscle-gain', 'cardiovascular-health']
  },
  {
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
    relatedGoals: ['weight-loss', 'muscle-gain', 'energy-boost']
  },
  {
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
    relatedGoals: ['cardiovascular-health', 'stress-reduction', 'energy-boost']
  },
  {
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
    relatedGoals: ['weight-loss', 'energy-boost', 'flexibility']
  }
];

const categories = [
  'Физическая активность',
  'Сердечно-сосудистая система', 
  'Общее здоровье'
];

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

export default function HealthTrackerPage() {
  return (
    <div className="bg-background">
      <PageHeader title="Трекер здоровья" />
      <section className="pt-8 pb-8 md:pb-16">
        <div className="container px-0">
          <div className="space-y-8">
            {/* Введение */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Отслеживание параметров</h2>
              <p className="text-gray-600 leading-relaxed">
                Мониторинг ключевых показателей здоровья в реальном времени. 
                Отслеживайте свой прогресс и достигайте поставленных целей.
              </p>
            </div>

            {/* Фильтры по категориям */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Категории параметров</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant="outline" 
                    className="text-sm bg-gray-50 text-gray-700 border-gray-300"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Список отслеживаемых параметров */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-700">Отслеживаемые параметры</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {trackedParameters.map((parameter) => (
                  <Card key={parameter.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                          {parameter.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{parameter.name}</h4>
                          <p className="text-sm text-gray-500 mb-2">{parameter.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {parameter.description}
                      </p>

                      {/* Текущие значения */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Текущее значение:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-gray-900">{parameter.currentValue}</span>
                            <span className="text-sm text-gray-500">{parameter.unit}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Целевое значение:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-gray-700">{parameter.targetValue}</span>
                            <span className="text-sm text-gray-500">{parameter.unit}</span>
                          </div>
                        </div>

                        {/* Прогресс-бар */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Прогресс</span>
                            <span className="text-gray-700 font-medium">{parameter.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gray-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${parameter.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Тренд и время обновления */}
                        <div className="flex items-center justify-between text-sm">
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
                            <span>{parameter.lastUpdated}</span>
                          </div>
                        </div>

                        {/* Связанные цели */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">Связанные цели:</h5>
                            <div className="flex flex-wrap gap-2">
                              {parameter.relatedGoals.map((goalId) => (
                                <Link
                                  key={goalId}
                                  href={`/goals/${goalId}`}
                                  className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                  {goalsMap[goalId]}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <Link 
                            href={`/tracker/${parameter.id}`}
                            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Подробная статистика
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
