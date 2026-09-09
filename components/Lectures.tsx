import LectureCard from './LectureCard'
import { pythonBasicsData, pythonDataData } from '@/data/lectures'

export default function Lectures() {
  return (
    <>
      {/* Section 1: Python Basics */}
      <section id="python-basics" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Section 1: <span className="text-gradient">Python Basics</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Build your Python foundations through hands-on biological applications.
            Sessions 1–4 take you from your first variable to writing robust, testable functions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pythonBasicsData.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Python and Data in Biology */}
      <section id="python-data" className="py-20 px-6 bg-bio-dark/40">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Section 2: Python and <span className="text-gradient-purple">Data in Biology</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Four sessions, four real datasets, four real questions — one each from
            neurobiology, ecology, cancer biology and cell biology. Three of them come
            from labs in this building.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pythonDataData.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
