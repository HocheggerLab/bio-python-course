import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide08GenomeWideCorrelation() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Genome-Wide</GradientText> Correlation Analysis
        <br />
        <span className="text-3xl md:text-4xl">ATR vs 17,000 Genes</span>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-3 text-center">
            🎯 The Challenge
          </h3>
          <p className="text-gray-300 text-center text-lg">
            Calculate correlation between <span className="text-bio-yellow font-semibold">ATR</span> and
            <span className="text-purple-400 font-semibold"> every other gene</span> (~17,000 comparisons!)
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              We'll use a for loop to iterate through all genes and store results in a new DataFrame
            </span>
          </p>
        </div>

        {/* Step 1: Prepare Input Data */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            📊 Step 1: Prepare Input Data
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Extract ATR values */}
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">Extract ATR Values (pd.Series)</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Get ATR dependency values for all cell lines</span>
                </div>
                <div className="text-gray-300 mb-2">
                  gene_values = gene_df[<span className="text-amber-400">'ATR'</span>]
                </div>
                <div className="text-gray-300 mb-2">
                  <span className="text-purple-400">print</span>(<span className="text-purple-400">type</span>(gene_values))
                </div>
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Output: &lt;class 'pandas.core.series.Series'&gt;</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(<span className="text-purple-400">len</span>(gene_values))
                </div>
                <div className="text-gray-300">
                  <span className="text-gray-500"># Output: 94 (cell lines)</span>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                This gives us ATR's dependency score for each of the 94 cell lines
              </p>
            </div>

            {/* Extract other genes */}
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-3">Extract Other Genes (pd.DataFrame)</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Get all genes except ATR</span>
                </div>
                <div className="text-gray-300 mb-2">
                  other_genes = gene_df[numeric_cols].<span className="text-bio-green">drop</span>(<span className="text-amber-400">columns</span>=[<span className="text-amber-400">'ATR'</span>])
                </div>
                <div className="text-gray-300 mb-2">
                  <span className="text-purple-400">print</span>(<span className="text-purple-400">type</span>(other_genes))
                </div>
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Output: &lt;class 'pandas.core.frame.DataFrame'&gt;</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(other_genes.<span className="text-bio-green">shape</span>)
                </div>
                <div className="text-gray-300">
                  <span className="text-gray-500"># Output: (94, 17204)</span>
                </div>
              </div>
              <p className="text-gray-300 text-xs">
                DataFrame with 94 rows (cell lines) × 17,204 columns (genes)
              </p>
            </div>
          </div>

          <div className="mt-4 bg-bio-yellow/10 border border-bio-yellow/30 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold text-sm mb-1">💡 Why This Structure?</p>
            <p className="text-gray-300 text-xs">
              <span className="text-bio-blue font-semibold">gene_values</span> = single column (ATR) →
              <span className="text-bio-green font-semibold"> pd.Series</span>
              <br />
              <span className="text-purple-400 font-semibold">other_genes</span> = multiple columns (all other genes) →
              <span className="text-bio-green font-semibold"> pd.DataFrame</span>
            </p>
          </div>
        </div>

        {/* Step 2: The Function */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            🔧 Step 2: The calculate_gene_correlations() Function
          </h3>

          <div className="bg-bio-darker/70 rounded-lg p-4 font-mono text-xs mb-4">
            <div className="text-gray-300 mb-2">
              <span className="text-purple-400">def</span> <span className="text-bio-green">calculate_gene_correlations</span>(gene_values, other_genes_df):
            </div>
            <div className="text-gray-300 ml-4 mb-2">
              <span className="text-gray-500">"""Calculate correlations between one gene and all others"""</span>
            </div>
            <div className="text-gray-300 ml-4 mb-3">
              <span className="text-purple-400">print</span>(f<span className="text-amber-400">'Calculating for {'{'}len(other_genes_df.columns){'}'} genes...'</span>)
            </div>

            <div className="text-gray-300 ml-4 mb-3">
              <span className="text-gray-500"># Initialize empty lists to store results</span>
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              pearson_r = []
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              spearman_r = []
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              pearson_p = []
            </div>
            <div className="text-gray-300 ml-4 mb-3">
              spearman_p = []
            </div>

            <div className="text-gray-300 ml-4 mb-3">
              <span className="text-gray-500"># Loop through each gene</span>
            </div>
            <div className="text-gray-300 ml-4 mb-2">
              <span className="text-purple-400">for</span> gene <span className="text-purple-400">in</span> other_genes_df.<span className="text-bio-green">columns</span>:
            </div>
            <div className="text-gray-300 ml-8 mb-2">
              <span className="text-gray-500"># Extract values for this gene</span>
            </div>
            <div className="text-gray-300 ml-8 mb-3">
              gene_values_other = other_genes_df[gene]
            </div>

            <div className="text-gray-300 ml-8 mb-2">
              <span className="text-gray-500"># Calculate both correlations</span>
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              r_pearson, p_pearson = <span className="text-bio-green">pearsonr</span>(gene_values, gene_values_other)
            </div>
            <div className="text-gray-300 ml-8 mb-3">
              r_spearman, p_spearman = <span className="text-bio-green">spearmanr</span>(gene_values, gene_values_other)
            </div>

            <div className="text-gray-300 ml-8 mb-2">
              <span className="text-gray-500"># Append results to lists</span>
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              pearson_r.<span className="text-bio-green">append</span>(r_pearson)
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              spearman_r.<span className="text-bio-green">append</span>(r_spearman)
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              pearson_p.<span className="text-bio-green">append</span>(p_pearson)
            </div>
            <div className="text-gray-300 ml-8 mb-3">
              spearman_p.<span className="text-bio-green">append</span>(p_spearman)
            </div>

            <div className="text-gray-300 ml-4 mb-3">
              <span className="text-gray-500"># Build new DataFrame from lists ⭐ NEW SKILL!</span>
            </div>
            <div className="text-gray-300 ml-4 mb-1">
              results_df = pd.<span className="text-bio-green">DataFrame</span>({'{'}
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              <span className="text-amber-400">'gene'</span>: other_genes_df.<span className="text-bio-green">columns</span>,
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              <span className="text-amber-400">'pearson_r'</span>: pearson_r,
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              <span className="text-amber-400">'pearson_p'</span>: pearson_p,
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              <span className="text-amber-400">'spearman_r'</span>: spearman_r,
            </div>
            <div className="text-gray-300 ml-8 mb-1">
              <span className="text-amber-400">'spearman_p'</span>: spearman_p
            </div>
            <div className="text-gray-300 ml-4 mb-3">
              {'}'})
            </div>

            <div className="text-gray-300 ml-4 mb-2">
              <span className="text-purple-400">return</span> results_df
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-2">📝 What Happens in the Loop?</h4>
              <ul className="text-gray-300 text-xs space-y-2">
                <li>1. Extract each gene's values (one column at a time)</li>
                <li>2. Calculate Pearson & Spearman correlations with ATR</li>
                <li>3. Store r-values and p-values in separate lists</li>
                <li>4. Repeat 17,204 times!</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold text-sm mb-2">⭐ Building a DataFrame from Lists</h4>
              <p className="text-gray-300 text-xs mb-2">
                <span className="text-bio-yellow font-semibold">New skill!</span> Create DataFrame from dictionary of lists:
              </p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Keys → column names</li>
                <li>• Values (lists) → column data</li>
                <li>• All lists must be same length</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3: The Results DataFrame */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            📊 Step 3: Understanding the Results DataFrame
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-blue font-semibold text-sm mb-3">What We Get Back</h4>
              <div className="bg-bio-darker/70 rounded p-3 font-mono text-xs mb-3">
                <div className="text-gray-300 mb-2">
                  results = <span className="text-bio-green">calculate_gene_correlations</span>(
                </div>
                <div className="text-gray-300 ml-4 mb-1">
                  gene_values,
                </div>
                <div className="text-gray-300 ml-4 mb-2">
                  other_genes
                </div>
                <div className="text-gray-300 mb-3">
                  )
                </div>
                <div className="text-gray-300 mb-2">
                  <span className="text-purple-400">print</span>(results.<span className="text-bio-green">shape</span>)
                </div>
                <div className="text-gray-300 mb-2">
                  <span className="text-gray-500"># Output: (17204, 5)</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">print</span>(results.<span className="text-bio-green">head</span>())
                </div>
              </div>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-bio-green font-semibold text-sm mb-3">Example Output</h4>
              <div className="bg-bio-darker/70 rounded p-3 text-xs">
                <table className="w-full font-mono">
                  <thead className="text-gray-400 border-b border-gray-600">
                    <tr>
                      <th className="text-left p-1">gene</th>
                      <th className="text-right p-1">pearson_r</th>
                      <th className="text-right p-1">pearson_p</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="p-1">ATRIP</td>
                      <td className="text-right p-1 text-bio-green">0.847</td>
                      <td className="text-right p-1 text-purple-400">1.2e-25</td>
                    </tr>
                    <tr>
                      <td className="p-1">CHEK1</td>
                      <td className="text-right p-1 text-bio-green">0.731</td>
                      <td className="text-right p-1 text-purple-400">3.5e-18</td>
                    </tr>
                    <tr>
                      <td className="p-1">RPA1</td>
                      <td className="text-right p-1 text-bio-green">0.692</td>
                      <td className="text-right p-1 text-purple-400">8.4e-15</td>
                    </tr>
                    <tr>
                      <td className="p-1">COL1A1</td>
                      <td className="text-right p-1 text-amber-400">0.021</td>
                      <td className="text-right p-1 text-gray-400">0.842</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-400 text-xs mt-2">+ spearman_r, spearman_p columns</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
              <h4 className="text-purple-400 font-semibold text-xs mb-2">17,204 rows</h4>
              <p className="text-gray-300 text-xs">One row per gene (except ATR)</p>
            </div>
            <div className="bg-bio-blue/10 border border-bio-blue/30 rounded-lg p-3">
              <h4 className="text-bio-blue font-semibold text-xs mb-2">5 columns</h4>
              <p className="text-gray-300 text-xs">gene name, 2 r-values, 2 p-values</p>
            </div>
            <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-3">
              <h4 className="text-bio-green font-semibold text-xs mb-2">Organized data!</h4>
              <p className="text-gray-300 text-xs">Easy to sort, filter, and analyze</p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-5">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h4 className="text-bio-yellow font-bold text-lg mb-1">
                Functions + For Loops + DataFrames = Powerful Analysis!
              </h4>
              <p className="text-gray-300 text-sm">
                By combining <span className="text-bio-green font-semibold">for loops</span> to iterate,
                <span className="text-purple-400 font-semibold"> lists</span> to collect results, and
                <span className="text-bio-blue font-semibold"> pd.DataFrame()</span> to organize data,
                we can analyze <span className="text-bio-yellow font-semibold">17,000+ genes</span> efficiently!
              </p>
            </div>
          </div>
        </div>

        {/* Practice notebook link */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Practice Creating DataFrames
          </p>
          <p className="text-gray-300 text-sm mb-6">
            Learn how to build new DataFrames from lists and dictionaries with hands-on examples
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_N3_create_new_dfs.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open DataFrame Creation Notebook in Colab
          </a>
        </div>
      </div>
    </>
  )
}
