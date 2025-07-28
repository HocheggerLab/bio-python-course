import React from 'react';

interface ConceptCardProps {
  title: string;
  icon?: string;
  iconColor?: 'blue' | 'yellow' | 'green' | 'purple' | 'red';
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'warning' | 'success';
}

const variantClasses = {
  default: 'border-white/10',
  highlight: 'border-bio-blue/50',
  warning: 'border-bio-yellow/50',
  success: 'border-bio-green/50'
};

const iconColorClasses = {
  blue: 'text-bio-blue',
  yellow: 'text-bio-yellow',
  green: 'text-bio-green',
  purple: 'text-bio-purple',
  red: 'text-red-400'
};

export function ConceptCard({ 
  title, 
  icon, 
  iconColor = 'blue',
  children, 
  className = '',
  variant = 'default'
}: ConceptCardProps) {
  return (
    <div className={`concept-box ${variantClasses[variant]} ${className}`}>
      <h2 className={`text-2xl font-bold ${iconColorClasses[iconColor]} mb-6 flex items-center`}>
        {icon && <span className="text-3xl mr-3">{icon}</span>}
        {title}
      </h2>
      {children}
    </div>
  );
}