import Link from 'next/link'
import { Resource } from '@/data/resources'

interface ResourceCardProps {
  resource: Resource
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Link href={resource.href} className="card text-center group cursor-pointer">
      <div className="text-5xl mb-4 group-hover:animate-pulse">{resource.icon}</div>
      <h3 className="text-xl font-bold text-bio-blue mb-2">{resource.title}</h3>
      <p className="text-gray-300">{resource.description}</p>
    </Link>
  )
}