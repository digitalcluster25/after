import { Metadata } from 'next';
import {
  ArrowLeft,
  Calendar,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarNavigation } from '@/components/sidebar-navigation';

export const metadata: Metadata = {
  title: 'Как правильно измерять параметр &quot;Активность&quot; | :after',
  description:
    'Подробное руководство по измерению параметра активности в ккал/день, включая методы калориметрии, формулы Харриса-Бенедикта, использование фитнес-трекеров.',
  keywords:
    'активность, измерение, ккал, калориметрия, фитнес-трекеры, здоровье',
};

export default function MeasuringActivityParameterPage() {
  const sections = [
    { id: 'introduction', title: 'Введение' },
    { id: 'measurement-methods', title: 'Методы измерения активности' },
    { id: 'important-aspects', title: 'Важные аспекты измерения' },
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
                Как правильно измерять параметр &quot;Активность&quot;
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
                  <span>10 мин. чтения</span>
                </div>
              </div>
            </header>

            {/* Содержание статьи */}
            <article className='prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground'>
              <div id='introduction' className='mb-8'>
                <p className='text-xl leading-relaxed mb-6 text-foreground font-medium'>
                  Параметр &quot;Активность&quot; является одним из ключевых
                  показателей физического состояния человека. Он отражает общий
                  уровень двигательной активности в течение дня и измеряется в
                  ккал/день. Правильное измерение этого параметра критически
                  важно для оценки энергетического баланса и планирования
                  тренировок.
                </p>
              </div>

              <h2
                id='measurement-methods'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Методы измерения активности
              </h2>

              <p className='text-lg leading-relaxed mb-6'>
                Для точного измерения активности используются различные методы.
                Наиболее точным является калориметрия - прямое измерение
                тепловыделения организма. Однако в повседневной практике чаще
                применяются косвенные методы: расчет по формуле
                Харриса-Бенедикта с учетом коэффициента активности,
                использование фитнес-трекеров с акселерометрами, или ведение
                дневника активности с последующим расчетом энергозатрат.
              </p>

              <h3
                id='calorimetry'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Калориметрия
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Прямое измерение тепловыделения организма в специальных
                калориметрических камерах. Этот метод обеспечивает максимальную
                точность, но требует специального оборудования и не подходит для
                повседневного использования.
              </p>

              <h3
                id='harris-benedict'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Формула Харриса-Бенедикта
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Расчет базового метаболизма с последующим умножением на
                коэффициент активности (1.2-2.5 в зависимости от уровня
                физической активности). Формула учитывает пол, возраст, вес и
                рост человека.
              </p>

              <h3
                id='fitness-trackers'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Фитнес-трекеры
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Современные устройства с акселерометрами и пульсометрами
                автоматически отслеживают активность и рассчитывают
                энергозатраты. Точность зависит от качества датчиков и
                алгоритмов обработки данных.
              </p>

              <h2
                id='important-aspects'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Важные аспекты измерения
              </h2>

              <p className='text-lg leading-relaxed mb-6'>
                При измерении важно учитывать все виды активности: базовый
                метаболизм, повседневные движения, физические упражнения и даже
                термогенез. Необходимо вести учет в течение минимум 7 дней для
                получения репрезентативных данных. Измерения следует проводить в
                одинаковых условиях: время суток, состояние покоя, температура
                окружающей среды.
              </p>

              <h3
                id='basal-metabolism'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Базовый метаболизм
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Энергия, необходимая для поддержания основных жизненных функций
                в состоянии покоя. Составляет 60-75% от общего суточного расхода
                энергии.
              </p>

              <h3
                id='thermogenesis'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Термогенез
              </h3>
              <p className='text-lg leading-relaxed mb-6'>
                Энергия, затрачиваемая на переваривание пищи и поддержание
                температуры тела. Составляет 10-15% от общего суточного расхода
                энергии.
              </p>

              <h2
                id='interpretation'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Интерпретация результатов
              </h2>

              <p className='text-lg leading-relaxed mb-6'>
                Интерпретация результатов требует понимания индивидуальных
                особенностей: возраста, пола, веса, мышечной массы, уровня
                тренированности. Нормальные значения активности варьируются от
                100 до 1000 ккал/день в зависимости от образа жизни и целей.
                Регулярный мониторинг позволяет корректировать питание и
                тренировочную программу для достижения оптимального
                энергетического баланса.
              </p>

              <h3
                id='normal-values'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Нормальные значения
              </h3>
              <ul className='list-disc pl-6 mb-6 space-y-2 text-lg leading-relaxed'>
                <li>Малоподвижный образ жизни: 100-300 ккал/день</li>
                <li>Умеренная активность: 300-600 ккал/день</li>
                <li>Высокая активность: 600-1000 ккал/день</li>
                <li>Профессиональный спорт: более 1000 ккал/день</li>
              </ul>

              <h3
                id='influencing-factors'
                className='text-2xl font-semibold mt-8 mb-4 text-foreground'
              >
                Факторы влияния
              </h3>
              <ul className='list-disc pl-6 mb-6 space-y-2 text-lg leading-relaxed'>
                <li>Возраст (снижение на 2-3% каждые 10 лет после 20 лет)</li>
                <li>Пол (у мужчин на 5-10% выше)</li>
                <li>Мышечная масса (1 кг мышц сжигает 13 ккал/день)</li>
                <li>Уровень тренированности</li>
                <li>Генетические особенности</li>
              </ul>

              <h2
                id='practical-recommendations'
                className='text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2'
              >
                Практические рекомендации
              </h2>

              <p className='text-lg leading-relaxed mb-6'>
                Для получения точных данных рекомендуется комбинировать
                несколько методов измерения. Используйте фитнес-трекер для
                ежедневного мониторинга, периодически проверяйте точность с
                помощью дневника активности, а при необходимости обращайтесь к
                специалистам для проведения калориметрии.
              </p>

              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mt-8'>
                <div className='flex items-start gap-4'>
                  <div className='bg-blue-100 rounded-full p-3'>
                    <span className='text-2xl'>💡</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-blue-900 mb-3'>
                      Совет эксперта
                    </h3>
                    <p className='text-blue-800 text-lg leading-relaxed'>
                      Ведите дневник активности в течение недели, записывая все
                      виды физической нагрузки. Это поможет вам лучше понять
                      свои энергозатраты и скорректировать тренировочную
                      программу.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Навигация к следующей статье */}
            <div className='mt-16 pt-8 border-t border-border'>
              <div className='flex justify-between items-center'>
                <div></div>
                <Link href='/blog/activity-index-measurement'>
                  <Button className='gap-2 bg-primary hover:bg-primary/90'>
                    Следующая статья
                    <ArrowLeft className='h-4 w-4 rotate-180' />
                  </Button>
                </Link>
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
                <h3 className='font-semibold text-lg mb-4'>
                  Поделиться статьей
                </h3>
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
              <Button variant='outline' className='w-full gap-2' asChild>
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
