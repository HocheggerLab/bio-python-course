'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide17Scatterplots() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Exploring Relationships with <GradientText>Scatter Plots</GradientText> 🔍
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Discover correlations between genes using scatter plots
      </p>

      {/* What is a Scatter Plot */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-5 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📊 What is a Scatter Plot?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Definition</h4>
            <p className="text-gray-300 text-sm mb-3">
              A scatter plot shows the <strong>relationship between two numerical variables</strong>.
              Each point represents one observation (in our case, one cell line).
            </p>
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <p className="text-gray-300 text-xs">
                <strong className="text-bio-blue">Key insight:</strong> If two genes show a pattern
                (line or curve), they may be biologically related - maybe they work together in the
                same pathway or one regulates the other!
              </p>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3 text-center">Anatomy of a Scatter Plot</h4>
            <svg viewBox="0 0 300 200" className="w-full h-auto">
              {/* Axes */}
              <line x1="40" y1="160" x2="280" y2="160" stroke="#00d4ff" strokeWidth="2" />
              <line x1="40" y1="20" x2="40" y2="160" stroke="#00d4ff" strokeWidth="2" />

              {/* Axis labels */}
              <text x="160" y="185" fill="#ffd700" fontSize="12" textAnchor="middle" fontWeight="bold">
                Gene A Expression →
              </text>
              <text x="15" y="90" fill="#ffd700" fontSize="12" textAnchor="middle" transform="rotate(-90 15 90)" fontWeight="bold">
                Gene B Expression →
              </text>

              {/* Data points with positive correlation */}
              <circle cx="60" cy="145" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="80" cy="135" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="100" cy="125" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="120" cy="115" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="140" cy="105" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="160" cy="95" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="180" cy="85" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="200" cy="75" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="220" cy="65" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="240" cy="55" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="260" cy="45" r="4" fill="#4CAF50" opacity="0.7" />

              {/* Add some scatter */}
              <circle cx="90" cy="120" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="130" cy="100" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="170" cy="80" r="4" fill="#4CAF50" opacity="0.7" />
              <circle cx="210" cy="70" r="4" fill="#4CAF50" opacity="0.7" />

              {/* Highlight one point with annotation */}
              <circle cx="160" cy="95" r="6" fill="none" stroke="#ff6b6b" strokeWidth="2" />
              <line x1="160" y1="95" x2="190" y2="50" stroke="#ff6b6b" strokeWidth="1.5" strokeDasharray="2,2" />
              <text x="195" y="45" fill="#ff6b6b" fontSize="10" fontWeight="bold">One Cell Line</text>
              <text x="195" y="56" fill="#ff6b6b" fontSize="8">(x: Gene A value,</text>
              <text x="195" y="65" fill="#ff6b6b" fontSize="8">y: Gene B value)</text>

              {/* Trend line */}
              <line x1="50" y1="150" x2="270" y2="40" stroke="#ffd700" strokeWidth="2" strokeDasharray="4,4" opacity="0.6" />
              <text x="230" y="30" fill="#ffd700" fontSize="10" fontWeight="bold">Positive Correlation</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Basic Scatter Plot */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-blue mb-4 text-center">
          🎯 Creating Your First Scatter Plot
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">BRCA1 vs BRCA2</h4>
            <SyntaxHighlighter
              code={`import matplotlib.pyplot as plt

# Create scatter plot
fig, ax = plt.subplots(figsize=(8, 6))

ax.scatter(df['BRCA1'], df['BRCA2'],
           alpha=0.6, s=50, color='skyblue',
           edgecolor='black', linewidth=0.5)

ax.set_xlabel('BRCA1 Expression', fontsize=12)
ax.set_ylabel('BRCA2 Expression', fontsize=12)
ax.set_title('BRCA1 vs BRCA2 Expression Across Cell Lines',
             fontsize=14, fontweight='bold')

# Add grid for easier reading
ax.grid(True, alpha=0.3, linestyle='--')

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Key Parameters</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">alpha=0.6</code> - Transparency (0-1)</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">s=50</code> - Point size</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">color</code> - Point color</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">edgecolor</code> - Point border</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">linewidth</code> - Border thickness</li>
              </ul>
            </div>
            <div className="bg-amber-400/10 rounded-lg p-3">
              <p className="text-amber-400 text-sm">
                💡 <strong>Tip:</strong> Use <code className="bg-bio-dark px-1 rounded">alpha</code>
                to see overlapping points better, especially with large datasets!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strong Correlation Example */}
      <div className="bg-gradient-to-br from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-green mb-4 text-center">
          🧬 Strong Correlation: TSC1 vs TSC2
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Genes in the Same Complex</h4>
            <SyntaxHighlighter
              code={`# TSC1 and TSC2 form a protein complex
# Expected: strong positive correlation!

fig, ax = plt.subplots(figsize=(8, 6))

ax.scatter(df['TSC1'], df['TSC2'],
           alpha=0.6, s=60,
           color='lightcoral',
           edgecolor='darkred',
           linewidth=0.5)

ax.set_xlabel('TSC1 Expression', fontsize=12)
ax.set_ylabel('TSC2 Expression', fontsize=12)
ax.set_title('TSC1 vs TSC2: Co-regulated Genes',
             fontsize=14, fontweight='bold')

ax.grid(True, alpha=0.3, linestyle='--')

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-green/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Context</h4>
              <p className="text-gray-300 text-sm mb-3">
                <strong>TSC1</strong> and <strong>TSC2</strong> form the TSC protein complex,
                which regulates mTOR signaling - critical for cell growth.
              </p>
              <p className="text-gray-300 text-sm">
                <strong className="text-bio-green">Prediction:</strong> These genes should show
                strong positive correlation because cells that express one usually express the
                other to form functional complexes!
              </p>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-purple-400 text-sm">
                🔬 <strong>Discovery Tip:</strong> Unexpected correlations can reveal unknown
                biological relationships or shared regulatory mechanisms!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparing Multiple Relationships */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📊 Compare Multiple Relationships with Subplots
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Side-by-Side Comparison</h4>
            <SyntaxHighlighter
              code={`# Compare two gene pairs
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# BRCA1 vs BRCA2
axes[0].scatter(df['BRCA1'], df['BRCA2'],
                alpha=0.6, color='skyblue',
                edgecolor='black', linewidth=0.5)
axes[0].set_xlabel('BRCA1 Expression')
axes[0].set_ylabel('BRCA2 Expression')
axes[0].set_title('BRCA1 vs BRCA2')
axes[0].grid(True, alpha=0.3)

# TSC1 vs TSC2
axes[1].scatter(df['TSC1'], df['TSC2'],
                alpha=0.6, color='lightcoral',
                edgecolor='darkred', linewidth=0.5)
axes[1].set_xlabel('TSC1 Expression')
axes[1].set_ylabel('TSC2 Expression')
axes[1].set_title('TSC1 vs TSC2 (Strong Correlation)')
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">What to Look For</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong className="text-bio-green">Positive slope:</strong> Both increase together</li>
                <li>• <strong className="text-bio-blue">Negative slope:</strong> One increases, other decreases</li>
                <li>• <strong className="text-purple-400">No pattern:</strong> No relationship (independent)</li>
                <li>• <strong className="text-amber-400">Outliers:</strong> Unusual cell lines worth investigating</li>
                <li>• <strong className="text-bio-yellow">Clusters:</strong> Subgroups of cell lines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Customization */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🎨 Advanced: Color by Category
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Color by Cancer Type</h4>
            <SyntaxHighlighter
              code={`# Color points by lineage
fig, ax = plt.subplots(figsize=(10, 7))

# Get unique lineages
lineages = df['oncotree_lineage'].unique()
colors = ['red', 'blue', 'green', 'orange', 'purple']

for lineage, color in zip(lineages, colors):
    mask = df['oncotree_lineage'] == lineage
    ax.scatter(df[mask]['BRCA1'],
               df[mask]['BRCA2'],
               alpha=0.6, s=60,
               color=color,
               label=lineage,
               edgecolor='black',
               linewidth=0.5)

ax.set_xlabel('BRCA1 Expression', fontsize=12)
ax.set_ylabel('BRCA2 Expression', fontsize=12)
ax.set_title('BRCA1 vs BRCA2 by Cancer Type',
             fontsize=14)
ax.legend(title='Cancer Lineage')
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-amber-400/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Why Color by Category?</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Reveals tissue-specific patterns</li>
                <li>• Shows if certain cancer types cluster together</li>
                <li>• Identifies outliers within groups</li>
                <li>• Makes multi-dimensional data interpretable</li>
              </ul>
            </div>
            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-green text-sm">
                🧬 <strong>Biological Question:</strong> Do breast cancer cell lines show
                different BRCA1/BRCA2 patterns than lung cancer lines?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Scatter Plots Reveal Hidden Relationships
        </h3>
        <p className="text-white/90 text-center">
          <strong>Each point is a cell line - a biological observation.</strong> Strong correlations
          suggest genes work together in pathways or complexes. Scatter plots help you discover
          co-regulation, identify outliers, and form hypotheses about gene function. Always ask:
          "What biological story does this pattern tell?"
        </p>
      </div>

      {/* Practice Notebook */}
      <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
          📓 Practice Notebook
        </h3>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N7_scatterplots.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bio-blue hover:bg-bio-blue/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Open Scatter Plot Practice in Colab →
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Explore gene correlations and discover biological relationships!
          </p>
        </div>
      </div>
    </div>
  )
}
