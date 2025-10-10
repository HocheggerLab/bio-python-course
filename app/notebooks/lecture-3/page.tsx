export default function Lecture3Notebooks() {
  const notebooks = [
    {
      id: 1,
      title: "📦 Built-in Python Packages for Biology",
      description: "Discover powerful tools that come with every Python installation",
      badge: "Available",
      topics: [
        "random - Simulations and sampling",
        "collections.Counter - Count nucleotides and amino acids",
        "statistics - Built-in statistical functions",
        "datetime - Experiment timing and tracking",
        "pathlib - Cross-platform file management",
        "csv - Simple data file I/O"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N1_builtin_packages.ipynb",
      available: true
    },
    {
      id: 2,
      title: "🐼 Introduction to Pandas",
      description: "Master DataFrames for analyzing large biological datasets",
      badge: "Available",
      topics: [
        "Creating and loading DataFrames",
        "Selecting rows and columns",
        "Filtering biological data",
        "Basic statistics and summaries",
        "Working with the DepMap dataset"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N2_pandas_introduction.ipynb",
      available: true
    },
    {
      id: 3,
      title: "🧬 DepMap Cancer Dependencies",
      description: "Analyze real cancer cell line dependency data",
      badge: "Available",
      topics: [
        "Loading the DepMap dataset",
        "Exploring cancer cell lines",
        "Finding gene dependencies",
        "Calculating correlations",
        "Identifying similar genes to ATR"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N3_depmap_analysis.ipynb",
      available: true
    },
    {
      id: 4,
      title: "📊 Data Filtering & Selection",
      description: "Advanced techniques for working with large datasets",
      badge: "Available",
      topics: [
        "Boolean indexing with biological data",
        "Filtering by cell line type",
        "Selecting specific genes",
        "Handling missing values",
        "Creating data subsets"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N4_pandas_filtering.ipynb",
      available: true
    },
    {
      id: 5,
      title: "🔬 Statistical Analysis",
      description: "Perform statistical analysis on biological data",
      badge: "Available",
      topics: [
        "Basic statistics with Python",
        "Mean, median, and standard deviation",
        "Understanding biological variation",
        "Statistical significance",
        "Applying statistics to datasets"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N5_statistics.ipynb",
      available: true
    },
    {
      id: 6,
      title: "🔄 Sorting & Ranking Data",
      description: "Sort and rank biological datasets to find insights",
      badge: "Available",
      topics: [
        "Sorting DataFrames by values",
        "Finding top and bottom genes",
        "Multi-column sorting",
        "Ranking gene dependencies",
        "Identifying outliers and extremes"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N6_pandas_sorting.ipynb",
      available: true
    },
    {
      id: 7,
      title: "🧪 Biological Data Analysis Toolkit",
      description: "Real Python tools for comprehensive data analysis!",
      badge: "Apply It!",
      topics: [
        "Complete DepMap analysis pipeline",
        "Gene dependency explorer",
        "Statistical analysis tools",
        "Data visualization helpers",
        "Integrated analysis workflows"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_P1_biological_data_analysis_toolkit.ipynb",
      available: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-darker to-bio-dark py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📊 <span className="text-gradient">Lecture 3: Linear Regression of Cancer Data</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn to analyze massive biological datasets using Python packages like Pandas. 
            Explore real cancer dependency data and discover gene relationships.
          </p>
        </div>

        {/* Getting Started Section */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-yellow">
          <h2 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center">
            🎯 Getting Started
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-bio-yellow">Start with Built-in Packages</strong> - Learn the tools that come free with Python.</p>
            <p><strong className="text-bio-yellow">Master Pandas DataFrames</strong> - Handle millions of data points effortlessly.</p>
            <p><strong className="text-bio-yellow">Real cancer research data</strong> - Work with the same datasets used in actual research.</p>
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
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="mb-2"><strong className="text-bio-green">Week 1:</strong> Built-in packages and basic data handling</p>
              <p><strong className="text-bio-green">Week 2:</strong> Pandas fundamentals and DataFrame operations</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Week 3:</strong> Statistical analysis and correlations</p>
              <p><strong className="text-bio-green">Week 4:</strong> Linear regression modeling</p>
            </div>
          </div>
        </div>

        {/* Project Preview */}
        <div className="bg-gradient-to-r from-purple-900/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
            🚀 Final Project: Cancer Gene Dependency Analysis
          </h2>
          <p className="text-gray-300 mb-4">
            By the end of this lecture series, you'll analyze real cancer research data and:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Load and explore the DepMap cancer dataset (1,200+ cell lines)
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Identify genes with similar dependencies to ATR kinase
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Perform correlation analysis on 30,000+ genes
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Build linear regression models for gene relationships
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Filter and analyze specific cancer types
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Generate publication-ready results and insights
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