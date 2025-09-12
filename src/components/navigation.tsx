'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Справочник', href: '/blog' },
  { name: 'Параметры здоровья', href: '/params' },
  { name: 'Активности', href: '/activities' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-6 max-w-7xl'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='h-8 w-8 rounded bg-primary flex items-center justify-center'>
                <span className='text-primary-foreground font-bold text-sm'>
                  :
                </span>
              </div>
              <span className='text-xl font-bold'>after</span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-6'>
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='h-9 w-9'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-80 animate-in slide-in-from-right duration-300'
              >
                <SheetTitle className='sr-only'>Навигационное меню</SheetTitle>
                <div className='flex flex-col space-y-6 mt-6'>
                  <div className='flex items-center space-x-2 pb-4 border-b'>
                    <div className='h-8 w-8 rounded bg-primary flex items-center justify-center'>
                      <span className='text-primary-foreground font-bold text-sm'>
                        :
                      </span>
                    </div>
                    <span className='text-xl font-bold'>after</span>
                  </div>

                  <nav className='flex flex-col space-y-4'>
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-all duration-200 hover:text-primary py-2 px-3 rounded-md hover:bg-accent/50',
                          pathname === item.href
                            ? 'text-primary bg-accent/30'
                            : 'text-muted-foreground'
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: 'slideInFromRight 0.3s ease-out forwards',
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
