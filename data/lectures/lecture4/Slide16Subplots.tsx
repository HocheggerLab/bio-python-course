'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide16Subplots() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Creating <GradientText>Subplots</GradientText> for Comparisons 🎨
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Compare multiple genes side-by-side using matplotlib subplots
      </p>

      {/* Why Subplots */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-5 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-3 text-center">
          🎯 Why Use Subplots?
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">👁️</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Visual Comparison</h4>
            <p className="text-gray-300 text-sm">Compare distributions side-by-side without overlapping</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">📄</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Publication Ready</h4>
            <p className="text-gray-300 text-sm">Multi-panel figures are standard in scientific papers</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">🔬</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Tell a Story</h4>
            <p className="text-gray-300 text-sm">Show multiple aspects of your data in one figure</p>
          </div>
        </div>
      </div>

      {/* Basic Subplots: Side by Side */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-blue mb-4 text-center">
          📊 Option 1: Side-by-Side Subplots (1 row, 2 columns)
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Compare Two Genes Horizontally</h4>
            <SyntaxHighlighter
              code={`import matplotlib.pyplot as plt

# Create 1 row, 2 columns of subplots
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Left subplot: BRCA1
axes[0].hist(df['BRCA1'], bins=30,
             color='skyblue', edgecolor='black')
axes[0].set_xlabel('BRCA1 Expression')
axes[0].set_ylabel('Frequency')
axes[0].set_title('BRCA1 Distribution')

# Right subplot: TP53
axes[1].hist(df['TP53'], bins=30,
             color='lightcoral', edgecolor='black')
axes[1].set_xlabel('TP53 Expression')
axes[1].set_ylabel('Frequency')
axes[1].set_title('TP53 Distribution')

plt.tight_layout()  # Prevent overlap
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Key Points</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">plt.subplots(1, 2)</code> creates 1 row × 2 columns</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">axes[0]</code> is the left plot</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">axes[1]</code> is the right plot</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">figsize=(12, 5)</code> makes it wider</li>
              </ul>
            </div>
            <div className="bg-amber-400/10 rounded-lg p-3">
              <p className="text-amber-400 text-sm">
                💡 <strong>Always use tight_layout()!</strong> It automatically adjusts spacing
                to prevent labels from overlapping.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Subplots */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-green mb-4 text-center">
          📊 Option 2: Stacked Subplots (2 rows, 1 column)
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Compare Two Genes Vertically</h4>
            <SyntaxHighlighter
              code={`# Create 2 rows, 1 column of subplots
fig, axes = plt.subplots(2, 1, figsize=(8, 10))

# Top subplot: BRCA1
axes[0].hist(df['BRCA1'], bins=30,
             color='skyblue', edgecolor='black')
axes[0].set_xlabel('BRCA1 Expression')
axes[0].set_ylabel('Frequency')
axes[0].set_title('BRCA1 Distribution')

# Bottom subplot: TP53
axes[1].hist(df['TP53'], bins=30,
             color='lightcoral', edgecolor='black')
axes[1].set_xlabel('TP53 Expression')
axes[1].set_ylabel('Frequency')
axes[1].set_title('TP53 Distribution')

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-green/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">When to Stack Vertically?</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• When x-axes represent the same variable</li>
                <li>• To align plots for easier comparison</li>
                <li>• For time series or sequential data</li>
                <li>• When you have limited horizontal space</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-purple-400 text-sm">
                <strong>Pro Tip:</strong> Vertical stacking makes it easier to compare
                x-axis values across plots!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Grid */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📊 Option 3: Grid Layout (2×2 for Four Genes)
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Compare Four Genes</h4>
            <SyntaxHighlighter
              code={`# Create 2x2 grid of subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

genes = ['BRCA1', 'TP53', 'MYC', 'EGFR']
colors = ['skyblue', 'lightcoral', 'lightgreen', 'wheat']

# Loop through positions
for i in range(2):
    for j in range(2):
        idx = i * 2 + j  # Convert 2D to 1D index
        axes[i, j].hist(df[genes[idx]], bins=30,
                       color=colors[idx],
                       edgecolor='black')
        axes[i, j].set_xlabel(f'{genes[idx]} Expression')
        axes[i, j].set_ylabel('Frequency')
        axes[i, j].set_title(f'{genes[idx]} Distribution')

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">2D Indexing</h4>
              <div className="bg-bio-dark/50 rounded p-3 mb-2">
                <SyntaxHighlighter
                  code={`# Access with [row, column]
axes[0, 0]  # Top-left
axes[0, 1]  # Top-right
axes[1, 0]  # Bottom-left
axes[1, 1]  # Bottom-right`}
                  language="python"
                />
              </div>
              <p className="text-gray-300 text-xs">
                Use 2D indexing when you create a grid: <code className="bg-bio-dark px-1 rounded">axes[row, col]</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced: Flexible Layout */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🔬 Advanced: Shared Axes for Better Comparison
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Share X or Y Axes</h4>
            <SyntaxHighlighter
              code={`# Share y-axis for direct comparison
fig, axes = plt.subplots(1, 2, figsize=(12, 5),
                        sharey=True)

axes[0].hist(df['BRCA1'], bins=30,
             color='skyblue', edgecolor='black')
axes[0].set_xlabel('BRCA1 Expression')
axes[0].set_ylabel('Frequency')
axes[0].set_title('BRCA1')

axes[1].hist(df['TP53'], bins=30,
             color='lightcoral', edgecolor='black')
axes[1].set_xlabel('TP53 Expression')
# No ylabel needed - shared with left plot
axes[1].set_title('TP53')

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Flatten for Easy Looping</h4>
            <SyntaxHighlighter
              code={`# Create 2x2 grid
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Flatten to 1D array for easy looping
axes_flat = axes.flatten()

genes = ['BRCA1', 'TP53', 'MYC', 'EGFR']

for idx, gene in enumerate(genes):
    axes_flat[idx].hist(df[gene], bins=30)
    axes_flat[idx].set_xlabel(f'{gene} Expression')
    axes_flat[idx].set_title(gene)

plt.tight_layout()
plt.show()`}
              language="python"
            />
            <div className="bg-amber-400/10 rounded-lg p-3 mt-3">
              <p className="text-amber-400 text-sm">
                💡 <code className="bg-bio-dark px-2 py-1 rounded">.flatten()</code> converts 2D axes
                array to 1D for simpler iteration!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gradient-to-br from-bio-blue/10 to-purple-600/10 border border-bio-blue/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-bio-blue mb-4 text-center">
          📝 Subplot Quick Reference
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Common Layouts</h4>
            <SyntaxHighlighter
              code={`# Side-by-side
fig, axes = plt.subplots(1, 2)

# Stacked
fig, axes = plt.subplots(2, 1)

# 2x2 Grid
fig, axes = plt.subplots(2, 2)

# 3x3 Grid
fig, axes = plt.subplots(3, 3)`}
              language="python"
            />
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Important Parameters</h4>
            <SyntaxHighlighter
              code={`# Set figure size
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Share y-axis
fig, axes = plt.subplots(1, 2, sharey=True)

# Share x-axis
fig, axes = plt.subplots(2, 1, sharex=True)

# Always use at the end!
plt.tight_layout()`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Subplots Make Comparisons Clear
        </h3>
        <p className="text-white/90 text-center">
          <strong>Multi-panel figures are essential for biological data.</strong> Use side-by-side
          for direct comparisons, stacked for aligned x-axes, and grids for multiple conditions.
          Always use <code className="bg-white/20 px-2 py-1 rounded">tight_layout()</code> to ensure
          professional-looking figures ready for publications!
        </p>
      </div>

      {/* Practice Notebook */}
      <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
          📓 Practice Notebook
        </h3>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N6_subplots.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bio-blue hover:bg-bio-blue/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Open Subplots Practice in Colab →
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Master creating multi-panel figures for comparing genes!
          </p>
        </div>
      </div>
    </div>
  )
}
