export interface Resource {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

export const resources: Resource[] = [
  {
    id: 'notebooks',
    title: 'Notebooks',
    description: 'Colab templates for every lecture',
    icon: '📓',
    href: '/notebooks'
  },
  {
    id: 'data',
    title: 'Sample Data',
    description: 'Real sequences & datasets',
    icon: '🧬',
    href: '/data'
  },
  {
    id: 'cheatsheets',
    title: 'Cheat Sheets',
    description: 'Quick reference PDFs',
    icon: '📖',
    href: '/under-construction'
  },
  {
    id: 'exercises',
    title: 'Practice',
    description: 'Extra problems & solutions',
    icon: '🎯',
    href: '/practice'
  },
  {
    id: 'tools',
    title: 'Dev Tools',
    description: 'Python IDEs & setup guides',
    icon: '🛠️',
    href: '/dev-tools'
  }
]