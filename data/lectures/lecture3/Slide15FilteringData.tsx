import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide15FilteringData() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Step 1: <GradientText>Filtering DataFrames</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Core concept */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-bio-blue mb-3 text-center">
            🎯 The Power of Boolean Filtering
          </h3>
          <p className="text-gray-300 text-center">
            Select rows that meet specific conditions - like SQL WHERE or Excel filters, but more powerful!
          </p>
        </div>

        {/* Basic filtering patterns */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            📖 General Filtering Patterns
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-400 font-semibold text-sm mb-3">Single Condition</h4>
              <SyntaxHighlighter
                code={`# Basic pattern: df.loc[condition]

# Equals
df.loc[df['column'] == 'value']

# Greater than
df.loc[df['age'] > 30]

# String contains
df.loc[df['gene'].str.contains('BRCA')]`}
                language="python"
              />
            </div>

            <div>
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Multiple Conditions</h4>
              <SyntaxHighlighter
                code={`# Use & (and), | (or), ~ (not)
# Note: Need parentheses!

# AND condition
df.loc[(df['age'] > 30) & (df['sex'] == 'F')]

# OR condition
df.loc[(df['type'] == 'A') | (df['type'] == 'B')]

# NOT condition
df.loc[~df['column'].isnull()]`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Our specific case */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            🧬 Filtering Our Cancer Data
          </h3>

          <SyntaxHighlighter
            code={`# Filter for breast cancer cell lines
breast_df = df.loc[df['oncotree_lineage'] == 'Breast']
print(f"Found {len(breast_df)} breast cancer cell lines")

# Filter for myeloid cancer cell lines
myeloid_df = df.loc[df['oncotree_lineage'] == 'Myeloid']
print(f"Found {len(myeloid_df)} myeloid cancer cell lines")

# Advanced: Get both types in one DataFrame
both_types = df.loc[(df['oncotree_lineage'] == 'Breast') |
                     (df['oncotree_lineage'] == 'Myeloid')]

# Alternative using .isin()
cancer_types = ['Breast', 'Myeloid']
both_types = df.loc[df['oncotree_lineage'].isin(cancer_types)]`}
            language="python"
          />
        </div>

        {/* Common filtering operations */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🔧 Useful Filtering Methods
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">String Methods</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">.str.contains('text')</code></li>
                <li>• <code className="text-bio-yellow">.str.startswith('A')</code></li>
                <li>• <code className="text-bio-yellow">.str.upper()</code></li>
              </ul>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">Null Handling</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">.isnull()</code></li>
                <li>• <code className="text-bio-yellow">.notna()</code></li>
                <li>• <code className="text-bio-yellow">.dropna()</code></li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-3">
              <h4 className="text-bio-green font-semibold text-sm mb-2">Value Checks</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">.isin(['A', 'B'])</code></li>
                <li>• <code className="text-bio-yellow">.between(0, 100)</code></li>
                <li>• <code className="text-bio-yellow">.duplicated()</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pro tip */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-4">
          <h4 className="text-orange-400 font-semibold mb-2 text-center">⚠️ Common Gotcha</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <p className="text-red-400 font-semibold mb-1">❌ Wrong (Python and/or)</p>
              <code className="text-gray-400">df.loc[df['x'] &gt; 5 and df['y'] &lt; 10]</code>
            </div>
            <div className="text-center">
              <p className="text-bio-green font-semibold mb-1">✅ Correct (Pandas &/|)</p>
              <code className="text-bio-yellow">df.loc[(df['x'] &gt; 5) &amp; (df['y'] &lt; 10)]</code>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Always use & | ~ with parentheses!</p>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-amber-400/10 rounded-xl p-4">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Time!
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Head to our <span className="text-bio-blue font-semibold">Google Colab notebook</span> to practice filtering with real cancer data
          </p>

          {/* Colab Link Button */}
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N4_pandas_filtering.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Practice Pandas Filtering
          </a>
        </div>
      </div>
    </>
  )
}