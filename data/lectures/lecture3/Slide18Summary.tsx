import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide18Summary() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Analysis Summary & Results</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Analysis workflow recap */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🔬 Our Analysis Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📋</div>
              <h4 className="text-bio-blue font-semibold mb-2">Step 1: Filter Data</h4>
              <p className="text-gray-300 text-sm">
                Selected breast & myeloid cancer cell lines from CRISPR dataset
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="text-bio-green font-semibold mb-2">Step 2: Calculate Statistics</h4>
              <p className="text-gray-300 text-sm">
                Computed mean gene effect scores for each cancer type
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <h4 className="text-amber-400 font-semibold mb-2">Step 3: Sort & Rank</h4>
              <p className="text-gray-300 text-sm">
                Identified top 10 most essential genes per cancer type
              </p>
            </div>
          </div>
        </div>

        {/* Results section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Breast cancer results */}
          <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-pink-400 mb-4 text-center">
              🎗️ Breast Cancer - Top Essential Genes
            </h3>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>1. RAN</span><span>-4.1840</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>2. HSPE1</span><span>-3.4315</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>3. SNRPF</span><span>-3.1414</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>4. SMU1</span><span>-3.0940</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>5. PSMA6</span><span>-3.0273</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>6. SNRPA1</span><span>-2.9927</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>7. RRM1</span><span>-2.9468</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>8. PCNA</span><span>-2.9238</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>9. PLK1</span><span>-2.9126</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>10. SF3B5</span><span>-2.9118</span>
                </div>
              </div>
            </div>
          </div>

          {/* Myeloid cancer results */}
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-orange-400 mb-4 text-center">
              🩸 Myeloid Cancer - Top Essential Genes
            </h3>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>1. RAN</span><span>-3.9426</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>2. HSPE1</span><span>-3.5099</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>3. RPL17</span><span>-3.2110</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>4. RPS8</span><span>-2.9228</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>5. RPS29</span><span>-2.8929</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>6. RRM1</span><span>-2.8591</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>7. PLK1</span><span>-2.8287</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>8. RPS19</span><span>-2.7984</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>9. UBL5</span><span>-2.7908</span>
                </div>
                <div className="flex justify-between text-red-400 font-semibold">
                  <span>10. PSMA6</span><span>-2.7539</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key observations */}
        <div className="bg-gradient-to-br from-bio-green/10 to-bio-blue/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🔍 Key Observations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">🤝 Common Essential Genes</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">●</span>
                    <span className="text-gray-300"><strong className="text-red-400">RAN</strong> - Nuclear transport, cell division</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">●</span>
                    <span className="text-gray-300"><strong className="text-red-400">HSPE1</strong> - Protein folding chaperone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">●</span>
                    <span className="text-gray-300"><strong className="text-red-400">RRM1</strong> - DNA replication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">●</span>
                    <span className="text-gray-300"><strong className="text-red-400">PLK1</strong> - Cell cycle regulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">●</span>
                    <span className="text-gray-300"><strong className="text-red-400">PSMA6</strong> - Protein degradation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-purple-400 font-semibold mb-3">🎯 Cancer-Specific Patterns</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-pink-400 font-semibold">Breast Cancer:</span>
                    <p className="text-gray-300">RNA splicing genes (SNRPF, SNRPA1, SF3B5)</p>
                  </div>
                  <div>
                    <span className="text-orange-400 font-semibold">Myeloid Cancer:</span>
                    <p className="text-gray-300">Ribosomal proteins (RPL17, RPS8, RPS29, RPS19)</p>
                  </div>
                  <div className="text-bio-yellow text-xs mt-3">
                    💡 Different cancer types depend on distinct cellular pathways!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research questions and next steps */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            🤔 Research Questions & Next Steps
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">❓ Questions to Explore</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Why are <span className="text-red-400 font-semibold">5 genes common</span> across cancer types?</li>
                <li>• What pathways are <span className="text-purple-400 font-semibold">breast-specific</span> vs <span className="text-orange-400 font-semibold">myeloid-specific</span>?</li>
                <li>• Do these genes interact in <span className="text-bio-green font-semibold">regulatory networks</span>?</li>
                <li>• Are there <span className="text-bio-yellow font-semibold">druggable targets</span> among these genes?</li>
                <li>• How do these relate to <span className="text-pink-400 font-semibold">clinical outcomes</span>?</li>
              </ul>
            </div>
            <div>
              <h4 className="text-bio-green font-semibold mb-3">🚀 Advanced Analysis Techniques</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <span className="text-bio-blue font-semibold">GSEA</span> - Gene Set Enrichment Analysis</li>
                <li>• <span className="text-purple-400 font-semibold">Network Analysis</span> - Protein-protein interactions</li>
                <li>• <span className="text-amber-400 font-semibold">Correlation Analysis</span> - Gene expression patterns</li>
                <li>• <span className="text-bio-green font-semibold">Visualization</span> - Heatmaps, networks, volcano plots</li>
                <li>• <span className="text-red-400 font-semibold">Machine Learning</span> - Predictive models</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What this tells us */}
        <div className="bg-gradient-to-r from-amber-400/10 to-bio-yellow/10 border border-amber-400/30 rounded-xl p-5">
          <h4 className="text-amber-400 font-semibold mb-3 text-center">🧠 Biological Insights</h4>
          <div className="text-center space-y-2">
            <p className="text-gray-300 text-sm">
              <span className="text-red-400 font-semibold">Common essential genes</span> represent fundamental cellular processes required by all cancer cells
            </p>
            <p className="text-gray-300 text-sm">
              <span className="text-purple-400 font-semibold">Cancer-specific genes</span> reveal unique vulnerabilities that could be targeted therapeutically
            </p>
            <p className="text-bio-yellow font-semibold text-sm mt-3">
              🎯 This analysis provides a roadmap for precision cancer therapy development!
            </p>
          </div>
        </div>

        {/* Coming Next */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 rounded-xl p-6">
          <div className="mb-6">
            <p className="text-bio-green font-semibold text-xl mb-2">
              📈 Coming Next
            </p>
            <p className="text-gray-300 text-sm">
              Build on today's analysis with advanced statistical methods
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-bio-blue/20 border border-purple-500/40 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-3">📊</div>
              <h3 className="text-xl font-bold text-purple-400">Linear Regression Analysis</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-2">📈 Statistical Modeling</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Gene expression correlations</li>
                  <li>• Predictive modeling</li>
                  <li>• R² and significance testing</li>
                </ul>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold text-sm mb-2">🎨 Data Visualization</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Scatter plots & regression lines</li>
                  <li>• Heatmaps & clustering</li>
                  <li>• Interactive plots with Plotly</li>
                </ul>
              </div>
            </div>

            <a
              href="/lectures/4"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-bio-blue hover:from-purple-600 hover:to-bio-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <span className="text-bio-yellow">→</span>
              <span>Start Lecture 4: Statistical Analysis & Visualization</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}