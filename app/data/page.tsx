'use client'

import Link from 'next/link'

export default function SampleDataPage() {
  const datasets = [
    {
      id: "depmap-complete",
      title: "Complete DepMap Dataset",
      version: "24Q2",
      description: "Complete gene dependency dataset from the Cancer Dependency Map project",
      details: [
        "~18,000 genes across cancer cell lines",
        "CRISPR knockout dependency scores",
        "Cell line metadata including cancer type",
        "Comprehensive dataset for advanced analysis"
      ],
      fileSize: "~45 MB",
      format: "CSV",
      downloadUrl: "https://zenodo.org/records/17161166/files/combined_model_crispr_data.csv?download=1",
      usedIn: "Lecture 3",
      difficulty: "Advanced",
      icon: "🧬"
    },
    {
      id: "depmap-filtered",
      title: "Filtered DepMap Dataset",
      version: "24Q2",
      description: "Curated subset focusing on breast and myeloid cancers",
      details: [
        "Breast and myeloid cancer cell lines only",
        "Same gene dependency data structure",
        "Smaller dataset perfect for learning",
        "Ideal for classroom exercises"
      ],
      fileSize: "~12 MB",
      format: "CSV",
      downloadUrl: "https://zenodo.org/records/17098555/files/combined_model_crispr_data_filtered.csv?download=1",
      usedIn: "Lecture 3",
      difficulty: "Beginner-Friendly",
      icon: "🎯"
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner-Friendly': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Advanced': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors">
          ← Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            Sample Datasets
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real biological datasets for practicing data analysis and building your Python skills.
            All datasets are research-grade and used in published studies.
          </p>
        </div>

        {/* About DepMap */}
        <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-bio-blue mb-4">
              📊 About the Cancer Dependency Map (DepMap)
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto">
              The Cancer Dependency Map is a genome-wide CRISPR screening dataset that measures
              how dependent cancer cell lines are on each gene for survival. High dependency scores
              indicate genes that are essential for cancer cell survival.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">🔬</div>
              <div className="font-semibold text-bio-blue">CRISPR Screening</div>
              <div className="text-sm text-gray-300">Systematic gene knockouts</div>
            </div>
            <div className="text-center p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">🧪</div>
              <div className="font-semibold text-bio-blue">Cancer Cell Lines</div>
              <div className="text-sm text-gray-300">Diverse cancer types</div>
            </div>
            <div className="text-center p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">📈</div>
              <div className="font-semibold text-bio-blue">Dependency Scores</div>
              <div className="text-sm text-gray-300">Gene essentiality data</div>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://depmap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bio-blue hover:text-bio-yellow transition-colors"
            >
              Learn more about DepMap
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Datasets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-bio-blue mb-8 text-center">
            📁 Available Datasets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {datasets.map((dataset) => (
              <div key={dataset.id} className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{dataset.icon}</div>
                  <h3 className="text-xl font-bold text-bio-blue mb-2">
                    {dataset.title}
                  </h3>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-bio-blue/20 text-bio-blue text-xs rounded border border-bio-blue/30">
                      {dataset.version}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded border ${getDifficultyColor(dataset.difficulty)}`}>
                      {dataset.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {dataset.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-bio-yellow mb-3">Dataset Features:</h4>
                  <ul className="space-y-2">
                    {dataset.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-bio-green mr-2 mt-1">•</span>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-bio-darker/50 p-3 rounded-lg">
                    <div className="font-semibold text-bio-yellow">Used In:</div>
                    <div className="text-gray-300">{dataset.usedIn}</div>
                  </div>
                  <div className="bg-bio-darker/50 p-3 rounded-lg">
                    <div className="font-semibold text-bio-yellow">File Size:</div>
                    <div className="text-gray-300">{dataset.fileSize}</div>
                  </div>
                </div>

                <a
                  href={dataset.downloadUrl}
                  download
                  className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
                >
                  Download CSV ({dataset.fileSize})
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Data Structure Info */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-green-500/10 border border-bio-blue/40 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            📋 Dataset Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-bio-yellow mb-3">Columns Include:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span><strong>Cell Line ID:</strong> Unique identifier for each cancer cell line</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span><strong>Cancer Type:</strong> Primary cancer classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span><strong>Gene Symbols:</strong> Standard gene nomenclature</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span><strong>Dependency Scores:</strong> CRISPR knockout effects</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-bio-yellow mb-3">Analysis Ideas:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span>Find genes essential across all cancer types</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span>Identify cancer-specific dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span>Compare dependency patterns between cancers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">•</span>
                  <span>Discover potential drug targets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-8">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            💡 How to Use These Datasets
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="font-semibold text-white mb-2">Download</h3>
              <p className="text-gray-300 text-sm">
                Click download to save the CSV file to your computer
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="font-semibold text-white mb-2">Load in Python</h3>
              <p className="text-gray-300 text-sm">
                Use pandas.read_csv() to import the data into your notebook
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="font-semibold text-white mb-2">Explore & Analyze</h3>
              <p className="text-gray-300 text-sm">
                Follow along with lecture notebooks to discover biological insights
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-bio-blue/10 rounded-lg">
            <h4 className="font-semibold text-bio-blue mb-2">📝 Quick Start Code:</h4>
            <code className="text-sm text-gray-300 block">
              import pandas as pd<br/>
              df = pd.read_csv('combined_model_crispr_data_filtered.csv')<br/>
              df.head()
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}