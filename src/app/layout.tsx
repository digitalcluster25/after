import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ErrorBoundary } from '@/components/error-boundary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: ':after - Управление главным активом: Новая философия жизненной энергии',
  description:
    'Велнес-экосистема нового поколения для управления жизненной энергией. Наука, технологии и среда для современных лидеров. Открытие в UNIT.City.',
  keywords: [
    'велнес',
    'здоровье',
    'энергия',
    'фитнес',
    'спорт',
    'восстановление',
    'after',
    'UNIT.City',
    'Киев',
  ],
  authors: [{ name: ':after Team' }],
  creator: ':after',
  publisher: ':after',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://after.vercel.app',
    title: ':after - Управление главным активом: Новая философия жизненной энергии',
    description:
      'Велнес-экосистема нового поколения для управления жизненной энергией. Наука, технологии и среда для современных лидеров.',
    siteName: ':after',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: ':after - Велнес-экосистема нового поколения',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ':after - Управление главным активом: Новая философия жизненной энергии',
    description:
      'Велнес-экосистема нового поколения для управления жизненной энергией. Наука, технологии и среда для современных лидеров.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}
      >
        <ErrorBoundary>
          <div className='flex flex-col min-h-screen'>
            <Navigation />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}
