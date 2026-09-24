import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide19WhatWeLearned() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        What We <GradientText>Learned Today</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Main achievements */}
        <div className="bg-gradient-to-r from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🎯 Today's Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🏗️</span>
                Object-Oriented Programming
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Understanding <span className="text-bio-blue font-semibold">classes</span> as data containers</li>
                <li>• Creating <span className="text-amber-400 font-semibold">methods</span> to process data</li>
                <li>• Building reusable, organized code structures</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🐼</span>
                Pandas Data Analysis
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Loading and exploring <span className="text-bio-green font-semibold">DataFrames</span></li>
                <li>• Filtering data with <span className="text-purple-400 font-semibold">boolean indexing</span></li>
                <li>• Computing statistics and <span className="text-amber-400 font-semibold">sorting results</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* OOP Concepts */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            🏗️ Object-Oriented Programming Mastery
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">Classes as Data Containers</h4>
              <SyntaxHighlighter
                code={`class Gene:
    def __init__(self, name, sequence):
        self.name = name
        self.sequence = sequence

    def get_length(self):
        return len(self.sequence)

    def get_gc_content(self):
        gc_count = self.sequence.count('G') + self.sequence.count('C')
        return gc_count / len(self.sequence) * 100

# Create and use objects
my_gene = Gene("BRCA1", "ATCGATCG")
print(f"Length: {my_gene.get_length()}")
print(f"GC%: {my_gene.get_gc_content():.1f}%")`}
                language="python"
              />
            </div>
            <div>
              <h4 className="text-bio-green font-semibold mb-3">Key OOP Benefits</h4>
              <div className="space-y-4">
                <div className="bg-bio-dark/50 rounded-lg p-3">
                  <h5 className="text-bio-blue font-semibold text-sm mb-2">📦 Organization</h5>
                  <p className="text-gray-300 text-xs">Group related data and functions together</p>
                </div>
                <div className="bg-bio-dark/50 rounded-lg p-3">
                  <h5 className="text-purple-400 font-semibold text-sm mb-2">🔄 Reusability</h5>
                  <p className="text-gray-300 text-xs">Create multiple instances with same behavior</p>
                </div>
                <div className="bg-bio-dark/50 rounded-lg p-3">
                  <h5 className="text-amber-400 font-semibold text-sm mb-2">🎯 Clarity</h5>
                  <p className="text-gray-300 text-xs">Self-documenting, intuitive code structure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pandas Concepts */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4">
            🐼 Pandas Data Analysis Pipeline
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">1. Load & Explore</h4>
              <SyntaxHighlighter
                code={`# Load data
df = pd.read_csv('data.csv')

# Explore structure
print(df.head())
print(df.shape)
print(df.columns)
print(df.info())`}
                language="python"
              />
            </div>
            <div>
              <h4 className="text-bio-green font-semibold mb-3">2. Filter & Select</h4>
              <SyntaxHighlighter
                code={`# Boolean filtering
breast_df = df.loc[
    df['oncotree_lineage'] == 'Breast'
]

# Column selection
gene_columns = df.columns[4:]
gene_data = breast_df[gene_columns]`}
                language="python"
              />
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-3">3. Analyze & Sort</h4>
              <SyntaxHighlighter
                code={`# Calculate statistics
means = gene_data.mean()

# Sort results
top_genes = means.sort_values(
    ascending=True
).head(10)

print(top_genes)`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Key takeaways */}
        <div className="bg-gradient-to-br from-amber-400/10 to-bio-yellow/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            💡 Key Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-purple-400 font-semibold mb-3">🏗️ OOP Mindset</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Think in terms of <span className="text-bio-blue font-semibold">objects</span> with properties and behaviors</li>
                <li>• Use classes to model <span className="text-bio-green font-semibold">real-world entities</span> (genes, proteins, cells)</li>
                <li>• Methods make your objects <span className="text-amber-400 font-semibold">smart and interactive</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-bio-blue font-semibold mb-3">📊 Data Analysis Workflow</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Always <span className="text-bio-green font-semibold">explore</span> your data first</li>
                <li>• Use <span className="text-purple-400 font-semibold">boolean indexing</span> for precise filtering</li>
                <li>• Combine <span className="text-amber-400 font-semibold">statistics + sorting</span> to find patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real-world application */}
        <div className="bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-5">
          <h4 className="text-bio-green font-semibold mb-3 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🧬</span>
            Real-World Impact: From Code to Cancer Research
          </h4>
          <div className="text-center space-y-2">
            <p className="text-gray-300 text-sm">
              Today we identified <span className="text-red-400 font-semibold">essential genes</span> in breast and myeloid cancers using the same techniques used in
            </p>
            <p className="text-gray-300 text-sm">
              real cancer research labs worldwide. Your code can now analyze datasets with
              <span className="text-bio-blue font-semibold"> millions of data points</span>!
            </p>
            <p className="text-bio-yellow font-semibold text-sm mt-3">
              🎯 You're now equipped to tackle real biological big data challenges!
            </p>
          </div>
        </div>

        {/* Congratulations */}
        <div className="text-center bg-gradient-to-r from-purple-500/20 to-bio-blue/20 rounded-xl p-6">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-bio-green mb-2">Congratulations!</h3>
          <p className="text-gray-300 mb-4">
            You've mastered <span className="text-purple-400 font-semibold">Object-Oriented Programming</span> and
            <span className="text-bio-blue font-semibold"> Pandas data analysis</span>
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_P1_biological_data_analysis_toolkit.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-green to-bio-blue hover:from-bio-green/80 hover:to-bio-blue/80 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            <span>Practice Your Skills! 🧪</span>
          </a>
        </div>
      </div>
    </>
  )
}