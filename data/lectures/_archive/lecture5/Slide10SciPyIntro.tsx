import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide10SciPyIntro() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Introducing <GradientText>SciPy</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Scientific Computing for Python</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🔬 What is SciPy?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-4">
            <span className="text-bio-yellow font-semibold">SciPy</span> is a comprehensive library for
            <span className="text-purple-400 font-semibold"> scientific and technical computing</span>
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              Built on NumPy, it provides tools for statistics, optimization, signal processing, and more
            </span>
          </p>
          <div className="text-center">
            <a
              href="https://docs.scipy.org/doc/scipy/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bio-blue hover:text-bio-blue/80 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Official SciPy Documentation
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* SciPy Modules Overview */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📦 SciPy Ecosystem - What's Inside?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Module cards */}
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-xl">📊</span>
                scipy.stats
              </h4>
              <p className="text-gray-300 text-xs mb-2">Statistical functions & tests</p>
              <p className="text-gray-400 text-xs">
                Distributions, t-tests, ANOVA, <span className="text-bio-yellow font-semibold">correlations</span>
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-xl">🔍</span>
                scipy.optimize
              </h4>
              <p className="text-gray-300 text-xs mb-2">Optimization algorithms</p>
              <p className="text-gray-400 text-xs">
                Curve fitting, root finding, minimization
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-xl">📈</span>
                scipy.interpolate
              </h4>
              <p className="text-gray-300 text-xs mb-2">Interpolation tools</p>
              <p className="text-gray-400 text-xs">
                1D/2D interpolation, splines
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-xl">∫</span>
                scipy.integrate
              </h4>
              <p className="text-gray-300 text-xs mb-2">Integration & ODEs</p>
              <p className="text-gray-400 text-xs">
                Numerical integration, differential equations
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-pink-400 font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-xl">🧮</span>
                scipy.linalg
              </h4>
              <p className="text-gray-300 text-xs mb-2">Linear algebra</p>
              <p className="text-gray-400 text-xs">
                Matrix operations, eigenvalues, decompositions
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-xl">📡</span>
                scipy.signal
              </h4>
              <p className="text-gray-300 text-xs mb-2">Signal processing</p>
              <p className="text-gray-400 text-xs">
                Filtering, convolution, spectral analysis
              </p>
            </div>
          </div>
        </div>

        {/* What we'll use */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🎯 What We'll Use Today: scipy.stats
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pearson Correlation */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold mb-3">pearsonr()</h4>
              <p className="text-gray-300 text-sm mb-3">
                Calculates <span className="text-bio-yellow font-semibold">Pearson correlation coefficient</span> and p-value
              </p>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300">
                  <span className="text-purple-400">from</span> scipy.stats <span className="text-purple-400">import</span> pearsonr
                </div>
                <div className="text-gray-300 mt-2">
                  r, p = pearsonr(gene1, gene2)
                </div>
              </div>
              <p className="text-gray-400 text-xs">
                Returns: correlation coefficient (r) and significance (p-value)
              </p>
            </div>

            {/* Spearman Correlation */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold mb-3">spearmanr()</h4>
              <p className="text-gray-300 text-sm mb-3">
                Calculates <span className="text-bio-yellow font-semibold">Spearman rank correlation</span> and p-value
              </p>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300">
                  <span className="text-purple-400">from</span> scipy.stats <span className="text-purple-400">import</span> spearmanr
                </div>
                <div className="text-gray-300 mt-2">
                  rho, p = spearmanr(gene1, gene2)
                </div>
              </div>
              <p className="text-gray-400 text-xs">
                Returns: rank correlation (rho) and significance (p-value)
              </p>
            </div>
          </div>
        </div>

        {/* Why scipy.stats? */}
        <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            🤔 Why Use SciPy for Statistics?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">✓</div>
              <h4 className="text-bio-green font-semibold text-sm mb-2 text-center">Validated & Trusted</h4>
              <p className="text-gray-300 text-xs text-center">
                Industry-standard implementations used in research worldwide
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">⚡</div>
              <h4 className="text-bio-blue font-semibold text-sm mb-2 text-center">Fast & Optimized</h4>
              <p className="text-gray-300 text-xs text-center">
                Written in C/Fortran for maximum performance
              </p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">📚</div>
              <h4 className="text-purple-400 font-semibold text-sm mb-2 text-center">Comprehensive</h4>
              <p className="text-gray-300 text-xs text-center">
                Includes p-values, confidence intervals, and more
              </p>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4">
            💻 Installing SciPy
          </h3>
          <div className="bg-bio-darker/70 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Using pip</span>
            </div>
            <div className="text-gray-300 mb-4">
              pip install scipy
            </div>
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Using conda</span>
            </div>
            <div className="text-gray-300 mb-4">
              conda install scipy
            </div>
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Import in your code</span>
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400">from</span> scipy.stats <span className="text-purple-400">import</span> pearsonr, spearmanr
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                SciPy = Scientific Python Powerhouse
              </h4>
              <p className="text-gray-300 text-sm">
                For correlation analysis, <span className="text-bio-green font-semibold">scipy.stats</span> provides
                battle-tested functions that return both <span className="text-bio-blue font-semibold">correlation coefficients</span> and
                <span className="text-purple-400 font-semibold"> p-values</span> in one call!
              </p>
            </div>
          </div>
        </div>

        {/* Practice notebook link */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Correlation Analysis with SciPy
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Learn how to use scipy.stats to calculate Pearson and Spearman correlations with real data
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N2_scipy_stats.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open SciPy Stats Notebook in Colab
          </a>
        </div>
      </div>
    </>
  )
}
