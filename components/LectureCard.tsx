import Link from 'next/link'
import { Lecture } from '@/data/lectures'

interface LectureCardProps {
  lecture: Lecture
}

export default function LectureCard({ lecture }: LectureCardProps) {
  return (
    <div className="card group">
      <span className={lecture.status === 'available' ? 'badge-available' : 'badge-coming-soon'}>
        {lecture.status === 'available' ? 'Available' : 'Coming Soon'}
      </span>
      <div className="flex items-center mb-4 mt-4">
        <span className="lecture-number">{lecture.id}</span>
        <h3 className="text-xl font-bold">{lecture.title}</h3>
      </div>
      <ul className="space-y-2 text-gray-300 mb-6">
        {lecture.topics.map((topic, index) => (
          <li key={index} className="flex items-start">
            <span className="text-bio-blue mr-2">▸</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 flex-wrap">
        {lecture.status === 'available' && lecture.slideUrl && (
          <>
            <Link href={lecture.slideUrl} className="btn-primary !py-2 !px-4 text-sm">
              View Slides
            </Link>
            {lecture.notebookUrl && (
              <a 
                href={lecture.notebookUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 !px-4 text-sm"
              >
                Notebooks
              </a>
            )}
          </>
        )}
        {lecture.status === 'coming-soon' && (
          <span className="text-gray-400 text-sm">Coming Week {lecture.id}</span>
        )}
      </div>
    </div>
  )
}