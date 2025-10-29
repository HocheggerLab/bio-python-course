import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide09CorrelationMethods() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Correlation Methods</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Pearson vs Spearman</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            📊 Measuring Relationships Between Genes
          </h3>
          <p className="text-gray-300 text-center text-lg">
            <span className="text-bio-yellow font-semibold">Correlation</span> quantifies how two variables change together
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              We'll use two complementary methods: Pearson (linear) and Spearman (rank-based)
            </span>
          </p>
        </div>

        {/* Visual Correlation Examples */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📊 What Pearson Correlation Looks Like
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* r = 1.0 */}
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-green font-semibold text-xs mb-2 text-center">r = 1.0</h4>
              <svg width="140" height="120" className="mx-auto">
                <line x1="20" y1="100" x2="120" y2="100" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="100" x2="20" y2="10" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="100" x2="120" y2="20" stroke="#10B981" strokeWidth="2"/>
                {[30, 45, 60, 75, 90, 105].map((x, i) => (
                  <circle key={i} cx={x} cy={100 - i * 13} r="3" fill="#10B981" />
                ))}
              </svg>
              <p className="text-gray-300 text-xs text-center mt-2">Perfect positive</p>
              <p className="text-bio-yellow text-xs text-center font-semibold">R² = 1.0 (100%)</p>
            </div>

            {/* r = 0.8 */}
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-bio-blue font-semibold text-xs mb-2 text-center">r = 0.8</h4>
              <svg width="140" height="120" className="mx-auto">
                <line x1="20" y1="100" x2="120" y2="100" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="100" x2="20" y2="10" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="95" x2="120" y2="25" stroke="#3B82F6" strokeWidth="2" opacity="0.5"/>
                {[
                  {x: 30, y: 92}, {x: 45, y: 78}, {x: 60, y: 62},
                  {x: 75, y: 48}, {x: 90, y: 35}, {x: 105, y: 28}
                ].map((point, i) => (
                  <circle key={i} cx={point.x} cy={point.y} r="3" fill="#3B82F6" />
                ))}
              </svg>
              <p className="text-gray-300 text-xs text-center mt-2">Strong positive</p>
              <p className="text-bio-yellow text-xs text-center font-semibold">R² = 0.64 (64%)</p>
            </div>

            {/* r = 0.0 */}
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-amber-400 font-semibold text-xs mb-2 text-center">r = 0.0</h4>
              <svg width="140" height="120" className="mx-auto">
                <line x1="20" y1="100" x2="120" y2="100" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="100" x2="20" y2="10" stroke="#6B7280" strokeWidth="1"/>
                {[
                  {x: 30, y: 55}, {x: 45, y: 75}, {x: 60, y: 45},
                  {x: 75, y: 65}, {x: 90, y: 50}, {x: 105, y: 70}
                ].map((point, i) => (
                  <circle key={i} cx={point.x} cy={point.y} r="3" fill="#F59E0B" />
                ))}
              </svg>
              <p className="text-gray-300 text-xs text-center mt-2">No correlation</p>
              <p className="text-bio-yellow text-xs text-center font-semibold">R² = 0.0 (0%)</p>
            </div>

            {/* r = -0.9 */}
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <h4 className="text-red-400 font-semibold text-xs mb-2 text-center">r = -0.9</h4>
              <svg width="140" height="120" className="mx-auto">
                <line x1="20" y1="100" x2="120" y2="100" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="100" x2="20" y2="10" stroke="#6B7280" strokeWidth="1"/>
                <line x1="20" y1="20" x2="120" y2="95" stroke="#F87171" strokeWidth="2" opacity="0.5"/>
                {[
                  {x: 30, y: 22}, {x: 45, y: 35}, {x: 60, y: 52},
                  {x: 75, y: 65}, {x: 90, y: 78}, {x: 105, y: 92}
                ].map((point, i) => (
                  <circle key={i} cx={point.x} cy={point.y} r="3" fill="#F87171" />
                ))}
              </svg>
              <p className="text-gray-300 text-xs text-center mt-2">Strong negative</p>
              <p className="text-bio-yellow text-xs text-center font-semibold">R² = 0.81 (81%)</p>
            </div>
          </div>

          <div className="mt-4 bg-bio-yellow/10 border border-bio-yellow/30 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold text-sm mb-2 text-center">💡 Understanding R² (R-squared)</h4>
            <p className="text-gray-300 text-xs text-center mb-2">
              <span className="text-bio-blue font-semibold">R² = r²</span> (square of Pearson correlation)
            </p>
            <p className="text-gray-300 text-xs text-center">
              R² tells you the <span className="text-bio-yellow font-semibold">percentage of variance</span> in one variable explained by the other
              <br />
              Example: r = 0.8 → R² = 0.64 → <span className="text-bio-green font-semibold">64% of variance explained</span>
            </p>
          </div>
        </div>

        {/* Pearson Correlation */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            📈 Pearson Correlation (r)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: What it measures */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-3">What It Measures</h4>
                <p className="text-gray-300 text-sm mb-3">
                  <span className="text-bio-yellow font-semibold">Linear relationship</span> between two continuous variables
                </p>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li>• Measures strength and direction of linear association</li>
                  <li>• Values range from -1 to +1</li>
                  <li>• +1 = perfect positive correlation</li>
                  <li>• 0 = no linear correlation</li>
                  <li>• -1 = perfect negative correlation</li>
                </ul>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-3">Formula</h4>
                <div className="bg-bio-darker/70 rounded p-3 text-center">
                  <div className="text-gray-300 text-sm mb-2">
                    r = <span className="text-bio-yellow">Σ[(x - x̄)(y - ȳ)]</span>
                  </div>
                  <div className="text-gray-300 text-xs">
                    <span className="border-t border-gray-500 px-8">
                      √[Σ(x - x̄)²] × √[Σ(y - ȳ)²]
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Measures covariance normalized by standard deviations
                </p>
              </div>
            </div>

            {/* Right: When to use */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-green font-semibold text-sm mb-3">When to Use Pearson</h4>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li>✓ Data is <span className="text-bio-yellow font-semibold">continuous</span></li>
                  <li>✓ Relationship is <span className="text-bio-yellow font-semibold">linear</span></li>
                  <li>✓ Data is roughly <span className="text-bio-yellow font-semibold">normally distributed</span></li>
                  <li>✓ No major <span className="text-bio-yellow font-semibold">outliers</span></li>
                  <li>✓ Variables are measured on <span className="text-bio-yellow font-semibold">similar scales</span></li>
                </ul>
              </div>

              <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-4">
                <h4 className="text-amber-400 font-semibold text-sm mb-2">⚠️ Limitations</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Sensitive to outliers</li>
                  <li>• Only detects linear relationships</li>
                  <li>• Assumes normality for significance testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Spearman Correlation */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            📊 Spearman Correlation (ρ or rho)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: What it measures */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-3">What It Measures</h4>
                <p className="text-gray-300 text-sm mb-3">
                  <span className="text-bio-yellow font-semibold">Monotonic relationship</span> using ranks instead of raw values
                </p>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li>• Converts data to ranks (1st, 2nd, 3rd...)</li>
                  <li>• Then calculates Pearson on ranks</li>
                  <li>• Values range from -1 to +1</li>
                  <li>• Detects any monotonic relationship (not just linear)</li>
                  <li>• Robust to outliers</li>
                </ul>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-3">How It Works</h4>
                <div className="bg-bio-darker/70 rounded p-3 text-xs">
                  <div className="text-gray-300 mb-2">
                    <span className="text-gray-500">Step 1:</span> Rank gene1: [-3.2, -2.8, -4.1]
                  </div>
                  <div className="text-gray-300 mb-2 ml-12">
                    → [2, 3, 1]
                  </div>
                  <div className="text-gray-300 mb-2">
                    <span className="text-gray-500">Step 2:</span> Rank gene2: [-3.0, -2.9, -3.8]
                  </div>
                  <div className="text-gray-300 mb-2 ml-12">
                    → [2, 3, 1]
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">Step 3:</span> Calculate Pearson on ranks
                  </div>
                </div>
              </div>
            </div>

            {/* Right: When to use */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-3">When to Use Spearman</h4>
                <ul className="text-gray-300 text-xs space-y-2">
                  <li>✓ Data has <span className="text-bio-yellow font-semibold">outliers</span></li>
                  <li>✓ Relationship is <span className="text-bio-yellow font-semibold">non-linear but monotonic</span></li>
                  <li>✓ Data is <span className="text-bio-yellow font-semibold">ordinal</span> (ranked)</li>
                  <li>✓ Data is <span className="text-bio-yellow font-semibold">not normally distributed</span></li>
                  <li>✓ Want a <span className="text-bio-yellow font-semibold">robust</span> measure</li>
                </ul>
              </div>

              <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-4">
                <h4 className="text-bio-green font-semibold text-sm mb-2">✓ Advantages</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Robust to outliers</li>
                  <li>• No normality assumption</li>
                  <li>• Detects monotonic (not just linear) relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            ⚖️ Pearson vs Spearman: Quick Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-500">
                  <th className="text-left p-3 text-gray-300">Feature</th>
                  <th className="text-left p-3 text-bio-green">Pearson (r)</th>
                  <th className="text-left p-3 text-purple-400">Spearman (ρ)</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400">Relationship Type</td>
                  <td className="p-3 text-gray-300">Linear only</td>
                  <td className="p-3 text-gray-300">Any monotonic</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400">Data Type</td>
                  <td className="p-3 text-gray-300">Continuous values</td>
                  <td className="p-3 text-gray-300">Ranks</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400">Outlier Sensitivity</td>
                  <td className="p-3 text-gray-300">High 😟</td>
                  <td className="p-3 text-gray-300">Low 😊</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400">Normality Assumption</td>
                  <td className="p-3 text-gray-300">Yes (for p-values)</td>
                  <td className="p-3 text-gray-300">No</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400">Computational Speed</td>
                  <td className="p-3 text-gray-300">Fast ⚡</td>
                  <td className="p-3 text-gray-300">Slower (ranking step)</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-400">Best For</td>
                  <td className="p-3 text-gray-300">Clean, linear data</td>
                  <td className="p-3 text-gray-300">Robust validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-gradient-to-r from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🎯 Our Approach: Calculate Both!
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold text-sm mb-3">Why Calculate Both?</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <span className="text-bio-green font-semibold">Pearson</span>: Primary measure for linear relationships</li>
                <li>• <span className="text-purple-400 font-semibold">Spearman</span>: Confirms findings, handles outliers</li>
                <li>• If they <span className="text-bio-yellow font-semibold">agree</span> → strong evidence</li>
                <li>• If they <span className="text-red-400 font-semibold">disagree</span> → investigate outliers/non-linearity</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">Code Example</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs">
                <div className="text-gray-300">
                  <span className="text-purple-400">from</span> scipy.stats <span className="text-purple-400">import</span> pearsonr, spearmanr
                </div>
                <div className="text-gray-300 mt-2">
                  <span className="text-gray-500"># Calculate both correlations</span>
                </div>
                <div className="text-gray-300">
                  r_pearson, p_pearson = pearsonr(atr, gene_x)
                </div>
                <div className="text-gray-300 mb-2">
                  r_spearman, p_spearman = spearmanr(atr, gene_x)
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Pearson: {'{'}r_pearson:.3f{'}'}, p={'{'}p_pearson:.2e{'}'}"</span>)
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Spearman: {'{'}r_spearman:.3f{'}'}, p={'{'}p_spearman:.2e{'}'}"</span>)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Two Methods, Better Validation
              </h4>
              <p className="text-gray-300 text-sm">
                <span className="text-bio-green font-semibold">Pearson</span> for linear relationships,
                <span className="text-purple-400 font-semibold"> Spearman</span> for robust validation.
                When both agree, you have <span className="text-bio-blue font-semibold">strong evidence</span> of correlation!
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
