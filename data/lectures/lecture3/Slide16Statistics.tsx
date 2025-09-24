import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide16Statistics() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Step 2: <GradientText>Calculating Statistics</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Core concept */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-amber-400/10 border border-bio-blue/30 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-bio-blue mb-3 text-center">
            📊 From Individual Scores to Summary Statistics
          </h3>
          <p className="text-gray-300 text-center">
            Transform hundreds of cell line measurements into meaningful averages for each gene
          </p>
        </div>

        {/* Basic statistics operations */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            🔢 Essential Statistical Methods
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold text-sm mb-3">Column-wise Statistics</h4>
              <SyntaxHighlighter
                code={`# Calculate mean for all numeric columns
df.mean()

# Mean for specific columns
df[['A1BG', 'A1CF', 'A2M']].mean()

# Other useful statistics
df.median()    # Middle value
df.std()       # Standard deviation
df.var()       # Variance
df.min()       # Minimum values
df.max()       # Maximum values`}
                language="python"
              />
            </div>

            <div>
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Selecting Gene Columns</h4>
              <SyntaxHighlighter
                code={`# Get all columns except metadata
metadata_cols = ['model_id', 'cell_line_name',
                'oncotree_lineage', 'oncotree_primary_disease']
gene_columns = [col for col in df.columns
                if col not in metadata_cols]

# Or use column slicing
gene_columns = df.columns[4:]  # Skip first 4 metadata columns

# Calculate means for just gene columns
gene_means = df[gene_columns].mean()`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Our specific workflow */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            🧬 Our Gene Analysis Workflow
          </h3>

          <SyntaxHighlighter
            code={`# Step 1: Filter for breast cancer (we already learned this!)
breast_df = df.loc[df['oncotree_lineage'] == 'Breast']
print(f"Found {len(breast_df)} breast cancer cell lines")

# Step 2: Select only gene effect columns
metadata_cols = ['model_id', 'cell_line_name', 'oncotree_lineage', 'oncotree_primary_disease']
gene_columns = [col for col in df.columns if col not in metadata_cols]
print(f"Analyzing {len(gene_columns)} genes")

# Step 3: Calculate mean gene effect for each gene across all breast cancer lines
breast_gene_means = breast_df[gene_columns].mean()
print("Sample of gene means:")
print(breast_gene_means.head())

# Example output:
# A1BG     -0.021
# A1CF     -0.088
# A2M      -0.013
# A2ML1     0.041
# A4GALT   -0.003`}
            language="python"
          />
        </div>

        {/* Understanding the results */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            💡 Understanding Your Results
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-500/10 rounded-lg p-3">
              <h4 className="text-red-400 font-semibold text-sm mb-2">🎯 Negative Means</h4>
              <p className="text-xs text-gray-300 mb-1"><strong>Example:</strong> A1CF = -0.088</p>
              <p className="text-xs text-gray-400">Gene is essential - knocking it out reduces cell survival on average</p>
            </div>

            <div className="bg-gray-500/10 rounded-lg p-3">
              <h4 className="text-gray-400 font-semibold text-sm mb-2">⚪ Near Zero</h4>
              <p className="text-xs text-gray-300 mb-1"><strong>Example:</strong> A4GALT = -0.003</p>
              <p className="text-xs text-gray-400">Gene has little effect - not essential for survival</p>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-3">
              <h4 className="text-bio-green font-semibold text-sm mb-2">📈 Positive Means</h4>
              <p className="text-xs text-gray-300 mb-1"><strong>Example:</strong> A2ML1 = 0.041</p>
              <p className="text-xs text-gray-400">Gene may inhibit growth - knocking out helps cells grow</p>
            </div>
          </div>
        </div>

        {/* Next step preview */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-5">
          <h4 className="text-purple-400 font-semibold mb-3 text-center">🔄 What's Next?</h4>
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-2">
              Now we have <span className="text-bio-blue font-semibold">mean gene effect scores</span> for breast cancer
            </p>
            <p className="text-bio-yellow text-sm font-semibold">
              Next: Sort these means to find the top 10 most essential genes!
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-amber-400/10 rounded-xl p-4">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🧮 Practice Statistics!
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Master pandas statistics with <span className="text-bio-blue font-semibold">hands-on calculations</span> using real data
          </p>

          {/* Placeholder for Colab Link - you'll add the actual link */}
          {/* <div className="inline-flex items-center gap-2 bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Notebook Coming Soon
          </div> */}
         <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N5_statistics.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Practice Statistical Analysis with Pandas
          </a>
        </div>
      </div>
    </>
  )
}