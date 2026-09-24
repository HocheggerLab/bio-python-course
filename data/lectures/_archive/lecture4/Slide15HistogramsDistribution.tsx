'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide15HistogramsDistribution() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Understanding Data with <GradientText>Histograms</GradientText> 📊
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Visualizing data distribution - the first step in exploratory data analysis
      </p>

      {/* What is a Histogram */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-5 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📈 What is a Histogram?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">Definition</h4>
            <p className="text-gray-300 text-sm mb-3">
              A histogram shows the <strong>distribution</strong> of numerical data by dividing
              the range into bins and counting how many values fall into each bin.
            </p>
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <p className="text-gray-300 text-xs">
                <strong className="text-bio-blue">Think of it as:</strong> Sorting all your data
                into buckets and seeing which buckets are full and which are empty.
              </p>
            </div>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-3">What Histograms Reveal</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong className="text-bio-green">Central tendency:</strong> Where most values cluster</li>
              <li>• <strong className="text-bio-green">Spread:</strong> How wide the distribution is</li>
              <li>• <strong className="text-bio-green">Skewness:</strong> Is data symmetric or skewed?</li>
              <li>• <strong className="text-bio-green">Outliers:</strong> Unusual values far from the rest</li>
              <li>• <strong className="text-bio-green">Modality:</strong> One peak or multiple peaks?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Basic Histogram */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-blue mb-4 text-center">
          🎯 Creating Your First Histogram
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Basic Histogram</h4>
            <SyntaxHighlighter
              code={`import matplotlib.pyplot as plt
import pandas as pd

# Load gene expression data
df = pd.read_csv('expression_data.csv')

# Create histogram for one gene
fig, ax = plt.subplots(figsize=(8, 6))
ax.hist(df['BRCA1'], bins=30, color='skyblue',
        edgecolor='black')
ax.set_xlabel('BRCA1 Expression Level')
ax.set_ylabel('Number of Cell Lines')
ax.set_title('Distribution of BRCA1 Expression')
plt.show()`}
              language="python"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Key Parameters</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">bins=30</code> - Number of buckets to divide data into</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">color</code> - Bar color</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded text-bio-blue">edgecolor</code> - Border color around bars</li>
              </ul>
            </div>
            <div className="bg-amber-400/10 rounded-lg p-3">
              <p className="text-amber-400 text-sm">
                💡 <strong>Tip:</strong> Try different bin numbers! Too few bins hide detail,
                too many create noise. Start with 20-50 bins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Using flatten() for all genes */}
      <div className="bg-gradient-to-br from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-green mb-4 text-center">
          🧬 Analyzing ALL Gene Expression with .flatten()
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">The Problem</h4>
            <div className="bg-bio-dark/50 rounded-lg p-4 mb-3">
              <p className="text-gray-300 text-sm mb-2">
                Our DataFrame has many genes (columns). How do we look at the distribution
                of <strong>all expression values</strong> at once?
              </p>
              <SyntaxHighlighter
                code={`# Our data structure
#              BRCA1  TP53  MYC  ...
# Cell_Line_1   5.2   7.1   8.9
# Cell_Line_2   6.8   6.9   7.2
# ...

# We need all values as one array!`}
                language="python"
              />
            </div>
          </div>

          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">The Solution: .values.flatten()</h4>
            <SyntaxHighlighter
              code={`# Select only numeric gene columns
gene_cols = df.select_dtypes(include='number')

# Convert to numpy array and flatten to 1D
all_expression = gene_cols.values.flatten()

# Now plot ALL expression values!
fig, ax = plt.subplots(figsize=(10, 6))
ax.hist(all_expression, bins=50,
        color='lightcoral', edgecolor='black')
ax.set_xlabel('Expression Level (All Genes)')
ax.set_ylabel('Frequency')
ax.set_title('Overall Gene Expression Distribution')
plt.show()`}
              language="python"
            />
          </div>
        </div>

        <div className="mt-4 bg-purple-500/10 rounded-lg p-4">
          <h4 className="text-purple-400 font-semibold mb-2">🔍 What .flatten() Does:</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <p className="text-bio-blue font-semibold mb-1">Step 1: .values</p>
              <p className="text-gray-300 text-xs">Converts DataFrame to numpy array (2D matrix)</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <p className="text-bio-blue font-semibold mb-1">Step 2: .flatten()</p>
              <p className="text-gray-300 text-xs">Collapses 2D array into 1D array</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <p className="text-bio-blue font-semibold mb-1">Result</p>
              <p className="text-gray-300 text-xs">Single array with all expression values!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customizing Histograms */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🎨 Making Better Histograms
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Add Transparency</h4>
            <SyntaxHighlighter
              code={`# Overlay multiple distributions
fig, ax = plt.subplots()
ax.hist(df['BRCA1'], bins=30,
        alpha=0.5, label='BRCA1', color='blue')
ax.hist(df['TP53'], bins=30,
        alpha=0.5, label='TP53', color='red')
ax.legend()
ax.set_xlabel('Expression Level')`}
              language="python"
            />
          </div>

          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Density Plot (Normalized)</h4>
            <SyntaxHighlighter
              code={`# Show proportion instead of count
fig, ax = plt.subplots()
ax.hist(all_expression, bins=50,
        density=True, color='green',
        alpha=0.7)
ax.set_xlabel('Expression Level')
ax.set_ylabel('Density')
ax.set_title('Normalized Distribution')`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Histograms: Your First Look at Data
        </h3>
        <p className="text-white/90 text-center">
          <strong>Always start with histograms!</strong> They reveal whether your data is
          normally distributed, has outliers, or needs transformation. In genomics, expression
          distributions guide normalization choices and help identify quality issues.
        </p>
      </div>

      {/* Practice Notebook */}
      <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
          📓 Practice Notebook
        </h3>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N5_histogram.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bio-blue hover:bg-bio-blue/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Open Histogram Practice in Colab →
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Practice creating histograms with real gene expression data!
          </p>
        </div>
      </div>
    </div>
  )
}
