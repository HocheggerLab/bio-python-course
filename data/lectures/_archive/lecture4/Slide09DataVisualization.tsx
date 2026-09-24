'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import Image from 'next/image'

export default function Slide09DataVisualization() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        The Power of <GradientText>Data Visualization</GradientText> 📊
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Turning numbers into insights through visual communication
      </p>

      {/* Example Visualizations */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-4">
          <h3 className="text-lg font-bold text-bio-blue mb-3 text-center">Complex Multi-Panel Analysis</h3>
          <div className="relative w-full h-64 mb-2">
            <Image
              src="/Vis 1.png"
              alt="Cell cycle analysis with multiple visualization types"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-xs text-center">
            Cell cycle analysis: Histograms, scatter plots, and stacked bars reveal different aspects of the data
          </p>
        </div>

        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-4">
          <h3 className="text-lg font-bold text-bio-green mb-3 text-center">Comparative Stacked Bar Charts</h3>
          <div className="relative w-full h-64 mb-2">
            <Image
              src="/vis2.png"
              alt="Stacked bar charts comparing conditions"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-xs text-center">
            Stacked bars show proportions and statistical significance across experimental conditions
          </p>
        </div>
      </div>

      {/* Why Visualization Matters */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          🎯 Why Data Visualization is Essential
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <h4 className="text-bio-yellow font-semibold mb-1">See Patterns Instantly</h4>
                  <p className="text-gray-300 text-sm">
                    Your brain processes visual information 60,000× faster than text.
                    Spot trends, outliers, and relationships at a glance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="text-bio-yellow font-semibold mb-1">Reveal Hidden Insights</h4>
                  <p className="text-gray-300 text-sm">
                    Distributions, correlations, and anomalies that are invisible in tables
                    become obvious in plots.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="text-bio-yellow font-semibold mb-1">Compare Across Groups</h4>
                  <p className="text-gray-300 text-sm">
                    Quickly compare multiple conditions, time points, or experimental
                    groups side-by-side.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="text-bio-yellow font-semibold mb-1">Guide Statistical Analysis</h4>
                  <p className="text-gray-300 text-sm">
                    Visualizations help you choose the right statistical tests by revealing
                    data distributions and relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📢</span>
                <div>
                  <h4 className="text-bio-yellow font-semibold mb-1">Communicate Results</h4>
                  <p className="text-gray-300 text-sm">
                    Figures are the universal language of science. A good plot tells your
                    story better than paragraphs of text.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="text-bio-yellow font-semibold mb-1">Quality Control</h4>
                  <p className="text-gray-300 text-sm">
                    Catch data errors, batch effects, and technical artifacts before
                    they ruin your analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Visualization Toolkit */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🛠️ Your Visualization Toolkit
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="text-bio-blue font-semibold mb-2">Matplotlib</h4>
            <p className="text-gray-300 text-sm">
              Python's foundational plotting library. Complete control over every element.
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🎨</div>
            <h4 className="text-bio-green font-semibold mb-2">Seaborn</h4>
            <p className="text-gray-300 text-sm">
              Beautiful statistical plots with minimal code. Built on matplotlib.
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🐼</div>
            <h4 className="text-purple-400 font-semibold mb-2">Pandas Plotting</h4>
            <p className="text-gray-300 text-sm">
              Quick exploratory plots directly from DataFrames.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 Visualization First, Statistics Second
        </h3>
        <p className="text-white/90 text-center">
          <strong>Always visualize your data before running statistical tests.</strong>
          A single plot can reveal what hours of statistical analysis might miss.
          In biology, understanding your data visually is not optional—it's essential for
          drawing correct conclusions and telling compelling scientific stories.
        </p>
      </div>
    </div>
  )
}
