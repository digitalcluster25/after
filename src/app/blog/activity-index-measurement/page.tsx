import { Metadata } from 'next';
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarNavigation } from '@/components/sidebar-navigation';

export const metadata: Metadata = {
  title: 'Индекс активности: полное руководство по измерению | :after',
  description:
    'Комплексное руководство по расчету и измерению индекса активности, включая компоненты расчета, методы измерения и интерпретацию результатов.',
  keywords:
    'индекс активности, мониторинг, тренировки, анализ, физическая активность',
};

export default function ActivityIndexMeasurementPage() {
  const sections = [
    { id: 'introduction', title: 'Введение' },
    { id: 'components', title: 'Компоненты индекса активности' },
    { id: 'formula', title: 'Формула расчета' },
    { id: 'measurement-methods', title: 'Методы измерения' },
    { id: 'interpretation', title: 'Интерпретация результатов' },
    { id: 'practical-recommendations', title: 'Практические рекомендации' },
  ];

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-6 max-w-7xl py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Main content */}
          <div className='lg:col-span-3'>
            {/* Навигация назад */}
            <div className='mb-8'>
              <Link href='/blog'>
                <Button
                  variant='ghost'
                  className='gap-2 text-muted-foreground hover:text-foreground'
                >
                  <ArrowLeft className='h-4 w-4' />
                  Назад к справочнику
                </Button>
              </Link>
            </div>

            {/* Заголовок статьи */}
            <header className='mb-8'>
              <h1 className='text-4xl font-bold tracking-tight mb-6 leading-tight'>
                Индекс активности: полное руководство по измерению
              </h1>

              {/* Метаданные статьи */}
              <div className='flex items-center gap-4 text-sm text-muted-foreground mb-6'>
                <div className='flex items-center gap-2'>
                  <Avatar className='h-8 w-8'>
                    <AvatarFallback>А</AvatarFallback>
                  </Avatar>
                  <span>Команда :after</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Calendar className='h-4 w-4' />
                  <span>1 апреля 2024</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span>12 мин. чтения</span>
                </div>
              </div>
            </header>

            {/* Содержание статьи */}
            <article className='prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground'>
              <div id='introduction' className='mb-8'>
                <p className='text-xl leading-relaxed mb-6 text-foreground font-medium'>
                  Индекс активности — это комплексный показатель, который объединяет
                  различные аспекты физической активности в единую числовую оценку.
                  Он позволяет объективно оценить уровень активности и отслеживать
                  прогресс в достижении фитнес-целей.
                </p>
              </div>

              <h2
                id='components'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Компоненты индекса активности
              </h2>

              <p className='text-lg leading-relaxed mb-6'>
                Индекс активности рассчитывается на основе пяти ключевых
                компонентов, каждый из которых имеет свой вес в общей формуле:
              </p>

              <h3
                id='general-activity'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Общая активность (30% веса)
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Общий объем физической активности в течение дня, включая
                повседневные движения, ходьбу, подъем по лестнице и другие
                спонтанные активности.
              </p>

              <h3
                id='intensity'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Интенсивность тренировок (25% веса)
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Уровень интенсивности структурированных тренировок, измеряемый
                через частоту сердечных сокращений, воспринимаемую нагрузку или
                другие показатели интенсивности.
              </p>

              <h3
                id='duration'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Продолжительность (20% веса)
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Общее время, затраченное на физическую активность, включая как
                структурированные тренировки, так и повседневную активность.
              </p>

              <h3
                id='frequency'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Частота (15% веса)
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Количество дней в неделю, когда выполнялась физическая активность
                определенной интенсивности и продолжительности.
              </p>

              <h3
                id='recovery'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Восстановление (10% веса)
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Качество восстановления между тренировками, включая сон, питание
                и другие факторы восстановления.
              </p>

              <h2
                id='formula'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Формула расчета
              </h2>

              <div className='bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-xl p-8 mb-8'>
                <div className='bg-white rounded-lg p-6 border border-slate-100'>
                  <p className='font-mono text-xl text-slate-800 leading-relaxed'>
                    Индекс активности = (Общая активность × 0.3) + (Интенсивность ×
                    0.25) + (Продолжительность × 0.2) + (Частота × 0.15) +
                    (Восстановление × 0.1)
                  </p>
                </div>
              </div>

              <p className='text-lg leading-relaxed mb-6'>
                Каждый компонент оценивается по шкале от 0 до 100, где 0
                означает отсутствие активности, а 100 — максимально возможный
                уровень для данного компонента.
              </p>

              <h2
                id='measurement-methods'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Методы измерения
              </h2>

              <h3
                id='automatic-methods'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Автоматические методы
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Современные фитнес-трекеры и смартфоны автоматически отслеживают
                шаги, пульс, сон и другие показатели. Они используют алгоритмы
                машинного обучения для расчета индекса активности.
              </p>

              <h3
                id='manual-methods'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Ручные методы
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Ведение дневника активности, субъективная оценка интенсивности
                тренировок и самооценка качества восстановления. Требует больше
                времени, но может быть более точным при правильном подходе.
              </p>

              <h2
                id='interpretation'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Интерпретация результатов
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                <div className='bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg p-6'>
                  <h4 className='font-bold text-red-900 text-lg mb-2'>0-25</h4>
                  <p className='text-red-800 text-sm'>
                    Низкий уровень активности. Необходимо увеличить физическую
                    нагрузку.
                  </p>
                </div>
                <div className='bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6'>
                  <h4 className='font-bold text-orange-900 text-lg mb-2'>26-50</h4>
                  <p className='text-orange-800 text-sm'>
                    Умеренно низкий уровень. Рекомендуется постепенное увеличение
                    активности.
                  </p>
                </div>
                <div className='bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6'>
                  <h4 className='font-bold text-green-900 text-lg mb-2'>51-75</h4>
                  <p className='text-green-800 text-sm'>
                    Хороший уровень активности. Поддерживайте текущий режим.
                  </p>
                </div>
                <div className='bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6'>
                  <h4 className='font-bold text-blue-900 text-lg mb-2'>76-100</h4>
                  <p className='text-blue-800 text-sm'>
                    Отличный уровень активности. Оптимальный баланс нагрузки и
                    восстановления.
                  </p>
                </div>
              </div>

              <h2
                id='practical-recommendations'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Практические рекомендации
              </h2>

              <p className='text-lg leading-relaxed mb-6'>
                Для повышения индекса активности рекомендуется:
              </p>

              <ul className='list-disc pl-6 mb-6 space-y-2 text-lg leading-relaxed'>
                <li>Увеличить ежедневную ходьбу до 10,000 шагов</li>
                <li>Включить 3-4 силовые тренировки в неделю</li>
                <li>Добавить 2-3 кардио-сессии средней интенсивности</li>
                <li>Обеспечить 7-9 часов качественного сна</li>
                <li>Следить за питанием и гидратацией</li>
              </ul>

              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mt-8'>
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-100 rounded-full p-3'>
                    <span className='text-2xl'>💡</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-blue-900 mb-3'>
                      Ключевой принцип
                    </h3>
                    <p className='text-blue-800 text-lg leading-relaxed'>
                      Индекс активности — это не просто сумма тренировок, а
                      комплексная оценка образа жизни. Важно поддерживать баланс
                      между нагрузкой и восстановлением для достижения
                      оптимальных результатов.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Навигация к следующей статье */}
            <div className='mt-16 pt-8 border-t border-border'>
              <div className='flex justify-between items-center'>
                <Link href='/blog/measuring-activity-parameter'>
                  <Button variant='outline' className='gap-2'>
                    <ArrowLeft className='h-4 w-4' />
                    Предыдущая статья
                  </Button>
                </Link>
                <div></div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8 space-y-8'>
              {/* On this page */}
              <SidebarNavigation sections={sections} />

              {/* Share this article */}
              <div>
                <h3 className='font-semibold text-lg mb-4'>Поделиться статьей</h3>
                <div className='flex gap-2'>
                  <Button size='icon' variant='outline' className='h-10 w-10'>
                    <Facebook className='h-4 w-4' />
                  </Button>
                  <Button size='icon' variant='outline' className='h-10 w-10'>
                    <Twitter className='h-4 w-4' />
                  </Button>
                  <Button size='icon' variant='outline' className='h-10 w-10'>
                    <Linkedin className='h-4 w-4' />
                  </Button>
                  <Button size='icon' variant='outline' className='h-10 w-10'>
                    <Instagram className='h-4 w-4' />
                  </Button>
                </div>
              </div>

              {/* Back to top */}
              <Button 
                variant='outline' 
                className='w-full gap-2'
                asChild
              >
                <a href='#'>
                  <ArrowUp className='h-4 w-4' />
                  Наверх
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}