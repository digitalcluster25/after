'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Добавляем плавную прокрутку для всех якорных ссылок
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    // Добавляем обработчик для кнопки "Наверх"
    const handleBackToTop = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('a[href="#"]');
      
      if (button) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('click', handleBackToTop);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('click', handleBackToTop);
    };
  }, []);

  return null;
}
