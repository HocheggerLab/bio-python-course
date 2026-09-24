'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide05DataInspection() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Data Inspection: <GradientText>Quality Control Checks</GradientText> 🔍
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Essential pandas methods to understand your dataset before analysis
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Left Column: Basic Structure */}
        <div className="space-y-4">
          {/* 1. Load & Preview */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">1️⃣</span>
              <h3 className="text-lg font-bold text-bio-blue">Load & Preview</h3>
            </div>
            <SyntaxHighlighter
              code={`# Load data from URL or file
df = pd.read_csv('expression_data.csv')

# First look
df.head()  # First 5 rows
df.tail()  # Last 5 rows`}
              language="python"
            />
            <p className="text-gray-400 text-sm mt-2">
              ✓ Check if data loaded correctly
            </p>
          </div>

          {/* 2. Dimensions */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-lg font-bold text-purple-400">Dataset Dimensions</h3>
            </div>
            <SyntaxHighlighter
              code={`# How big is the dataset?
df.shape  # (rows, columns)

# Example output:
# (89, 17130)
# 89 cell lines × 17,130 columns`}
              language="python"
            />
            <p className="text-gray-400 text-sm mt-2">
              ✓ Understand data scale
            </p>
          </div>

          {/* 3. Data Types */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-lg font-bold text-bio-green">Data Types</h3>
            </div>
            <SyntaxHighlighter
              code={`# Check column types
df.dtypes

# Detailed info
df.info()
# Shows: memory usage, non-null counts
# float64: numeric data
# object: strings/categorical`}
              language="python"
            />
            <p className="text-gray-400 text-sm mt-2">
              ✓ Verify correct data types
            </p>
          </div>
        </div>

        {/* Right Column: Data Quality */}
        <div className="space-y-4">
          {/* 4. Statistical Summary */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-amber-400/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-lg font-bold text-amber-400">Statistical Summary</h3>
            </div>
            <SyntaxHighlighter
              code={`# Summary stats for numeric columns
df.describe()

# Shows for each column:
# count, mean, std
# min, 25%, 50%, 75%, max`}
              language="python"
            />
            <p className="text-gray-400 text-sm mt-2">
              ✓ Spot outliers & unexpected ranges
            </p>
          </div>

          {/* 5. Missing Values */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-red-400/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">5️⃣</span>
              <h3 className="text-lg font-bold text-red-400">Missing Values</h3>
            </div>
            <SyntaxHighlighter
              code={`# Count NaN values per column
df.isnull().sum()

# Total missing values
df.isnull().sum().sum()

# Percentage missing
(df.isnull().sum() / len(df)) * 100`}
              language="python"
            />
            <p className="text-gray-400 text-sm mt-2">
              ✓ Identify data gaps to handle
            </p>
          </div>

          {/* 6. Categorical Analysis */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-yellow/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">6️⃣</span>
              <h3 className="text-lg font-bold text-bio-yellow">Categorical Data</h3>
            </div>
            <SyntaxHighlighter
              code={`# Unique values in category
df['disease_type'].unique()

# Count of each category
df['lineage'].value_counts()

# Number of unique values
df['cell_line'].nunique()`}
              language="python"
            />
            <p className="text-gray-400 text-sm mt-2">
              ✓ Understand categorical variables
            </p>
          </div>
        </div>
      </div>

      {/* Real Dataset Example */}
      <div className="bg-gradient-to-br from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-3 text-center">
          📊 Our DepMap Expression Dataset
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📏</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Shape</h4>
            <p className="text-gray-300 text-sm">89 cell lines × 17,130 columns</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🧬</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Gene Expression</h4>
            <p className="text-gray-300 text-sm">17,121 float64 columns</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📝</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Metadata</h4>
            <p className="text-gray-300 text-sm">9 object columns (categorical)</p>
          </div>
        </div>
        <div className="mt-4 bg-bio-green/10 rounded-lg p-3 text-center">
          <p className="text-bio-green font-semibold">✅ Data Quality: Excellent</p>
          <p className="text-gray-300 text-sm">Only 1 NaN value in entire dataset (0.00%)</p>
        </div>
      </div>

      {/* Practice Notebook Link */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🎯 Practice These Checks!
        </h3>
        <p className="text-white/90 text-center mb-4">
          Work through data inspection step-by-step with real DepMap expression data
        </p>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N2_data_inspection.ipynb"
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
