import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide11FDRConcept() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        The <GradientText>Multiple Testing Problem</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Why We Need FDR Correction</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-400/10 to-pink-500/10 border border-red-400/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-red-400 mb-3 text-center">
            ⚠️ The Problem
          </h3>
          <p className="text-gray-300 text-center text-lg">
            We just tested <span className="text-bio-yellow font-semibold">17,204 genes</span> for correlation with ATR
            <br />
            <span className="text-sm text-red-400 mt-2 block font-semibold">
              With that many tests, we'll get hundreds of false positives by pure chance!
            </span>
          </p>
        </div>

        {/* The Coin Flip Analogy */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            🪙 Understanding the Problem: The Coin Flip Analogy
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Single test */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-green font-semibold text-sm mb-3">Single Test (p &lt; 0.05)</h4>
              <p className="text-gray-300 text-sm mb-3">
                Flip a coin 20 times. Get 15+ heads? That's unusual (p &lt; 0.05)
              </p>
              <div className="bg-bio-darker/70 rounded p-3 mb-3">
                <div className="text-center mb-2">
                  <span className="text-4xl">🪙</span>
                </div>
                <p className="text-gray-300 text-xs text-center">
                  Chance of false positive: <span className="text-bio-yellow font-semibold">5%</span>
                </p>
                <p className="text-gray-400 text-xs text-center mt-2">
                  ✓ Acceptable risk for one test
                </p>
              </div>
            </div>

            {/* Multiple tests */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-red-400 font-semibold text-sm mb-3">17,204 Tests!</h4>
              <p className="text-gray-300 text-sm mb-3">
                Flip 17,204 different coins 20 times each. How many give 15+ heads?
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-3 mb-3">
                <div className="text-center mb-2">
                  <span className="text-4xl">🪙🪙🪙🪙🪙...</span>
                </div>
                <p className="text-gray-300 text-xs text-center">
                  Expected false positives: <span className="text-red-400 font-semibold">~860 genes!</span>
                </p>
                <p className="text-gray-400 text-xs text-center mt-2">
                  17,204 × 0.05 = 860
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-400 font-semibold text-sm text-center">
              💥 With p &lt; 0.05, we'd falsely call 860 genes "correlated" just by chance!
            </p>
          </div>
        </div>

        {/* Real Example */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            📊 Our Real Data Example
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">17,204</div>
              <h4 className="text-bio-blue font-semibold text-sm mb-2">Genes Tested</h4>
              <p className="text-gray-300 text-xs">
                Every gene in our dataset (except ATR)
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2 text-red-400">~860</div>
              <h4 className="text-red-400 font-semibold text-sm mb-2">False Positives Expected</h4>
              <p className="text-gray-300 text-xs">
                Using p &lt; 0.05 without correction
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2 text-amber-400">???</div>
              <h4 className="text-amber-400 font-semibold text-sm mb-2">True Positives</h4>
              <p className="text-gray-300 text-xs">
                How do we know which are real?
              </p>
            </div>
          </div>
        </div>

        {/* Enter FDR */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            ✅ The Solution: False Discovery Rate (FDR)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* What is FDR */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">What is FDR?</h4>
              <p className="text-gray-300 text-sm mb-3">
                <span className="text-bio-yellow font-semibold">False Discovery Rate</span> =
                Expected proportion of false positives among all discoveries
              </p>
              <div className="bg-bio-darker/70 rounded p-3 mb-3">
                <p className="text-gray-300 text-xs text-center mb-2">
                  FDR &lt; 0.05 means:
                </p>
                <p className="text-bio-green text-sm text-center font-semibold">
                  "At most 5% of our significant genes are false positives"
                </p>
              </div>
              <p className="text-gray-400 text-xs">
                Much more conservative than uncorrected p-values!
              </p>
            </div>

            {/* How it works */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold text-sm mb-3">How Does It Work?</h4>
              <p className="text-gray-300 text-sm mb-3">
                <span className="text-bio-yellow font-semibold">Benjamini-Hochberg method</span> adjusts p-values:
              </p>
              <ul className="text-gray-300 text-xs space-y-2 mb-3">
                <li>1. Sort all p-values from smallest to largest</li>
                <li>2. Adjust each p-value based on its rank</li>
                <li>3. Account for the total number of tests</li>
                <li>4. Control the false discovery rate</li>
              </ul>
              <p className="text-gray-400 text-xs">
                Don't worry about the math - the function does it for us!
              </p>
            </div>
          </div>
        </div>

        {/* Before vs After */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📉 Impact of FDR Correction
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
              <h4 className="text-red-400 font-semibold mb-3 text-center">❌ Without FDR Correction</h4>
              <div className="space-y-3">
                <div className="bg-bio-dark/50 rounded p-3">
                  <p className="text-gray-300 text-sm">
                    Genes with <span className="text-red-400 font-semibold">p &lt; 0.05</span>: ~2,500
                  </p>
                </div>
                <div className="bg-bio-dark/50 rounded p-3">
                  <p className="text-gray-300 text-sm">
                    False positives: <span className="text-red-400 font-semibold">~860</span> (34%)
                  </p>
                </div>
                <div className="bg-bio-dark/50 rounded p-3">
                  <p className="text-gray-300 text-sm">
                    Problem: <span className="text-red-400 font-semibold">1 in 3 is fake!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-5">
              <h4 className="text-bio-green font-semibold mb-3 text-center">✓ With FDR &lt; 0.05</h4>
              <div className="space-y-3">
                <div className="bg-bio-dark/50 rounded p-3">
                  <p className="text-gray-300 text-sm">
                    Genes with <span className="text-bio-green font-semibold">FDR &lt; 0.05</span>: ~450
                  </p>
                </div>
                <div className="bg-bio-dark/50 rounded p-3">
                  <p className="text-gray-300 text-sm">
                    False positives: <span className="text-bio-green font-semibold">~23</span> (5%)
                  </p>
                </div>
                <div className="bg-bio-dark/50 rounded p-3">
                  <p className="text-gray-300 text-sm">
                    Confidence: <span className="text-bio-green font-semibold">95% are real!</span>
                  </p>
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
                FDR Correction is Essential for Genome-Wide Studies
              </h4>
              <p className="text-gray-300 text-sm">
                Testing thousands of genes means we <span className="text-red-400 font-semibold">must</span> correct for multiple testing.
                FDR gives us <span className="text-bio-green font-semibold">confidence</span> that our significant genes are
                <span className="text-bio-blue font-semibold"> truly biologically meaningful</span>, not just statistical noise!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
