'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide04IntroEDA() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Introduction to <GradientText>Exploratory Data Analysis</GradientText> 🔍
      </SlideTitle>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Understanding your data before diving into complex analyses
      </p>

      {/* Two Main Steps */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          📋 The Two Essential Steps of EDA
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-bio-blue/30">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2">1️⃣</div>
              <h4 className="text-xl font-bold text-bio-blue">Data Inspection</h4>
              <p className="text-gray-400 text-sm italic">Know your data inside out</p>
            </div>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 border border-bio-green/30">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2">2️⃣</div>
              <h4 className="text-xl font-bold text-bio-green">Data Visualization</h4>
              <p className="text-gray-400 text-sm italic">See patterns and outliers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Step 1: Data Inspection */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🔎</div>
            <h3 className="text-xl font-bold text-bio-blue">Step 1: Inspect with Pandas</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Check Data Structure</h4>
              <SyntaxHighlighter
                code={`# Load the data
df = pd.read_csv('expression_data.csv')

# How big is it?
print(df.shape)  # (rows, columns)

# What does it look like?
df.head()  # First 5 rows
df.info()  # Column types & memory`}
                language="python"
              />
            </div>

            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Check Data Quality</h4>
              <SyntaxHighlighter
                code={`# Any missing values?
df.isnull().sum()

# Summary statistics
df.describe()  # mean, std, min, max

# Value ranges
df['expression'].min()
df['expression'].max()`}
                language="python"
              />
            </div>

            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-3">Explore Categorical Data</h4>
              <SyntaxHighlighter
                code={`# What categories exist?
df['disease_type'].unique()

# How many of each?
df.groupby('disease_type').size()

# Or use value_counts()
df['lineage'].value_counts()`}
                language="python"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Visualization */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-xl font-bold text-bio-green">Step 2: Visualize Patterns</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Histograms</h4>
              <p className="text-gray-300 text-sm mb-2">Distribution of a single variable</p>
              <SyntaxHighlighter
                code={`import matplotlib.pyplot as plt

# Expression distribution
fig, ax = plt.subplots()
ax.hist(df['gene_expression'], bins=50)
ax.set_xlabel('Expression Level')
ax.set_ylabel('Frequency')`}
                language="python"
              />
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Scatter Plots</h4>
              <p className="text-gray-300 text-sm mb-2">Relationship between two variables</p>
              <SyntaxHighlighter
                code={`# Gene A vs Gene B
fig, ax = plt.subplots()
ax.scatter(df['BRCA1'], df['BRCA2'])
ax.set_xlabel('BRCA1 Expression')
ax.set_ylabel('BRCA2 Expression')`}
                language="python"
              />
            </div>

            <div className="bg-bio-green/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Box Plots</h4>
              <p className="text-gray-300 text-sm mb-2">Compare distributions across groups</p>
              <SyntaxHighlighter
                code={`# Expression by cancer type
fig, ax = plt.subplots()
df.boxplot(column='expression',
           by='cancer_type', ax=ax)
ax.set_ylabel('Expression Level')`}
                language="python"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why EDA Matters */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          💡 Why EDA is Critical for Biological Data
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">🎯</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Catch Errors Early</h4>
            <p className="text-gray-300 text-sm text-center">
              Spot missing values, outliers, and data entry mistakes before analysis
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">🧠</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Form Hypotheses</h4>
            <p className="text-gray-300 text-sm text-center">
              Discover unexpected patterns that lead to biological insights
            </p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">🔬</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Guide Analysis</h4>
            <p className="text-gray-300 text-sm text-center">
              Choose appropriate statistical tests based on data distribution
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🎯 The EDA Mindset
        </h3>
        <p className="text-white/90 text-center">
          <strong>Never run complex analyses without EDA first!</strong> Spend time understanding your data:
          What&apos;s the range? Are there outliers? What&apos;s the distribution? How do groups compare?
          These questions guide every successful data analysis project.
        </p>
      </div>
    </div>
  )
}
