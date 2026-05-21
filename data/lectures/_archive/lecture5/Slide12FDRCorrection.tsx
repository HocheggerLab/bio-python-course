import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide12FDRCorrection() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Applying <GradientText>FDR Correction</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Using SciPy</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🎉 Good News: SciPy Has FDR Built-In!
          </h3>
          <p className="text-gray-300 text-center text-lg">
            No need for another library - <span className="text-bio-yellow font-semibold">scipy.stats</span> includes
            <span className="text-purple-400 font-semibold"> false_discovery_control()</span>
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              We're already using SciPy for correlations, so this keeps things simple!
            </span>
          </p>
        </div>

        {/* The Function We Need */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🔧 The Function: false_discovery_control()
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-sm mb-4">
            <div className="text-gray-300 mb-2">
              <span className="text-purple-400">from</span> scipy.stats <span className="text-purple-400">import</span> false_discovery_control
            </div>
            <div className="text-gray-300 mt-4 mb-2">
              <span className="text-gray-500"># Apply FDR correction - returns adjusted p-values</span>
            </div>
            <div className="text-gray-300 mb-2">
              adjusted_p = <span className="text-bio-green">false_discovery_control</span>(
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              results_df[<span className="text-amber-400">'pearson_p'</span>],
            </div>
            <div className="text-gray-300 ml-4 mb-2">
              <span className="text-amber-400">method</span>=<span className="text-amber-400">'bh'</span>
            </div>
            <div className="text-gray-300 mb-4">
              )
            </div>
            <div className="text-gray-300 mb-2">
              <span className="text-gray-500"># Compare adjusted p-values to alpha threshold</span>
            </div>
            <div className="text-gray-300 mb-1">
              alpha = <span className="text-amber-400">0.05</span>
            </div>
            <div className="text-gray-300">
              significant = adjusted_p &lt; alpha
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">📥 Inputs</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">ps:</span>
                  <span className="text-gray-300 ml-2">Array/list of p-values to correct</span>
                </div>
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">method='bh':</span>
                  <span className="text-gray-300 ml-2">Benjamini-Hochberg FDR method (default)</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-3">📤 Output</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-bio-green font-semibold">adjusted_p:</span>
                  <span className="text-gray-300 ml-2">Array of adjusted p-values (same length as input)</span>
                </div>
                <div className="bg-bio-yellow/10 border border-bio-yellow/30 rounded p-2 mt-2">
                  <p className="text-bio-yellow text-xs font-semibold">⚠️ Important:</p>
                  <p className="text-gray-300 text-xs">You must compare adjusted p-values to your alpha (e.g., 0.05) to determine significance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Application */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            📝 Step-by-Step: Adding FDR to Our Results
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 1: Import the function (we already have scipy.stats!)</span>
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-purple-400">from</span> scipy.stats <span className="text-purple-400">import</span> false_discovery_control
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 2: Apply FDR correction to get adjusted p-values</span>
            </div>
            <div className="text-gray-300 mb-1">
              adjusted_pearson_p = <span className="text-bio-green">false_discovery_control</span>(results_df[<span className="text-amber-400">'pearson_p'</span>], <span className="text-amber-400">method</span>=<span className="text-amber-400">'bh'</span>)
            </div>
            <div className="text-gray-300 mb-4">
              adjusted_spearman_p = <span className="text-bio-green">false_discovery_control</span>(results_df[<span className="text-amber-400">'spearman_p'</span>], <span className="text-amber-400">method</span>=<span className="text-amber-400">'bh'</span>)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 3: Determine significance by comparing to alpha</span>
            </div>
            <div className="text-gray-300 mb-4">
              alpha = <span className="text-amber-400">0.05</span>
            </div>
            <div className="text-gray-300 mb-1">
              results_df[<span className="text-amber-400">'pearson_p_adjusted'</span>] = adjusted_pearson_p
            </div>
            <div className="text-gray-300 mb-1">
              results_df[<span className="text-amber-400">'spearman_p_adjusted'</span>] = adjusted_spearman_p
            </div>
            <div className="text-gray-300 mb-1">
              results_df[<span className="text-amber-400">'significant_pearson'</span>] = adjusted_pearson_p &lt; alpha
            </div>
            <div className="text-gray-300 mb-4">
              results_df[<span className="text-amber-400">'significant_spearman'</span>] = adjusted_spearman_p &lt; alpha
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 4: Check how many survived correction</span>
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Pearson: {'{'}results_df['significant_pearson'].<span className="text-bio-green">sum</span>(){'}'} significant"</span>)
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Spearman: {'{'}results_df['significant_spearman'].<span className="text-bio-green">sum</span>(){'}'} significant"</span>)
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">✓ What We Get</h4>
              <p className="text-gray-300 text-xs mb-3">
                Four new columns in our DataFrame:
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• <span className="text-bio-blue font-semibold">pearson_p_adjusted</span>: Adjusted p-values</li>
                <li>• <span className="text-bio-blue font-semibold">spearman_p_adjusted</span>: Adjusted p-values</li>
                <li>• <span className="text-purple-400 font-semibold">significant_pearson</span>: True/False (adjusted_p &lt; 0.05)</li>
                <li>• <span className="text-purple-400 font-semibold">significant_spearman</span>: True/False (adjusted_p &lt; 0.05)</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">💡 Why This Works</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• No extra library to install</li>
                <li>• Adjusted p-values control false discovery rate</li>
                <li>• Same proven Benjamini-Hochberg method</li>
                <li>• Easy to filter: adjusted_p &lt; 0.05</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filtering Significant Genes */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            🔍 Finding Significant Genes
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">Filter by Pearson</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Get genes significant by Pearson</span>
                </div>
                <div className="text-gray-300 mb-2">
                  sig_genes = results_df[
                </div>
                <div className="text-gray-300 ml-4 mb-2">
                  results_df[<span className="text-amber-400">'significant_pearson'</span>]
                </div>
                <div className="text-gray-300 mb-3">
                  ]
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Found {'{'}len(sig_genes){'}'} genes"</span>)
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Filter by Both Methods</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Get genes significant in BOTH tests</span>
                </div>
                <div className="text-gray-300 mb-2">
                  both_sig = results_df[
                </div>
                <div className="text-gray-300 ml-4 mb-1">
                  results_df[<span className="text-amber-400">'significant_pearson'</span>] &
                </div>
                <div className="text-gray-300 ml-4 mb-2">
                  results_df[<span className="text-amber-400">'significant_spearman'</span>]
                </div>
                <div className="text-gray-300 mb-3">
                  ]
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Both agree: {'{'}len(both_sig){'}'} genes"</span>)
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-bio-green/10 border border-bio-green/30 rounded-lg p-4">
            <h4 className="text-bio-green font-semibold text-sm mb-2">Example Output</h4>
            <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs">
              <div className="text-gray-300">
                Found <span className="text-bio-green font-semibold">453 genes</span> significant by Pearson
                <br />
                Found <span className="text-bio-green font-semibold">412 genes</span> significant by Spearman
                <br />
                <span className="text-bio-yellow">Both methods agree on</span> <span className="text-bio-green font-semibold">387 genes</span> ✓
                <br />
                <br />
                <span className="text-gray-400">→ Use the 387 genes where both agree for highest confidence!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Count Summary */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            📊 Quick Count Summary
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-4 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Count significant genes</span>
            </div>
            <div className="text-gray-300 mb-2">
              n_pearson = results_df[<span className="text-amber-400">'significant_pearson'</span>].<span className="text-bio-green">sum</span>()
            </div>
            <div className="text-gray-300 mb-2">
              n_spearman = results_df[<span className="text-amber-400">'significant_spearman'</span>].<span className="text-bio-green">sum</span>()
            </div>
            <div className="text-gray-300 mb-2">
              n_both = (results_df[<span className="text-amber-400">'significant_pearson'</span>] &
            </div>
            <div className="text-gray-300 ml-9 mb-3">
              results_df[<span className="text-amber-400">'significant_spearman'</span>]).<span className="text-bio-green">sum</span>()
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Pearson: {'{'}n_pearson{'}'}"</span>)
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Spearman: {'{'}n_spearman{'}'}"</span>)
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Both: {'{'}n_both{'}'}"</span>)
            </div>
          </div>

          <div className="bg-bio-yellow/10 border border-bio-yellow/30 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold text-xs mb-1">💡 Pro Tip:</p>
            <p className="text-gray-300 text-xs">
              <span className="text-bio-green font-semibold">.sum()</span> on a Boolean array counts the True values!
              This is a quick way to count how many genes passed the FDR threshold.
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                FDR Correction in One SciPy Function!
              </h4>
              <p className="text-gray-300 text-sm">
                <span className="text-bio-green font-semibold">false_discovery_control()</span> returns adjusted p-values.
                Compare them to your <span className="text-amber-400 font-semibold">alpha (0.05)</span> to determine significance.
                No extra libraries needed - everything we need is in <span className="text-purple-400 font-semibold">scipy.stats</span>!
                Filter for genes where <span className="text-bio-blue font-semibold">both Pearson and Spearman agree</span> for
                the most <span className="text-bio-yellow font-semibold">trustworthy results</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
