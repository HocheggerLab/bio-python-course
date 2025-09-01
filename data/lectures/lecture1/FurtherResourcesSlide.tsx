'use client'

import { SlideTitle } from '@/components/slides'

export function FurtherResourcesSlide() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          <span className="text-bio-blue">Further Resources:</span> Keep Growing Your Skills
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-300">
            Ready to dive deeper? Here are some excellent resources to continue your Python journey beyond this course.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* DataCamp */}
          <div className="bg-gradient-to-br from-bio-blue/20 to-purple-500/20 border border-bio-blue/30 rounded-lg p-6 hover:border-bio-blue/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-4">📊</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  DataCamp: Python for Data Science
                </h3>
                <p className="text-gray-300 mb-3">
                  Interactive online courses perfect for scientists. Learn Python with hands-on exercises focused on data analysis and visualization.
                </p>
                <div className="bg-bio-dark/50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-bio-yellow mb-1">🎯 Perfect for:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Interactive learning with immediate feedback</li>
                    <li>• Data science focus relevant to biology</li>
                    <li>• Structured curriculum with certificates</li>
                  </ul>
                </div>
                <a
                  href="https://app.datacamp.com/learn/courses/intro-to-python-for-data-science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-bio-blue text-white font-semibold rounded-lg hover:bg-bio-blue/80 transition-all duration-200"
                >
                  Visit DataCamp
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Talk Python */}
          <div className="bg-gradient-to-br from-bio-green/20 to-bio-yellow/20 border border-bio-green/30 rounded-lg p-6 hover:border-bio-green/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-4">🎙️</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-bio-green mb-2">
                  Talk Python Podcast
                </h3>
                <p className="text-gray-300 mb-3">
                  Learn Python through engaging conversations with experts. Great for commutes or lab downtime!
                </p>
                <div className="bg-bio-dark/50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-bio-yellow mb-1">🎯 Perfect for:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Learning about real-world applications</li>
                    <li>• Staying updated with Python trends</li>
                    <li>• Passive learning during other activities</li>
                  </ul>
                </div>
                <a
                  href="https://talkpython.fm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-bio-green text-white font-semibold rounded-lg hover:bg-bio-green/80 transition-all duration-200"
                >
                  Listen to Podcast
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Real Python */}
          <div className="bg-gradient-to-br from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-4">📚</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Real Python Tutorials
                </h3>
                <p className="text-gray-300 mb-3">
                  In-depth tutorials and articles on every Python topic imaginable. Excellent for deepening your understanding.
                </p>
                <div className="bg-bio-dark/50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-bio-yellow mb-1">🎯 Perfect for:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Detailed explanations of concepts</li>
                    <li>• Best practices and clean code</li>
                    <li>• Advanced topics when you're ready</li>
                  </ul>
                </div>
                <a
                  href="https://realpython.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/80 transition-all duration-200"
                >
                  Explore Tutorials
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Python Crash Course */}
          <div className="bg-gradient-to-br from-bio-yellow/20 to-bio-green/20 border border-bio-yellow/30 rounded-lg p-6 hover:border-bio-yellow/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-4">📖</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-bio-yellow mb-2">
                  Python Crash Course (Book)
                </h3>
                <p className="text-gray-300 mb-3">
                  The bestselling Python book - perfect for scientists who prefer traditional learning with hands-on projects.
                </p>
                <div className="bg-bio-dark/50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-bio-blue mb-1">🎯 Perfect for:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Comprehensive reference material</li>
                    <li>• Step-by-step project building</li>
                    <li>• Offline learning and practice</li>
                  </ul>
                </div>
                <a
                  href="https://www.oreilly.com/library/view/python-crash-course/9781098156664/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-bio-yellow text-bio-dark font-semibold rounded-lg hover:bg-bio-yellow/80 transition-all duration-200"
                >
                  View on O'Reilly
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Biology-Specific Resources */}
        <div className="bg-gradient-to-r from-bio-dark to-purple-900/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">🧬</span>
            Python for Biology & Bioinformatics
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="font-semibold text-bio-green mb-2">Biopython</h4>
              <p className="text-sm text-gray-300 mb-2">
                The official Python library for biological computation
              </p>
              <a href="https://biopython.org/" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:text-bio-blue/80 text-sm">
                biopython.org →
              </a>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="font-semibold text-bio-green mb-2">Rosalind</h4>
              <p className="text-sm text-gray-300 mb-2">
                Learn bioinformatics through problem solving
              </p>
              <a href="http://rosalind.info/" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:text-bio-blue/80 text-sm">
                rosalind.info →
              </a>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="font-semibold text-bio-green mb-2">Python for Biologists</h4>
              <p className="text-sm text-gray-300 mb-2">
                Free online book specifically for biologists
              </p>
              <a href="https://pythonforbiologists.com/" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:text-bio-blue/80 text-sm">
                pythonforbiologists.com →
              </a>
            </div>
          </div>
        </div>

        {/* Final Encouragement */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6 text-center">
          <p className="text-xl text-bio-blue mb-2 font-semibold">
            🌟 Remember: Learning to code is a journey, not a destination
          </p>
          <p className="text-gray-300">
            These resources will be here whenever you're ready to explore them. Focus on this course first, then branch out at your own pace!
          </p>
        </div>
      </div>
    </>
  )
}