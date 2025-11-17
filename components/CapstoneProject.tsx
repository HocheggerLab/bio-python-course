import Link from 'next/link'

export default function CapstoneProject() {
  const features = [
    "Explore large gene effect datasets from DepMap",
    "Analyze gene expression patterns across cancer cell lines",
    "Perform correlation analysis to identify genetic dependencies",
    "Create publication-ready visualizations of genomic data"
  ]

  return (
    <div className="card group border-bio-yellow">
      <span className="inline-block px-3 py-1 bg-bio-yellow/20 text-bio-yellow text-sm rounded-full font-semibold mb-4">
        Capstone Project
      </span>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🧬</span>
        <h3 className="text-xl font-bold">Become a Bioinformatician</h3>
      </div>
      <p className="text-gray-300 mb-6">
        Explore large gene effect and expression data with EDA and correlation analysis:
      </p>
      <ul className="space-y-2 text-gray-300 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-bio-yellow mr-2">★</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-4">
        <Link
          href="/projects/depmap-analysis"
          className="block w-full bg-gradient-to-r from-bio-yellow to-bio-green hover:from-bio-yellow/80 hover:to-bio-green/80 text-bio-dark text-center px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
        >
          <span className="inline-flex items-center gap-2">
            <span>📊</span>
            <span>View Project Details</span>
          </span>
        </Link>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/W11assignment/Project2DataImport.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-bio-blue/20 hover:bg-bio-blue/30 text-bio-blue border border-bio-blue/30 text-center px-4 py-2 rounded-lg font-semibold transition-all text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <span>📥</span>
              <span>Data Setup</span>
            </span>
          </a>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/W11assignment/Project2DepMapAnalysis.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/30 text-center px-4 py-2 rounded-lg font-semibold transition-all text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <span>🔬</span>
              <span>Analysis Notebook</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}