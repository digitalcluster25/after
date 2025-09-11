'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Target,
  ArrowRight,
  CheckCircle,
  Microscope,
  Smartphone,
  Leaf,
  Activity,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
        <div className='container mx-auto px-6 max-w-7xl'>
          <div className='text-center space-y-8'>
            <Badge variant='outline' className='text-sm'>
              White Paper
            </Badge>
            <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>
              :after
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Управление главным активом: Новая философия жизненной энергии для
              современных лидеров
            </p>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              В современной экономике знаний главным капиталом и ключевым
              фактором успеха является не время и не деньги, а жизненная
              энергия. Способность концентрироваться, принимать верные решения,
              креативность и стрессоустойчивость напрямую зависят от нашего
              физического и ментального состояния.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' className='text-lg px-8 py-6'>
                Узнать больше о проекте
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
              <Button size='lg' variant='outline' className='text-lg px-8 py-6'>
                Попасть в список ожидания
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6 max-w-7xl'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold'>Введение</h2>
            <div className='max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Однако существующая велнес-индустрия в Украине предлагает
                устаревшие решения. Она продает доступ к тренажерам и временное
                расслабление, игнорируя первопричину проблемы — отсутствие у
                человека системного понимания своего организма и инструментов
                для управления личной энергией.
              </p>
              <p>
                Этот документ представляет :after — велнес-экосистему нового
                поколения, созданную для того, чтобы превратить вас из
                пассивного &ldquo;потребителя&rdquo; велнес-услуг в осознанного
                архитектора своего здоровья и производительности. Мы предлагаем
                не просто фитнес-клуб, а научный, технологичный и эстетический
                подход к управлению вашим главным активом.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Crisis Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-6 max-w-7xl'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold'>
              Часть 1: Энергетический кризис современного профессионала
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Мы живем в эпоху беспрецедентных нагрузок. Для ключевых сегментов
              украинского общества проблема стоит особенно остро.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Brain className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>Специалисты</CardTitle>
                <CardDescription>
                  IT, креативные индустрии. Постоянные дедлайны, когнитивные
                  перегрузки и сидячий образ жизни приводят к хроническому
                  стрессу и профессиональному выгоранию.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Target className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>Лидеры</CardTitle>
                <CardDescription>
                  Владельцы бизнеса, топ-менеджеры. Высочайший уровень
                  ответственности, необходимость принимать стратегические
                  решения в условиях неопределенности истощают нервную систему.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Activity className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>Атлеты</CardTitle>
                <CardDescription>
                  Профессионалы и любители. Их цель — пик физической формы. Они
                  сталкиваются с отсутствием в Украине комплексной
                  инфраструктуры для достижения максимальных результатов.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6 max-w-7xl'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold'>
              Часть 2: Решение :after — Экосистема управления энергией
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Мы предлагаем целостный подход, стоящий на трех китах: Наука,
              Технологии и Среда.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Microscope className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>
                  1. НАУКА: Ваша личная &ldquo;Лаборатория Здоровья&rdquo;
                </CardTitle>
                <CardDescription className='space-y-4'>
                  <p>
                    Это ядро нашего проекта и главное отличие от всех
                    существующих клубов. Мы не говорим вам, что делать. Мы учим
                    вас, почему это нужно делать, и даем объективные данные о
                    вашем теле.
                  </p>
                  <div className='space-y-2'>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Комплексная диагностика</span>
                    </div>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Образовательные программы</span>
                    </div>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>
                        Персонализированные протоколы
                      </span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Smartphone className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>
                  2. ТЕХНОЛОГИИ: Ваша цифровая велнес-экосистема
                </CardTitle>
                <CardDescription className='space-y-4'>
                  <p>
                    Мы интегрируем физический опыт с цифровыми инструментами,
                    чтобы сделать управление здоровьем бесшовным и удобным.
                  </p>
                  <div className='space-y-2'>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Фитнес-трекер :after</span>
                    </div>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Приложение :after</span>
                    </div>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>AI-советник</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Leaf className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>
                  3. СРЕДА: &ldquo;Тихая роскошь&rdquo; и сила сообщества
                </CardTitle>
                <CardDescription className='space-y-4'>
                  <p>
                    Мы создаем пространство, которое восстанавливает само по
                    себе.
                  </p>
                  <div className='space-y-2'>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Эстетика минимализма</span>
                    </div>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Эксклюзивное оборудование</span>
                    </div>
                    <div className='flex items-start space-x-2'>
                      <CheckCircle className='h-4 w-4 text-primary mt-1 flex-shrink-0' />
                      <span className='text-sm'>Курируемое сообщество</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className='py-20 bg-muted/30'>
        <div className='container mx-auto px-6 max-w-7xl'>
          <div className='text-center space-y-8'>
            <h2 className='text-4xl font-bold'>
              Заключение: Инвестиция, а не расход
            </h2>
            <div className='max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Членство в :after — это не плата за доступ к тренажерам. Это
                стратегическая инвестиция в ваш главный актив — жизненную
                энергию.
              </p>
              <p>
                Мы даем вам систему, которая позволит дольше оставаться
                продуктивным, креативным и устойчивым к вызовам современного
                мира. Мы меняем саму парадигму заботы о себе.
              </p>
              <div className='text-2xl font-semibold text-primary mt-8'>
                :after Энергия в твоих руках.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-6 max-w-7xl text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Готовы присоединиться к революции?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Чтобы узнать больше о проекте и попасть в список ожидания на
            открытие первого клуба в UNIT.City, посетите наш сайт.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' variant='secondary' className='text-lg px-8 py-6'>
              Узнать больше о проекте
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary'
            >
              Попасть в список ожидания
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
