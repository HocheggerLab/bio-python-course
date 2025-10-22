export default function Lecture4Notebooks() {
  const notebooks = [
    {
      id: 1,
      title: "⚡ Pandas Vectorisation",
      description: "Harness NumPy's power for lightning-fast data operations",
      badge: "Available",
      topics: [
        "NumPy arrays vs Python lists",
        "Vectorized operations on DataFrames",
        "Broadcasting for efficient computations",
        "Performance comparison: loops vs vectorization",
        "100-1000× speed improvements"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N1_vectorisation.ipynb",
      available: true
    },
    {
      id: 2,
      title: "📊 Data Inspection & Quality Control",
      description: "Master exploratory data analysis techniques",
      badge: "Available",
      topics: [
        "Checking data structure with .head(), .info(), .describe()",
        "Identifying missing values and outliers",
        "Understanding data types and ranges",
        "Quality control for biological datasets",
        "Building good EDA habits"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N2_data_inspection.ipynb",
      available: true
    },
    {
      id: 3,
      title: "🔄 GroupBy Operations",
      description: "Split-Apply-Combine for comparing cancer types",
      badge: "Available",
      topics: [
        "Understanding the split-apply-combine pattern",
        "Grouping by cancer lineage",
        "Aggregating with .mean(), .std(), .count()",
        "Using .agg() for multiple statistics",
        "Comparing gene expression across groups"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N3_groupby.ipynb",
      available: true
    },
    {
      id: 4,
      title: "📊 Introduction to Matplotlib",
      description: "Create publication-quality scientific figures",
      badge: "Available",
      topics: [
        "The fig, ax API - professional plotting standard",
        "Understanding Figure and Axes objects",
        "Customizing plots with labels and titles",
        "Saving figures for publications",
        "Best practices for scientific visualization"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N4_matplotlib_intro.ipynb",
      available: true
    },
    {
      id: 5,
      title: "📈 Histograms & Data Distribution",
      description: "Visualize how your data is distributed",
      badge: "Available",
      topics: [
        "Creating histograms with ax.hist()",
        "Choosing appropriate bin numbers",
        "Using .flatten() to analyze all genes at once",
        "Understanding distribution shapes",
        "Identifying normal vs skewed data"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N5_histogram.ipynb",
      available: true
    },
    {
      id: 6,
      title: "🎨 Creating Subplots",
      description: "Compare multiple genes in multi-panel figures",
      badge: "Available",
      topics: [
        "Side-by-side subplots (1 row, 2 columns)",
        "Stacked subplots (2 rows, 1 column)",
        "Grid layouts (2×2 and beyond)",
        "Shared axes for better comparisons",
        "Using tight_layout() for professional figures"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N6_subplots.ipynb",
      available: true
    },
    {
      id: 7,
      title: "🔍 Scatter Plots & Correlations",
      description: "Discover relationships between genes",
      badge: "Available",
      topics: [
        "Creating scatter plots with ax.scatter()",
        "BRCA1 vs BRCA2 expression patterns",
        "TSC1 vs TSC2 - strong correlations",
        "Coloring points by cancer type",
        "Identifying co-regulated genes"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N7_scatterplots.ipynb",
      available: true
    },
    {
      id: 8,
      title: "📦 Box Plots for Group Comparisons",
      description: "Compare distributions across cancer types",
      badge: "Available",
      topics: [
        "Understanding box plot anatomy (Q1, median, Q3, IQR)",
        "Creating box plots with matplotlib and pandas",
        "Comparing gene expression across lineages",
        "Identifying outliers and variability",
        "Interpreting biological significance"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N8_boxplots.ipynb",
      available: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-darker to-bio-dark py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📊 <span className="text-gradient">Lecture 4: Exploratory Data Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master data exploration and visualization with pandas, matplotlib, and real gene expression data.
            Transform raw data into biological insights through powerful visual analysis.
          </p>
        </div>

        {/* Getting Started Section */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-yellow">
          <h2 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center">
            🎯 Getting Started
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-bio-yellow">Vectorization for Speed</strong> - Learn why pandas is 100× faster than Python loops.</p>
            <p><strong className="text-bio-yellow">Master GroupBy</strong> - Compare gene expression across cancer types effortlessly.</p>
            <p><strong className="text-bio-yellow">Scientific Visualization</strong> - Create publication-ready figures with matplotlib.</p>
          </div>
        </div>

        {/* Notebooks Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {notebooks.map((notebook) => (
            <div
              key={notebook.id}
              className={`bg-bio-dark/70 border rounded-lg p-6 transition-all duration-300 relative group ${
                notebook.available
                  ? 'border-bio-blue/30 hover:border-bio-blue/60 hover:transform hover:-translate-y-1'
                  : 'border-gray-600/30 opacity-75'
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                notebook.available
                  ? 'bg-bio-green/20 text-bio-green'
                  : notebook.badge === 'Final Project'
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-gray-600/20 text-gray-400'
              }`}>
                {notebook.badge}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 pr-20 ${
                notebook.available ? 'text-bio-blue' : 'text-gray-400'
              }`}>
                {notebook.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {notebook.description}
              </p>

              {/* Topics */}
              <ul className="space-y-1 mb-6">
                {notebook.topics.map((topic, index) => (
                  <li key={index} className="text-sm text-gray-400 flex items-start">
                    <span className={`mr-2 mt-1 ${notebook.available ? 'text-bio-blue' : 'text-gray-500'}`}>▸</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              {notebook.available ? (
                <a
                  href={notebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
                  </svg>
                  Open in Colab
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-green">
          <h2 className="text-2xl font-bold text-bio-green mb-4 flex items-center">
            🗺️ Learning Path
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div>
              <p className="mb-2"><strong className="text-bio-green">Part 1: Data Manipulation</strong></p>
              <p className="text-sm">Vectorization and GroupBy operations for efficient analysis</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Part 2: Data Inspection</strong></p>
              <p className="text-sm">Quality control and exploratory data analysis techniques</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Part 3: Visualization</strong></p>
              <p className="text-sm">Create histograms, scatter plots, and box plots with matplotlib</p>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="bg-gradient-to-r from-purple-900/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
            🚀 Essential EDA Skills You'll Master
          </h2>
          <p className="text-gray-300 mb-4">
            By completing these notebooks, you'll be able to:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Use vectorization for 100× faster data processing
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Compare gene expression across multiple cancer types
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Visualize data distributions with histograms
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Create multi-panel figures for comparisons
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Discover gene correlations with scatter plots
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Identify outliers and variability with box plots
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Apply quality control checks to biological datasets
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Generate publication-ready scientific figures
            </li>
          </ul>
        </div>

        {/* Plot Types Overview */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-blue">
          <h2 className="text-2xl font-bold text-bio-blue mb-4 flex items-center">
            📊 Three Essential Plot Types
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h3 className="text-bio-blue font-bold mb-2">📈 Histograms</h3>
              <p className="text-sm mb-2">Show distribution of a single variable</p>
              <p className="text-xs text-gray-400">
                <strong>Use for:</strong> Understanding data spread, normality, and outliers
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h3 className="text-bio-green font-bold mb-2">🔍 Scatter Plots</h3>
              <p className="text-sm mb-2">Reveal relationships between two genes</p>
              <p className="text-xs text-gray-400">
                <strong>Use for:</strong> Finding correlations, co-regulation, and dependencies
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h3 className="text-purple-400 font-bold mb-2">📦 Box Plots</h3>
              <p className="text-sm mb-2">Compare distributions across groups</p>
              <p className="text-xs text-gray-400">
                <strong>Use for:</strong> Comparing cancer types, identifying group differences
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-700">
          <p className="text-gray-400">
            📚 Part of the <strong className="text-bio-blue">Python for Biologists</strong> course by Helfrid Hochegger
          </p>
          <p className="text-gray-500 text-sm mt-1">
            University of Sussex | Year 3 Biology, Biochemistry & Neuroscience
          </p>
        </div>
      </div>
    </div>
  )
}
