import {
  SlideTitle,
  GradientText
} from '@/components/slides'

// Fixed data points to avoid hydration mismatch
const nonSigGenes = Array.from({ length: 50 }, (_, i) => ({
  x: 60 + (i * 7.3) % 300,
  y: 250 + (i * 11.7) % 80
}))

const weakGenes = Array.from({ length: 15 }, (_, i) => ({
  x: 130 + (i * 13.2) % 160,
  y: 50 + (i * 8.5) % 40
}))

const negGenes = Array.from({ length: 12 }, (_, i) => ({
  x: 50 + (i * 9.3) % 65,
  y: 30 + (i * 12.1) % 60
}))

const posGenes = Array.from({ length: 12 }, (_, i) => ({
  x: 305 + (i * 8.7) % 65,
  y: 30 + (i * 11.3) % 60
}))

export default function Slide13VolcanoPlot() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Visualizing Results: <GradientText>Volcano Plots</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Show Both Effect Size & Significance</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🌋 What is a Volcano Plot?
          </h3>
          <p className="text-gray-300 text-center text-lg">
            A scatter plot that shows <span className="text-bio-yellow font-semibold">correlation strength (x-axis)</span> vs{' '}
            <span className="text-purple-400 font-semibold">statistical significance (y-axis)</span>
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              Named for its shape - significant genes "erupt" from the top like a volcano!
            </span>
          </p>
        </div>

        {/* The Plot */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            📊 Anatomy of a Volcano Plot
          </h3>

          <div className="grid md:grid-cols-[1.5fr,1fr] gap-6">
            {/* SVG Volcano Plot */}
            <div className="bg-bio-darker/70 rounded-lg p-6 flex items-center justify-center">
              <svg width="400" height="380" viewBox="0 0 400 380" className="w-full h-auto">
                {/* Background grid */}
                <line x1="40" y1="20" x2="40" y2="340" stroke="#4a5568" strokeWidth="2" />
                <line x1="40" y1="340" x2="380" y2="340" stroke="#4a5568" strokeWidth="2" />

                {/* Grid lines */}
                <line x1="40" y1="240" x2="380" y2="240" stroke="#2d3748" strokeWidth="1" strokeDasharray="4" />
                <line x1="40" y1="140" x2="380" y2="140" stroke="#2d3748" strokeWidth="1" strokeDasharray="4" />
                <line x1="40" y1="40" x2="380" y2="40" stroke="#2d3748" strokeWidth="1" strokeDasharray="4" />

                <line x1="140" y1="20" x2="140" y2="340" stroke="#2d3748" strokeWidth="1" strokeDasharray="4" />
                <line x1="210" y1="20" x2="210" y2="340" stroke="#2d3748" strokeWidth="1" strokeDasharray="4" />
                <line x1="280" y1="20" x2="280" y2="340" stroke="#2d3748" strokeWidth="1" strokeDasharray="4" />

                {/* Threshold lines */}
                {/* Significance threshold (horizontal) */}
                <line x1="40" y1="100" x2="380" y2="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6" />
                <text x="385" y="105" fill="#f59e0b" fontSize="12" className="font-bold">FDR &lt; 0.05</text>

                {/* Correlation thresholds (vertical) */}
                <line x1="120" y1="20" x2="120" y2="340" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6" />
                <line x1="300" y1="20" x2="300" y2="340" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6" />
                <text x="95" y="360" fill="#8b5cf6" fontSize="11" className="font-bold">r = -0.5</text>
                <text x="275" y="360" fill="#8b5cf6" fontSize="11" className="font-bold">r = 0.5</text>

                {/* Non-significant genes (gray) - bottom region */}
                {nonSigGenes.map((gene, i) => (
                  <circle key={`ns-${i}`} cx={gene.x} cy={gene.y} r="2.5" fill="#6b7280" opacity="0.4" />
                ))}

                {/* Weakly correlated but significant (gray) - top middle */}
                {weakGenes.map((gene, i) => (
                  <circle key={`weak-${i}`} cx={gene.x} cy={gene.y} r="2.5" fill="#9ca3af" opacity="0.5" />
                ))}

                {/* Significant negative correlation (red) - top left */}
                {negGenes.map((gene, i) => (
                  <circle key={`neg-${i}`} cx={gene.x} cy={gene.y} r="3.5" fill="#ef4444" opacity="0.8" />
                ))}

                {/* Significant positive correlation (green) - top right */}
                {posGenes.map((gene, i) => (
                  <circle key={`pos-${i}`} cx={gene.x} cy={gene.y} r="3.5" fill="#10b981" opacity="0.8" />
                ))}

                {/* Highlight a few key genes */}
                <circle cx="330" cy="35" r="5" fill="#10b981" stroke="#ffd700" strokeWidth="2" />
                <text x="340" y="38" fill="#ffd700" fontSize="11" className="font-bold">CHEK1</text>

                <circle cx="90" cy="45" r="5" fill="#ef4444" stroke="#ffd700" strokeWidth="2" />
                <text x="50" y="48" fill="#ffd700" fontSize="11" className="font-bold">MDM2</text>

                {/* Axis labels */}
                <text x="180" y="375" fill="#00d4ff" fontSize="14" textAnchor="middle" className="font-bold">
                  Correlation (r)
                </text>
                <text x="15" y="180" fill="#00d4ff" fontSize="14" textAnchor="middle" className="font-bold" transform="rotate(-90, 15, 180)">
                  -log₁₀(adjusted p-value)
                </text>

                {/* Axis tick labels */}
                <text x="40" y="355" fill="#9ca3af" fontSize="10" textAnchor="middle">-1.0</text>
                <text x="140" y="355" fill="#9ca3af" fontSize="10" textAnchor="middle">-0.5</text>
                <text x="210" y="355" fill="#9ca3af" fontSize="10" textAnchor="middle">0</text>
                <text x="280" y="355" fill="#9ca3af" fontSize="10" textAnchor="middle">0.5</text>
                <text x="380" y="355" fill="#9ca3af" fontSize="10" textAnchor="middle">1.0</text>

                <text x="25" y="345" fill="#9ca3af" fontSize="10" textAnchor="end">0</text>
                <text x="25" y="245" fill="#9ca3af" fontSize="10" textAnchor="end">1</text>
                <text x="25" y="145" fill="#9ca3af" fontSize="10" textAnchor="end">2</text>
                <text x="25" y="45" fill="#9ca3af" fontSize="10" textAnchor="end">3</text>
              </svg>
            </div>

            {/* Legend and interpretation */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-3">🎨 Color Key</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-gray-300">Strong positive correlation (r &gt; 0.5, FDR &lt; 0.05)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span className="text-gray-300">Strong negative correlation (r &lt; -0.5, FDR &lt; 0.05)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                    <span className="text-gray-300">Weak or not significant</span>
                  </div>
                </div>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-3">📍 The Four Quadrants</h4>
                <div className="space-y-2 text-xs">
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-green-400 font-semibold">Top Right:</span>
                    <span className="text-gray-300 ml-2">Strong positive, significant ✓</span>
                  </div>
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-red-400 font-semibold">Top Left:</span>
                    <span className="text-gray-300 ml-2">Strong negative, significant ✓</span>
                  </div>
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-gray-400 font-semibold">Bottom:</span>
                    <span className="text-gray-300 ml-2">Not significant (ignore)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why -log10? */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🤔 Why -log₁₀(p-value)?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">The Problem with P-values</h4>
              <p className="text-gray-300 text-sm mb-3">
                P-values are tiny numbers (e.g., 0.0001, 0.00000023)
              </p>
              <div className="bg-bio-darker/70 rounded p-3 mb-3 font-mono text-xs">
                <div className="text-gray-300 mb-1">p = 0.05 → not very significant</div>
                <div className="text-gray-300 mb-1">p = 0.001 → quite significant</div>
                <div className="text-gray-300">p = 0.0000001 → very significant!</div>
              </div>
              <p className="text-gray-400 text-xs">
                Hard to visualize and compare on a regular axis
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-green font-semibold text-sm mb-3">The Solution: -log₁₀</h4>
              <p className="text-gray-300 text-sm mb-3">
                Transform p-values to make differences visible
              </p>
              <div className="bg-bio-darker/70 rounded p-3 mb-3 font-mono text-xs">
                <div className="text-gray-300 mb-1">p = 0.05 → -log₁₀(0.05) = 1.3</div>
                <div className="text-gray-300 mb-1">p = 0.001 → -log₁₀(0.001) = 3</div>
                <div className="text-gray-300">p = 0.0000001 → -log₁₀(0.0000001) = 7</div>
              </div>
              <p className="text-gray-400 text-xs">
                Higher values = more significant (easier to read!)
              </p>
            </div>
          </div>

          <div className="mt-4 bg-bio-yellow/10 border border-bio-yellow/30 rounded-lg p-4">
            <p className="text-bio-yellow font-semibold text-xs mb-1">💡 Key Point:</p>
            <p className="text-gray-300 text-xs">
              The negative sign flips small p-values (good) into large numbers (easy to plot).
              The log₁₀ spreads out the tiny differences in very small p-values.
            </p>
          </div>
        </div>

        {/* Creating the Plot */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            🐍 Creating a Volcano Plot in Python
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 1: Calculate -log10(adjusted p-value)</span>
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np
            </div>
            <div className="text-gray-300 mb-4">
              results_df[<span className="text-amber-400">'neg_log_p'</span>] = -np.<span className="text-bio-green">log10</span>(results_df[<span className="text-amber-400">'pearson_p_adjusted'</span>])
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 2: Create figure and axes</span>
            </div>
            <div className="text-gray-300 mb-4">
              fig, ax = plt.<span className="text-bio-green">subplots</span>(<span className="text-amber-400">figsize</span>=(<span className="text-amber-400">10</span>, <span className="text-amber-400">6</span>))
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 3: Create the scatter plot</span>
            </div>
            <div className="text-gray-300 mb-4">
              ax.<span className="text-bio-green">scatter</span>(results_df[<span className="text-amber-400">'pearson_r'</span>], results_df[<span className="text-amber-400">'neg_log_p'</span>], <span className="text-amber-400">alpha</span>=<span className="text-amber-400">0.5</span>)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 4: Add threshold lines</span>
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">axhline</span>(<span className="text-amber-400">y</span>=-np.<span className="text-bio-green">log10</span>(<span className="text-amber-400">0.05</span>), <span className="text-amber-400">color</span>=<span className="text-amber-400">'red'</span>, <span className="text-amber-400">linestyle</span>=<span className="text-amber-400">'--'</span>)
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">axvline</span>(<span className="text-amber-400">x</span>=<span className="text-amber-400">0.5</span>, <span className="text-amber-400">color</span>=<span className="text-amber-400">'blue'</span>, <span className="text-amber-400">linestyle</span>=<span className="text-amber-400">'--'</span>)
            </div>
            <div className="text-gray-300 mb-4">
              ax.<span className="text-bio-green">axvline</span>(<span className="text-amber-400">x</span>=-<span className="text-amber-400">0.5</span>, <span className="text-amber-400">color</span>=<span className="text-amber-400">'blue'</span>, <span className="text-amber-400">linestyle</span>=<span className="text-amber-400">'--'</span>)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 5: Labels and title</span>
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_xlabel</span>(<span className="text-amber-400">'Correlation (r)'</span>)
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_ylabel</span>(<span className="text-amber-400">'-log₁₀(adjusted p-value)'</span>)
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_title</span>(<span className="text-amber-400">'Volcano Plot: Gene Correlation with ATR'</span>)
            </div>
            <div className="text-gray-300">
              plt.<span className="text-bio-green">show</span>()
            </div>
          </div>

          <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-4">
            <h4 className="text-bio-green font-semibold text-sm mb-2">✓ What You Get</h4>
            <p className="text-gray-300 text-xs">
              A clear visualization showing which genes have <span className="text-bio-yellow font-semibold">strong correlations</span> that are also
              <span className="text-purple-400 font-semibold"> statistically significant</span> - the best candidates for follow-up research!
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">🌋</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Volcano Plots Show the Complete Story
              </h4>
              <p className="text-gray-300 text-sm">
                X-axis = <span className="text-bio-blue font-semibold">effect size (correlation)</span>,
                Y-axis = <span className="text-purple-400 font-semibold">significance (-log₁₀ p-value)</span>.
                Look for genes in the <span className="text-bio-green font-semibold">top corners</span> -
                they have both strong correlation AND statistical significance!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
