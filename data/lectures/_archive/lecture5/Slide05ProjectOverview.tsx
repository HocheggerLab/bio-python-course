import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide05ProjectOverview() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Project Overview</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">End-to-End Analysis Workflow</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🎯 Our Research Question
          </h3>
          <p className="text-gray-300 text-center text-lg">
            Which genes correlate with <span className="text-bio-yellow font-semibold">ATR</span> in cancer cell lines?
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              And if we find the top gene, do they share similar correlation networks?
            </span>
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-bio-blue via-purple-500 to-bio-green" />

          {/* Step 1: EDA */}
          <div className="relative mb-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-bio-blue to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                1
              </div>
              <div className="flex-1 bg-gradient-to-br from-bio-blue/10 to-blue-500/10 border border-bio-blue/30 rounded-xl p-6 mt-2">
                <h3 className="text-xl font-semibold text-bio-blue mb-3">
                  📊 Exploratory Data Analysis (EDA)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-2">What We Do:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Load DepMap dependency data</li>
                      <li>• Check data structure and quality</li>
                      <li>• Handle missing values</li>
                      <li>• Visualize ATR distribution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-bio-yellow font-semibold text-sm mb-2">Why It Matters:</h4>
                    <p className="text-gray-300 text-sm">
                      Understanding our data quality and distribution before analysis ensures reliable results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Correlation Analysis (ATR) */}
          <div className="relative mb-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                2
              </div>
              <div className="flex-1 bg-gradient-to-br from-purple-500/10 to-purple-700/10 border border-purple-500/30 rounded-xl p-6 mt-2">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  🔍 Correlation Analysis: ATR vs All Genes
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-2">What We Do:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Calculate Pearson correlation (17,000+ genes)</li>
                      <li>• Calculate Spearman correlation</li>
                      <li>• Compute p-values for significance</li>
                      <li>• Create volcano plots</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-bio-yellow font-semibold text-sm mb-2">Output:</h4>
                    <p className="text-gray-300 text-sm">
                      List of genes ranked by correlation strength with ATR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Statistical Correction */}
          <div className="relative mb-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                3
              </div>
              <div className="flex-1 bg-gradient-to-br from-amber-400/10 to-orange-500/10 border border-amber-400/30 rounded-xl p-6 mt-2">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  📈 Statistical Correction (FDR)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-2">What We Do:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Apply Benjamini-Hochberg FDR correction</li>
                      <li>• Filter for FDR &lt; 0.05</li>
                      <li>• Identify statistically significant genes</li>
                      <li>• Find top correlated gene (e.g., SLU7)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-bio-yellow font-semibold text-sm mb-2">Why It Matters:</h4>
                    <p className="text-gray-300 text-sm">
                      Testing 17,000 genes = high risk of false positives. FDR correction removes statistical noise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Repeat for Top Gene */}
          <div className="relative mb-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                4
              </div>
              <div className="flex-1 bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-xl p-6 mt-2">
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  🔁 Repeat Analysis: Top Gene vs All Genes
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-2">What We Do:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Run same correlation analysis for SLU7</li>
                      <li>• Find genes correlated with SLU7</li>
                      <li>• Apply FDR correction again</li>
                      <li>• Identify SLU7's correlation network</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-bio-yellow font-semibold text-sm mb-2">Goal:</h4>
                    <p className="text-gray-300 text-sm">
                      Discover which genes are associated with our top ATR partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Network Overlap */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-bio-green to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold z-10">
                5
              </div>
              <div className="flex-1 bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6 mt-2">
                <h3 className="text-xl font-semibold text-bio-green mb-3">
                  🕸️ Compare Correlation Networks
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-semibold text-sm mb-2">What We Do:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Find intersection of ATR and SLU7 networks</li>
                      <li>• Calculate Jaccard Index (overlap score)</li>
                      <li>• Create Venn diagrams</li>
                      <li>• Interpret biological significance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-bio-yellow font-semibold text-sm mb-2">Key Question:</h4>
                    <p className="text-gray-300 text-sm">
                      Do ATR and SLU7 share correlated genes? High overlap = functional module/pathway
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colab Notebook Link */}
        <div className="mt-8 text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Complete End-to-End Analysis Notebook
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Follow along with the full analysis workflow in this comprehensive Jupyter notebook
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_P1_E2Eanalysis.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open End-to-End Analysis in Colab
          </a>
        </div>

        {/* Key Takeaway */}
        <div className="mt-8 bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-6">
          <h3 className="text-bio-yellow font-bold text-lg mb-3 text-center">
            💡 Why This Workflow Matters
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">🔬 Rigorous Science</h4>
              <p className="text-gray-300 text-xs">
                Each step builds on the last with proper statistical validation
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">♻️ Reusable Code</h4>
              <p className="text-gray-300 text-xs">
                Write functions once, apply to any gene in the dataset
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">🧬 Biological Discovery</h4>
              <p className="text-gray-300 text-xs">
                Uncover functional relationships and gene modules from data
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-5">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              <span className="text-purple-400 font-semibold">Let's dive into each step</span> and see how we implement this analysis in Python!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
