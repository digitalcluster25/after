'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-8rem)] bg-background flex flex-col justify-center'>
      {/* Hero Section */}
      <section className='py-4'>
        <div className='text-center space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            Ваш потенциал — не сольный проект
          </h1>
          <h2 className='text-xl md:text-2xl text-muted-foreground font-medium'>
            Закрытая экосистема для тех, кто создает будущее
          </h2>
          <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Объединяем знания, технологии и сильных людей, чтобы вы управляли главным активом — своей энергией
          </p>
          
          {/* Key Benefits */}
          <div className='grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8'>
            <div className='flex items-center space-x-2 text-left'>
              <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <BookOpen className='h-4 w-4 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold text-xs'>ЯДРО ЗНАНИЙ</h3>
                <p className='text-xs text-muted-foreground'>Экспертные знания без воды</p>
              </div>
            </div>
            
            <div className='flex items-center space-x-2 text-left'>
              <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Users className='h-4 w-4 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold text-xs'>СИЛА СВЯЗЕЙ</h3>
                <p className='text-xs text-muted-foreground'>Ваш новый круг единомышленников</p>
              </div>
            </div>
            
            <div className='flex items-center space-x-2 text-left'>
              <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Wrench className='h-4 w-4 text-primary' />
              </div>
              <div>
                <h3 className='font-semibold text-xs'>ТЕХНОЛОГИИ</h3>
                <p className='text-xs text-muted-foreground'>Инструменты будущего</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
            <Button size='lg' className='text-base px-6 py-4'>
              Стать резидентом сообщества
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
