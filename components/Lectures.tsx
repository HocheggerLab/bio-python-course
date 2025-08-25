import LectureCard from './LectureCard'
import CapstoneProject from './CapstoneProject'
import { coreSessionsData, specializationTracks } from '@/data/lectures'

export default function Lectures() {
  return (
    <>
      {/* Core Sessions Section */}
      <section id="core-sessions" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Core <span className="text-gradient">Sessions</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Master the Python fundamentals through hands-on biological applications. 
            All students complete these five essential sessions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {coreSessionsData.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Tracks Section */}
      <section id="specialization-tracks" className="py-20 px-6 bg-gradient-to-b from-bio-dark to-bio-darker">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Specialization <span className="text-gradient-purple">Tracks</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Choose one track to deepen your skills for your final project. 
            Ambitious students are encouraged to explore all three tracks.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {specializationTracks.map((track) => (
              <LectureCard key={track.id} lecture={track} />
            ))}
          </div>
          
          {/* Final Project */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Final <span className="text-gradient">Project</span>
            </h3>
            <div className="max-w-3xl mx-auto">
              <CapstoneProject />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}