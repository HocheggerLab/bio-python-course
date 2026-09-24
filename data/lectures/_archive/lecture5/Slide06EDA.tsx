import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide06EDA() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Step 1: <GradientText>Exploratory Data Analysis</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            📊 Always Start with EDA!
          </h3>
          <p className="text-gray-300 text-center text-lg">
            Before any analysis, we must <span className="text-bio-yellow font-semibold">understand our data</span>
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              Bad data in = bad results out. Quality control is essential!
            </span>
          </p>
        </div>

        {/* EDA Checklist */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column - What to check */}
          <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-bio-green mb-4">
              ✓ EDA Checklist
            </h3>
            <div className="space-y-3">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-2">1. Dataset Structure</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• How many cell lines? (N = 94)</li>
                  <li>• How many genes? (~17,000)</li>
                  <li>• What cancer types? (Breast, Myeloid)</li>
                </ul>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-2">2. Data Distribution</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• What's the range of values?</li>
                  <li>• Are values centered around 0?</li>
                  <li>• Any outliers or strange patterns?</li>
                </ul>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold text-sm mb-2">3. Gene of Interest (ATR)</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Is ATR present in the dataset?</li>
                  <li>• Does it show variation across cells?</li>
                  <li>• What's the mean dependency?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column - Missing values focus */}
          <div className="bg-gradient-to-br from-red-400/10 to-pink-500/10 border border-red-400/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-4">
              ⚠️ Critical: Missing Values (NaN)
            </h3>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <h4 className="text-red-400 font-semibold text-sm mb-2">Why NaN Values Matter</h4>
              <p className="text-gray-300 text-xs mb-3">
                Missing data can <span className="text-red-400 font-semibold">break your analysis</span> or produce
                <span className="text-red-400 font-semibold"> misleading results</span>
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Correlation functions may fail</li>
                <li>• Statistical tests become invalid</li>
                <li>• Plots show gaps or errors</li>
                <li>• Sample size effectively reduced</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold text-sm mb-3">Handling Missing Values</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-bio-green font-semibold text-xs mb-1">Option 1: Remove Genes</p>
                  <p className="text-gray-300 text-xs">
                    If &gt;20% missing, exclude gene from analysis
                  </p>
                </div>
                <div>
                  <p className="text-bio-blue font-semibold text-xs mb-1">Option 2: Impute Values</p>
                  <p className="text-gray-300 text-xs">
                    Fill with median/mean if &lt;20% missing
                  </p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold text-xs mb-1">Option 3: Exclude Rows</p>
                  <p className="text-gray-300 text-xs">
                    Remove cell lines with missing data (use with caution!)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            💻 Quick EDA & Missing Value Check
          </h3>
          <div className="bg-bio-darker/70 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-300 mb-3">
              <span className="text-purple-400">import</span> <span className="text-bio-blue">pandas</span> <span className="text-purple-400">as</span> <span className="text-bio-blue">pd</span>
            </div>
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Load data</span>
            </div>
            <div className="text-gray-300 mb-3">
              df = pd.<span className="text-bio-green">read_csv</span>(<span className="text-amber-400">'DepMap_data.csv'</span>)
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Shape: {'{'}df.shape{'}'}"</span>)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Check for missing values</span>
            </div>
            <div className="text-gray-300 mb-3">
              missing = df.<span className="text-bio-green">isnull</span>().<span className="text-bio-green">sum</span>()
            </div>
            <div className="text-gray-300 mb-3">
              missing_pct = (missing / <span className="text-purple-400">len</span>(df)) * <span className="text-amber-400">100</span>
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Genes with &gt;20% missing: {'{'}(missing_pct &gt; 20).sum(){'}'}"</span>)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Impute median for genes with &lt;20% missing</span>
            </div>
            <div className="text-gray-300 mb-3">
              <span className="text-purple-400">for</span> col <span className="text-purple-400">in</span> numeric_cols:
            </div>
            <div className="text-gray-300 ml-4 mb-3">
              <span className="text-purple-400">if</span> df[col].<span className="text-bio-green">isnull</span>().<span className="text-bio-green">sum</span>() &gt; <span className="text-amber-400">0</span>:
            </div>
            <div className="text-gray-300 ml-8">
              df[col] = df[col].<span className="text-bio-green">fillna</span>(df[col].<span className="text-bio-green">median</span>())
            </div>
          </div>
        </div>

        {/* Our Dataset Summary */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📈 Our Dataset After EDA
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="text-bio-green font-semibold text-sm mb-1">Clean Data</h4>
              <p className="text-gray-300 text-xs">
                94 cell lines, 17,205 genes
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="text-bio-blue font-semibold text-sm mb-1">No Major Issues</h4>
              <p className="text-gray-300 text-xs">
                Only 5 genes with NaN (&lt;1%)
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="text-purple-400 font-semibold text-sm mb-1">Ready for Analysis</h4>
              <p className="text-gray-300 text-xs">
                All NaN imputed with median
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Never Skip EDA!
              </h4>
              <p className="text-gray-300 text-sm">
                Spending 10 minutes on EDA can save hours of debugging later.
                <span className="text-red-400 font-semibold"> Missing values are the #1 cause of analysis failures!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
