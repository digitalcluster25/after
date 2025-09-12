interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className='pt-5'>
      <h1 className='text-2xl font-bold tracking-tighter text-foreground sm:text-4xl' style={{ fontWeight: 700 }}>
        {title}
      </h1>
      {subtitle && (
        <p className='mt-4 text-lg text-muted-foreground'>{subtitle}</p>
      )}
    </div>
  );
}
