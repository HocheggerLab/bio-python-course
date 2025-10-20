'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide01Recap() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Recap: <GradientText>Lecture 3</GradientText> - DepMap Data Analysis
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Python Packages */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4">📦 Python Packages</h3>
          <div className="space-y-3">
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Built-in Packages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>random</code>: Generate random numbers</li>
                <li>• <code>math</code>: Mathematical functions</li>
                <li>• <code>os</code>: Operating system interface</li>
                <li>• Import with <code>import package</code></li>
              </ul>
            </div>

            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">PyPI Packages</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Install with: <code>pip install package</code></li>
                <li>• <code>pandas</code>: Data analysis</li>
                <li>• <code>numpy</code>: Numerical computing</li>
                <li>• <code>matplotlib</code>: Data visualization</li>
              </ul>
            </div>

            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Object-Oriented Programming</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Classes & Objects</li>
                <li>• Methods: functions within classes</li>
                <li>• Attributes: data within objects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pandas & DataFrames */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4">🐼 Pandas DataFrames</h3>
          <div className="space-y-3">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Core Operations</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>pd.read_csv()</code>: Load data</li>
                <li>• <code>df.head()</code>: View first rows</li>
                <li>• <code>df.shape</code>: Get dimensions</li>
                <li>• <code>df.columns</code>: Column names</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Data Selection</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>df['column']</code>: Select column</li>
                <li>• <code>df.loc[row, col]</code>: Label-based</li>
                <li>• <code>df.iloc[i, j]</code>: Position-based</li>
                <li>• Boolean indexing: <code>df[df['col'] &gt; 5]</code></li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Analysis Methods</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>df.describe()</code>: Summary statistics</li>
                <li>• <code>df.sort_values()</code>: Sort data</li>
                <li>• <code>df.groupby()</code>: Group analysis</li>
                <li>• <code>df.corr()</code>: Correlations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* DepMap Analysis */}
      <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-bio-green mb-4">🧬 DepMap Cancer Dependency Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-bio-green/10 rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="text-bio-yellow font-semibold mb-2">What is DepMap?</h4>
            <p className="text-gray-300 text-sm">
              Cancer Dependency Map: identifies which genes cancer cells need to survive
            </p>
          </div>
          <div className="bg-bio-green/10 rounded-lg p-4">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="text-bio-yellow font-semibold mb-2">Gene Dependencies</h4>
            <p className="text-gray-300 text-sm">
              Negative scores = essential genes; Positive scores = growth suppressing
            </p>
          </div>
          <div className="bg-bio-green/10 rounded-lg p-4">
            <div className="text-2xl mb-2">🔍</div>
            <h4 className="text-bio-yellow font-semibold mb-2">Research Questions</h4>
            <p className="text-gray-300 text-sm">
              Which genes are essential across cancer types? Cell-type specific dependencies?
            </p>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-3">🚀 Today: Explorative Data Analysis</h3>
        <p className="text-white/90 mb-3">
          Now that we can load and analyze data with pandas, we'll learn how to explore datasets systematically,
          create powerful visualizations, and understand the principles of effective data communication!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">⚡</div>
            <p className="text-white text-sm font-semibold">Vectorisation</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">🔍</div>
            <p className="text-white text-sm font-semibold">EDA Techniques</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">🎨</div>
            <p className="text-white text-sm font-semibold">Viz Principles</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">📈</div>
            <p className="text-white text-sm font-semibold">Matplotlib</p>
          </div>
        </div>
      </div>
    </div>
  )
}
