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
          <p className="text-gray-300 text-center mb-3">
            A massive project by the <span className="text-bio-blue font-semibold">Broad Institute</span> to find cancer's weaknesses across 
            <span className="text-amber-400 font-semibold"> 1000+ cancer cell lines</span>
          </p>
          <p className="text-center">
            <a href="https://depmap.org" target="_blank" rel="noopener noreferrer" 
               className="text-bio-blue hover:text-bio-yellow transition-colors font-semibold text-sm">
              🔗 depmap.org
            </a>
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
            code={`# Our dataset: Breast vs Myeloid cancers
# Metadata columns + gene effect scores

model_id    cell_line_name  oncotree_lineage  oncotree_primary_disease    A1BG    A1CF    A2M
ACH-000004  HEL            Myeloid           Acute Myeloid Leukemia      0.005   -0.069  -0.098
ACH-000017  SK-BR-3        Breast            Invasive Breast Carcinoma   -0.032  -0.102  -0.013  
ACH-000019  MCF7           Breast            Invasive Breast Carcinoma   0.036   0.018   0.095
ACH-000028  KPL-1          Breast            Invasive Breast Carcinoma   -0.188  -0.149  0.077
...         ...            ...               ...                         ...     ...     ...

# We'll compare: Are certain genes more essential in breast vs myeloid cancers?
# Perfect for groupby analysis!`}
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