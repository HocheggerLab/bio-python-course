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

      {/* DNA Analysis Task Section */}
      <section id="dna-analysis-task" className="py-20 px-6 bg-gradient-to-b from-bio-darker to-bio-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            DNA Analysis <span className="text-gradient-green">Task</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Put your Python skills to the test with a comprehensive DNA sequencing analysis project.
            Learn NGS fundamentals and perform real mutation analysis.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🧬</div>
                <h3 className="text-2xl font-bold text-bio-green mb-2">
                  Sequence Analysis Task
                </h3>
                <p className="text-gray-300">
                  Apply your Python knowledge to real genomic data analysis
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-bio-dark/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="text-bio-blue font-semibold mb-2">Learn NGS Fundamentals</h4>
                  <p className="text-gray-300 text-sm">
                    Understand sequencing technologies, FASTQ format, and quality control
                  </p>
                </div>
                <div className="bg-bio-dark/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">🔍</div>
                  <h4 className="text-purple-400 font-semibold mb-2">Sequence Analysis</h4>
                  <p className="text-gray-300 text-sm">
                    Work with real sequencing data, perform alignment and variant calling
                  </p>
                </div>
                <div className="bg-bio-dark/50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">🧪</div>
                  <h4 className="text-amber-400 font-semibold mb-2">Mutation Counting</h4>
                  <p className="text-gray-300 text-sm">
                    Build your own mutation analysis pipeline and discover variants
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-purple-400 font-semibold mb-3 text-center">
                  🎯 Project Overview
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-bio-green font-semibold text-sm mb-2">What You'll Build</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• FASTQ quality assessment tool</li>
                      <li>• Sequence alignment pipeline</li>
                      <li>• Mutation detection algorithm</li>
                      <li>• Visualization dashboard</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-amber-400 font-semibold text-sm mb-2">Skills You'll Gain</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Bioinformatics file formats</li>
                      <li>• Large dataset processing</li>
                      <li>• Statistical analysis of variants</li>
                      <li>• Research-grade Python coding</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-green to-bio-blue text-white px-8 py-3 rounded-lg font-bold text-lg mb-4">
                  <span className="text-bio-yellow">⏳</span>
                  <span>Available After Lecture 3</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Complete the core sessions first to build the foundation skills needed for this advanced project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Tracks Section */}
      <section id="specialization-tracks" className="py-20 px-6 bg-gradient-to-b from-bio-dark to-bio-darker">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Specialisation <span className="text-gradient-purple">Tracks</span>
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