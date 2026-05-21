'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide07TidyData() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        <GradientText>Tidy Data Format</GradientText> 📋
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        The data structure that makes groupby and analysis easy
      </p>

      {/* Tidy Data Principles */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          🎯 Three Rules of Tidy Data
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">1️⃣</div>
            <h4 className="text-bio-blue font-semibold mb-2">Each variable is a column</h4>
            <p className="text-gray-300 text-sm">One type of measurement per column</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">2️⃣</div>
            <h4 className="text-bio-green font-semibold mb-2">Each observation is a row</h4>
            <p className="text-gray-300 text-sm">One complete record per row</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">3️⃣</div>
            <h4 className="text-amber-400 font-semibold mb-2">Each value is a cell</h4>
            <p className="text-gray-300 text-sm">Single value per cell</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Wide Format (Not Tidy) */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-red-400/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">❌</div>
            <h3 className="text-xl font-bold text-red-400">Wide Format (Not Tidy)</h3>
            <p className="text-gray-400 text-sm italic">Hard to analyze with groupby</p>
          </div>

          <div className="space-y-4">
            <SyntaxHighlighter
              code={`# Temperature measurements
# Multiple values in columns

  patient  day1  day2  day3
0   Alice  36.5  37.2  36.8
1     Bob  37.0  37.5  37.1
2 Charlie  36.8  36.9  37.0`}
              language="python"
            />

            <div className="bg-red-400/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">😕 Problems:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Can't group by "day"</li>
                <li>• Multiple temperature columns</li>
                <li>• Variables (days) as column names</li>
                <li>• Difficult to plot time series</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Long Format (Tidy) */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-xl font-bold text-bio-green">Long Format (Tidy)</h3>
            <p className="text-gray-400 text-sm italic">Perfect for groupby & analysis</p>
          </div>

          <div className="space-y-4">
            <SyntaxHighlighter
              code={`# Same data in tidy format
# One observation per row

   patient day  temperature
0    Alice   1         36.5
1    Alice   2         37.2
2    Alice   3         36.8
3      Bob   1         37.0
4      Bob   2         37.5
5      Bob   3         37.1
6  Charlie   1         36.8
7  Charlie   2         36.9
8  Charlie   3         37.0`}
              language="python"
            />

            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">✨ Benefits:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Easy groupby: <code>df.groupby('patient')</code></li>
                <li>• Each variable is a column</li>
                <li>• One temperature per cell</li>
                <li>• Simple to analyze & plot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Tidy Format Matters */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🎯 Why Tidy Format is Essential
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">With Tidy Data You Can:</h4>
            <SyntaxHighlighter
              code={`# Average temperature per patient
df.groupby('patient')['temperature'].mean()

# Average temperature per day
df.groupby('day')['temperature'].mean()

# Filter specific days
df[df['day'] == 2]

# Plot easily
fig, ax = plt.subplots()
ax.plot(df['day'], df['temperature'])`}
              language="python"
            />
          </div>
          <div className="flex items-center">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-3">
                <strong className="text-bio-green">Tidy data works seamlessly with:</strong>
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <code>groupby()</code> - Group by any variable</li>
                <li>• <code>plot()</code> - Direct visualization</li>
                <li>• Boolean indexing - Easy filtering</li>
                <li>• Statistical functions - Clean aggregations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Converting Formats (Brief) */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">
          🔄 Converting Between Formats (Advanced)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📊</span>
              <h4 className="text-bio-blue font-semibold">Wide → Long: melt()</h4>
            </div>
            <SyntaxHighlighter
              code={`# Convert wide to tidy
df_tidy = df.melt(
    id_vars=['patient'],
    var_name='day',
    value_name='temperature'
)`}
              language="python"
            />
            <p className="text-gray-400 text-xs mt-2">
              Useful when you receive data in wide format
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📈</span>
              <h4 className="text-bio-green font-semibold">Long → Wide: pivot()</h4>
            </div>
            <SyntaxHighlighter
              code={`# Convert tidy to wide
df_wide = df.pivot(
    index='patient',
    columns='day',
    values='temperature'
)`}
              language="python"
            />
            <p className="text-gray-400 text-xs mt-2">
              Useful for creating summary tables
            </p>
          </div>
        </div>
        <div className="mt-4 bg-amber-400/10 rounded-lg p-3 text-center">
          <p className="text-amber-400 text-sm">
            💡 <strong>For this course:</strong> Most biological datasets are already tidy or close to it.
            You'll rarely need melt() or pivot(), but it's good to know they exist!
          </p>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Remember
        </h3>
        <p className="text-white/90 text-center">
          <strong>Tidy data = Easy analysis.</strong> When each variable is a column and each observation
          is a row, groupby, filtering, and plotting just work. If you're struggling with analysis,
          check if your data is tidy first!
        </p>
      </div>
    </div>
  )
}
