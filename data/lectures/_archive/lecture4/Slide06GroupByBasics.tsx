'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide06GroupByBasics() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        The Power of <GradientText>GroupBy</GradientText> 🔢
      </SlideTitle>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Split-Apply-Combine: The fundamental pattern for grouped data analysis
      </p>

      {/* The Concept */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📋 The Split-Apply-Combine Pattern
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-bio-blue/30 text-center">
            <div className="text-3xl mb-2">1️⃣</div>
            <h4 className="text-lg font-bold text-bio-blue mb-2">Split</h4>
            <p className="text-gray-300 text-sm">
              Divide data into groups based on a category
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-bio-green/30 text-center">
            <div className="text-3xl mb-2">2️⃣</div>
            <h4 className="text-lg font-bold text-bio-green mb-2">Apply</h4>
            <p className="text-gray-300 text-sm">
              Calculate statistics within each group
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-amber-400/30 text-center">
            <div className="text-3xl mb-2">3️⃣</div>
            <h4 className="text-lg font-bold text-amber-400 mb-2">Combine</h4>
            <p className="text-gray-300 text-sm">
              Merge results into a summary
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Simple Example */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-xl font-bold text-bio-blue">Simple Example</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Sample Data</h4>
              <SyntaxHighlighter
                code={`import pandas as pd

# Create sample dataset
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'team': ['A', 'B', 'A', 'B', 'A'],
    'score': [85, 92, 78, 88, 95]
}
df = pd.DataFrame(data)

print(df)
#      name team  score
# 0   Alice    A     85
# 1     Bob    B     92
# 2 Charlie    A     78
# 3   David    B     88
# 4     Eve    A     95`}
                language="python"
              />
            </div>

            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">🎯 Question:</p>
              <p className="text-gray-300 text-sm">
                What is the average score for each team?
              </p>
            </div>
          </div>
        </div>

        {/* GroupBy Solution */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="text-xl font-bold text-bio-green">GroupBy Solution</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Group & Calculate</h4>
              <SyntaxHighlighter
                code={`# Group by team and calculate mean
df.groupby('team')['score'].mean()

# Output:
# team
# A    86.0
# B    90.0
# Name: score, dtype: float64`}
                language="python"
              />
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">What Happened?</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p><strong className="text-bio-blue">1. Split:</strong> Divided by 'team' column</p>
                <p className="ml-4 text-xs">• Team A: Alice, Charlie, Eve</p>
                <p className="ml-4 text-xs">• Team B: Bob, David</p>
                <p><strong className="text-bio-green">2. Apply:</strong> Calculated mean score</p>
                <p className="ml-4 text-xs">• Team A: (85+78+95)/3 = 86.0</p>
                <p className="ml-4 text-xs">• Team B: (92+88)/2 = 90.0</p>
                <p><strong className="text-amber-400">3. Combine:</strong> Created summary</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Aggregations */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">
          🧮 Common Aggregation Functions
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">.mean()</h4>
            <SyntaxHighlighter
              code={`df.groupby('team')['score'].mean()`}
              language="python"
            />
            <p className="text-gray-400 text-xs mt-2 text-center">Average per group</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">.sum()</h4>
            <SyntaxHighlighter
              code={`df.groupby('team')['score'].sum()`}
              language="python"
            />
            <p className="text-gray-400 text-xs mt-2 text-center">Total per group</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">.count()</h4>
            <SyntaxHighlighter
              code={`df.groupby('team')['name'].count()`}
              language="python"
            />
            <p className="text-gray-400 text-xs mt-2 text-center">Count per group</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">.size()</h4>
            <SyntaxHighlighter
              code={`df.groupby('team').size()`}
              language="python"
            />
            <p className="text-gray-400 text-xs mt-2 text-center">Group sizes</p>
          </div>
        </div>
      </div>

      {/* Multiple Aggregations */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🎯 Multiple Statistics at Once
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Using .agg()</h4>
            <SyntaxHighlighter
              code={`# Multiple aggregations
df.groupby('team')['score'].agg(['mean', 'min', 'max'])

#      mean  min  max
# team
# A    86.0   78   95
# B    90.0   88   92`}
              language="python"
            />
          </div>
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Different Stats per Column</h4>
            <SyntaxHighlighter
              code={`# Different aggregations per column
df.groupby('team').agg({
    'score': ['mean', 'std'],
    'name': 'count'
})`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Why GroupBy is Essential
        </h3>
        <p className="text-white/90 text-center">
          <strong>GroupBy is your tool for comparative analysis:</strong> Compare cancer types,
          analyze by tissue lineage, find differences between conditions. Any time you need to
          ask "how do groups differ?", groupby is the answer!
        </p>
      </div>
    </div>
  )
}
