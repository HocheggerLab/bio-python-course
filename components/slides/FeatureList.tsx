import React from 'react';

interface FeatureItem {
  title: string;
  description?: string;
}

interface FeatureListProps {
  items: FeatureItem[];
  icon?: string | '✓' | '→' | '•' | '▶';
  iconColor?: 'green' | 'blue' | 'yellow' | 'purple' | 'red';
  titleColor?: 'yellow' | 'green' | 'blue' | 'purple' | 'default';
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
}

const iconColorClasses = {
  green: 'text-bio-green',
  blue: 'text-bio-blue',
  yellow: 'text-bio-yellow',
  purple: 'text-bio-purple',
  red: 'text-red-400'
};

const titleColorClasses = {
  yellow: 'text-bio-yellow',
  green: 'text-bio-green',
  blue: 'text-bio-blue',
  purple: 'text-bio-purple',
  default: 'text-white'
};

const spacingClasses = {
  tight: 'space-y-2',
  normal: 'space-y-4',
  loose: 'space-y-6'
};

export function FeatureList({ 
  items,
  icon = '✓',
  iconColor = 'green',
  titleColor = 'yellow',
  spacing = 'normal',
  className = ''
}: FeatureListProps) {
  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start">
          <span className={`${iconColorClasses[iconColor]} text-xl mr-3 mt-1`}>
            {icon}
          </span>
          <div>
            <h3 className={`font-bold text-lg ${titleColorClasses[titleColor]} mb-1`}>
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-300">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}