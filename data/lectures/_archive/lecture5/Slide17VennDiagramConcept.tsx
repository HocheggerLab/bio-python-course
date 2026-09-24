import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide17VennDiagramConcept() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Visualizing Overlap: <GradientText>Venn Diagrams</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Finding Set Intersections</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            ⭕ What is a Venn Diagram?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-3">
            A visual representation of <span className="text-purple-400 font-semibold">set relationships</span>{' '}
            using overlapping circles
          </p>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <p className="text-gray-300 text-sm">
              Perfect for showing which genes are unique to{' '}
              <span className="text-bio-blue font-semibold">ATR</span>,{' '}
              unique to <span className="text-bio-green font-semibold">SLU7</span>,{' '}
              or <span className="text-bio-yellow font-semibold">shared by both</span>!
            </p>
          </div>
        </div>

        {/* Venn Diagram Anatomy */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            📊 Anatomy of a Venn Diagram
          </h3>

          <div className="grid md:grid-cols-[1fr,1fr] gap-6">
            {/* SVG Venn Diagram */}
            <div className="bg-bio-darker/70 rounded-lg p-6 flex items-center justify-center">
              <svg width="320" height="280" viewBox="0 0 320 280" className="w-full h-auto">
                {/* ATR circle */}
                <circle cx="110" cy="140" r="80" fill="#00d4ff" opacity="0.3" stroke="#00d4ff" strokeWidth="3" />

                {/* SLU7 circle */}
                <circle cx="210" cy="140" r="80" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="3" />

                {/* Intersection highlight */}
                <path
                  d="M 160 70 A 80 80 0 0 1 160 210 A 80 80 0 0 1 160 70"
                  fill="#ffd700"
                  opacity="0.5"
                />

                {/* Labels */}
                <text x="75" y="145" fill="#00d4ff" fontSize="16" fontWeight="bold" textAnchor="middle">
                  ATR only
                </text>
                <text x="245" y="145" fill="#10b981" fontSize="16" fontWeight="bold" textAnchor="middle">
                  SLU7 only
                </text>
                <text x="160" y="140" fill="#1a1a2e" fontSize="14" fontWeight="bold" textAnchor="middle">
                  Both
                </text>
                <text x="160" y="155" fill="#1a1a2e" fontSize="14" fontWeight="bold" textAnchor="middle">
                  (Overlap)
                </text>

                {/* Count examples */}
                <text x="75" y="165" fill="#00d4ff" fontSize="13" textAnchor="middle">
                  320 genes
                </text>
                <text x="245" y="165" fill="#10b981" fontSize="13" textAnchor="middle">
                  298 genes
                </text>
                <text x="160" y="180" fill="#1a1a2e" fontSize="13" fontWeight="bold" textAnchor="middle">
                  180 genes
                </text>

                {/* Arrows pointing to regions */}
                <line x1="40" y1="250" x2="70" y2="180" stroke="#00d4ff" strokeWidth="1.5" markerEnd="url(#arrowblue)" />
                <text x="15" y="255" fill="#00d4ff" fontSize="11">
                  Unique to ATR
                </text>

                <line x1="280" y1="250" x2="250" y2="180" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrowgreen)" />
                <text x="255" y="255" fill="#10b981" fontSize="11">
                  Unique to SLU7
                </text>

                <line x1="160" y1="30" x2="160" y2="65" stroke="#ffd700" strokeWidth="1.5" markerEnd="url(#arrowyellow)" />
                <text x="160" y="25" fill="#ffd700" fontSize="11" textAnchor="middle">
                  Shared genes
                </text>

                {/* Arrow markers */}
                <defs>
                  <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#00d4ff" />
                  </marker>
                  <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                  </marker>
                  <marker id="arrowyellow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ffd700" />
                  </marker>
                </defs>
              </svg>
            </div>

            {/* Explanation */}
            <div className="space-y-4">
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-bio-blue font-semibold text-sm mb-3">🔵 Three Regions</h4>
                <div className="space-y-2 text-xs">
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-bio-blue font-semibold">Left only:</span>
                    <span className="text-gray-300 ml-2">Genes correlating only with ATR</span>
                  </div>
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-bio-green font-semibold">Right only:</span>
                    <span className="text-gray-300 ml-2">Genes correlating only with SLU7</span>
                  </div>
                  <div className="bg-bio-darker/50 rounded p-2">
                    <span className="text-bio-yellow font-semibold">Intersection:</span>
                    <span className="text-gray-300 ml-2">Genes correlating with BOTH!</span>
                  </div>
                </div>
              </div>

              <div className="bg-bio-dark/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold text-sm mb-3">📐 The Math</h4>
                <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-2">
                  <div className="text-gray-300 mb-1">Total ATR genes = 320 + 180 = <span className="text-bio-blue font-bold">500</span></div>
                  <div className="text-gray-300 mb-1">Total SLU7 genes = 298 + 180 = <span className="text-bio-green font-bold">478</span></div>
                  <div className="text-gray-300 mt-2">Overlap = <span className="text-bio-yellow font-bold">180</span></div>
                </div>
                <p className="text-gray-400 text-xs">
                  Each circle's total = (unique) + (shared)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistical Significance */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📊 Is the Overlap Significant?
          </h3>

          <div className="bg-bio-dark/50 rounded-lg p-5 mb-4">
            <h4 className="text-bio-blue font-semibold text-sm mb-3">The Question:</h4>
            <p className="text-gray-300 text-sm mb-3">
              Is <span className="text-bio-yellow font-semibold">180 overlapping genes</span> more than we'd expect by chance?
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bio-darker/50 rounded-lg p-4">
                <h5 className="text-red-400 font-semibold text-xs mb-2 text-center">Random Overlap</h5>
                <p className="text-gray-300 text-xs text-center mb-2">
                  If gene lists were random, we'd expect small overlap just by chance
                </p>
                <div className="bg-bio-darker/70 rounded p-2 text-center">
                  <span className="text-gray-400 text-xs">Expected: ~10-20 genes</span>
                </div>
              </div>

              <div className="bg-bio-darker/50 rounded-lg p-4">
                <h5 className="text-bio-green font-semibold text-xs mb-2 text-center">Our Overlap</h5>
                <p className="text-gray-300 text-xs text-center mb-2">
                  180 genes is <span className="text-bio-yellow font-bold">much larger</span> than expected!
                </p>
                <div className="bg-bio-darker/70 rounded p-2 text-center">
                  <span className="text-bio-green font-bold text-xs">Observed: 180 genes ✓</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-5">
            <h4 className="text-bio-green font-semibold text-sm mb-3">🎲 Hypergeometric Test</h4>
            <p className="text-gray-300 text-sm mb-3">
              Statistical test that calculates: <span className="text-purple-400 font-semibold">"What's the probability of getting this much overlap by random chance?"</span>
            </p>

            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-bio-darker/50 rounded p-3 text-center">
                <div className="text-bio-blue font-mono text-xs mb-1">p-value &lt; 0.001</div>
                <p className="text-gray-400 text-xs">Very significant!</p>
              </div>
              <div className="bg-bio-darker/50 rounded p-3 text-center">
                <div className="text-amber-400 font-mono text-xs mb-1">p-value = 0.03</div>
                <p className="text-gray-400 text-xs">Significant</p>
              </div>
              <div className="bg-bio-darker/50 rounded p-3 text-center">
                <div className="text-red-400 font-mono text-xs mb-1">p-value = 0.25</div>
                <p className="text-gray-400 text-xs">Not significant</p>
              </div>
            </div>

            <div className="mt-3 bg-bio-yellow/10 border border-bio-yellow/30 rounded p-3">
              <p className="text-bio-yellow text-xs font-semibold mb-1">💡 What This Means:</p>
              <p className="text-gray-300 text-xs">
                Low p-value (e.g., &lt; 0.01) means the overlap is <span className="text-bio-green font-semibold">unlikely to be random</span> -
                ATR and SLU7 likely share a biological relationship!
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⭕</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Venn Diagrams Show Set Relationships
              </h4>
              <p className="text-gray-300 text-sm">
                The <span className="text-bio-yellow font-semibold">intersection</span> (overlap) tells us which genes are shared.
                The <span className="text-purple-400 font-semibold">hypergeometric test</span> tells us if that overlap is{' '}
                <span className="text-bio-green font-semibold">statistically significant</span> or just random chance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
