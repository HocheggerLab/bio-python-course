'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'
import Image from 'next/image'

export default function Slide11PlotTypes() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Essential <GradientText>Plot Types</GradientText> 📊
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Choosing the right visualization for your data
      </p>

      {/* Scatter Plot */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/plots/scatter.svg" alt="Scatter plot" width={120} height={90} />
            </div>
            <h3 className="text-xl font-bold text-bio-blue">Scatter Plot</h3>
            <p className="text-gray-400 text-sm italic">Relationship between two variables</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">When to use:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Two continuous variables</li>
                <li>• Looking for correlations</li>
                <li>• Identifying outliers</li>
                <li>• Each point is an observation</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Gene A vs Gene B expression</li>
                <li>• Cell size vs proliferation rate</li>
                <li>• Drug dose vs response</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.scatter(df['BRCA1'], df['TP53'])
ax.set_xlabel('BRCA1 Expression')
ax.set_ylabel('TP53 Expression')`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Line Plot */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/plots/line.svg" alt="Line plot" width={120} height={90} />
            </div>
            <h3 className="text-xl font-bold text-bio-green">Line Plot</h3>
            <p className="text-gray-400 text-sm italic">Trends over time or ordered sequence</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">When to use:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Time series data</li>
                <li>• Showing trends/changes</li>
                <li>• Connecting ordered points</li>
                <li>• Multiple groups over time</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cell growth over time</li>
                <li>• Gene expression during differentiation</li>
                <li>• Drug concentration in blood</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.plot(time_points, cell_count)
ax.set_xlabel('Time (hours)')
ax.set_ylabel('Cell Count')`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/plots/bar.svg" alt="Bar chart" width={120} height={90} />
            </div>
            <h3 className="text-xl font-bold text-purple-400">Bar Chart</h3>
            <p className="text-gray-400 text-sm italic">Comparing categories or groups</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">When to use:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Categorical data</li>
                <li>• Comparing groups</li>
                <li>• Discrete counts</li>
                <li>• Clear group differences</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cell counts per tissue type</li>
                <li>• Mean expression by cancer lineage</li>
                <li>• Number of mutations per gene</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.bar(categories, values)
ax.set_xlabel('Cancer Lineage')
ax.set_ylabel('Mean Expression')`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Histogram */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-amber-400/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/plots/histogram.svg" alt="Histogram" width={120} height={90} />
            </div>
            <h3 className="text-xl font-bold text-amber-400">Histogram</h3>
            <p className="text-gray-400 text-sm italic">Distribution of continuous data</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">When to use:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• One continuous variable</li>
                <li>• See data distribution shape</li>
                <li>• Check for normality</li>
                <li>• Identify skewness/outliers</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Distribution of gene expression</li>
                <li>• Cell size distribution</li>
                <li>• Mutation frequency across genes</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.hist(df['BRCA1'], bins=30)
ax.set_xlabel('BRCA1 Expression')
ax.set_ylabel('Frequency')`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Box Plot */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/plots/box.svg" alt="Box plot" width={120} height={90} />
            </div>
            <h3 className="text-xl font-bold text-bio-blue">Box Plot</h3>
            <p className="text-gray-400 text-sm italic">Compare distributions across groups</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">When to use:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Compare multiple groups</li>
                <li>• Show median, quartiles, outliers</li>
                <li>• Continuous data across categories</li>
                <li>• Compact distribution summary</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Gene expression by cancer type</li>
                <li>• Cell viability across treatments</li>
                <li>• Protein levels in different tissues</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <SyntaxHighlighter
                code={`fig, ax = plt.subplots()
ax.boxplot([group1, group2, group3])
ax.set_xticklabels(['Control', 'Drug A', 'Drug B'])
ax.set_ylabel('Expression Level')`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Violin Plot */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <Image src="/plots/violin.svg" alt="Violin plot" width={120} height={90} />
            </div>
            <h3 className="text-xl font-bold text-bio-green">Violin Plot</h3>
            <p className="text-gray-400 text-sm italic">Box plot + full distribution shape</p>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">When to use:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Like box plot but more detail</li>
                <li>• Show full distribution shape</li>
                <li>• Reveal bimodal distributions</li>
                <li>• Multiple groups comparison</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Examples:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cell cycle phase distributions</li>
                <li>• Expression patterns across lineages</li>
                <li>• Multimodal phenotype data</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-3">
              <SyntaxHighlighter
                code={`import seaborn as sns
fig, ax = plt.subplots()
sns.violinplot(data=df, x='lineage',
               y='BRCA1', ax=ax)`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decision Guide */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🎯 Quick Decision Guide
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-white/90 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">One Variable:</p>
            <p className="text-xs">Histogram (distribution) or Bar chart (categories)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">Two Variables:</p>
            <p className="text-xs">Scatter (correlation) or Line (trend over time)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">Groups Comparison:</p>
            <p className="text-xs">Box plot or Violin plot (show distributions)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
