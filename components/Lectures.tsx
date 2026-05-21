import LectureCard from './LectureCard'
import CapstoneProject from './CapstoneProject'
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
      <section id="python-data" className="py-20 px-6 bg-gradient-to-b from-bio-darker to-bio-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Section 2: Python and <span className="text-gradient-purple">Data in Biology</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Apply your Python skills to real biological datasets. Sessions 5–8 cover
            data analysis, visualisation, statistics, and AI tools for research.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pythonDataData.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

      {/* DNA Analysis Task */}
      <section id="dna-analysis-task" className="py-20 px-6 bg-gradient-to-b from-bio-dark to-bio-darker">
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
                    Work with real sequencing data, compare reads to reference and call variants
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
                    <h5 className="text-bio-green font-semibold text-sm mb-2">What You&apos;ll Build</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• FASTQ quality assessment tool</li>
                      <li>• Read comparison to reference sequence</li>
                      <li>• Mutation detection algorithm</li>
                      <li>• Publication-ready scientific figures</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-amber-400 font-semibold text-sm mb-2">Skills You&apos;ll Gain</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Reading bioinformatics file formats (FASTA)</li>
                      <li>• Large dataset processing</li>
                      <li>• Descriptive statistics of variants</li>
                      <li>• Research-grade Python coding</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/assignments/sequence-analysis"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green/80 hover:to-bio-blue/80 text-white px-8 py-3 rounded-lg font-bold text-lg mb-4 transition-all transform hover:scale-105"
                >
                  <span>📋</span>
                  <span>View Assignment Details</span>
                </a>
                <p className="text-gray-400 text-sm">
                  Available after Session 4 — complete the Python Basics section first to build the foundation skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Project */}
      <section id="final-project" className="py-20 px-6 bg-gradient-to-b from-bio-darker to-bio-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-header">
            Final <span className="text-gradient">Project</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Apply everything you&apos;ve learned to explore large-scale genomic datasets.
            Become a bioinformatician through hands-on data analysis.
          </p>
          <div className="max-w-3xl mx-auto">
            <CapstoneProject />
          </div>
        </div>
      </section>
    </>
  )
}
