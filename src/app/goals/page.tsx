import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Brain, Zap, Clock, Users, Activity, Mountain, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  duration: string;
  benefits: string[];
  relatedParameters: string[]; // ID связанных параметров трекера
}

const goals: Goal[] = [
  {
    id: 'weight-loss',
    title: 'Снижение веса',
    description: 'Эффективное и безопасное снижение массы тела с помощью сбалансированного подхода к питанию и физическим нагрузкам.',
    category: 'Физическое здоровье',
    icon: <Target className="h-6 w-6" />,
    difficulty: 'Средний',
    duration: '3-6 месяцев',
    benefits: ['Улучшение самочувствия', 'Повышение энергии', 'Снижение риска заболеваний', 'Улучшение сна'],
    relatedParameters: ['walking-running-distance', 'active-energy', 'steps']
  },
  {
    id: 'muscle-gain',
    title: 'Набор мышечной массы',
    description: 'Систематическое увеличение мышечной массы через силовые тренировки и правильное питание.',
    category: 'Физическое здоровье',
    icon: <Activity className="h-6 w-6" />,
    difficulty: 'Продвинутый',
    duration: '6-12 месяцев',
    benefits: ['Увеличение силы', 'Улучшение метаболизма', 'Укрепление костей', 'Повышение уверенности'],
    relatedParameters: ['active-energy', 'walking-running-distance']
  },
  {
    id: 'cardiovascular-health',
    title: 'Улучшение сердечно-сосудистой системы',
    description: 'Укрепление сердца и сосудов через кардио-тренировки и здоровый образ жизни.',
    category: 'Физическое здоровье',
    icon: <Heart className="h-6 w-6" />,
    difficulty: 'Начинающий',
    duration: '2-4 месяца',
    benefits: ['Снижение давления', 'Улучшение выносливости', 'Снижение холестерина', 'Укрепление иммунитета'],
    relatedParameters: ['heart-rate-zones', 'walking-running-distance']
  },
  {
    id: 'stress-reduction',
    title: 'Снижение стресса',
    description: 'Управление стрессом через медитацию, дыхательные практики и физическую активность.',
    category: 'Психическое здоровье',
    icon: <Brain className="h-6 w-6" />,
    difficulty: 'Начинающий',
    duration: '1-3 месяца',
    benefits: ['Улучшение сна', 'Повышение концентрации', 'Снижение тревожности', 'Улучшение настроения'],
    relatedParameters: ['heart-rate-zones']
  },
  {
    id: 'energy-boost',
    title: 'Повышение энергии',
    description: 'Увеличение жизненной энергии через оптимизацию сна, питания и физической активности.',
    category: 'Общее самочувствие',
    icon: <Zap className="h-6 w-6" />,
    difficulty: 'Средний',
    duration: '2-4 недели',
    benefits: ['Повышение продуктивности', 'Улучшение настроения', 'Укрепление иммунитета', 'Улучшение сна'],
    relatedParameters: ['active-energy', 'heart-rate-zones', 'steps']
  },
  {
    id: 'flexibility',
    title: 'Развитие гибкости',
    description: 'Улучшение подвижности суставов и эластичности мышц через растяжку и йогу.',
    category: 'Физическое здоровье',
    icon: <Mountain className="h-6 w-6" />,
    difficulty: 'Начинающий',
    duration: '1-3 месяца',
    benefits: ['Улучшение осанки', 'Снижение болей в спине', 'Улучшение координации', 'Повышение мобильности'],
    relatedParameters: ['steps']
  },
  {
    id: 'sleep-optimization',
    title: 'Оптимизация сна',
    description: 'Улучшение качества и продолжительности сна для восстановления и здоровья.',
    category: 'Общее самочувствие',
    icon: <Clock className="h-6 w-6" />,
    difficulty: 'Средний',
    duration: '2-6 недель',
    benefits: ['Улучшение восстановления', 'Повышение энергии', 'Улучшение памяти', 'Укрепление иммунитета'],
    relatedParameters: []
  },
  {
    id: 'social-connection',
    title: 'Социальные связи',
    description: 'Укрепление социальных связей через групповые активности и общие интересы.',
    category: 'Социальное здоровье',
    icon: <Users className="h-6 w-6" />,
    difficulty: 'Начинающий',
    duration: '1-6 месяцев',
    benefits: ['Повышение мотивации', 'Улучшение настроения', 'Расширение круга общения', 'Повышение ответственности'],
    relatedParameters: []
  }
];

const categories = [
  'Физическое здоровье',
  'Психическое здоровье', 
  'Общее самочувствие',
  'Социальное здоровье'
];

const parametersMap: Record<string, string> = {
  'walking-running-distance': 'Дистанция «ходьба + бег»',
  'active-energy': 'Активная энергия',
  'heart-rate-zones': 'Зоны пульса',
  'steps': 'Шаги'
};

export default function GoalsPage() {
  return (
    <div className="bg-background">
      <PageHeader title="Цели" />
      <section className="pt-8 pb-8 md:pb-16">
        <div className="container px-0">
          <div className="space-y-8">
            {/* Введение */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Выберите свою цель</h2>
              <p className="text-gray-600 leading-relaxed">
                Определите, что именно вы хотите достичь в рамках нашего велнес-подхода. 
                Каждая цель имеет свой путь достижения, включающий параметры активности, 
                соответствующие активности и мастер-классы для углубленного изучения.
              </p>
            </div>

            {/* Фильтры по категориям */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">Категории целей</h3>
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

            {/* Список целей */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-700">Доступные цели</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {goals.map((goal) => (
                  <Card key={goal.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                          {goal.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{goal.title}</h4>
                          <p className="text-sm text-gray-500 mb-2">{goal.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {goal.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Сложность:</span>
                          <Badge 
                            variant="outline" 
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
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Продолжительность:</span>
                          <span className="text-gray-700 font-medium">{goal.duration}</span>
                        </div>

                        {/* Связанные параметры трекера */}
                        {goal.relatedParameters.length > 0 && (
                          <div className="pt-3 border-t border-gray-100">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">Отслеживаемые параметры:</h5>
                            <div className="flex flex-wrap gap-2">
                              {goal.relatedParameters.map((paramId) => (
                                <Link
                                  key={paramId}
                                  href={`/tracker/${paramId}`}
                                  className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                  {parametersMap[paramId]}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Ожидаемые результаты:</h5>
                        <ul className="space-y-1 mb-4">
                          {goal.benefits.map((benefit, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-gray-400 mt-1">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <Link 
                          href={`/goals/${goal.id}`}
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Подробнее о достижении цели
                          <ArrowRight className="h-4 w-4" />
                        </Link>
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
