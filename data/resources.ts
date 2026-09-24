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
    description: 'Every practice notebook, by lab',
    icon: '📓',
    href: '/notebooks'
  },
  {
    id: 'data',
    title: 'Sample Data',
    description: 'Real sequences & datasets',
    icon: '🧬',
    href: '/under-construction'
  },
  {
    id: 'cheatsheets',
    title: 'Cheat Sheets',
    description: 'Quick reference PDFs',
    icon: '📖',
    href: '/under-construction'
  },
  {
    id: 'tools',
    title: 'Dev Tools',
    description: 'Python IDEs & setup guides',
    icon: '🛠️',
    href: '/under-construction'
  }
]