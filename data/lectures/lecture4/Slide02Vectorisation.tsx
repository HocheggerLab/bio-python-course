'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide02Vectorisation() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Pandas Superpowers: <GradientText>NumPy & Vectorisation</GradientText> ⚡
      </SlideTitle>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Why pandas can analyze millions of data points in milliseconds
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* The Old Way: Loops */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-red-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🐌</div>
            <h3 className="text-xl font-bold text-red-400">The Slow Way: Python Loops</h3>
            <p className="text-gray-400 text-sm italic">Processing one item at a time</p>
          </div>

          <div className="space-y-4">
            <SyntaxHighlighter
              code={`# Analyzing 1 million gene expression values
gene_expression = [0.5, 1.2, 0.8, ...] # 1M values

# Loop through each value
normalized = []
for value in gene_expression:
    normalized.append(value * 2)

# ⏱️ Takes ~200ms`}
              language="python"
            />

            <div className="bg-red-500/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">❌ Problems:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Slow: Python loops are interpreted</li>
                <li>• One operation at a time</li>
                <li>• Can't use CPU parallelism</li>
                <li>• Memory inefficient</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The New Way: Vectorisation */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-xl font-bold text-bio-green">The Fast Way: Vectorised Operations</h3>
            <p className="text-gray-400 text-sm italic">Operate on entire arrays at once</p>
          </div>

          <div className="space-y-4">
            <SyntaxHighlighter
              code={`# Same 1 million gene expression values
import numpy as np
gene_expression = np.array([0.5, 1.2, 0.8, ...])

# Vectorised operation - all at once!
normalized = gene_expression * 2

# ⚡ Takes ~2ms - 100x faster!`}
              language="python"
            />

            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">✅ Advantages:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Blazing fast: Written in C</li>
                <li>• Operates on entire arrays</li>
                <li>• Uses CPU SIMD instructions</li>
                <li>• Memory efficient</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What is Vectorisation */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">
          🧠 What is Vectorisation?
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">📊</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Array Operations</h4>
            <p className="text-gray-300 text-sm text-center">
              Apply operations to entire arrays without explicit loops
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">⚙️</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">NumPy Backend</h4>
            <p className="text-gray-300 text-sm text-center">
              Pandas uses NumPy's C-optimized code under the hood
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">💪</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Big Data Ready</h4>
            <p className="text-gray-300 text-sm text-center">
              Handle millions of rows effortlessly in genomic datasets
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters for Biology */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🧬 Why This Matters for Biological Data
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-bio-yellow font-semibold">Real-world datasets:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• DepMap: 1,000+ cell lines × 18,000+ genes</li>
              <li>• RNA-seq: Millions of reads per sample</li>
              <li>• Genomic variants: 3 billion base pairs</li>
              <li>• Microscopy: 100s of images, 1000s of cells</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-bio-yellow font-semibold">With vectorisation you can:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Normalize expression values instantly</li>
              <li>• Calculate statistics across all genes</li>
              <li>• Filter millions of variants in seconds</li>
              <li>• Analyze entire datasets interactively</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Notebook Link */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🎯 Try It Yourself!
        </h3>
        <p className="text-white/90 text-center mb-4">
          See the speed difference firsthand with real biological data
        </p>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N1_vectorisation.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            <span>📓</span>
            <span>Open in Google Colab</span>
          </a>
        </div>
      </div>
    </div>
  )
}
