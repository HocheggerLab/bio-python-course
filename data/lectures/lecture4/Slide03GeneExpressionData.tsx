'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide03GeneExpressionData() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Our Dataset: <GradientText>DepMap Gene Expression</GradientText> 🧬
      </SlideTitle>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Comprehensive gene expression profiles across hundreds of cancer cell lines
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* What is TPM */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-xl font-bold text-bio-blue">RNA-seq Expression Data</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Log-transformed TPM Values</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>TPM</strong>: Transcripts Per Million</li>
                <li>• Normalizes for gene length & sequencing depth</li>
                <li>• Comparable across samples</li>
                <li>• Log-transformed for better statistics</li>
              </ul>
            </div>

            <div className="bg-bio-blue/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Gene-Level Data</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Unstranded RNA-seq measurements</li>
                <li>• Protein-coding genes only</li>
                <li>• Human genome (GRCh38)</li>
                <li>• ~18,000 genes measured</li>
              </ul>
            </div>

            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <span className="text-bio-yellow font-semibold">💡 Why log-transform?</span>
                <br />
                Gene expression spans orders of magnitude. Log-transformation makes highly
                expressed and lowly expressed genes comparable.
              </p>
            </div>
          </div>
        </div>

        {/* Dataset Structure */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🗂️</div>
            <h3 className="text-xl font-bold text-purple-400">Dataset Structure</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-500/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Expression Matrix</h4>
              <SyntaxHighlighter
                code={`# Pandas DataFrame structure:
#              GENE_1  GENE_2  GENE_3  ...
# CELLLINE_1   5.2     2.8     0.1   ...
# CELLLINE_2   4.9     3.1     0.3   ...
# CELLLINE_3   6.1     2.5     0.0   ...
# ...

# Rows: Cell lines (1000+)
# Columns: Genes (18,000+)`}
                language="python"
              />
            </div>

            <div className="bg-purple-500/10 rounded-lg p-4">
              <h4 className="text-bio-yellow font-semibold mb-2">Rich Metadata</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• <strong>Cell line names</strong>: Official identifiers</li>
                <li>• <strong>Disease type</strong>: Cancer subtype</li>
                <li>• <strong>Lineage</strong>: Tissue of origin</li>
                <li>• <strong>Primary/Metastatic</strong>: Tumor source</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Data Source */}
      <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-bio-green mb-4 text-center">
          🔬 About DepMap Expression Data
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-green/10 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">🏥</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Cancer Cell Lines</h4>
            <p className="text-gray-300 text-sm text-center">
              1000+ immortalized cancer cell lines representing diverse cancer types
            </p>
          </div>
          <div className="bg-bio-green/10 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">🎯</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Research Questions</h4>
            <p className="text-gray-300 text-sm text-center">
              Which genes are highly expressed? What differs between cancer types?
            </p>
          </div>
          <div className="bg-bio-green/10 rounded-lg p-4">
            <div className="text-2xl mb-2 text-center">🌐</div>
            <h4 className="text-bio-yellow font-semibold mb-2 text-center">Open Science</h4>
            <p className="text-gray-300 text-sm text-center">
              Freely available from <a href="https://depmap.org" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline">depmap.org</a> for cancer research
            </p>
          </div>
        </div>
      </div>

      {/* Example Use Cases */}
      <div className="bg-gradient-to-br from-amber-500/10 to-bio-yellow/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4 text-center">
          🔍 What We'll Explore
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold text-xl">1.</span>
              <div>
                <p className="text-gray-300 font-semibold">Expression Distributions</p>
                <p className="text-gray-400 text-sm">Which genes are highly/lowly expressed across all cancers?</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold text-xl">2.</span>
              <div>
                <p className="text-gray-300 font-semibold">Cancer Type Comparison</p>
                <p className="text-gray-400 text-sm">How does breast cancer differ from leukemia?</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold text-xl">3.</span>
              <div>
                <p className="text-gray-300 font-semibold">Gene Co-expression</p>
                <p className="text-gray-400 text-sm">Which genes are expressed together?</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold text-xl">4.</span>
              <div>
                <p className="text-gray-300 font-semibold">Visualization Techniques</p>
                <p className="text-gray-400 text-sm">Create publication-ready plots to communicate findings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🎯 The Power of This Dataset
        </h3>
        <p className="text-white/90 text-center">
          With over <strong>18 million data points</strong> (1000+ cell lines × 18,000+ genes),
          we can discover patterns across cancer types, identify cancer-specific genes,
          and understand the molecular basis of different cancers - all with pandas & matplotlib!
        </p>
      </div>
    </div>
  )
}
