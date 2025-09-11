import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide12DataIntro() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Our Dataset: <GradientText>DepMap CRISPR</GradientText>
      </SlideTitle>
      
      <div className="max-w-5xl mx-auto space-y-6">
        {/* What is DepMap */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            🧬 The Cancer Dependency Map (DepMap)
          </h3>
          <p className="text-gray-300 text-center">
            A massive project by the <span className="text-bio-blue font-semibold">Broad Institute</span> to find cancer's weaknesses across 
            <span className="text-amber-400 font-semibold"> 1000+ cancer cell lines</span>
          </p>
        </div>
        
        {/* CRISPR explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-5">
            <h4 className="text-amber-400 font-semibold mb-3">🔬 How CRISPR Works Here</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>1. Take cancer cell lines</p>
              <p>2. Use CRISPR to knock out each gene</p>
              <p>3. Measure: Do cells die or survive?</p>
              <p>4. Repeat for ~20,000 genes!</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-gray-500/30 rounded-xl p-5">
            <h4 className="text-bio-green font-semibold mb-3">📊 Gene Effect Scores</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="text-red-400 font-semibold">Negative score:</span> Gene is essential</p>
              <p><span className="text-gray-400">~0 score:</span> Gene not important</p>
              <p><span className="text-bio-green font-semibold">Positive:</span> Gene inhibits growth</p>
              <p className="text-xs text-gray-400 mt-2">Scale: -1.0 = typical essential gene</p>
            </div>
          </div>
        </div>
        
        {/* Data example */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">
            📋 What Our Data Looks Like
          </h3>
          
          <SyntaxHighlighter
            code={`# Each row = one cancer cell line
# Each column = one gene
# Each value = gene effect score

                    TP53    BRCA1   MYC     PIK3CA
ACH-000001         -0.12   -0.05   -1.23   -0.08     # Lung cancer line
ACH-000002         -2.15   -0.91   -1.45   -0.07     # Breast cancer line  
ACH-000003         -0.08   -0.04   -1.89   -1.12     # Colon cancer line
...                ...     ...     ...     ...
ACH-001216         -0.45   -0.23   -1.67   -0.34     # Brain cancer line

# Interpretation: BRCA1 knockout kills ACH-000002 (-0.91) but not others!`}
            language="python"
          />
        </div>
        
        {/* Why this matters */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-green/10 border border-purple-500/30 rounded-xl p-6">
          <h4 className="text-purple-400 font-semibold mb-3 text-center">🎯 Why This Matters for Drug Discovery</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-bio-yellow font-semibold mb-1">Find Targets</p>
              <p className="text-gray-300">Genes essential in cancer but not normal cells</p>
            </div>
            <div className="text-center">
              <p className="text-bio-blue font-semibold mb-1">Personalize Treatment</p>
              <p className="text-gray-300">Different cancers = different vulnerabilities</p>
            </div>
            <div className="text-center">
              <p className="text-bio-green font-semibold mb-1">Save Lives</p>
              <p className="text-gray-300">Turn data into new cancer drugs</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-bio-blue text-sm font-semibold">
            🚀 Let's explore this data with pandas and uncover cancer's secrets!
          </p>
        </div>
      </div>
    </>
  )
}