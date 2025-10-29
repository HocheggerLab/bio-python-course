export default function Lecture5Notebooks() {
  const notebooks = [
    {
      id: 1,
      title: "🔍 Handling Missing Values",
      description: "Learn strategies for dealing with missing data in biological datasets",
      badge: "Available",
      topics: [
        "Identifying missing values in DataFrames",
        "Strategies for handling NaN values",
        "Filtering and cleaning datasets",
        "Imputation techniques",
        "Best practices for biological data"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N1_missing_values.ipynb",
      available: true
    },
    {
      id: 2,
      title: "📊 SciPy Statistical Analysis",
      description: "Master statistical testing with SciPy for biological data",
      badge: "Available",
      topics: [
        "T-tests and statistical significance",
        "Correlation analysis",
        "Chi-square tests",
        "P-values and interpretation",
        "Choosing the right statistical test"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N2_scipy_stats.ipynb",
      available: true
    },
    {
      id: 3,
      title: "🔧 Creating New DataFrames",
      description: "Build and manipulate DataFrames for custom analyses",
      badge: "Available",
      topics: [
        "Creating DataFrames from scratch",
        "Combining multiple data sources",
        "Adding calculated columns",
        "Reshaping and transforming data",
        "Building analysis pipelines"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N3_create_new_dfs.ipynb",
      available: true
    },
    {
      id: 4,
      title: "🎯 False Discovery Rate (FDR)",
      description: "Control for multiple testing in genomic analyses",
      badge: "Available",
      topics: [
        "Understanding multiple testing problem",
        "Bonferroni correction",
        "Benjamini-Hochberg FDR",
        "Interpreting adjusted p-values",
        "Application to gene expression data"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N4_FDR.ipynb",
      available: true
    },
    {
      id: 5,
      title: "🎨 Seaborn Visualization",
      description: "Create publication-ready plots with Seaborn",
      badge: "Available",
      topics: [
        "Advanced plotting with Seaborn",
        "Statistical visualizations",
        "Customizing plot aesthetics",
        "Multi-panel figures",
        "Publication-quality graphics"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N5_seaborn.ipynb",
      available: true
    },
    {
      id: 6,
      title: "🔢 Working with Sets",
      description: "Use Python sets for efficient biological data operations",
      badge: "Available",
      topics: [
        "Set operations and theory",
        "Finding unique elements",
        "Set intersections and unions",
        "Comparing gene lists",
        "Venn diagram analysis"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N6_sets.ipynb",
      available: true
    },
    {
      id: 7,
      title: "🧬 End-to-End Analysis Project",
      description: "Complete biological data analysis from start to finish",
      badge: "Apply It!",
      topics: [
        "Full analysis workflow",
        "Data cleaning and preparation",
        "Statistical testing pipeline",
        "Advanced visualizations",
        "Interpreting biological results"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_P1_E2Eanalysis.ipynb",
      available: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-darker to-bio-dark py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📊 <span className="text-gradient">Lecture 5: Advanced Statistical Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive notebooks for statistical testing, data visualization, FDR correction,
            and comprehensive biological data analysis.
          </p>
        </div>

        {/* Getting Started Section */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-yellow">
          <h2 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center">
            🎯 Getting Started
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-bio-yellow">Master statistical testing</strong> - Learn to apply appropriate tests to biological data.</p>
            <p><strong className="text-bio-yellow">Create publication-ready plots</strong> - Use Seaborn for professional visualizations.</p>
            <p><strong className="text-bio-yellow">End-to-end analysis</strong> - Complete a full biological data analysis workflow.</p>
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
                  ? notebook.badge === 'Apply It!'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-bio-green/20 text-bio-green'
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
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="mb-2"><strong className="text-bio-green">Data Preparation:</strong> Handle missing values and clean datasets</p>
              <p><strong className="text-bio-green">Statistical Testing:</strong> Apply SciPy tests to biological data</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Visualization:</strong> Create publication-ready plots with Seaborn</p>
              <p><strong className="text-bio-green">Integration:</strong> Complete end-to-end analysis project</p>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="bg-gradient-to-r from-purple-900/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
            🎓 Skills You'll Master
          </h2>
          <p className="text-gray-300 mb-4">
            By completing these notebooks, you'll be able to:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Handle and clean messy biological datasets
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Perform appropriate statistical tests
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Control for multiple testing with FDR
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Create publication-quality visualizations
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Build complete analysis pipelines
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Interpret and communicate statistical results
            </li>
          </ul>
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
