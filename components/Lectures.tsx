import CapstoneProject from './CapstoneProject'
import LectureCard from './LectureCard'
import { bonusData, pythonBasicsData, pythonDataData } from '@/data/lectures'

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
            Four sessions on real data: a neuron from a lab in this building, a pollinator
            survey from another, then cancer genomics, where you learn to plot, explore
            and test the data the final project is built on.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pythonDataData.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

      {/* Final project: directly under the Section 2 lectures it builds on */}
      <CapstoneProject />

      {/* Bonus sessions: after week 11, not assessed */}
      <section id="bonus" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Bonus: <span className="text-gradient">Beyond the Course</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Two extra sessions after week 11, once the final project is in. Not
            assessed: come for what you want to do next.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {bonusData.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
