import Image from 'next/image'
import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide20FurtherResources() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Further <GradientText>Resources</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Introduction */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continue your Pandas journey with these excellent resources
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* DataCamp Course */}
          <div className="bg-gradient-to-br from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🎓</div>
              <h3 className="text-2xl font-bold text-bio-blue">Interactive Course</h3>
            </div>

            <h4 className="text-xl font-semibold text-white mb-3">
              Data Manipulation with Pandas
            </h4>

            <p className="text-gray-300 mb-4">
              DataCamp's hands-on course with interactive exercises and real-world datasets.
              Perfect for learning by doing!
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-bio-green">✓</span>
                <span className="text-sm text-gray-300">Interactive coding exercises</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-bio-green">✓</span>
                <span className="text-sm text-gray-300">Video tutorials & immediate feedback</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-bio-green">✓</span>
                <span className="text-sm text-gray-300">Certificate upon completion</span>
              </div>
            </div>

            <a
              href="https://app.datacamp.com/learn/courses/data-manipulation-with-pandas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Start DataCamp Course
            </a>
          </div>

          {/* Pandas Workout Book */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">📚</div>
              <h3 className="text-2xl font-bold text-amber-400">Practice Book</h3>
            </div>

            <h4 className="text-xl font-semibold text-white mb-3">
              Pandas Workout
            </h4>

            <div className="flex gap-6 mb-4">
              <div className="relative w-32 h-40 flex-shrink-0 rounded-lg overflow-hidden border-2 border-amber-400/30 shadow-lg">
                <Image
                  src="/pandas-workout.png"
                  alt="Pandas Workout Book Cover"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-300 text-sm mb-3">
                  By Reuven M. Lerner. 200+ exercises to build your Pandas skills through practice.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span className="text-xs text-gray-300">Real-world data scenarios</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span className="text-xs text-gray-300">Progressive difficulty levels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span className="text-xs text-gray-300">Detailed solutions included</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.manning.com/books/pandas-workout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View on Manning
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
            🌟 Other Excellent Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold mb-2">📖 Official Docs</h4>
              <p className="text-sm text-gray-300 mb-2">Comprehensive reference and tutorials</p>
              <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer" className="text-xs text-bio-blue hover:underline">
                pandas.pydata.org
              </a>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold mb-2">🎥 YouTube Tutorials</h4>
              <p className="text-sm text-gray-300 mb-2">Video series by Corey Schafer</p>
              <a href="https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS" target="_blank" rel="noopener noreferrer" className="text-xs text-bio-green hover:underline">
                Watch playlist
              </a>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-amber-400 font-semibold mb-2">📊 Kaggle Learn</h4>
              <p className="text-sm text-gray-300 mb-2">Free micro-courses with real datasets</p>
              <a href="https://www.kaggle.com/learn/pandas" target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 hover:underline">
                kaggle.com/learn
              </a>
            </div>
          </div>
        </div>

        {/* Closing message */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-bio-blue/10 rounded-xl p-6 border border-bio-green/30">
          <p className="text-bio-green font-semibold text-xl mb-2">
            🎯 Keep Practicing!
          </p>
          <p className="text-gray-300">
            The key to mastering Pandas is regular practice with real biological datasets.
            Start with our course notebooks and gradually work your way through these resources.
          </p>
        </div>
      </div>
    </>
  )
}
