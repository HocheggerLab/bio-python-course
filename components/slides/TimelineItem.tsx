import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  highlights?: string[];
  color?: 'yellow' | 'orange' | 'blue' | 'green' | 'purple' | 'lightblue';
  isActive?: boolean;
  className?: string;
}

const colorClasses = {
  yellow: 'border-bio-yellow text-bio-yellow',
  orange: 'border-orange-500 text-orange-400',
  blue: 'border-bio-blue text-bio-blue',
  green: 'border-bio-green text-bio-green',
  purple: 'border-purple-500 text-purple-400',
  lightblue: 'border-bio-light-blue text-bio-light-blue'
};

export function TimelineItem({ 
  year,
  title, 
  description, 
  highlights = [],
  color = 'blue',
  isActive = false,
  className = ''
}: TimelineItemProps) {
  const baseClasses = `glass-dark rounded-xl p-4 border-l-4 ${colorClasses[color]} ${
    isActive ? 'animate-pulse-slow' : ''
  } ${className}`;

  return (
    <div className={baseClasses}>
      <h3 className={`text-2xl font-bold mb-2`}>
        {year}
        {title && `: ${title}`}
      </h3>
      <p className="text-gray-300">{description}</p>
      {highlights.length > 0 && (
        <div className="mt-2">
          {highlights.map((highlight, index) => (
            <p key={index} className={`text-sm mt-1 ${
              isActive ? 'font-bold' : 'text-gray-400'
            }`}>
              • {highlight}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}