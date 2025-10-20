'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide08GroupByGeneExpression() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        GroupBy with <GradientText>Gene Expression Data</GradientText> 🧬
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Applying groupby to real biological questions with DepMap data
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Question 1: Count Cell Lines */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🔢</div>
            <h3 className="text-xl font-bold text-bio-blue">Count Cell Lines per Lineage</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Question:</h4>
              <p className="text-gray-300 text-sm">
                How many cell lines do we have for each tissue type (lineage)?
              </p>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Solution:</h4>
              <SyntaxHighlighter
                code={`# Count cell lines per lineage
df.groupby('oncotree_lineage').size()

# Output:
# oncotree_lineage
# Blood           25
# Breast          12
# Lung            18
# CNS/Brain        8
# Skin             9
# ...
# dtype: int64`}
                language="python"
              />
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong className="text-bio-yellow">Insight:</strong> We have good representation
                of blood cancers (25 lines) and lung cancers (18 lines) for comparisons!
              </p>
            </div>
          </div>
        </div>

        {/* Question 2: Mean Gene Expression */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-xl font-bold text-bio-green">Average Gene Expression by Lineage</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Question:</h4>
              <p className="text-gray-300 text-sm">
                What's the average BRCA1 expression in each cancer lineage?
              </p>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Solution:</h4>
              <SyntaxHighlighter
                code={`# Mean BRCA1 expression per lineage
df.groupby('oncotree_lineage')['BRCA1'].mean()

# Output:
# oncotree_lineage
# Blood         5.2
# Breast        6.8
# Lung          5.9
# CNS/Brain     4.1
# Skin          5.5
# Name: BRCA1, dtype: float64`}
                language="python"
              />
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong className="text-bio-yellow">Insight:</strong> Breast cancer cells show
                highest BRCA1 expression (6.8) - makes biological sense!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple Genes with .agg() */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">
          🎯 Advanced: Multiple Statistics with .agg()
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Multiple Functions per Gene</h4>
            <SyntaxHighlighter
              code={`# Get mean, std, and count for BRCA1
df.groupby('oncotree_lineage')['BRCA1'].agg([
    'mean',
    'std',
    'count'
])

#                   mean   std  count
# oncotree_lineage
# Blood             5.2   0.8     25
# Breast            6.8   1.2     12
# Lung              5.9   0.9     18
# CNS/Brain         4.1   0.6      8`}
              language="python"
            />
          </div>

          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Multiple Genes at Once</h4>
            <SyntaxHighlighter
              code={`# Compare BRCA1 and TP53 expression
df.groupby('oncotree_lineage')[
    ['BRCA1', 'TP53']
].mean()

#                  BRCA1  TP53
# oncotree_lineage
# Blood             5.2   7.1
# Breast            6.8   6.9
# Lung              5.9   7.8
# CNS/Brain         4.1   6.2`}
              language="python"
            />
          </div>
        </div>

        <div className="mt-4 bg-amber-400/10 rounded-lg p-3">
          <p className="text-amber-400 text-sm text-center">
            💡 <strong>Pro Tip:</strong> Use <code>.agg()</code> when you need multiple statistics
            or want to analyze several genes simultaneously!
          </p>
        </div>
      </div>

      {/* Complex Example: Different Stats per Column */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🔬 Research-Grade Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-bio-yellow font-semibold mb-3">Different Stats per Gene</h4>
            <SyntaxHighlighter
              code={`# Comprehensive analysis
df.groupby('oncotree_lineage').agg({
    'BRCA1': ['mean', 'std'],
    'TP53': ['mean', 'std'],
    'MYC': ['mean', 'std']
})

# Creates multi-level columns:
#                  BRCA1       TP53        MYC
#                   mean  std  mean  std  mean  std
# oncotree_lineage
# Blood             5.2  0.8  7.1  1.2  8.9  1.5
# Breast            6.8  1.2  6.9  0.9  7.2  1.1`}
              language="python"
            />
          </div>
          <div className="flex items-center">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold mb-3">Biological Questions You Can Answer:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Which lineage has highest gene expression?</li>
                <li>• Which cancer type shows most variability?</li>
                <li>• Are expression patterns consistent across types?</li>
                <li>• Which genes differentiate cancer lineages?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          💡 GroupBy Unlocks Comparative Biology
        </h3>
        <p className="text-white/90 text-center">
          <strong>Every comparative question uses groupby:</strong> "How does gene X differ between
          cancer types?", "Which tissue has highest expression?", "Are blood cancers different from
          solid tumors?" GroupBy is your tool for asking these questions!
        </p>
      </div>
    </div>
  )
}
