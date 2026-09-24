'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide18Boxplots() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Comparing Groups with <GradientText>Box Plots</GradientText> 📦
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Visualize gene expression distributions across cancer types
      </p>

      {/* What is a Box Plot */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-5 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📊 What is a Box Plot?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Definition</h4>
            <p className="text-gray-300 text-sm mb-3">
              A box plot (box-and-whisker plot) shows the <strong>distribution of data</strong> through
              five key statistics: minimum, Q1 (25th percentile), median (50th percentile), Q3 (75th percentile),
              and maximum.
            </p>
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <p className="text-gray-300 text-xs">
                <strong className="text-bio-blue">Perfect for:</strong> Comparing distributions across
                multiple groups - like comparing BRCA1 expression in breast vs lung vs blood cancers!
              </p>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3 text-center">Anatomy of a Box Plot</h4>
            <svg viewBox="0 0 300 240" className="w-full h-auto">
              {/* Y-axis */}
              <line x1="40" y1="30" x2="40" y2="210" stroke="#00d4ff" strokeWidth="2" />
              <text x="15" y="120" fill="#ffd700" fontSize="11" textAnchor="middle" transform="rotate(-90 15 120)" fontWeight="bold">
                Gene Expression →
              </text>

              {/* Box plot elements */}
              {/* Whisker top */}
              <line x1="100" y1="45" x2="180" y2="45" stroke="#4CAF50" strokeWidth="2" />
              <line x1="140" y1="45" x2="140" y2="75" stroke="#4CAF50" strokeWidth="2" strokeDasharray="3,3" />

              {/* Box */}
              <rect x="100" y="75" width="80" height="80" fill="#4CAF50" fillOpacity="0.3" stroke="#4CAF50" strokeWidth="2" />

              {/* Median line */}
              <line x1="100" y1="115" x2="180" y2="115" stroke="#ffd700" strokeWidth="3" />

              {/* Whisker bottom */}
              <line x1="140" y1="155" x2="140" y2="185" stroke="#4CAF50" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="100" y1="185" x2="180" y2="185" stroke="#4CAF50" strokeWidth="2" />

              {/* Outliers */}
              <circle cx="140" cy="25" r="3" fill="#ff6b6b" />
              <circle cx="145" cy="205" r="3" fill="#ff6b6b" />

              {/* Labels */}
              <line x1="185" y1="45" x2="220" y2="45" stroke="#00d4ff" strokeWidth="1" />
              <text x="225" y="48" fill="#00d4ff" fontSize="9">Maximum</text>

              <line x1="185" y1="75" x2="220" y2="75" stroke="#00d4ff" strokeWidth="1" />
              <text x="225" y="78" fill="#00d4ff" fontSize="9">Q3 (75%)</text>

              <line x1="185" y1="115" x2="220" y2="115" stroke="#ffd700" strokeWidth="1" />
              <text x="225" y="118" fill="#ffd700" fontSize="9" fontWeight="bold">Median (50%)</text>

              <line x1="185" y1="155" x2="220" y2="155" stroke="#00d4ff" strokeWidth="1" />
              <text x="225" y="158" fill="#00d4ff" fontSize="9">Q1 (25%)</text>

              <line x1="185" y1="185" x2="220" y2="185" stroke="#00d4ff" strokeWidth="1" />
              <text x="225" y="188" fill="#00d4ff" fontSize="9">Minimum</text>

              <line x1="145" y1="205" x2="170" y2="220" stroke="#ff6b6b" strokeWidth="1" />
              <text x="175" y="223" fill="#ff6b6b" fontSize="9">Outliers</text>

              {/* IQR bracket */}
              <text x="75" y="118" fill="#4CAF50" fontSize="10" fontWeight="bold" textAnchor="end">IQR</text>
              <line x1="82" y1="80" x2="82" y2="150" stroke="#4CAF50" strokeWidth="1.5" />
              <line x1="78" y1="80" x2="82" y2="80" stroke="#4CAF50" strokeWidth="1.5" />
              <line x1="78" y1="150" x2="82" y2="150" stroke="#4CAF50" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Basic Box Plot */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-blue mb-4 text-center">
          🎯 Creating Your First Box Plot
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">BRCA1 Expression by Cancer Type</h4>
            <SyntaxHighlighter
              code={`import matplotlib.pyplot as plt

# Prepare data for box plot
# Group by cancer lineage
data_to_plot = [
    df[df['oncotree_lineage'] == lineage]['BRCA1']
    for lineage in df['oncotree_lineage'].unique()
]

# Create box plot
fig, ax = plt.subplots(figsize=(10, 6))

bp = ax.boxplot(data_to_plot,
                labels=df['oncotree_lineage'].unique(),
                patch_artist=True,
                notch=True,
                showmeans=True)

# Customize colors
for patch in bp['boxes']:
    patch.set_facecolor('skyblue')
    patch.set_alpha(0.7)

ax.set_xlabel('Cancer Type', fontsize=12)
ax.set_ylabel('BRCA1 Expression', fontsize=12)
ax.set_title('BRCA1 Expression Across Cancer Types',
             fontsize=14, fontweight='bold')
ax.grid(True, alpha=0.3, axis='y')

plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Key Parameters</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">patch_artist=True</code> - Enables coloring</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">notch=True</code> - Shows confidence interval around median</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">showmeans=True</code> - Displays mean as well as median</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">labels</code> - X-axis category names</li>
              </ul>
            </div>
            <div className="bg-amber-400/10 rounded-lg p-3">
              <p className="text-amber-400 text-sm">
                💡 <strong>Tip:</strong> Rotate x-axis labels with
                <code className="bg-bio-dark px-1 rounded ml-1">plt.xticks(rotation=45)</code>
                when you have many categories!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pandas Built-in Boxplot */}
      <div className="bg-gradient-to-br from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-green mb-4 text-center">
          🐼 Easier Method: Pandas Built-in Boxplot
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">One-Line Boxplot</h4>
            <SyntaxHighlighter
              code={`# Pandas makes it super easy!
fig, ax = plt.subplots(figsize=(10, 6))

df.boxplot(column='BRCA1',
           by='oncotree_lineage',
           ax=ax,
           patch_artist=True,
           grid=False)

# Clean up the automatic title
ax.set_title('BRCA1 Expression Across Cancer Types',
             fontsize=14, fontweight='bold')
ax.set_xlabel('Cancer Type', fontsize=12)
ax.set_ylabel('BRCA1 Expression', fontsize=12)

# Remove the automatic suptitle
plt.suptitle('')

plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-green/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Why Use Pandas Boxplot?</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• ✅ Much simpler syntax</li>
                <li>• ✅ Automatically groups data</li>
                <li>• ✅ No need to prepare data lists</li>
                <li>• ✅ Works directly with DataFrame columns</li>
                <li>• ✅ Perfect for quick exploratory analysis</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-purple-400 text-sm">
                🚀 <strong>Pro Tip:</strong> Use pandas boxplot for exploration,
                matplotlib boxplot for publication-quality customization!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparing Multiple Genes */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📊 Compare Multiple Genes with Subplots
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Side-by-Side Comparison</h4>
            <SyntaxHighlighter
              code={`# Compare BRCA1 and TP53 across cancer types
fig, axes = plt.subplots(1, 2, figsize=(16, 6))

genes = ['BRCA1', 'TP53']
colors = ['skyblue', 'lightcoral']

for idx, (gene, color) in enumerate(zip(genes, colors)):
    data_to_plot = [
        df[df['oncotree_lineage'] == lineage][gene]
        for lineage in df['oncotree_lineage'].unique()
    ]

    bp = axes[idx].boxplot(
        data_to_plot,
        labels=df['oncotree_lineage'].unique(),
        patch_artist=True,
        showmeans=True
    )

    # Color the boxes
    for patch in bp['boxes']:
        patch.set_facecolor(color)
        patch.set_alpha(0.7)

    axes[idx].set_xlabel('Cancer Type', fontsize=11)
    axes[idx].set_ylabel(f'{gene} Expression', fontsize=11)
    axes[idx].set_title(f'{gene} Across Cancer Types',
                        fontsize=13, fontweight='bold')
    axes[idx].grid(True, alpha=0.3, axis='y')
    axes[idx].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">What to Look For</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong className="text-bio-green">Median differences:</strong> Which cancer type has highest/lowest expression?</li>
                <li>• <strong className="text-bio-blue">Box height (IQR):</strong> Which group is most variable?</li>
                <li>• <strong className="text-purple-400">Overlapping notches:</strong> No significant difference if notches overlap</li>
                <li>• <strong className="text-amber-400">Outliers:</strong> Unusual cell lines for investigation</li>
                <li>• <strong className="text-bio-yellow">Whisker length:</strong> Data spread within each group</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Biological Interpretation */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🧬 Biological Interpretation Guide
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-3xl mb-2 text-center">🔬</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">High BRCA1 in Breast Cancer?</h4>
            <p className="text-gray-300 text-sm text-center">
              Expected! BRCA1 is a tumor suppressor highly expressed in breast tissue.
              Compare median across cancer types.
            </p>
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-3xl mb-2 text-center">📊</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Wide IQR = High Variability</h4>
            <p className="text-gray-300 text-sm text-center">
              Large boxes mean heterogeneous cell lines within that cancer type.
              Could indicate subtypes!
            </p>
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-3xl mb-2 text-center">🎯</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Outliers Are Interesting!</h4>
            <p className="text-gray-300 text-sm text-center">
              A breast cancer cell line with very low BRCA1? That's a potential BRCA1 mutation case!
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Box Plots: The Gold Standard for Group Comparisons
        </h3>
        <p className="text-white/90 text-center">
          <strong>Box plots show distributions, not just means!</strong> They reveal whether groups
          truly differ, show variability within groups, and highlight outliers. Essential for comparing
          gene expression across cancer types, treatments, or time points. Always pair box plots with
          statistical tests to confirm visual differences are significant!
        </p>
      </div>

      {/* Practice Notebook */}
      <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
          📓 Practice Notebook
        </h3>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N8_boxplots.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bio-blue hover:bg-bio-blue/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Open Box Plot Practice in Colab →
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Compare gene expression across cancer types with box plots!
          </p>
        </div>
      </div>
    </div>
  )
}
