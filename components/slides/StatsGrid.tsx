import React from 'react';

interface StatItem {
  value: string | number;
  label: string;
  color?: 'yellow' | 'green' | 'blue' | 'purple';
  size?: 'small' | 'medium' | 'large';
}

interface StatsGridProps {
  items: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const colorClasses = {
  yellow: 'text-bio-yellow',
  green: 'text-bio-green',
  blue: 'text-bio-blue',
  purple: 'text-bio-purple'
};

const sizeClasses = {
  small: 'text-2xl',
  medium: 'text-3xl',
  large: 'text-4xl'
};

export function StatsGrid({ 
  items, 
  columns = 2,
  className = '' 
}: StatsGridProps) {
  const gridColumns = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  };

  return (
    <div className={`grid ${gridColumns[columns]} gap-4 ${className}`}>
      {items.map((item, index) => (
        <StatBox key={index} {...item} />
      ))}
    </div>
  );
}

function StatBox({ 
  value, 
  label, 
  color = 'yellow',
  size = 'medium'
}: StatItem) {
  return (
    <div className="glass-dark rounded-xl p-4 text-center hover:scale-105 transition-transform">
      <p className={`${sizeClasses[size]} font-bold ${colorClasses[color]}`}>
        {value}
      </p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}