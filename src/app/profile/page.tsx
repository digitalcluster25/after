import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  User,
  Calendar,
  Target,
  TrendingUp,
  Award,
  Activity,
  Heart,
  Footprints,
  Zap,
  Clock,
  Edit3,
  Settings,
  Star,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: string;
  level: number;
  experience: number;
  nextLevelExp: number;
  totalGoals: number;
  completedGoals: number;
  activeGoals: number;
  currentStreak: number;
  longestStreak: number;
  totalActivities: number;
  totalDistance: number;
  totalCalories: number;
  averageSteps: number;
  favoriteActivity: string;
  achievements: Array<{
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    earnedDate: string;
    category: 'fitness' | 'goals' | 'consistency' | 'milestone';
  }>;
  recentActivity: Array<{
    id: string;
    type:
      | 'goal_completed'
      | 'parameter_updated'
      | 'achievement_earned'
      | 'streak_milestone';
    title: string;
    description: string;
    date: string;
    value?: string;
  }>;
}

const demoProfile: UserProfile = {
  id: 'user-001',
  name: 'Александр Петров',
  email: 'alex.petrov@example.com',
  joinDate: '2024-01-15',
  level: 8,
  experience: 2450,
  nextLevelExp: 3000,
  totalGoals: 12,
  completedGoals: 7,
  activeGoals: 3,
  currentStreak: 15,
  longestStreak: 28,
  totalActivities: 156,
  totalDistance: 342.5,
  totalCalories: 18420,
  averageSteps: 12850,
  favoriteActivity: 'Бег',
  achievements: [
    {
      id: 'first-goal',
      title: 'Первая цель',
      description: 'Завершили первую цель',
      icon: <Target className='h-5 w-5' />,
      earnedDate: '2024-01-20',
      category: 'goals',
    },
    {
      id: 'week-streak',
      title: 'Неделя подряд',
      description: 'Активность 7 дней подряд',
      icon: <Calendar className='h-5 w-5' />,
      earnedDate: '2024-01-25',
      category: 'consistency',
    },
    {
      id: 'distance-milestone',
      title: '100 км',
      description: 'Пробежали 100 километров',
      icon: <Footprints className='h-5 w-5' />,
      earnedDate: '2024-02-10',
      category: 'milestone',
    },
    {
      id: 'calorie-burner',
      title: 'Сжигатель калорий',
      description: 'Сожгли 10,000 калорий',
      icon: <Zap className='h-5 w-5' />,
      earnedDate: '2024-02-15',
      category: 'fitness',
    },
    {
      id: 'month-consistency',
      title: 'Месяц активности',
      description: 'Активность 30 дней подряд',
      icon: <Award className='h-5 w-5' />,
      earnedDate: '2024-02-20',
      category: 'consistency',
    },
  ],
  recentActivity: [
    {
      id: 'goal-1',
      type: 'goal_completed',
      title: 'Цель достигнута!',
      description: 'Снижение веса - 5 кг',
      date: '2024-01-14',
      value: '5 кг',
    },
    {
      id: 'param-1',
      type: 'parameter_updated',
      title: 'Обновлен параметр',
      description: 'Дистанция: 8.2 км',
      date: '2024-01-13',
      value: '8.2 км',
    },
    {
      id: 'achievement-1',
      type: 'achievement_earned',
      title: 'Новое достижение',
      description: '200 км пройдено',
      date: '2024-01-12',
      value: '200 км',
    },
    {
      id: 'streak-1',
      type: 'streak_milestone',
      title: 'Рекорд серии',
      description: '15 дней активности',
      date: '2024-01-11',
      value: '15 дней',
    },
  ],
};

const getAchievementBadgeClass = (category: string) => {
  switch (category) {
    case 'fitness':
      return 'bg-blue-50 text-blue-700 border-blue-300';
    case 'goals':
      return 'bg-green-50 text-green-700 border-green-300';
    case 'consistency':
      return 'bg-yellow-50 text-yellow-700 border-yellow-300';
    case 'milestone':
      return 'bg-purple-50 text-purple-700 border-purple-300';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-300';
  }
};

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'goal_completed':
      return <CheckCircle className='h-4 w-4 text-green-600' />;
    case 'parameter_updated':
      return <Activity className='h-4 w-4 text-blue-600' />;
    case 'achievement_earned':
      return <Award className='h-4 w-4 text-yellow-600' />;
    case 'streak_milestone':
      return <TrendingUp className='h-4 w-4 text-purple-600' />;
    default:
      return <Clock className='h-4 w-4 text-gray-600' />;
  }
};

export default function ProfilePage() {
  const progressToNextLevel =
    (demoProfile.experience / demoProfile.nextLevelExp) * 100;

  return (
    <div className='bg-background'>
      <PageHeader title='Профиль' />
      <section className='pt-8 pb-8 md:pb-16'>
        <div className='container px-0'>
          <div className='space-y-8'>
            {/* Основная информация профиля */}
            <Card className='border border-gray-200'>
              <CardContent className='p-6'>
                <div className='flex flex-col md:flex-row gap-6'>
                  {/* Аватар и основная информация */}
                  <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600'>
                      <User className='h-12 w-12' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
                        {demoProfile.name}
                      </h2>
                      <p className='text-gray-600 mb-2'>{demoProfile.email}</p>
                      <div className='flex flex-wrap gap-4 text-sm text-gray-500'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='h-4 w-4' />
                          <span>
                            С нами с{' '}
                            {new Date(demoProfile.joinDate).toLocaleDateString(
                              'ru-RU'
                            )}
                          </span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Target className='h-4 w-4' />
                          <span>Уровень {demoProfile.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Кнопки действий */}
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <button className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
                      <Edit3 className='h-4 w-4' />
                      Редактировать
                    </button>
                    <button className='inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
                      <Settings className='h-4 w-4' />
                      Настройки
                    </button>
                  </div>
                </div>

                {/* Прогресс до следующего уровня */}
                <div className='mt-6 pt-6 border-t border-gray-100'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm font-medium text-gray-700'>
                      Прогресс до уровня {demoProfile.level + 1}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {demoProfile.experience}/{demoProfile.nextLevelExp} опыта
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-gray-600 h-2 rounded-full transition-all duration-300'
                      style={{ width: `${progressToNextLevel}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Статистика */}
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
              <Card className='border border-gray-200'>
                <CardContent className='p-6 text-center'>
                  <div className='flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-lg'>
                    <Target className='h-6 w-6 text-gray-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                    Цели
                  </h3>
                  <p className='text-2xl font-bold text-gray-700 mb-1'>
                    {demoProfile.completedGoals}/{demoProfile.totalGoals}
                  </p>
                  <p className='text-sm text-gray-500'>завершено</p>
                </CardContent>
              </Card>

              <Card className='border border-gray-200'>
                <CardContent className='p-6 text-center'>
                  <div className='flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-lg'>
                    <TrendingUp className='h-6 w-6 text-gray-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                    Серия
                  </h3>
                  <p className='text-2xl font-bold text-gray-700 mb-1'>
                    {demoProfile.currentStreak}
                  </p>
                  <p className='text-sm text-gray-500'>дней подряд</p>
                </CardContent>
              </Card>

              <Card className='border border-gray-200'>
                <CardContent className='p-6 text-center'>
                  <div className='flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-lg'>
                    <Footprints className='h-6 w-6 text-gray-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                    Дистанция
                  </h3>
                  <p className='text-2xl font-bold text-gray-700 mb-1'>
                    {demoProfile.totalDistance}
                  </p>
                  <p className='text-sm text-gray-500'>км всего</p>
                </CardContent>
              </Card>

              <Card className='border border-gray-200'>
                <CardContent className='p-6 text-center'>
                  <div className='flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-lg'>
                    <Zap className='h-6 w-6 text-gray-600' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                    Калории
                  </h3>
                  <p className='text-2xl font-bold text-gray-700 mb-1'>
                    {demoProfile.totalCalories.toLocaleString()}
                  </p>
                  <p className='text-sm text-gray-500'>сожжено</p>
                </CardContent>
              </Card>
            </div>

            {/* Достижения */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-gray-900'>
                Достижения
              </h3>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {demoProfile.achievements.map(achievement => (
                  <Card key={achievement.id} className='border border-gray-200'>
                    <CardContent className='p-6'>
                      <div className='flex items-start gap-4'>
                        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600'>
                          {achievement.icon}
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                            {achievement.title}
                          </h4>
                          <p className='text-sm text-gray-600 mb-2'>
                            {achievement.description}
                          </p>
                          <div className='flex items-center justify-between'>
                            <Badge
                              variant='outline'
                              className={`text-xs ${getAchievementBadgeClass(achievement.category)}`}
                            >
                              {achievement.category === 'fitness'
                                ? 'Фитнес'
                                : achievement.category === 'goals'
                                  ? 'Цели'
                                  : achievement.category === 'consistency'
                                    ? 'Постоянство'
                                    : achievement.category === 'milestone'
                                      ? 'Рекорд'
                                      : 'Другое'}
                            </Badge>
                            <span className='text-xs text-gray-500'>
                              {new Date(
                                achievement.earnedDate
                              ).toLocaleDateString('ru-RU')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Недавняя активность */}
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-gray-900'>
                Недавняя активность
              </h3>
              <Card className='border border-gray-200'>
                <CardContent className='p-6'>
                  <div className='space-y-4'>
                    {demoProfile.recentActivity.map(activity => (
                      <div
                        key={activity.id}
                        className='flex items-start gap-4 py-3 border-b border-gray-100 last:border-b-0'
                      >
                        <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600'>
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h4 className='text-sm font-medium text-gray-900 mb-1'>
                            {activity.title}
                          </h4>
                          <p className='text-sm text-gray-600 mb-1'>
                            {activity.description}
                          </p>
                          <div className='flex items-center justify-between'>
                            <span className='text-xs text-gray-500'>
                              {new Date(activity.date).toLocaleDateString(
                                'ru-RU'
                              )}
                            </span>
                            {activity.value && (
                              <span className='text-xs font-medium text-gray-700'>
                                {activity.value}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Быстрые действия */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Быстрые действия
              </h3>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Link
                  href='/tracker'
                  className='flex flex-col items-center p-4 text-center bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors'
                >
                  <Activity className='h-8 w-8 text-gray-600 mb-2' />
                  <span className='text-sm font-medium text-gray-900'>
                    Трекер здоровья
                  </span>
                </Link>
                <Link
                  href='/goals'
                  className='flex flex-col items-center p-4 text-center bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors'
                >
                  <Target className='h-8 w-8 text-gray-600 mb-2' />
                  <span className='text-sm font-medium text-gray-900'>
                    Мои цели
                  </span>
                </Link>
                <Link
                  href='/activities'
                  className='flex flex-col items-center p-4 text-center bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors'
                >
                  <Heart className='h-8 w-8 text-gray-600 mb-2' />
                  <span className='text-sm font-medium text-gray-900'>
                    Активности
                  </span>
                </Link>
                <Link
                  href='/masterclasses'
                  className='flex flex-col items-center p-4 text-center bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors'
                >
                  <Star className='h-8 w-8 text-gray-600 mb-2' />
                  <span className='text-sm font-medium text-gray-900'>
                    Мастер-классы
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
