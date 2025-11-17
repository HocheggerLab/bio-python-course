import Link from 'next/link'

export default function DepMapAnalysisProject() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/#final-project"
            className="inline-flex items-center gap-2 text-bio-blue hover:text-bio-blue/80 mb-6 transition-colors"
          >
            ← Back to Final Project
          </Link>
          <div className="text-6xl mb-4">🧬</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DepMap Cancer Dependency Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate gene expression and dependency data to investigate PKMYT1,
            a cell-cycle kinase implicated as a potential cancer target
          </p>
        </div>

        {/* Project Overview Card */}
        <div className="card border-bio-yellow mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-bold">Project Overview</h2>
          </div>
          <p className="text-gray-300 mb-4">
            In this capstone project, you'll work with real cancer genomics data from the
            <a href="https://depmap.org" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline mx-1">
              DepMap project
            </a>
            to understand which cancers depend on PKMYT1 for survival, characterize its
            expression patterns, and discover co-dependent genes through correlation analysis.
          </p>
          <div className="bg-bio-dark/50 rounded-xl p-6 border border-bio-yellow/30">
            <h3 className="text-lg font-semibold text-bio-yellow mb-3">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-bio-yellow">★</span>
                <span>Conduct exploratory data analysis on complex genomic datasets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bio-yellow">★</span>
                <span>Analyze relationships between gene expression and functional dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bio-yellow">★</span>
                <span>Implement correlation analyses across multiple data types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bio-yellow">★</span>
                <span>Integrate multi-omic data to identify therapeutic targets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bio-yellow">★</span>
                <span>Create publication-quality visualizations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="card border-bio-blue mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h2 className="text-2xl font-bold">Getting Started</h2>
          </div>
          <p className="text-gray-300 mb-6">
            This project requires two large datasets from the DepMap project. Follow these
            steps to set up your environment before starting the analysis.
          </p>

          <div className="space-y-4">
            {/* Step 1: Data Import */}
            <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-bio-blue text-bio-dark font-bold rounded-full w-8 h-8 flex items-center justify-center">1</span>
                <h3 className="text-xl font-semibold">Download and Cache Data</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Run the data import notebook to download and cache the CRISPR dependency data
                (~350 MB) and gene expression data (~450 MB) to your Google Drive. This needs
                to be done only once.
              </p>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/W11assignment/Project2DataImport.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 hover:from-bio-blue/80 hover:to-purple-500/80 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span>📥</span>
                <span>Open Data Import Notebook</span>
              </a>
              <div className="mt-4 bg-bio-dark/50 rounded-lg p-4 border-l-4 border-bio-blue">
                <p className="text-sm text-gray-300">
                  <strong className="text-bio-blue">Note:</strong> This notebook will mount your
                  Google Drive and download two CSV files (~800 MB total). The process takes
                  4-6 minutes but only needs to be run once. Future analyses will load from cache
                  in 10-20 seconds.
                </p>
              </div>
            </div>

            {/* Step 2: Main Analysis */}
            <div className="bg-gradient-to-br from-bio-yellow/10 to-bio-green/10 border border-bio-yellow/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-bio-yellow text-bio-dark font-bold rounded-full w-8 h-8 flex items-center justify-center">2</span>
                <h3 className="text-xl font-semibold">Start Your Analysis</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Once your data is cached, open the main analysis notebook to begin your
                investigation of PKMYT1 dependencies across cancer types.
              </p>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/W11assignment/Project2DepMapAnalysis.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-yellow to-bio-green hover:from-bio-yellow/80 hover:to-bio-green/80 text-bio-dark px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span>🔬</span>
                <span>Open Analysis Notebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Structure Section */}
        <div className="card border-purple-500 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📊</span>
            <h2 className="text-2xl font-bold">Project Structure</h2>
          </div>
          <p className="text-gray-300 mb-6">
            The project is divided into four parts, worth a total of 100 marks. Each part
            builds on the previous one to create a comprehensive analysis pipeline.
          </p>

          <div className="space-y-4">
            {/* Part 1 */}
            <div className="bg-bio-dark/50 rounded-xl p-6 border-l-4 border-bio-blue">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-bio-blue">Part 1: Exploratory Data Analysis</h3>
                <span className="bg-bio-blue/20 text-bio-blue px-3 py-1 rounded-full text-sm font-semibold">20 marks</span>
              </div>
              <p className="text-gray-300 mb-3">
                Load and explore the datasets, perform quality control, and characterize PKMYT1
                expression and dependency across different cancer types.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Data loading and initial inspection</li>
                <li>• Quality control and missing value analysis</li>
                <li>• PKMYT1 dependency profiling by cancer type</li>
                <li>• Visualization of key patterns</li>
              </ul>
            </div>

            {/* Part 2 */}
            <div className="bg-bio-dark/50 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-purple-400">Part 2: Correlation Analysis</h3>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">35 marks</span>
              </div>
              <p className="text-gray-300 mb-3">
                Perform genome-wide correlation analysis to identify genes that correlate with
                PKMYT1 dependency and expression. Apply multiple testing correction using FDR.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Genome-wide correlation with PKMYT1 dependency</li>
                <li>• Expression correlation analysis</li>
                <li>• Multiple testing correction (FDR)</li>
                <li>• Volcano plots and statistical visualization</li>
              </ul>
            </div>

            {/* Part 3 */}
            <div className="bg-bio-dark/50 rounded-xl p-6 border-l-4 border-bio-yellow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-bio-yellow">Part 3: Pathway Enrichment</h3>
                <span className="bg-bio-yellow/20 text-bio-yellow px-3 py-1 rounded-full text-sm font-semibold">35 marks</span>
              </div>
              <p className="text-gray-300 mb-3">
                Use GSEApy to perform pathway enrichment analysis on your correlated gene sets.
                Integrate findings across different analyses to identify biological themes.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Gene set enrichment analysis using GSEApy</li>
                <li>• Pathway identification for co-dependent genes</li>
                <li>• Integration of expression and dependency results</li>
                <li>• Biological interpretation of enriched pathways</li>
              </ul>
            </div>

            {/* Part 4 */}
            <div className="bg-bio-dark/50 rounded-xl p-6 border-l-4 border-bio-green">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-bio-green">Part 4: Summary Figure</h3>
                <span className="bg-bio-green/20 text-bio-green px-3 py-1 rounded-full text-sm font-semibold">10 marks</span>
              </div>
              <p className="text-gray-300 mb-3">
                Create a comprehensive multi-panel publication-quality figure that synthesizes
                all your results into a cohesive visual story.
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Multi-panel figure design</li>
                <li>• Publication-quality visualization</li>
                <li>• Clear labeling and legends</li>
                <li>• Effective communication of key findings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assessment Criteria Section */}
        <div className="card border-bio-green mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✓</span>
            <h2 className="text-2xl font-bold">Assessment Criteria</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Your work will be evaluated on both technical execution and scientific communication.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-bio-blue mb-3">Code Quality</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-bio-blue mt-1">★</span>
                  <span>Clear, descriptive variable names following PEP 8</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bio-blue mt-1">★</span>
                  <span>Minimal code duplication using helper functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bio-blue mt-1">★</span>
                  <span>Error-free execution with reproducible outputs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bio-blue mt-1">★</span>
                  <span>Efficient data processing and analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-bio-green mb-3">Scientific Communication</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-bio-green mt-1">★</span>
                  <span>Comprehensive documentation of analytical reasoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bio-green mt-1">★</span>
                  <span>Clear interpretation of biological significance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bio-green mt-1">★</span>
                  <span>Well-labeled, publication-ready visualizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bio-green mt-1">★</span>
                  <span>Thoughtful integration of multi-omic findings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-bio-yellow/10 to-bio-green/10 border border-bio-yellow/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-bio-yellow mb-3">Expected Outputs</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-bio-blue mb-2">Data Files</h4>
                <ul className="space-y-1">
                  <li>• Top 100 dependency-correlated genes (CSV)</li>
                  <li>• Top 100 expression-correlated genes (CSV)</li>
                  <li>• Integrated results table (CSV)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-bio-green mb-2">Visualizations</h4>
                <ul className="space-y-1">
                  <li>• Volcano plots for correlation analysis</li>
                  <li>• Heatmaps of gene dependencies</li>
                  <li>• Multi-panel summary figure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="card border-bio-blue mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📚</span>
            <h2 className="text-2xl font-bold">Resources & Support</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-bio-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-bio-blue mb-3">Required Python Packages</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <p className="font-semibold mb-2">Core Analysis</p>
                  <ul className="space-y-1">
                    <li>• pandas - Data manipulation</li>
                    <li>• numpy - Numerical computing</li>
                    <li>• scipy - Statistical analysis</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Visualization & Enrichment</p>
                  <ul className="space-y-1">
                    <li>• matplotlib / seaborn - Plotting</li>
                    <li>• gseapy - Pathway enrichment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-bio-green mb-3">Useful Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="https://depmap.org" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline">
                    DepMap Project Homepage
                  </a> - Learn more about the Cancer Dependency Map
                </li>
                <li>
                  <a href="https://gseapy.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline">
                    GSEApy Documentation
                  </a> - Guide to pathway enrichment analysis
                </li>
                <li>
                  <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline">
                    Pandas Documentation
                  </a> - Reference for data manipulation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-gray-300 mb-6">
              Start by downloading the data, then dive into the analysis notebook to
              begin your journey into cancer genomics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/W11assignment/Project2DataImport.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 hover:from-bio-blue/80 hover:to-purple-500/80 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span>📥</span>
                <span>1. Download Data</span>
              </a>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/W11assignment/Project2DepMapAnalysis.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-yellow to-bio-green hover:from-bio-yellow/80 hover:to-bio-green/80 text-bio-dark px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span>🔬</span>
                <span>2. Start Analysis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
