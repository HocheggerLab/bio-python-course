import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide21SummaryQuestions() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Summary & Open Questions</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">What Have We Discovered?</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Our Analysis Journey */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-4 text-center">
            🔬 Our Analysis: ATR Gene Dependency
          </h3>
          <div className="bg-bio-dark/50 rounded-lg p-5 mb-4">
            <p className="text-gray-300 text-sm mb-3 text-center">
              We analyzed ATR gene dependency correlations in <span className="text-bio-yellow font-semibold">breast and myeloid cancer cell lines</span>
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-bio-darker/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-gray-300 text-xs mb-1 font-semibold">Genome-wide correlation</p>
                <p className="text-gray-400 text-xs">Tested all genes vs ATR</p>
              </div>
              <div className="bg-bio-darker/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-gray-300 text-xs mb-1 font-semibold">Top hit: SLU7</p>
                <p className="text-gray-400 text-xs">Highly correlated with ATR</p>
              </div>
              <div className="bg-bio-darker/50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <p className="text-gray-300 text-xs mb-1 font-semibold">Validation analysis</p>
                <p className="text-gray-400 text-xs">Network overlap check</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Finding: Overlapping Genes */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🧬 Shared Correlation Partners
          </h3>

          <div className="bg-bio-dark/50 rounded-lg p-5 mb-4">
            <p className="text-gray-300 text-sm mb-4 text-center">
              The intersection of correlations for <span className="text-bio-blue font-semibold">ATR</span> and{' '}
              <span className="text-bio-green font-semibold">SLU7</span> revealed these genes:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {['CHEK1', 'DEFB121', 'FUBP1', 'HIGD1A', 'RPA1', 'RPA2', 'U2SURP'].map((gene) => (
                <div key={gene} className="bg-gradient-to-br from-bio-blue/20 to-bio-green/20 border border-bio-yellow/30 rounded-lg p-3 text-center">
                  <p className="text-bio-yellow font-bold text-sm">{gene}</p>
                </div>
              ))}
            </div>

            <div className="bg-bio-darker/70 rounded-lg p-4">
              <p className="text-gray-300 text-xs text-center">
                These 7 genes correlate with <span className="text-bio-blue font-semibold">both ATR and SLU7</span> in our dataset
              </p>
            </div>
          </div>

          {/* What We Know About These Genes */}
          <div className="bg-bio-darker/50 rounded-lg p-5">
            <h4 className="text-bio-yellow font-semibold text-sm mb-3 text-center">💡 What Do We Know?</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-bio-dark/50 rounded p-3">
                <p className="text-gray-300">
                  <span className="text-bio-blue font-semibold">ATR:</span> DNA damage response, replication stress
                </p>
              </div>
              <div className="bg-bio-dark/50 rounded p-3">
                <p className="text-gray-300">
                  <span className="text-bio-green font-semibold">SLU7:</span> RNA splicing factor
                </p>
              </div>
              <div className="bg-bio-dark/50 rounded p-3">
                <p className="text-gray-300">
                  <span className="text-bio-yellow font-semibold">Some shared genes:</span> CHEK1, RPA1, RPA2 are known DNA repair proteins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Big Questions */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🤔 Questions to Think About
          </h3>

          <div className="space-y-4">
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <p className="text-bio-yellow font-semibold text-base mb-3 text-center">
                Is this overlap significant?
              </p>
              <p className="text-gray-300 text-sm text-center mb-3">
                We found 7 genes that correlate with both ATR and SLU7. But is this more than we'd expect by chance?
              </p>
              <div className="bg-bio-darker/70 rounded p-3">
                <p className="text-gray-400 text-xs text-center">
                  Think about: How could we test if this overlap is statistically significant?
                  What would we compare it to?
                </p>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-5">
              <p className="text-bio-yellow font-semibold text-base mb-3 text-center">
                Could this point to a new pathway?
              </p>
              <p className="text-gray-300 text-sm text-center mb-3">
                ATR is involved in <span className="text-bio-blue font-semibold">DNA repair</span>, while SLU7 is an{' '}
                <span className="text-bio-green font-semibold">RNA splicing factor</span>. Finding them correlated is unexpected!
              </p>
              <div className="bg-bio-darker/70 rounded p-3">
                <p className="text-gray-400 text-xs text-center">
                  Think about: Could there be a biological connection between DNA repair and splicing?
                  What would it mean if these pathways interact?
                </p>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-5">
              <p className="text-bio-yellow font-semibold text-base mb-3 text-center">
                What further analyses could we do?
              </p>
              <p className="text-gray-300 text-sm text-center mb-3">
                We've done correlation analysis and checked for overlap. What's the next step?
              </p>
              <div className="bg-bio-darker/70 rounded p-3 space-y-2">
                <p className="text-gray-400 text-xs">
                  • Could we test if specific <span className="text-purple-400 font-semibold">biological pathways</span> are enriched in the shared genes?
                </p>
                <p className="text-gray-400 text-xs">
                  • Should we look at <span className="text-purple-400 font-semibold">protein interactions</span> between ATR and SLU7?
                </p>
                <p className="text-gray-400 text-xs">
                  • Would <span className="text-purple-400 font-semibold">experimental validation</span> help confirm this connection?
                </p>
                <p className="text-gray-400 text-xs">
                  • Are there <span className="text-purple-400 font-semibold">published studies</span> linking DNA repair and splicing?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎓</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-2">
                From Data to Discovery
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                You've learned how to go from raw data to biological insights:
              </p>
              <div className="grid md:grid-cols-4 gap-3 mb-3">
                <div className="bg-bio-dark/50 rounded p-2 text-center">
                  <p className="text-bio-blue text-xs font-semibold">Load & explore data</p>
                </div>
                <div className="bg-bio-dark/50 rounded p-2 text-center">
                  <p className="text-bio-green text-xs font-semibold">Statistical analysis</p>
                </div>
                <div className="bg-bio-dark/50 rounded p-2 text-center">
                  <p className="text-purple-400 text-xs font-semibold">Visualization</p>
                </div>
                <div className="bg-bio-dark/50 rounded p-2 text-center">
                  <p className="text-amber-400 text-xs font-semibold">Interpretation</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                But science doesn't end with code - it ends with <span className="text-bio-yellow font-semibold">questions</span>.
                The tools we've learned give you the power to ask better questions and design experiments to answer them.
                <span className="text-purple-400 font-semibold"> Now it's your turn to explore!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Practice Notebooks */}
        <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
            📓 Practice Notebooks
          </h3>
          <p className="text-gray-300 text-center mb-4">
            Master statistical analysis and visualization with hands-on exercises
          </p>
          <div className="text-center">
            <a
              href="/notebooks/lecture-5"
              className="inline-block bg-bio-blue hover:bg-bio-blue/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Lecture 5 Notebooks →
            </a>
            <p className="text-gray-400 text-sm mt-3">
              Practice SciPy statistics, Seaborn visualization, FDR correction, and complete end-to-end analysis
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
