import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide18MatplotlibVenn() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Creating Venn Diagrams: <GradientText>matplotlib-venn</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Community-Built Open Source Tool</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction to matplotlib-venn */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🎨 What is matplotlib-venn?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-3">
            A small <span className="text-bio-yellow font-semibold">open-source package</span> that extends matplotlib to create Venn diagrams
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">❤️</div>
              <p className="text-gray-300 text-xs font-semibold mb-1">Community Built</p>
              <p className="text-gray-400 text-xs">Created by kind developers to help everyone</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🔓</div>
              <p className="text-gray-300 text-xs font-semibold mb-1">Free & Open</p>
              <p className="text-gray-400 text-xs">Available to all researchers worldwide</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">🔧</div>
              <p className="text-gray-300 text-xs font-semibold mb-1">Simple API</p>
              <p className="text-gray-400 text-xs">Easy to use, integrates with matplotlib</p>
            </div>
          </div>

          {/* Documentation Link */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://pypi.org/project/matplotlib-venn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white rounded-lg hover:from-bio-blue/80 hover:to-purple-500/80 transition-all text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              matplotlib-venn Documentation
            </a>
          </div>
        </div>

        {/* Why Open Source Matters */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            💚 The Power of Open Source
          </h3>

          <div className="bg-bio-dark/50 rounded-lg p-5 mb-4">
            <h4 className="text-bio-yellow font-semibold text-sm mb-3 text-center">
              How matplotlib-venn Came to Be
            </h4>
            <p className="text-gray-300 text-sm text-center mb-3">
              Someone needed to create Venn diagrams in Python, didn't find a good solution,
              so they <span className="text-bio-green font-semibold">built it and shared it with the world</span>!
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-bio-darker/50 rounded p-3 text-center">
                <div className="text-3xl mb-1">👤</div>
                <p className="text-gray-300 text-xs font-semibold mb-1">One Developer</p>
                <p className="text-gray-400 text-xs">Had a problem to solve</p>
              </div>
              <div className="bg-bio-darker/50 rounded p-3 text-center">
                <div className="text-3xl mb-1">🔨</div>
                <p className="text-gray-300 text-xs font-semibold mb-1">Built a Solution</p>
                <p className="text-gray-400 text-xs">Created matplotlib-venn</p>
              </div>
              <div className="bg-bio-darker/50 rounded p-3 text-center">
                <div className="text-3xl mb-1">🌍</div>
                <p className="text-gray-300 text-xs font-semibold mb-1">Shared Freely</p>
                <p className="text-gray-400 text-xs">Now thousands benefit!</p>
              </div>
            </div>
          </div>

          <div className="bg-bio-yellow/10 border border-bio-yellow/30 rounded-lg p-4">
            <p className="text-bio-yellow font-semibold text-sm mb-2 text-center">
              ✨ This is the Spirit of Open Source!
            </p>
            <p className="text-gray-300 text-xs text-center">
              Scientists and developers sharing tools helps the entire research community move faster.
              Today we use matplotlib-venn; tomorrow you might create something others need!
            </p>
          </div>
        </div>

        {/* The Code */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🐍 Creating a Venn Diagram
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 1: Install the package (if needed)</span>
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-gray-500"># pip install matplotlib-venn</span>
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 2: Import the library</span>
            </div>
            <div className="text-gray-300 mb-4">
              <span className="text-purple-400">from</span> matplotlib_venn <span className="text-purple-400">import</span> venn2
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 3: Prepare your gene sets</span>
            </div>
            <div className="text-gray-300 mb-1">
              atr_genes = <span className="text-bio-green">set</span>(atr_results_df[atr_results_df[<span className="text-amber-400">'significant_both'</span>]][<span className="text-amber-400">'gene'</span>])
            </div>
            <div className="text-gray-300 mb-4">
              slu7_genes = <span className="text-bio-green">set</span>(slu7_results_df[slu7_results_df[<span className="text-amber-400">'significant_both'</span>]][<span className="text-amber-400">'gene'</span>])
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 4: Create figure and axes</span>
            </div>
            <div className="text-gray-300 mb-4">
              fig, ax = plt.<span className="text-bio-green">subplots</span>(<span className="text-amber-400">figsize</span>=(<span className="text-amber-400">8</span>, <span className="text-amber-400">6</span>))
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 5: Create the Venn diagram</span>
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-bio-green">venn2</span>(
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              [atr_genes, slu7_genes],
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              <span className="text-amber-400">set_labels</span>=(<span className="text-amber-400">'ATR correlations'</span>, <span className="text-amber-400">'SLU7 correlations'</span>),
            </div>
            <div className="text-gray-300 ml-4 mb-2">
              <span className="text-amber-400">ax</span>=ax
            </div>
            <div className="text-gray-300 mb-4">
              )
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Step 6: Add title and show</span>
            </div>
            <div className="text-gray-300 mb-1">
              ax.<span className="text-bio-green">set_title</span>(<span className="text-amber-400">'Overlap of ATR and SLU7 Correlation Networks'</span>, <span className="text-amber-400">fontsize</span>=<span className="text-amber-400">14</span>)
            </div>
            <div className="text-gray-300">
              plt.<span className="text-bio-green">show</span>()
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">🎯 Key Points</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">set():</span>
                  <span className="text-gray-300 ml-2">Convert lists to Python sets for overlap calculation</span>
                </div>
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">venn2():</span>
                  <span className="text-gray-300 ml-2">Creates 2-circle Venn diagram (venn3 for 3 circles)</span>
                </div>
                <div className="bg-bio-darker/50 rounded p-2">
                  <span className="text-purple-400 font-semibold">set_labels:</span>
                  <span className="text-gray-300 ml-2">Labels for each circle</span>
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">✨ What You Get</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>✓ Automatic overlap calculation</li>
                <li>✓ Counts displayed in each region</li>
                <li>✓ Proportional circle sizes (optional)</li>
                <li>✓ Customizable colors and styling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Calculating Intersection Statistics */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            📊 Bonus: Getting the Intersection in Python
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-5 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Python sets have built-in intersection operations!</span>
            </div>
            <div className="text-gray-300 mb-4">
              overlap_genes = atr_genes.<span className="text-bio-green">intersection</span>(slu7_genes)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Or use the & operator</span>
            </div>
            <div className="text-gray-300 mb-4">
              overlap_genes = atr_genes <span className="text-purple-400">&</span> slu7_genes
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Get the count</span>
            </div>
            <div className="text-gray-300 mb-4">
              overlap_count = <span className="text-bio-green">len</span>(overlap_genes)
            </div>

            <div className="text-gray-300 mb-3">
              <span className="text-gray-500"># Print the results</span>
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"ATR genes: {'{'}len(atr_genes){'}'}"</span>)
            </div>
            <div className="text-gray-300 mb-1">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"SLU7 genes: {'{'}len(slu7_genes){'}'}"</span>)
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">"Overlap: {'{'}overlap_count{'}'} genes"</span>)
            </div>
          </div>

          <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-4">
            <h4 className="text-bio-green font-semibold text-sm mb-2">💡 Pro Tip:</h4>
            <p className="text-gray-300 text-xs">
              Python's <span className="text-purple-400 font-mono">set</span> data structure is perfect for finding overlaps, unions, and differences.
              It's fast and has intuitive operators like <span className="text-bio-yellow font-mono">&</span> (intersection),{' '}
              <span className="text-bio-yellow font-mono">|</span> (union), and{' '}
              <span className="text-bio-yellow font-mono">-</span> (difference)!
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">❤️</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Small Tools, Big Impact
              </h4>
              <p className="text-gray-300 text-sm">
                <span className="text-bio-green font-semibold">matplotlib-venn</span> is a perfect example of open-source collaboration.
                A developer created a useful tool and shared it freely, and now researchers worldwide use it to visualize their data.
                This is how science moves forward together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
