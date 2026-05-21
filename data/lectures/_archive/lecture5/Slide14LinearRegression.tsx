import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide14LinearRegression() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Visualizing the <GradientText>Top Hit</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">ATR vs SLU7 Linear Regression</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🎯 Our Top Correlation Result
          </h3>
          <p className="text-gray-300 text-center text-lg">
            <span className="text-bio-yellow font-semibold">SLU7</span> shows the strongest correlation with{' '}
            <span className="text-purple-400 font-semibold">ATR</span>
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              Let's visualize this relationship with a linear regression plot to understand the trend
            </span>
          </p>
        </div>

        {/* What is Linear Regression */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            📐 What is Linear Regression?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: Explanation */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-3">The Linear Model</h4>
                <div className="bg-bio-darker/70 rounded p-3 font-mono text-sm mb-3">
                  <div className="text-gray-300 text-center">
                    <span className="text-bio-yellow">y</span> = <span className="text-bio-green">w</span> × <span className="text-purple-400">x</span> + <span className="text-amber-400">b</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-bio-green font-semibold">w (weight/slope):</span>
                    <span className="text-gray-300 ml-2">How steep is the relationship?</span>
                  </div>
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-amber-400 font-semibold">b (bias/intercept):</span>
                    <span className="text-gray-300 ml-2">Where does the line cross y-axis?</span>
                  </div>
                </div>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-3">For Our Data</h4>
                <p className="text-gray-300 text-xs mb-2">
                  The regression line shows the best linear fit through our scatter plot of ATR vs SLU7 dependencies.
                </p>
                <div className="bg-bio-darker/70 rounded p-2 text-xs">
                  <div className="text-gray-300">
                    <span className="text-purple-400">x</span> = ATR dependency scores
                  </div>
                  <div className="text-gray-300">
                    <span className="text-bio-yellow">y</span> = SLU7 dependency scores
                  </div>
                  <div className="text-gray-300 mt-2">
                    Line = <span className="text-bio-green">optimal w</span> and <span className="text-amber-400">b</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: SVG visualization */}
            <div className="bg-bio-darker/70 rounded-lg p-4 flex items-center justify-center">
              <svg width="300" height="280" viewBox="0 0 300 280" className="w-full h-auto">
                {/* Axes */}
                <line x1="40" y1="20" x2="40" y2="240" stroke="#4a5568" strokeWidth="2" />
                <line x1="40" y1="240" x2="280" y2="240" stroke="#4a5568" strokeWidth="2" />

                {/* Axis labels */}
                <text x="150" y="265" fill="#00d4ff" fontSize="13" textAnchor="middle" className="font-bold">
                  ATR dependency (x)
                </text>
                <text x="15" y="130" fill="#00d4ff" fontSize="13" textAnchor="middle" className="font-bold" transform="rotate(-90, 15, 130)">
                  SLU7 dependency (y)
                </text>

                {/* Data points */}
                {[
                  {x: 70, y: 210}, {x: 90, y: 195}, {x: 110, y: 185},
                  {x: 130, y: 170}, {x: 145, y: 158}, {x: 160, y: 145},
                  {x: 180, y: 125}, {x: 195, y: 115}, {x: 215, y: 95},
                  {x: 235, y: 75}, {x: 250, y: 60}
                ].map((point, i) => (
                  <circle key={i} cx={point.x} cy={point.y} r="4" fill="#00d4ff" opacity="0.7" />
                ))}

                {/* Regression line */}
                <line x1="50" y1="220" x2="270" y2="50" stroke="#10b981" strokeWidth="3" />

                {/* Weight annotation */}
                <line x1="160" y1="145" x2="220" y2="145" stroke="#10b981" strokeWidth="1" strokeDasharray="3" />
                <line x1="220" y1="145" x2="220" y2="95" stroke="#10b981" strokeWidth="1" strokeDasharray="3" />
                <text x="235" y="120" fill="#10b981" fontSize="11" className="font-bold">
                  slope (w)
                </text>
                <text x="235" y="135" fill="#10b981" fontSize="10">
                  rise/run
                </text>

                {/* Intercept annotation */}
                <circle cx="40" cy="235" r="3" fill="#f59e0b" />
                <text x="15" y="265" fill="#f59e0b" fontSize="11" className="font-bold">
                  b
                </text>

                {/* Line equation */}
                <rect x="80" y="35" width="140" height="30" fill="#1a1a2e" stroke="#10b981" strokeWidth="1" rx="5" />
                <text x="150" y="55" fill="#10b981" fontSize="12" textAnchor="middle" className="font-bold">
                  y = wx + b
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Why Linear Regression */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🤔 Why Show the Regression Line?
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">👁️</div>
              <h4 className="text-bio-blue font-semibold text-sm mb-2 text-center">Visual Clarity</h4>
              <p className="text-gray-300 text-xs text-center">
                The line makes the trend immediately obvious - positive or negative correlation
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">📊</div>
              <h4 className="text-bio-green font-semibold text-sm mb-2 text-center">Prediction</h4>
              <p className="text-gray-300 text-xs text-center">
                We can predict SLU7 dependency from ATR values using the fitted line
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">🔬</div>
              <h4 className="text-purple-400 font-semibold text-sm mb-2 text-center">Biological Insight</h4>
              <p className="text-gray-300 text-xs text-center">
                The slope tells us how strongly SLU7 tracks with ATR across cell lines
              </p>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎨</div>
            <div>
              <h4 className="text-amber-400 font-bold text-lg mb-1">
                Next: Creating This Plot with Seaborn
              </h4>
              <p className="text-gray-300 text-sm">
                Seaborn makes it incredibly easy to create beautiful regression plots with confidence intervals.
                Let's see how to generate this visualization in just a few lines of Python!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
