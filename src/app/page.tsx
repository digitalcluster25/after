'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  BookOpen,
  Wrench,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5'>
          <div className='text-center space-y-8'>
            <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>
              Ваш потенциал — не сольный проект.
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              :after — это закрытая цифровая экосистема для тех, кто создает
              будущее. Мы объединяем знания, технологии и самых сильных людей,
              чтобы вы управляли главным активом — вашей энергией.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' className='text-lg px-8 py-6'>
                Стать резидентом сообщества
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className='py-20'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold'>
              Почему лучшие решают главные проблемы в одиночку?
            </h2>
            <div className='max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed'>
              <p>
                Выгорание, потеря фокуса, информационная перегрузка. Мы привыкли
                бороться с этими вызовами самостоятельно, ища ответы в книгах,
                разрозненных приложениях и дорогих курсах. Это путь проб и
                ошибок, который отнимает самое ценное — время и энергию.
              </p>
              <p>
                Настоящий прорыв происходит не в изоляции, а в сильной среде.
              </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-20 bg-muted/30'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold'>
              Коллективный разум вашего благополучия.
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              :after — это не просто сообщество. Это ваша персональная
              операционная система для достижения пиковой производительности и
              ментального баланса, работающая на силе коллективного интеллекта.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <BookOpen className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>ЯДРО ЗНАНИЙ</CardTitle>
                <CardDescription>
                  <p className='font-semibold mb-2'>Курируемый контент</p>
                  Получите прямой доступ к закрытым мастер-классам, Q&A-сессиям
                  и базам знаний от ведущих мировых экспертов в области
                  биохакинга, нейрофизиологии и личной эффективности. Вся
                  информация структурирована и подана без &quot;воды&quot;.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>СИЛА СВЯЗЕЙ</CardTitle>
                <CardDescription>
                  <p className='font-semibold mb-2'>Ваш новый круг</p>
                  Участвуйте в тематических мастермайндах, находите партнеров и
                  менторов в закрытых чатах. Мы создаем среду, где вы можете
                  открыто обсуждать свои вызовы с людьми, которые вас понимают и
                  могут дать ценный совет.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-2 hover:border-primary/50 transition-colors'>
              <CardHeader>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <Wrench className='h-6 w-6 text-primary' />
                </div>
                <CardTitle>ТЕХНОЛОГИЧЕСКОЕ ПРЕИМУЩЕСТВО</CardTitle>
                <CardDescription>
                  <p className='font-semibold mb-2'>Инструменты будущего</p>
                  Как резидент, вы становитесь со-создателем нашей цифровой
                  платформы. Получите ранний доступ к приложению :after,
                  AI-советнику по здоровью и тестируйте наш фитнес-трекер.
                  Влияйте на продукт, который изменит рынок велнеса.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
      </section>

      {/* Results Section */}
      <section className='py-20'>
        <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold'>Что вы получите :after?</h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Наша цель — измеримые изменения в вашем состоянии и результатах.
            </p>
          </div>
          <div className='max-w-4xl mx-auto space-y-8'>
            <div className='flex items-start space-x-4 text-left'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Target className='h-6 w-6 text-primary' />
                </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Ясность и фокус</h3>
                <p className='text-muted-foreground'>
                  Перестаньте угадывать. Получите систему и инструменты для
                  принятия решений о своем здоровье, основанных на данных и
                  науке.
                </p>
                    </div>
                  </div>
            <div className='flex items-start space-x-4 text-left'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Users className='h-6 w-6 text-primary' />
                </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Сильное окружение
                </h3>
                <p className='text-muted-foreground'>
                  Прекратите тратить энергию на тех, кто вас не понимает.
                  Окружите себя людьми, чьи амбиции и стандарты совпадают с
                  вашими.
                </p>
                    </div>
                  </div>
            <div className='flex items-start space-x-4 text-left'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Zap className='h-6 w-6 text-primary' />
                </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>
                  Устойчивая энергия
                </h3>
                <p className='text-muted-foreground'>
                  Научитесь управлять своим главным ресурсом, чтобы избежать
                  выгорания и поддерживать высокую производительность в
                  долгосрочной перспективе.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Ваша трансформация начинается с одного решения.
          </h2>
          <p className='text-xl mb-4 opacity-90'>
            Станьте одним из первых резидентов :after. Подайте заявку на
            вступление в закрытое сообщество, чтобы получить доступ к
            эксклюзивным знаниям, сильному окружению и будущему велнеса.
          </p>
          <p className='text-lg mb-8 opacity-80'>
            Количество мест в первой волне основателей строго ограничено для
            поддержания высокого качества нетворкинга и контента.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' variant='secondary' className='text-lg px-8 py-6'>
              Подать заявку
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
