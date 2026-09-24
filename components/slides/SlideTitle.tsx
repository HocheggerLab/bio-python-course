import React from 'react';

interface SlideTitleProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export function SlideTitle({
  children,
  className = '',
  center = true,
}: SlideTitleProps) {
  return (
    <h2 className={`font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight mt-4 md:mt-6 xl:mt-8 ${center ? 'text-center' : ''} ${className}`}>
      {children}
    </h2>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'green' | 'yellow';
}

export function GradientText({
  children,
  variant = 'default',
}: GradientTextProps) {
  const gradientClasses = {
    default: 'text-gradient',
    purple: 'text-gradient-purple',
    green: 'text-bio-green',
    yellow: 'text-bio-yellow',
  };

  return (
    <span className={gradientClasses[variant]}>
      {children}
    </span>
  );
}
