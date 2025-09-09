'use client'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide03TodaysGoals() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-8 text-center">
        Today's <GradientText>Learning Journey</GradientText> 🚀
      </SlideTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Part 1: Package Ecosystem */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">📦</div>
            <h3 className="text-xl font-bold text-purple-400">Part 1: Package Ecosystem</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Import & Modules</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>import package, import package as, from package import method</code></li>
                <li>• Python's package manager (pip)</li>
                <li>• Finding the right tools</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong>🎯 Goal:</strong> Understand how Python's vast ecosystem helps scientists
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Standard Library */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">🛠️</div>
            <h3 className="text-xl font-bold text-bio-blue">Part 2: Standard Library</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Built-in Power Tools</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>pathlib</code> - File system navigation</li>
                <li>• <code>csv</code> - Data file handling</li>
                <li>• <code>math</code> - Scientific calculations</li>
                <li>• <code>random</code> - Simulations</li>
              </ul>
            </div>
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong>🎯 Goal:</strong> Master Python's built-in tools for scientific computing
              </p>
            </div>
          </div>
        </div>

        {/* Part 3: OOP/API Concepts */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">🏗️</div>
            <h3 className="text-xl font-bold text-bio-green">Part 3: OOP & APIs</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-bio-green/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Working with Objects</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Objects have methods: <code>df.mean()</code></li>
                <li>• Objects have attributes: <code>df.shape</code></li>
                <li>• Chain operations: <code>df.filter().sort()</code></li>
              </ul>
            </div>
            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong>🎯 Goal:</strong> Understand how to use powerful data objects
              </p>
            </div>
          </div>
        </div>

        {/* Part 4: Pandas Practical */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-yellow/30 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">🐼</div>
            <h3 className="text-xl font-bold text-bio-yellow">Part 4: Pandas Practical</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-bio-yellow/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Real Data Analysis</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Load the DepMap dataset</li>
                <li>• Filter cancer cell lines</li>
                <li>• Calculate correlations</li>
                <li>• Find gene dependencies</li>
              </ul>
            </div>
            <div className="bg-bio-yellow/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong>🎯 Goal:</strong> Solve Sarah's research question with real data!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Learning Outcome */}
      <div className="bg-gradient-to-r from-purple-600 to-bio-blue rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          🎯 Today's Superpower
        </h3>
        <p className="text-white/90 text-center text-lg">
          Transform from working with single sequences to analyzing <strong>entire datasets</strong> - 
          from 100s of data points to <strong>millions</strong> with the same ease!
        </p>
        <div className="mt-4 text-center">
          <span className="inline-block bg-white/20 rounded-full px-4 py-2 text-white font-semibold">
            Single DNA → Genome Databases | One Cell → 1000s of Cell Lines
          </span>
        </div>
      </div>
    </div>
  )
}