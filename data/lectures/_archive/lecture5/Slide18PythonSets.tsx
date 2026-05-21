import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide18PythonSets() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Python <GradientText>Sets</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">The Math Behind Venn Diagrams</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* What is a Set */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🔢 What is a Set?
          </h3>
          <p className="text-gray-300 text-center text-lg mb-3">
            A <span className="text-purple-400 font-semibold">collection of unique items</span> with no duplicates or order
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-3 text-center">Mathematical Set</h4>
              <div className="bg-bio-darker/70 rounded p-4 text-center">
                <p className="text-gray-300 text-sm mb-2">A = {'{'}1, 2, 3, 4, 5{'}'}</p>
                <p className="text-gray-300 text-sm">B = {'{'}4, 5, 6, 7{'}'}</p>
              </div>
              <p className="text-gray-400 text-xs text-center mt-3">
                From mathematics - theory of sets
              </p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-3 text-center">Python Set</h4>
              <div className="bg-bio-darker/70 rounded p-4 font-mono text-sm">
                <div className="text-gray-300 mb-2">genes_a = <span className="text-bio-green">{'{'}
                  <span className="text-amber-400">'ATR'</span>,
                  <span className="text-amber-400">'CHEK1'</span>,
                  <span className="text-amber-400">'TP53'</span>
                {'}'}</span></div>
                <div className="text-gray-300">genes_b = <span className="text-bio-green">{'{'}
                  <span className="text-amber-400">'TP53'</span>,
                  <span className="text-amber-400">'MDM2'</span>
                {'}'}</span></div>
              </div>
              <p className="text-gray-400 text-xs text-center mt-3">
                Python implementation - curly braces {'{}'}
              </p>
            </div>
          </div>
        </div>

        {/* Key Properties of Sets */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            ✨ Key Properties of Sets
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">🎯</div>
              <h4 className="text-bio-blue font-semibold text-sm mb-2 text-center">Unique Elements</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-2">
                <div className="text-gray-300 mb-1"># Duplicates removed!</div>
                <div className="text-gray-300 mb-2">genes = <span className="text-bio-green">set</span>([<span className="text-amber-400">'ATR'</span>, <span className="text-amber-400">'ATR'</span>, <span className="text-amber-400">'TP53'</span>])</div>
                <div className="text-gray-300"><span className="text-purple-400">print</span>(genes)</div>
                <div className="text-gray-400 mt-2"># {'{'}
                  <span className="text-amber-400">'ATR'</span>,
                  <span className="text-amber-400">'TP53'</span>
                {'}'}</div>
              </div>
              <p className="text-gray-400 text-xs text-center">Each element appears only once</p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">🔀</div>
              <h4 className="text-bio-green font-semibold text-sm mb-2 text-center">No Order</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-2">
                <div className="text-gray-300 mb-1"># Order doesn't matter</div>
                <div className="text-gray-300 mb-2">a = {'{'}
                  <span className="text-amber-400">'ATR'</span>,
                  <span className="text-amber-400">'TP53'</span>
                {'}'}</div>
                <div className="text-gray-300 mb-2">b = {'{'}
                  <span className="text-amber-400">'TP53'</span>,
                  <span className="text-amber-400">'ATR'</span>
                {'}'}</div>
                <div className="text-gray-300">a == b  <span className="text-gray-400"># True!</span></div>
              </div>
              <p className="text-gray-400 text-xs text-center">Sets are unordered collections</p>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <div className="text-3xl mb-2 text-center">⚡</div>
              <h4 className="text-purple-400 font-semibold text-sm mb-2 text-center">Fast Lookups</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-2">
                <div className="text-gray-300 mb-1"># Very fast membership test</div>
                <div className="text-gray-300 mb-2">genes = {'{'}
                  <span className="text-amber-400">'ATR'</span>,
                  <span className="text-amber-400">'TP53'</span>, ...
                {'}'}</div>
                <div className="text-gray-300"><span className="text-amber-400">'ATR'</span> <span className="text-purple-400">in</span> genes</div>
                <div className="text-gray-400 mt-2"># Instant! O(1)</div>
              </div>
              <p className="text-gray-400 text-xs text-center">Checking membership is instant</p>
            </div>
          </div>
        </div>

        {/* Creating Sets from Lists */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            🔄 Converting Lists to Sets
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">From a List</h4>
              <div className="bg-bio-darker/70 rounded p-4 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-3">
                  <span className="text-gray-500"># Start with a list of gene names</span>
                </div>
                <div className="text-gray-300 mb-2">
                  gene_list = [<span className="text-amber-400">'ATR'</span>, <span className="text-amber-400">'CHEK1'</span>, <span className="text-amber-400">'TP53'</span>, <span className="text-amber-400">'MDM2'</span>]
                </div>
                <div className="text-gray-300 mb-4">
                  <span className="text-gray-500"># Convert to set</span>
                </div>
                <div className="text-gray-300">
                  gene_set = <span className="text-bio-green">set</span>(gene_list)
                </div>
              </div>
              <div className="bg-bio-green/10 border border-bio-green/30 rounded p-2">
                <p className="text-gray-300 text-xs">
                  <span className="text-bio-green font-semibold">Why?</span> Lists can have duplicates and are slow for lookups. Sets remove duplicates and are fast!
                </p>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-bio-green font-semibold text-sm mb-3">From a DataFrame Column</h4>
              <div className="bg-bio-darker/70 rounded p-4 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-3">
                  <span className="text-gray-500"># Get significant genes from results</span>
                </div>
                <div className="text-gray-300 mb-2">
                  sig_genes_df = results_df[
                </div>
                <div className="text-gray-300 ml-4 mb-2">
                  results_df[<span className="text-amber-400">'significant_both'</span>]
                </div>
                <div className="text-gray-300 mb-4">
                  ]
                </div>
                <div className="text-gray-300 mb-4">
                  <span className="text-gray-500"># Convert column to set</span>
                </div>
                <div className="text-gray-300">
                  gene_set = <span className="text-bio-green">set</span>(sig_genes_df[<span className="text-amber-400">'gene'</span>])
                </div>
              </div>
              <div className="bg-bio-yellow/10 border border-bio-yellow/30 rounded p-2">
                <p className="text-gray-300 text-xs">
                  <span className="text-bio-yellow font-semibold">Perfect for our analysis!</span> We convert our significant gene lists to sets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Set Operations */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
            🔣 Set Operations - The Math Behind Venn Diagrams
          </h3>

          <div className="space-y-4">
            {/* Intersection */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                <div>
                  <h4 className="text-bio-yellow font-semibold text-sm mb-2">⭕ Intersection (AND)</h4>
                  <p className="text-gray-300 text-xs mb-3">Elements in BOTH sets</p>
                  <svg width="140" height="100" viewBox="0 0 140 100" className="w-full h-auto">
                    <circle cx="45" cy="50" r="35" fill="#00d4ff" opacity="0.3" stroke="#00d4ff" strokeWidth="2" />
                    <circle cx="95" cy="50" r="35" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="2" />
                    <path d="M 70 20 A 35 35 0 0 1 70 80 A 35 35 0 0 1 70 20" fill="#ffd700" opacity="0.7" />
                    <text x="70" y="55" fill="#1a1a2e" fontSize="12" fontWeight="bold" textAnchor="middle">A & B</text>
                  </svg>
                </div>
                <div className="bg-bio-darker/70 rounded p-4 font-mono text-xs">
                  <div className="text-gray-300 mb-2">atr_genes = {'{'}
                    <span className="text-amber-400">'ATR'</span>,
                    <span className="text-amber-400">'CHEK1'</span>,
                    <span className="text-amber-400">'TP53'</span>
                  {'}'}</div>
                  <div className="text-gray-300 mb-4">slu7_genes = {'{'}
                    <span className="text-amber-400">'TP53'</span>,
                    <span className="text-amber-400">'MDM2'</span>,
                    <span className="text-amber-400">'SLU7'</span>
                  {'}'}</div>
                  <div className="text-gray-300 mb-3">
                    <span className="text-gray-500"># Method 1: .intersection()</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    overlap = atr_genes.<span className="text-bio-green">intersection</span>(slu7_genes)
                  </div>
                  <div className="text-gray-300 mb-3">
                    <span className="text-gray-500"># Method 2: & operator</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    overlap = atr_genes <span className="text-purple-400">&</span> slu7_genes
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500"># Result: {'{'}
                      <span className="text-amber-400">'TP53'</span>
                    {'}'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Union */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                <div>
                  <h4 className="text-bio-blue font-semibold text-sm mb-2">⭕ Union (OR)</h4>
                  <p className="text-gray-300 text-xs mb-3">Elements in EITHER set</p>
                  <svg width="140" height="100" viewBox="0 0 140 100" className="w-full h-auto">
                    <circle cx="45" cy="50" r="35" fill="#00d4ff" opacity="0.5" stroke="#00d4ff" strokeWidth="2" />
                    <circle cx="95" cy="50" r="35" fill="#10b981" opacity="0.5" stroke="#10b981" strokeWidth="2" />
                    <text x="70" y="55" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">A | B</text>
                  </svg>
                </div>
                <div className="bg-bio-darker/70 rounded p-4 font-mono text-xs">
                  <div className="text-gray-300 mb-3">
                    <span className="text-gray-500"># Method 1: .union()</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    all_genes = atr_genes.<span className="text-bio-green">union</span>(slu7_genes)
                  </div>
                  <div className="text-gray-300 mb-3">
                    <span className="text-gray-500"># Method 2: | operator</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    all_genes = atr_genes <span className="text-purple-400">|</span> slu7_genes
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500"># Result: {'{'}
                      <span className="text-amber-400">'ATR'</span>,
                      <span className="text-amber-400">'CHEK1'</span>,
                      <span className="text-amber-400">'TP53'</span>,
                      <span className="text-amber-400">'MDM2'</span>,
                      <span className="text-amber-400">'SLU7'</span>
                    {'}'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Difference */}
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                <div>
                  <h4 className="text-bio-green font-semibold text-sm mb-2">⭕ Difference (NOT)</h4>
                  <p className="text-gray-300 text-xs mb-3">Elements in A but NOT in B</p>
                  <svg width="140" height="100" viewBox="0 0 140 100" className="w-full h-auto">
                    <circle cx="45" cy="50" r="35" fill="#00d4ff" opacity="0.5" stroke="#00d4ff" strokeWidth="2" />
                    <circle cx="95" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="2" />
                    <path d="M 45 15 A 35 35 0 0 1 45 85 A 35 35 0 0 1 45 15 M 70 20 A 35 35 0 0 0 70 80 A 35 35 0 0 0 70 20" fill="#00d4ff" opacity="0.7" />
                    <text x="35" y="55" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">A - B</text>
                  </svg>
                </div>
                <div className="bg-bio-darker/70 rounded p-4 font-mono text-xs">
                  <div className="text-gray-300 mb-3">
                    <span className="text-gray-500"># Method 1: .difference()</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    atr_only = atr_genes.<span className="text-bio-green">difference</span>(slu7_genes)
                  </div>
                  <div className="text-gray-300 mb-3">
                    <span className="text-gray-500"># Method 2: - operator</span>
                  </div>
                  <div className="text-gray-300 mb-3">
                    atr_only = atr_genes <span className="text-purple-400">-</span> slu7_genes
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500"># Result: {'{'}
                      <span className="text-amber-400">'ATR'</span>,
                      <span className="text-amber-400">'CHEK1'</span>
                    {'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🔢</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Sets Are Perfect for Gene Overlap Analysis
              </h4>
              <p className="text-gray-300 text-sm">
                Python sets implement mathematical set theory, making it easy to find{' '}
                <span className="text-bio-yellow font-semibold">intersections</span> (genes in both lists),{' '}
                <span className="text-bio-blue font-semibold">unions</span> (all unique genes), and{' '}
                <span className="text-bio-green font-semibold">differences</span> (unique to one list).
                This is exactly what we need for Venn diagram analysis!
              </p>
            </div>
          </div>
        </div>

        {/* Practice notebook link */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Python Sets
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Master set operations with hands-on exercises using gene lists and biological data
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N6_sets.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open Python Sets Notebook in Colab
          </a>
        </div>
      </div>
    </>
  )
}
