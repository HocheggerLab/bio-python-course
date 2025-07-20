import ResourceCard from './ResourceCard'
import { resources } from '@/data/resources'

export default function Resources() {
  return (
    <section id="resources" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-header">
          Learning <span className="text-gradient">Resources</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}