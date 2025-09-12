'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Moscow',
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        second: '2-digit' as const,
      };
      const moscowTime = new Intl.DateTimeFormat('ru-RU', options).format(
        new Date()
      );
      setTime(moscowTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className='mt-auto'>
      <div className='container mx-auto px-6 max-w-7xl'>
        <div>
          <div className='flex flex-col items-center justify-between py-6 text-muted-foreground md:flex-row'>
            <div className='flex items-center gap-2'>
              <span>С вами онлайн с сентябрь 2025</span>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
            </div>
            <div>Время → {time}</div>
            <div>hello@after.io</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
