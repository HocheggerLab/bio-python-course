import React from 'react';

interface SlideTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  center?: boolean;
}

const sizeClasses = {
  small: 'text-3xl md:text-4xl',
  medium: 'text-4xl md:text-5xl',
  large: 'text-5xl md:text-6xl',
  xl: 'text-6xl md:text-7xl'
};

export function SlideTitle({ 
  children, 
  className = '', 
  size = 'large',
  center = true 
}: SlideTitleProps) {
  const baseClasses = `font-bold ${sizeClasses[size]} ${center ? 'text-center' : ''}`;
  
  return (
    <h2 className={`${baseClasses} ${className}`}>
      {children}
    </h2>
  );
}

// Helper component for gradient text within titles
interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'green' | 'yellow';
}

export function GradientText({ 
  children, 
  variant = 'default' 
}: GradientTextProps) {
  const gradientClasses = {
    default: 'text-gradient',
    purple: 'text-gradient-purple',
    green: 'text-bio-green',
    yellow: 'text-bio-yellow'
  };
  
  return (
    <span className={gradientClasses[variant]}>
      {children}
    </span>
  );
}