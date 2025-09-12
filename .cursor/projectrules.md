#обновление правил проекта
После каждого существенного изменения в архитектуре проекта, добавления или удаления технологии тв обязан внести в этот документ правки

# Анализ фронтенд кодовой базы: :after

## 📁 Структура проекта

```
after/
├── src/
│   ├── app/                    # Next.js App Router (страницы и layout)
│   │   ├── __tests__/          # Тесты страниц
│   │   ├── activities/         # Страница активностей
│   │   ├── api/                # API маршруты
│   │   ├── blog/               # Страница справочника (блог)
│   │   │   └── [slug]/         # Динамические страницы статей
│   │   ├── params/             # Страница параметров здоровья
│   │   ├── globals.css         # Глобальные стили с CSS переменными
│   │   ├── layout.tsx          # Корневой layout с навигацией
│   │   └── page.tsx            # Главная лендинговая страница
│   ├── components/
│   │   ├── __tests__/          # Тесты компонентов
│   │   ├── ui/                 # shadcn/ui компоненты (40+ компонентов)
│   │   ├── error-boundary.tsx  # Error Boundary с Sentry интеграцией
│   │   ├── footer.tsx          # Футер с онлайн статусом
│   │   ├── navigation.tsx      # Компонент навигации
│   │   └── page-header.tsx     # Заголовок страниц
│   ├── hooks/
│   │   └── use-mobile.ts       # Хук для определения мобильных устройств
│   ├── lib/
│   │   ├── __tests__/          # Тесты утилит
│   │   └── utils.ts            # Утилиты (cn функция для классов)
│   └── test-utils/
│       └── index.tsx           # Утилиты для тестирования
├── public/                     # Статические ресурсы
├── texts/                      # Контентные файлы
│   └── main.md                # Контент для лендинга
└── config files               # Конфигурации (Next.js, TypeScript, ESLint)
```

**Принципы организации:** Feature-based подход с четким разделением на UI компоненты, страницы и утилиты. Используется Next.js App Router для современной архитектуры.

## 🛠 Технологический стек

| Технология                   | Версия          | Назначение                   |
| ---------------------------- | --------------- | ---------------------------- |
| **Next.js**                  | 15.5.2          | React фреймворк с App Router |
| **React**                    | 19.1.0          | UI библиотека                |
| **TypeScript**               | ^5              | Типизация                    |
| **Tailwind CSS**             | ^4              | Utility-first CSS            |
| **shadcn/ui**                | ^3.2.1          | Компонентная система         |
| **Radix UI**                 | ^1.x            | Примитивы для доступности    |
| **Lucide React**             | ^0.542.0        | Иконки                       |
| **Sonner**                   | ^2.0.7          | Toast уведомления            |
| **class-variance-authority** | ^0.7.1          | Управление вариантами стилей |
| **clsx + tailwind-merge**    | ^2.1.1 + ^3.3.1 | Утилиты для классов          |
| **Sentry**                   | ^10.11.0        | Мониторинг ошибок            |
| **Jest**                     | ^30.1.3         | Тестирование                 |
| **Prettier**                 | ^3.6.2          | Форматирование кода          |
| **ESLint**                   | ^9              | Линтинг                      |

## 🏗 Архитектура

### Компонентная архитектура

Проект использует современную компонентную архитектуру на базе shadcn/ui:

```typescript
// Пример из Button компонента
const buttonVariants = cva('inline-flex items-center justify-center gap-2...', {
  variants: {
    variant: { default: '...', destructive: '...' },
    size: { default: '...', sm: '...', lg: '...' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});
```

### Управление состоянием

- **Локальное состояние**: React hooks (useState, useEffect)
- **Глобальное состояние**: Context API (через Next.js)
- **URL состояние**: Next.js router (usePathname, useRouter)

### Паттерны разделения логики

- **Композиция компонентов**: Использование Slot от Radix UI
- **Утилиты**: Централизованные в `lib/utils.ts`
- **Типизация**: Строгая типизация с TypeScript
- **Error Boundaries**: Централизованная обработка ошибок с Sentry

### API слой

Проект является статическим лендингом без внешних API интеграций.

## 🎨 UI/UX и стилизация

### Подходы к стилизации

- **Tailwind CSS**: Utility-first подход
- **CSS переменные**: Для темизации в globals.css
- **CVA (Class Variance Authority)**: Для вариантов компонентов
- **cn() утилита**: Объединение классов с clsx и tailwind-merge

```typescript
// Пример утилиты cn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Дизайн-система

- **shadcn/ui**: Полноценная дизайн-система
- **Консистентность**: Единые принципы дизайна
- **Доступность**: Radix UI примитивы обеспечивают a11y

### Адаптивность

- **Mobile-first**: Tailwind CSS подход
- **Breakpoints**: sm, md, lg, xl
- **Responsive навигация**: Скрытие на мобильных устройствах

## ✅ Качество кода

### Линтеры и форматирование

- **ESLint**: Next.js конфигурация с TypeScript
- **Prettier**: Настроен с ESLint интеграцией
- **TypeScript**: Строгая типизация включена

### Соглашения по коду

- **Именование**: camelCase для переменных, PascalCase для компонентов
- **Структура**: Четкое разделение на директории
- **Импорты**: Абсолютные пути через @/ алиас

### Типизация

```typescript
// Строгая типизация компонентов
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  });
```

### Тестирование

- **Jest + React Testing Library**: Настроены и работают
- **Покрытие тестами**: 24 теста, 4 тест-сьюта
- **Конфигурация**: jest.config.js с Next.js интеграцией
- **Утилиты**: src/test-utils/ с кастомными хелперами

## 🔧 Ключевые компоненты

### 1. Navigation Component

```typescript
export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary">
              <span className="text-primary-foreground">:</span>
            </div>
            <span className="text-xl font-bold">after</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

**Назначение**: Навигация с логотипом и активными ссылками
**Особенности**: Responsive дизайн, активные состояния

### 2. Button Component

```typescript
const buttonVariants = cva('inline-flex items-center justify-center gap-2...', {
  variants: {
    variant: { default: '...', destructive: '...' },
    size: { default: '...', sm: '...', lg: '...' },
  },
});
```

**Назначение**: Переиспользуемая кнопка с вариантами
**Особенности**: CVA для вариантов, Slot для композиции

### 3. Layout Component

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}>
        <ErrorBoundary>
          <div className='flex flex-col min-h-screen'>
            <Navigation />
            <main className='flex-1'>
              <div className='container mx-auto px-6 max-w-7xl'>
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

**Назначение**: Корневой layout с навигацией и уведомлениями
**Особенности**: Google Fonts, глобальные компоненты, Error Boundary

### 4. Error Boundary Component

```typescript
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const eventId = Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    });
    this.setState({ eventId });
  }
}
```

**Назначение**: Централизованная обработка ошибок
**Особенности**: Sentry интеграция, пользовательский fallback

### 5. Footer Component

```typescript
export function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const moscowTime = new Intl.DateTimeFormat('ru-RU', options).format(new Date());
      setTime(moscowTime);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className='mt-auto'>
      <div className='flex items-center gap-2'>
        <span>С вами онлайн с сентябрь 2025</span>
        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
      </div>
    </footer>
  );
}
```

**Назначение**: Футер с онлайн статусом и временем
**Особенности**: Живое время, анимированный индикатор

## 📋 Выводы и рекомендации

### Сильные стороны

- ✅ **Современный стек**: Next.js 15, React 19, TypeScript
- ✅ **Качественная дизайн-система**: shadcn/ui + Radix UI
- ✅ **Доступность**: Radix UI примитивы
- ✅ **Типизация**: Строгая TypeScript типизация
- ✅ **Производительность**: App Router, оптимизированные компоненты
- ✅ **Мониторинг**: Sentry для error tracking
- ✅ **Тестирование**: Jest + React Testing Library настроены
- ✅ **Форматирование**: Prettier + ESLint интеграция

### Области для улучшения

- ✅ **CI/CD**: GitHub Actions настроены
- ✅ **Документация**: Storybook настроен
- ✅ **Мониторинг**: Sentry настроен для error tracking

### Рекомендации

1. ✅ **Добавить тестирование**: Jest + React Testing Library - выполнено
2. ✅ **Настроить Prettier**: Для консистентного форматирования - выполнено
3. ✅ **Добавить Storybook**: Для документации компонентов - выполнено
4. ✅ **Настроить CI/CD**: GitHub Actions или аналоги - выполнено
5. ✅ **Добавить мониторинг**: Sentry для error tracking - выполнено

### Уровень сложности

**Middle-friendly**: Проект подходит для разработчиков уровня middle+, требует понимания современных React паттернов и TypeScript.

---

## 🎯 Правила разработки проекта

### Общие принципы

- Используй shadcn/ui компоненты для всех UI элементов
- Применяй Tailwind CSS для стилизации
- Следуй TypeScript best practices
- Поддерживай доступность (a11y) через Radix UI

### КРИТИЧЕСКИ ВАЖНО - НИКОГДА НЕ ВРАТЬ!

- **НИКОГДА не врать, не выдумывать ответы, не имитировать результат**
- **ВСЕГДА делать на 100% точно как сказано**
- **Если не уверен - спросить уточнения**
- **Если не знаешь - честно сказать**
- **Если что-то не работает - честно сообщить**
- **Результат должен быть РЕАЛЬНЫМ, а не имитацией**

### ПРАВИЛО УТОЧНЕНИЙ

- **Если что-то не понятно - ОБЯЗАТЕЛЬНО спросить уточняющие вопросы**
- **НЕ пытаться имитировать понимание**
- **НЕ делать на свое усмотрение без уточнения**
- **Лучше задать 10 вопросов, чем сделать неправильно**
- **Четко формулировать неясные моменты**

### ПРАВИЛО САМОДЕЯТЕЛЬНОСТИ

- **НЕ заниматься самодеятельностью**
- **НЕ добавлять ничего от себя без явного указания**
- **Если есть идеи - предлагать в отчете по задаче**
- **Делать ТОЛЬКО то, что явно указано**

### Структура файлов

- `src/app/` - страницы и layout
- `src/components/` - переиспользуемые компоненты
- `src/lib/` - утилиты и хелперы
- `src/hooks/` - кастомные React hooks

### Соглашения по коду

- PascalCase для компонентов
- camelCase для переменных и функций
- Используй абсолютные импорты через @/
- Документируй сложную логику

### Коммиты

- Используй conventional commits
- Тестируй изменения перед коммитом (`npm test`)
- Обновляй документацию при необходимости

### Тестирование

- Все новые компоненты должны иметь тесты
- Используй `src/test-utils/` для кастомных хелперов
- Покрытие тестами должно быть не менее 70%
- Запускай `npm run test:coverage` для проверки покрытия

### Форматирование кода

- Используй `npm run format` для форматирования всего кода
- Используй `npm run format:check` для проверки форматирования
- Используй `npm run lint:fix` для автоматического исправления ESLint ошибок
- Используй `npm run check` для полной проверки проекта

### Документация компонентов

- Используй `npm run storybook` для запуска интерактивной документации
- Используй `npm run build-storybook` для сборки статической документации
- Создавай stories для всех новых компонентов
- Используй контролы для тестирования различных состояний

### Мониторинг ошибок

- Настрой переменные окружения для Sentry
- Используй Error Boundaries для обработки ошибок
- Мониторь производительность в продакшене
- Проверяй Sentry dashboard для анализа ошибок

### CI/CD и автоматизация

- **GitHub Actions** настроены для CI/CD
- **Dependabot** автоматически обновляет зависимости
- **Codecov** отслеживает покрытие тестами
- **Vercel** настроен для автоматического деплоя
- Все изменения проходят через автоматические проверки

### Документация компонентов

- **Storybook** настроен для интерактивной документации
- **Stories** созданы для всех основных компонентов
- **Автодокументация** генерируется автоматически
- **Контролы** позволяют тестировать различные состояния
- **Фон** и темы настраиваются для демонстрации

### Мониторинг и отладка

- **Sentry** настроен для отслеживания ошибок
- **Error Boundaries** обрабатывают React ошибки
- **Performance monitoring** отслеживает производительность
- **Session replay** записывает пользовательские сессии
- **Breadcrumbs** помогают в отладке