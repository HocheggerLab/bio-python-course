'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide19Summary() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Lecture 4: <GradientText>What We Covered</GradientText> 🎯
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        From data manipulation to visualization - your complete EDA toolkit
      </p>

      {/* Main Topics Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Part 1: Data Manipulation */}
        <div className="bg-gradient-to-br from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-5">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🐼</div>
            <h3 className="text-xl font-bold text-purple-400">Part 1: Advanced Pandas</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2 flex items-center gap-2">
                <span>⚡</span>
                <span>Vectorisation</span>
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• NumPy powers pandas operations</li>
                <li>• Avoid loops - use vectorized operations</li>
                <li>• 100-1000× faster than Python loops</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2 flex items-center gap-2">
                <span>📊</span>
                <span>GroupBy Operations</span>
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Split-Apply-Combine for group analysis</li>
                <li>• <code className="bg-bio-dark px-1 rounded">.groupby()</code> + <code className="bg-bio-dark px-1 rounded">.mean()</code>, <code className="bg-bio-dark px-1 rounded">.agg()</code></li>
                <li>• Essential for comparing cancer types</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2 flex items-center gap-2">
                <span>🗂️</span>
                <span>Tidy Data Format</span>
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Each variable = column</li>
                <li>• Each observation = row</li>
                <li>• Makes analysis simpler and consistent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Part 2: EDA */}
        <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-5">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-xl font-bold text-bio-green">Part 2: Exploratory Data Analysis</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2 flex items-center gap-2">
                <span>🔎</span>
                <span>Data Inspection</span>
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code className="bg-bio-dark px-1 rounded">.head()</code>, <code className="bg-bio-dark px-1 rounded">.info()</code>, <code className="bg-bio-dark px-1 rounded">.describe()</code></li>
                <li>• Check for missing values and outliers</li>
                <li>• Understand data structure and types</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2 flex items-center gap-2">
                <span>📈</span>
                <span>Data Quality</span>
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Validate data ranges and distributions</li>
                <li>• Identify batch effects and artifacts</li>
                <li>• Catch errors before analysis</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2 flex items-center gap-2">
                <span>💡</span>
                <span>Pattern Discovery</span>
              </h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Reveal relationships and trends</li>
                <li>• Form biological hypotheses</li>
                <li>• Guide statistical testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Matplotlib Visualization */}
      <div className="bg-gradient-to-br from-bio-blue/10 to-purple-600/10 border border-bio-blue/30 rounded-xl p-6 mb-6">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2">📊</div>
          <h3 className="text-xl font-bold text-bio-blue">Part 3: Scientific Visualization with Matplotlib</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Core Concepts</h4>
              <SyntaxHighlighter
                code={`# The fig, ax API
fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_xlabel('X Label')
ax.set_ylabel('Y Label')
plt.tight_layout()
plt.show()`}
                language="python"
              />
              <p className="text-gray-300 text-xs mt-2">
                ✅ Always use <code className="bg-bio-dark px-1 rounded">fig, ax</code> approach - explicit and professional
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Subplots for Comparisons</h4>
              <SyntaxHighlighter
                code={`# Side-by-side
fig, axes = plt.subplots(1, 2)

# Stacked
fig, axes = plt.subplots(2, 1)

# Grid
fig, axes = plt.subplots(2, 2)`}
                language="python"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Essential Plot Types</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-bio-blue font-bold">📊</span>
                  <div>
                    <strong className="text-bio-blue">Histograms:</strong>
                    <span className="text-gray-300"> Distribution of single variable</span>
                    <code className="block bg-bio-dark px-2 py-1 rounded text-xs mt-1">ax.hist(data, bins=30)</code>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-bio-green font-bold">🔍</span>
                  <div>
                    <strong className="text-bio-green">Scatter Plots:</strong>
                    <span className="text-gray-300"> Relationships between two genes</span>
                    <code className="block bg-bio-dark px-2 py-1 rounded text-xs mt-1">ax.scatter(gene1, gene2)</code>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">📦</span>
                  <div>
                    <strong className="text-purple-400">Box Plots:</strong>
                    <span className="text-gray-300"> Compare groups (cancer types)</span>
                    <code className="block bg-bio-dark px-2 py-1 rounded text-xs mt-1">df.boxplot(column='gene', by='type')</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-400/10 rounded-lg p-3">
              <p className="text-amber-400 text-sm">
                💡 <strong>Key Technique:</strong> Use <code className="bg-bio-dark px-1 rounded">.flatten()</code>
                to analyze all gene expression values at once!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-5 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🚀 Your EDA Workflow Cheat Sheet
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-blue font-semibold mb-2 text-center">Step 1: Inspect</h4>
            <SyntaxHighlighter
              code={`df.shape
df.head()
df.info()
df.describe()
df.isnull().sum()`}
              language="python"
            />
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-green font-semibold mb-2 text-center">Step 2: Analyze</h4>
            <SyntaxHighlighter
              code={`# Group comparisons
df.groupby('type')['gene'].mean()

# Use .agg() for multiple stats
df.groupby('type').agg(['mean', 'std'])`}
              language="python"
            />
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-purple-400 font-semibold mb-2 text-center">Step 3: Visualize</h4>
            <SyntaxHighlighter
              code={`# Distribution
ax.hist(df['gene'], bins=30)

# Relationship
ax.scatter(df['g1'], df['g2'])

# Comparison
df.boxplot(column='gene', by='type')`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          🎯 Key Takeaways
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-white/90">
          <div className="space-y-2">
            <p>✅ <strong>Vectorization makes pandas fast</strong> - avoid loops!</p>
            <p>✅ <strong>GroupBy enables group comparisons</strong> - essential for biology</p>
            <p>✅ <strong>Always inspect before analyzing</strong> - catch errors early</p>
          </div>
          <div className="space-y-2">
            <p>✅ <strong>Use fig, ax API</strong> - professional matplotlib standard</p>
            <p>✅ <strong>Three plot types cover most needs:</strong> histograms, scatter, box plots</p>
            <p>✅ <strong>Visualization reveals patterns</strong> - always plot your data!</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-white font-semibold text-lg">
            🧬 You now have the tools to explore and visualize biological data like a pro! 🎉
          </p>
        </div>
      </div>
    </div>
  )
}
