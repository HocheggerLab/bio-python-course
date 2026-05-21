import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide16ValidationStrategy() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Validating the Discovery: <GradientText>Repeat Analysis</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Finding Network Overlap</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* The Discovery */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🔍 What We Found
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold text-lg mb-2 text-center">ATR</h4>
              <p className="text-gray-300 text-sm text-center mb-2">
                DNA damage response kinase
              </p>
              <div className="bg-bio-darker/50 rounded p-2 text-xs text-gray-400 text-center">
                Well-studied role in replication stress
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-lg mb-2 text-center">SLU7</h4>
              <p className="text-gray-300 text-sm text-center mb-2">
                mRNA splicing factor
              </p>
              <div className="bg-bio-darker/50 rounded p-2 text-xs text-gray-400 text-center">
                Involved in pre-mRNA processing
              </div>
            </div>
          </div>

          <div className="mt-4 bg-amber-400/10 border border-amber-400/30 rounded-lg p-4">
            <p className="text-amber-400 font-semibold text-center text-sm mb-2">
              ⚠️ Unexpected Correlation!
            </p>
            <p className="text-gray-300 text-sm text-center">
              <span className="text-bio-blue font-semibold">ATR</span> (DNA repair) and{' '}
              <span className="text-bio-green font-semibold">SLU7</span> (RNA splicing) are in{' '}
              <span className="text-purple-400 font-semibold">different biological pathways</span>
              <br />
              <span className="text-xs text-gray-400 mt-2 block">
                Why do cells that depend on one also depend on the other?
              </span>
            </p>
          </div>
        </div>

        {/* The Question */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🤔 The Key Question
          </h3>

          <div className="bg-bio-dark/50 rounded-lg p-5">
            <p className="text-gray-300 text-lg text-center mb-4">
              Is this correlation <span className="text-red-400 font-semibold">spurious</span>{' '}
              (coincidence) or <span className="text-bio-green font-semibold">real</span>{' '}
              (biologically meaningful)?
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-bio-darker/50 rounded-lg p-4 border-2 border-red-400/30">
                <h4 className="text-red-400 font-semibold text-sm mb-2 text-center">❌ Spurious</h4>
                <p className="text-gray-300 text-xs text-center">
                  Random coincidence with no biological meaning. ATR and SLU7 correlate by chance,
                  not because they work together.
                </p>
              </div>

              <div className="bg-bio-darker/50 rounded-lg p-4 border-2 border-bio-green/30">
                <h4 className="text-bio-green font-semibold text-sm mb-2 text-center">✓ Real</h4>
                <p className="text-gray-300 text-xs text-center">
                  A novel biological interaction! ATR and SLU7 may work in the same pathway or
                  compensate for each other in certain contexts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Strategy */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🎯 Validation Strategy: Network Overlap Analysis
          </h3>

          <div className="space-y-4">
            {/* Step by step */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold text-sm mb-4">The Logic:</h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-bio-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-gray-300 text-sm">
                    We found genes that correlate with <span className="text-bio-blue font-semibold">ATR</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-bio-green text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-gray-300 text-sm">
                    Now let's find genes that correlate with <span className="text-bio-green font-semibold">SLU7</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-gray-300 text-sm">
                    Check the <span className="text-purple-400 font-semibold">overlap</span> between the two gene lists
                  </p>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold text-sm mb-4 text-center">Expected Outcomes:</h4>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Low overlap */}
                <div className="bg-bio-darker/50 rounded-lg p-4">
                  <h5 className="text-red-400 font-semibold text-xs mb-3 text-center">
                    Low Overlap → Spurious
                  </h5>
                  <svg width="200" height="140" viewBox="0 0 200 140" className="w-full h-auto">
                    {/* ATR circle */}
                    <circle cx="60" cy="70" r="45" fill="#00d4ff" opacity="0.3" stroke="#00d4ff" strokeWidth="2" />
                    <text x="60" y="75" fill="#00d4ff" fontSize="14" textAnchor="middle" className="font-bold">ATR</text>

                    {/* SLU7 circle */}
                    <circle cx="140" cy="70" r="45" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                    <text x="140" y="75" fill="#10b981" fontSize="14" textAnchor="middle" className="font-bold">SLU7</text>

                    {/* Small overlap */}
                    <text x="100" y="120" fill="#ef4444" fontSize="11" textAnchor="middle" className="font-bold">
                      Few shared genes
                    </text>
                  </svg>
                  <p className="text-gray-400 text-xs text-center mt-2">
                    ATR and SLU7 have different correlation partners → likely random
                  </p>
                </div>

                {/* High overlap */}
                <div className="bg-bio-darker/50 rounded-lg p-4">
                  <h5 className="text-bio-green font-semibold text-xs mb-3 text-center">
                    High Overlap → Real Interaction!
                  </h5>
                  <svg width="200" height="140" viewBox="0 0 200 140" className="w-full h-auto">
                    {/* ATR circle */}
                    <circle cx="70" cy="70" r="45" fill="#00d4ff" opacity="0.3" stroke="#00d4ff" strokeWidth="2" />
                    <text x="50" y="75" fill="#00d4ff" fontSize="14" textAnchor="middle" className="font-bold">ATR</text>

                    {/* SLU7 circle */}
                    <circle cx="130" cy="70" r="45" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                    <text x="150" y="75" fill="#10b981" fontSize="14" textAnchor="middle" className="font-bold">SLU7</text>

                    {/* Large overlap region */}
                    <ellipse cx="100" cy="70" rx="25" ry="35" fill="#ffd700" opacity="0.5" />
                    <text x="100" y="75" fill="#1a1a2e" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Many
                    </text>

                    <text x="100" y="120" fill="#10b981" fontSize="11" textAnchor="middle" className="font-bold">
                      Many shared genes!
                    </text>
                  </svg>
                  <p className="text-gray-400 text-xs text-center mt-2">
                    ATR and SLU7 share correlation partners → likely co-regulated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🔬</div>
            <div>
              <h4 className="text-amber-400 font-bold text-lg mb-1">
                Next: Run the Same Analysis with SLU7
              </h4>
              <p className="text-gray-300 text-sm">
                We'll use the exact same correlation pipeline, but this time with{' '}
                <span className="text-bio-green font-semibold">SLU7</span> as our query gene.
                Then we'll calculate the <span className="text-purple-400 font-semibold">intersection</span>{' '}
                to see how many genes appear in both lists!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
