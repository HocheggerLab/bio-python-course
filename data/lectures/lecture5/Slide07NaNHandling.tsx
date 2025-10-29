import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide07NaNHandling() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Dealing with <GradientText>Missing Values (NaN)</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-400/10 to-pink-500/10 border border-red-400/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-red-400 mb-3 text-center">
            ⚠️ Two-Step Strategy for NaN Values
          </h3>
          <p className="text-gray-300 text-center">
            <span className="text-bio-yellow font-semibold">Step 1:</span> Remove data with too much missing (threshold: 20%)
            <br />
            <span className="text-bio-yellow font-semibold">Step 2:</span> Impute remaining missing values
          </p>
        </div>

        {/* Step 1: Threshold-Based Removal */}
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4">
            🗑️ Step 1: Remove Data Above Threshold (20%)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Remove Columns (Genes) */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Remove Columns (Genes)
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                If <span className="text-red-400 font-semibold">≥20% of cell lines</span> are missing data for a gene
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-3 mb-3">
                <p className="text-xs text-gray-300 mb-2">Example:</p>
                <div className="font-mono text-xs text-gray-400">
                  Gene ABC: 25 missing / 100 cells = <span className="text-red-400">25%</span>
                  <br />
                  → <span className="text-red-400 font-semibold">Remove entire gene ABC</span>
                </div>
              </div>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs">
                <div className="text-gray-300">
                  <span className="text-gray-500"># Remove genes</span>
                </div>
                <div className="text-gray-300">
                  missing_pct = (df.<span className="text-bio-green">isnull</span>().<span className="text-bio-green">sum</span>() /
                </div>
                <div className="text-gray-300 ml-8">
                  <span className="text-purple-400">len</span>(df)) * <span className="text-amber-400">100</span>
                </div>
                <div className="text-gray-300 mt-2">
                  keep_genes = missing_pct &lt; <span className="text-amber-400">20</span>
                </div>
                <div className="text-gray-300">
                  df = df.<span className="text-bio-green">loc</span>[:, keep_genes]
                </div>
              </div>
            </div>

            {/* Remove Rows (Cell Lines) */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🧬</span>
                Remove Rows (Cell Lines)
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                If <span className="text-red-400 font-semibold">≥20% of genes</span> are missing for a cell line
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-3 mb-3">
                <p className="text-xs text-gray-300 mb-2">Example:</p>
                <div className="font-mono text-xs text-gray-400">
                  Cell Line 42: 3500 missing / 17000 genes = <span className="text-red-400">20.6%</span>
                  <br />
                  → <span className="text-red-400 font-semibold">Remove cell line 42</span>
                </div>
              </div>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs">
                <div className="text-gray-300">
                  <span className="text-gray-500"># Remove cell lines</span>
                </div>
                <div className="text-gray-300">
                  missing_pct = (df.<span className="text-bio-green">isnull</span>().<span className="text-bio-green">sum</span>(<span className="text-amber-400">axis=1</span>) /
                </div>
                <div className="text-gray-300 ml-8">
                  df.<span className="text-bio-green">shape</span>[<span className="text-amber-400">1</span>]) * <span className="text-amber-400">100</span>
                </div>
                <div className="text-gray-300 mt-2">
                  keep_cells = missing_pct &lt; <span className="text-amber-400">20</span>
                </div>
                <div className="text-gray-300">
                  df = df.<span className="text-bio-green">loc</span>[keep_cells, :]
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-amber-400/10 border border-amber-400/30 rounded-lg p-3">
            <p className="text-amber-400 text-sm font-semibold mb-1">⚡ Why 20%?</p>
            <p className="text-gray-300 text-xs">
              This is a <span className="text-bio-yellow font-semibold">judgment call</span> - not a hard rule! Common thresholds range from 10-30% depending on your data.
              The key principle: too much missing data makes imputation unreliable and can introduce bias.
            </p>
          </div>
        </div>

        {/* Step 2: Imputation Methods */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4">
            🔧 Step 2: Impute Values Below Threshold
          </h3>

          <div className="mb-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-purple-400 font-semibold mb-2">What is Imputation?</h4>
            <p className="text-gray-300 text-sm">
              <span className="text-bio-yellow font-semibold">Imputation</span> = Filling missing values with estimated values based on existing data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* For Our Gene Data */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-green font-semibold mb-3">
                🧬 For Our Gene Dependency Data
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                <span className="text-bio-yellow font-semibold">Impute across columns</span> (within each gene)
              </p>
              <div className="bg-bio-green/10 border border-bio-green/30 rounded p-3 mb-3">
                <p className="text-xs text-gray-300 mb-2">Logic:</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Each gene has similar dependency across cell lines</li>
                  <li>• Use median/mean of that gene's values</li>
                  <li>• More biologically meaningful</li>
                </ul>
              </div>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs">
                <div className="text-gray-300">
                  <span className="text-gray-500"># Impute per gene (column)</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">for</span> col <span className="text-purple-400">in</span> df.<span className="text-bio-green">columns</span>:
                </div>
                <div className="text-gray-300 ml-4">
                  median_val = df[col].<span className="text-bio-green">median</span>()
                </div>
                <div className="text-gray-300 ml-4">
                  df[col].<span className="text-bio-green">fillna</span>(median_val, <span className="text-amber-400">inplace=True</span>)
                </div>
              </div>
            </div>

            {/* Imputation Methods Comparison */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-amber-400 font-semibold mb-3">
                📊 Imputation Methods
              </h4>

              <div className="space-y-3">
                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-bio-green font-semibold text-sm mb-1">✓ Median (Recommended)</p>
                  <p className="text-gray-300 text-xs mb-2">
                    Middle value - robust to outliers
                  </p>
                  <p className="text-gray-400 text-xs">
                    Best for: Gene dependency data (has outliers)
                  </p>
                </div>

                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-bio-blue font-semibold text-sm mb-1">○ Mean (Alternative)</p>
                  <p className="text-gray-300 text-xs mb-2">
                    Average value - sensitive to outliers
                  </p>
                  <p className="text-gray-400 text-xs">
                    Best for: Normally distributed data
                  </p>
                </div>

                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-purple-400 font-semibold text-sm mb-1">△ Forward/Backward Fill</p>
                  <p className="text-gray-300 text-xs mb-2">
                    Copy previous/next value
                  </p>
                  <p className="text-gray-400 text-xs">
                    Best for: Time series with ordered index
                  </p>
                </div>

                <div className="bg-bio-darker/50 rounded p-3">
                  <p className="text-amber-400 font-semibold text-sm mb-1">◇ Constant Value</p>
                  <p className="text-gray-300 text-xs mb-2">
                    Fill with 0 or specific number
                  </p>
                  <p className="text-gray-400 text-xs">
                    Best for: When missing = zero (rare)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision Tree */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🌳 Decision Tree: Which Method to Use?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">Time Series Data?</h4>
              <p className="text-gray-300 text-xs mb-2">
                Yes → Use <span className="text-purple-400 font-semibold">forward/backward fill</span>
              </p>
              <p className="text-gray-400 text-xs">
                Example: Temperature over time, stock prices
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">Has Outliers?</h4>
              <p className="text-gray-300 text-xs mb-2">
                Yes → Use <span className="text-bio-green font-semibold">median</span>
              </p>
              <p className="text-gray-400 text-xs">
                Example: Gene dependencies (our case!)
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">Normal Distribution?</h4>
              <p className="text-gray-300 text-xs mb-2">
                Yes → Use <span className="text-bio-blue font-semibold">mean</span>
              </p>
              <p className="text-gray-400 text-xs">
                Example: Height, weight measurements
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-gradient-to-r from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            ✓ Our Approach for This Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold text-sm mb-3">What We Do:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>1. Remove genes with &gt;20% missing (none in our data!)</li>
                <li>2. Remove cell lines with &gt;20% missing (none!)</li>
                <li>3. Impute remaining NaN with <span className="text-bio-green font-semibold">median per gene</span></li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Why This Works:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Only 5 genes have NaN (&lt;1% each)</li>
                <li>• Median is robust to outliers</li>
                <li>• Per-gene imputation preserves biological meaning</li>
                <li>• Minimal impact on downstream analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Imputation Strategy Matters!
              </h4>
              <p className="text-gray-300 text-sm">
                Different data types need different approaches. For gene dependencies:
                <span className="text-bio-green font-semibold"> median imputation per gene</span> is the gold standard.
              </p>
            </div>
          </div>
        </div>

        {/* Practice notebook link */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Missing Value Analysis
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Work through different NaN detection and imputation strategies with real data
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N1_missing_values.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open Missing Values Notebook in Colab
          </a>
        </div>
      </div>
    </>
  )
}
