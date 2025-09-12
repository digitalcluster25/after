import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface BlogPost {
  href: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    href: '/blog/building-design-system-shadcn-ui',
    date: '15 марта 2024',
    title: 'Создание дизайн-системы с Shadcn UI',
    content:
      'Изучите, как создать масштабируемую дизайн-систему с использованием компонентов Shadcn UI. Мы рассмотрим композицию компонентов, темизацию и лучшие практики для поддержания консистентности в вашем приложении. Узнайте, как использовать мощь примитивов Radix UI, сохраняя чистоту и поддерживаемость кодовой базы.',
    tags: [
      'Дизайн-системы',
      'Shadcn UI',
      'React',
      'Tailwind CSS',
      'UI Разработка',
    ],
  },
  {
    href: '/blog/headless-ui-components-rise',
    date: '10 марта 2024',
    title: 'Восход Headless UI компонентов',
    content:
      'Исследуйте преимущества headless UI компонентов и то, как они революционизируют веб-разработку. Мы сравним популярные headless библиотеки, обсудим соображения доступности и покажем, как создавать гибкие, нестилизованные компоненты, которые можно настроить под любую дизайн-систему.',
    tags: [
      'Headless UI',
      'Доступность',
      'Архитектура компонентов',
      'React',
      'Веб-разработка',
    ],
  },
];

export default function BlogPage() {
  return (
    <div className='bg-background'>
      <PageHeader title='Справочник' />

      <section className='pb-8 md:pb-16'>
        <div className='space-y-6 pt-2'>
          {blogPosts.map((post, index) => (
            <React.Fragment key={index}>
              <Card className='border-none shadow-none'>
                <CardContent className='px-0'>
                  <div className='relative w-full'>
                    <p className='text-sm tracking-tight text-muted-foreground'>
                      {post.date}
                    </p>

                    <Link href={post.href}>
                      <h2 className='mt-2 text-lg font-medium tracking-tight text-foreground md:text-2xl hover:text-primary transition-colors cursor-pointer'>
                        {post.title}
                      </h2>
                    </Link>

                    <p className='md:text-md mt-4 text-sm text-muted-foreground md:pr-24 xl:pr-32'>
                      {post.content}
                    </p>

                    <div className='mt-4 flex w-9/10 flex-wrap items-center gap-2'>
                      {post.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant='secondary'
                          className='h-6 rounded-md'
                        >
                          <span className='text-md font-medium text-muted-foreground'>
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>

                    <a href={post.href}>
                      <Button
                        variant='secondary'
                        className='absolute -right-3 -bottom-1 flex h-10 w-10 items-center justify-center rounded-full transition-all ease-in-out hover:rotate-45 md:bottom-14'
                      >
                        <ArrowUpRightIcon />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {index < blogPosts.length - 1 && (
                <Separator className='h-px w-full' />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
