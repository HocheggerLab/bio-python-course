import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import Image from 'next/image'

export default function Slide15SeabornRegplot() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Creating Regression Plots with <GradientText>Seaborn</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Beautiful Statistical Visualizations</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction to Seaborn */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🎨 What is Seaborn?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-3">
            A high-level Python visualization library built on top of <span className="text-purple-400 font-semibold">matplotlib</span>
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🎯</div>
              <p className="text-gray-300 text-xs">Statistical plots made simple</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🌈</div>
              <p className="text-gray-300 text-xs">Beautiful default styles</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">📊</div>
              <p className="text-gray-300 text-xs">Automatic confidence intervals</p>
            </div>
          </div>

          {/* Documentation Link */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://seaborn.pydata.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white rounded-lg hover:from-bio-blue/80 hover:to-purple-500/80 transition-all text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Seaborn Documentation
            </a>
          </div>
        </div>

        {/* The Code */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🐍 Creating the ATR vs SLU7 Plot
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 1: Import seaborn</span>
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 2: Prepare the data for the top hit (SLU7)</span>
            </div>
            <div className="text-gray-300 mb-1">
              top_gene = <span className="text-amber-400">'SLU7'</span>
            </div>
            <div className="text-gray-300 mb-4">
              plot_data = pd.<span className="text-bio-green">DataFrame</span>({'{'}
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">'ATR'</span>: atr_values,
            </div>
            <div className="text-gray-300 ml-4 mb-4">
              <span className="text-amber-400">'SLU7'</span>: depmap_df[top_gene]
            </div>
            <div className="text-gray-300 mb-4">
              {'}'})
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 3: Create figure and axes</span>
            </div>
            <div className="text-gray-300 mb-4">
              fig, ax = plt.<span className="text-bio-green">subplots</span>(<span className="text-amber-400">figsize</span>=(<span className="text-amber-400">10</span>, <span className="text-amber-400">6</span>))
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 4: Create the regression plot with seaborn</span>
            </div>
            <div className="text-gray-300 mb-1">
              sns.<span className="text-bio-green">regplot</span>(
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">x</span>=<span className="text-amber-400">'ATR'</span>,
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">y</span>=<span className="text-amber-400">'SLU7'</span>,
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">data</span>=plot_data,
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">ax</span>=ax,
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">scatter_kws</span>={'{'}
                <span className="text-amber-400">'alpha'</span>: <span className="text-amber-400">0.6</span>,
                <span className="text-amber-400">'s'</span>: <span className="text-amber-400">50</span>
              {'}'},
            </div>
            <div className="text-gray-300 ml-4 mb-2">
              <span className="text-amber-400">line_kws</span>={'{'}
                <span className="text-amber-400">'color'</span>: <span className="text-amber-400">'red'</span>,
                <span className="text-amber-400">'linewidth'</span>: <span className="text-amber-400">2</span>
              {'}'}
            </div>
            <div className="text-gray-300 mb-4">
              )
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 5: Add labels and title</span>
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_xlabel</span>(<span className="text-amber-400">'ATR Dependency Score'</span>, <span className="text-amber-400">fontsize</span>=<span className="text-amber-400">12</span>)
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_ylabel</span>(<span className="text-amber-400">'SLU7 Dependency Score'</span>, <span className="text-amber-400">fontsize</span>=<span className="text-amber-400">12</span>)
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_title</span>(<span className="text-amber-400">'ATR vs SLU7 Gene Dependencies (r=0.89)'</span>, <span className="text-amber-400">fontsize</span>=<span className="text-amber-400">14</span>)
            </div>
            <div className="text-gray-300">
              plt.<span className="text-bio-green">show</span>()
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">🎯 Key Parameters</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">x, y, data:</span>
                  <span className="text-gray-300 ml-2">Column names and DataFrame</span>
                </div>
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">scatter_kws:</span>
                  <span className="text-gray-300 ml-2">Customize scatter points (alpha, size)</span>
                </div>
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">line_kws:</span>
                  <span className="text-gray-300 ml-2">Customize regression line (color, width)</span>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">✨ Automatic Features</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>✓ Calculates regression line automatically</li>
                <li>✓ Adds confidence interval shading</li>
                <li>✓ Handles missing values gracefully</li>
                <li>✓ Beautiful default styling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Result */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📊 The Result: ATR vs SLU7 Correlation
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-4 flex justify-center items-center">
            <div className="relative w-full max-w-3xl aspect-[5/3]">
              <Image
                src="/atrSLU7regression.png"
                alt="ATR vs SLU7 regression plot showing strong positive correlation"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-bio-blue font-bold text-lg mb-1">r = 0.89</div>
              <p className="text-gray-300 text-xs">Very strong positive correlation</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-bio-green font-bold text-lg mb-1">Linear Trend</div>
              <p className="text-gray-300 text-xs">Clear upward slope visible</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-purple-400 font-bold text-lg mb-1">Confidence</div>
              <p className="text-gray-300 text-xs">Shaded region shows uncertainty</p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎨</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Seaborn Makes Statistical Plots Easy
              </h4>
              <p className="text-gray-300 text-sm">
                <span className="text-bio-green font-semibold">sns.regplot()</span> automatically fits a regression line,
                calculates confidence intervals, and creates a beautiful visualization - all in one function call!
                Perfect for exploring relationships in biological data.
              </p>
            </div>
          </div>
        </div>

        {/* Practice notebook link */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Seaborn Regression Plots
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Explore different regression plot styles and customization options with real biological data
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N5_seaborn.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open Seaborn Notebook in Colab
          </a>
        </div>
      </div>
    </>
  )
}
