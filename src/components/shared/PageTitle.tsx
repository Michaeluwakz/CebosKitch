import type { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
}

export function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          {typeof subtitle === 'string' ? subtitle : subtitle}
        </p>
      )}
    </div>
  );
}
