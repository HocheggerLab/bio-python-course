import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide20JaccardSimilarity() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Measuring Overlap: <GradientText>Jaccard Similarity</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">How Similar Are Two Gene Sets?</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            📊 What is Jaccard Similarity?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-3">
            A number between <span className="text-bio-yellow font-semibold">0 and 1</span> that measures{' '}
            <span className="text-purple-400 font-semibold">how similar two sets are</span>
          </p>
          <div className="bg-bio-dark/50 rounded-lg p-5 text-center">
            <div className="text-3xl mb-3">
              <span className="text-bio-yellow font-bold">J(A, B) = </span>
              <span className="text-bio-green font-bold">|A ∩ B|</span>
              <span className="text-gray-400"> / </span>
              <span className="text-bio-blue font-bold">|A ∪ B|</span>
            </div>
            <div className="text-gray-300 text-sm">
              <span className="text-bio-green font-semibold">Intersection</span> divided by{' '}
              <span className="text-bio-blue font-semibold">Union</span>
            </div>
            <div className="text-gray-400 text-xs mt-2">
              (Shared genes) / (All unique genes)
            </div>
          </div>
        </div>

        {/* Visual Explanation */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🎯 Understanding the Formula
          </h3>

          <div className="grid md:grid-cols-[1.2fr,1fr] gap-6">
            {/* Visual */}
            <div className="bg-bio-darker/70 rounded-lg p-6 flex items-center justify-center">
              <svg width="350" height="320" viewBox="0 0 350 320" className="w-full h-auto">
                {/* ATR circle */}
                <circle cx="120" cy="140" r="80" fill="#00d4ff" opacity="0.3" stroke="#00d4ff" strokeWidth="3" />

                {/* SLU7 circle */}
                <circle cx="230" cy="140" r="80" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="3" />

                {/* Intersection highlight */}
                <path
                  d="M 175 70 A 80 80 0 0 1 175 210 A 80 80 0 0 1 175 70"
                  fill="#ffd700"
                  opacity="0.6"
                />

                {/* Labels */}
                <text x="85" y="145" fill="#00d4ff" fontSize="14" fontWeight="bold" textAnchor="middle">
                  ATR only
                </text>
                <text x="265" y="145" fill="#10b981" fontSize="14" fontWeight="bold" textAnchor="middle">
                  SLU7 only
                </text>
                <text x="175" y="140" fill="#1a1a2e" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Overlap
                </text>

                {/* Example counts */}
                <text x="85" y="165" fill="#00d4ff" fontSize="13" textAnchor="middle">
                  320
                </text>
                <text x="265" y="165" fill="#10b981" fontSize="13" textAnchor="middle">
                  298
                </text>
                <text x="175" y="160" fill="#1a1a2e" fontSize="13" fontWeight="bold" textAnchor="middle">
                  180
                </text>

                {/* Annotation boxes */}
                <rect x="20" y="230" width="150" height="80" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="2" rx="8" />
                <text x="95" y="250" fill="#10b981" fontSize="14" fontWeight="bold" textAnchor="middle">
                  Intersection
                </text>
                <text x="95" y="270" fill="#10b981" fontSize="13" textAnchor="middle">
                  |A ∩ B| = 180
                </text>
                <text x="95" y="290" fill="#gray" fontSize="11" textAnchor="middle">
                  Genes in BOTH
                </text>

                <rect x="180" y="230" width="150" height="80" fill="#00d4ff" opacity="0.1" stroke="#00d4ff" strokeWidth="2" rx="8" />
                <text x="255" y="250" fill="#00d4ff" fontSize="14" fontWeight="bold" textAnchor="middle">
                  Union
                </text>
                <text x="255" y="270" fill="#00d4ff" fontSize="13" textAnchor="middle">
                  |A ∪ B| = 798
                </text>
                <text x="255" y="290" fill="#gray" fontSize="11" textAnchor="middle">
                  320 + 298 + 180 = 798
                </text>
              </svg>
            </div>

            {/* Calculation */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-5">
                <h4 className="text-bio-yellow font-semibold text-sm mb-3 text-center">📝 Step-by-Step</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-bio-darker/50 rounded p-3">
                    <div className="text-bio-green font-semibold mb-1">1. Count Intersection</div>
                    <div className="text-gray-300 text-xs">Genes in both sets</div>
                    <div className="text-gray-300 font-mono text-xs mt-1">180 genes</div>
                  </div>

                  <div className="bg-bio-darker/50 rounded p-3">
                    <div className="text-bio-blue font-semibold mb-1">2. Count Union</div>
                    <div className="text-gray-300 text-xs">All unique genes total</div>
                    <div className="text-gray-300 font-mono text-xs mt-1">320 + 298 + 180 = 798</div>
                  </div>

                  <div className="bg-bio-darker/50 rounded p-3">
                    <div className="text-bio-yellow font-semibold mb-1">3. Divide</div>
                    <div className="text-gray-300 text-xs">Intersection / Union</div>
                    <div className="text-gray-300 font-mono text-xs mt-1">180 / 798 = 0.226</div>
                  </div>
                </div>
              </div>

              <div className="bg-bio-yellow/10 border border-bio-yellow/30 rounded-lg p-3">
                <div className="text-bio-yellow font-bold text-center text-lg mb-1">
                  J = 0.226
                </div>
                <p className="text-gray-300 text-xs text-center">
                  ~23% similarity between ATR and SLU7 gene networks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interpreting Jaccard Values */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📏 Interpreting Jaccard Similarity
          </h3>

          <div className="grid md:grid-cols-4 gap-3 mb-4">
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">❌</div>
              <div className="text-red-400 font-bold text-lg mb-1">J = 0.0</div>
              <p className="text-gray-300 text-xs">No overlap</p>
              <p className="text-gray-400 text-xs mt-1">Completely different</p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🤏</div>
              <div className="text-amber-400 font-bold text-lg mb-1">J = 0.1-0.3</div>
              <p className="text-gray-300 text-xs">Small overlap</p>
              <p className="text-gray-400 text-xs mt-1">Weakly similar</p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">👍</div>
              <div className="text-bio-blue font-bold text-lg mb-1">J = 0.3-0.7</div>
              <p className="text-gray-300 text-xs">Moderate overlap</p>
              <p className="text-gray-400 text-xs mt-1">Quite similar</p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-bio-green font-bold text-lg mb-1">J = 0.7-1.0</div>
              <p className="text-gray-300 text-xs">Large overlap</p>
              <p className="text-gray-400 text-xs mt-1">Very similar!</p>
            </div>
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold text-sm mb-2 text-center">💡 For Our Analysis</h4>
            <p className="text-gray-300 text-sm text-center">
              If J is <span className="text-bio-green font-semibold">high (e.g., &gt; 0.3)</span>,
              ATR and SLU7 share many correlation partners → likely a <span className="text-bio-yellow font-semibold">real biological connection</span>!
              <br />
              If J is <span className="text-red-400 font-semibold">low (e.g., &lt; 0.1)</span>,
              the correlation is probably <span className="text-gray-400">spurious</span>.
            </p>
          </div>
        </div>

        {/* Python Implementation */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            🐍 Calculating Jaccard in Python
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 1: Get the sets</span>
            </div>
            <div className="text-gray-300 mb-1">
              atr_genes = <span className="text-bio-green">set</span>(atr_results_df[atr_results_df[<span className="text-amber-400">'significant_both'</span>]][<span className="text-amber-400">'gene'</span>])
            </div>
            <div className="text-gray-300 mb-4">
              slu7_genes = <span className="text-bio-green">set</span>(slu7_results_df[slu7_results_df[<span className="text-amber-400">'significant_both'</span>]][<span className="text-amber-400">'gene'</span>])
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 2: Calculate intersection and union</span>
            </div>
            <div className="text-gray-300 mb-1">
              intersection = atr_genes <span className="text-purple-400">&</span> slu7_genes
            </div>
            <div className="text-gray-300 mb-4">
              union = atr_genes <span className="text-purple-400">|</span> slu7_genes
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 3: Calculate Jaccard similarity</span>
            </div>
            <div className="text-gray-300 mb-4">
              jaccard = <span className="text-bio-green">len</span>(intersection) / <span className="text-bio-green">len</span>(union)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 4: Print the results</span>
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"ATR genes: {'{'}len(atr_genes){'}'}"</span>)
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"SLU7 genes: {'{'}len(slu7_genes){'}'}"</span>)
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Overlap: {'{'}len(intersection){'}'} genes"</span>)
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Jaccard similarity: {'{'}jaccard:.3f{'}'}"</span>)
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">✨ Simple Formula</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-2">
                <div className="text-gray-300">
                  jaccard = <span className="text-bio-green">len</span>(A & B) / <span className="text-bio-green">len</span>(A | B)
                </div>
              </div>
              <p className="text-gray-400 text-xs">
                Just one line! Python's set operators make it easy.
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">📊 Example Output</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs">
                <div className="text-gray-300 mb-1">ATR genes: 500</div>
                <div className="text-gray-300 mb-1">SLU7 genes: 478</div>
                <div className="text-gray-300 mb-1">Overlap: 180 genes</div>
                <div className="text-bio-green font-bold">Jaccard similarity: 0.226</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📊</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Jaccard Similarity: A Single Number Summary
              </h4>
              <p className="text-gray-300 text-sm">
                Instead of just counting overlap, <span className="text-bio-green font-semibold">Jaccard similarity</span> gives us a{' '}
                <span className="text-purple-400 font-semibold">normalized score (0-1)</span> that accounts for the size of both sets.
                It answers: <span className="text-bio-blue font-semibold">"What fraction of all unique genes is shared?"</span>
                This makes it easy to compare overlaps across different analyses!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
