import LectureCard from './LectureCard'
import CapstoneProject from './CapstoneProject'
import { lectures } from '@/data/lectures'

export default function Lectures() {
  return (
    <section id="lectures" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-header">
          Course <span className="text-gradient">Lectures</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
          <CapstoneProject />
        </div>
      </div>
    </section>
  )
}