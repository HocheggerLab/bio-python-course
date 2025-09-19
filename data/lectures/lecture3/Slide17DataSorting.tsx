import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide17DataSorting() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Step 3: <GradientText>Sorting Data</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Core concept */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-green/10 border border-purple-500/30 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-purple-400 mb-3 text-center">
            📊 Finding the Most Important Data
          </h3>
          <p className="text-gray-300 text-center">
            Sort your data to discover patterns, rankings, and extremes - perfect for finding essential genes!
          </p>
        </div>

        {/* Basic sorting patterns */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🔧 Sorting with .sort_values()
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold text-sm mb-3">Basic Sorting</h4>
              <SyntaxHighlighter
                code={`# Sort by one column (ascending by default)
df.sort_values('gene_effect')

# Sort descending (highest to lowest)
df.sort_values('gene_effect', ascending=False)

# Sort and get top 10
df.sort_values('gene_effect').head(10)

# Sort and get bottom 10 (most negative)
df.sort_values('gene_effect').tail(10)`}
                language="python"
              />
            </div>

            <div>
              <h4 className="text-bio-blue font-semibold text-sm mb-3">Advanced Sorting</h4>
              <SyntaxHighlighter
                code={`# Sort by multiple columns
df.sort_values(['lineage', 'gene_effect'])

# Mixed sort directions
df.sort_values(['lineage', 'gene_effect'],
               ascending=[True, False])

# Sort Series (for our gene means)
gene_means.sort_values(ascending=False)

# Reset index after sorting
df.sort_values('gene_effect').reset_index(drop=True)`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Our specific use case */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            🧬 Finding Essential Genes in Our Data
          </h3>

          <SyntaxHighlighter
            code={`# After filtering and calculating means for breast cancer
breast_df = df.loc[df['oncotree_lineage'] == 'Breast']
gene_columns = ['A1BG', 'A1CF', 'A2M', ...]  # All gene columns
breast_means = breast_df[gene_columns].mean()

# Sort to find most essential genes (most negative scores)
most_essential = breast_means.sort_values(ascending=True)
print("Top 10 most essential genes in breast cancer:")
print(most_essential.head(10))

# Or find genes that inhibit growth (most positive)
growth_inhibitors = breast_means.sort_values(ascending=False)
print("Top 10 growth inhibitor genes:")
print(growth_inhibitors.head(10))`}
            language="python"
          />
        </div>

        {/* Key sorting concepts */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-blue/30 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-bio-blue mb-4">
            💡 Key Sorting Concepts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">📈 Ascending vs Descending</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">ascending=True</code>: 1, 2, 3...</li>
                <li>• <code className="text-bio-yellow">ascending=False</code>: 3, 2, 1...</li>
                <li>• Essential genes = most negative!</li>
              </ul>
            </div>

            <div className="bg-amber-500/10 rounded-lg p-3">
              <h4 className="text-amber-400 font-semibold text-sm mb-2">🎯 Getting Top Results</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">.head(n)</code>: first n rows</li>
                <li>• <code className="text-bio-yellow">.tail(n)</code>: last n rows</li>
                <li>• <code className="text-bio-yellow">.nlargest(n)</code>: top n values</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-3">
              <h4 className="text-bio-green font-semibold text-sm mb-2">⚙️ Sorting Tips</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Sort doesn't modify original data</li>
                <li>• Use <code className="text-bio-yellow">inplace=True</code> to modify</li>
                <li>• Can sort any column type</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Remember the goal */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-5">
          <h4 className="text-bio-blue font-semibold mb-3 text-center">🎯 Our Goal: Top 10 Essential Genes</h4>
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-2">
              Remember: In CRISPR data, <span className="text-red-400 font-semibold">negative scores = essential genes</span>
            </p>
            <p className="text-bio-yellow text-sm font-semibold">
              Most essential = most negative = sort ascending + head(10)
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-amber-400/10 rounded-xl p-4">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Sorting!
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Master data sorting with <span className="text-bio-blue font-semibold">hands-on practice</span> using real cancer data
          </p>

          {/* Placeholder for Colab Link - you'll add the actual link */}
          <div className="inline-flex items-center gap-2 bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Notebook Coming Soon
          </div>
        </div>
      </div>
    </>
  )
}