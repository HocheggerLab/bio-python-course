import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide14ResearchQuestion() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        Our Research Question: <GradientText>Essential Genes</GradientText>
      </SlideTitle>
      
      <div className="max-w-6xl mx-auto space-y-6">
        {/* The research question */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-bio-blue mb-4 text-center">
            🧬 What are the top 10 most essential genes in breast and myeloid cancers?
          </h3>
          <p className="text-gray-300 text-center text-lg">
            Let's discover which genes are critical for cancer cell survival!
          </p>
        </div>
        
        {/* Why this matters */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-purple-500/30 rounded-xl p-5">
          <h4 className="text-purple-400 font-semibold mb-3 text-center">🎯 Why This Question Matters</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="text-bio-yellow font-semibold mb-1">🎯 Drug Targets</p>
              <p className="text-gray-300">Essential genes = potential therapeutic targets</p>
            </div>
            <div className="text-center">
              <p className="text-bio-blue font-semibold mb-1">🧬 Cancer Biology</p>
              <p className="text-gray-300">Understand what keeps cancer cells alive</p>
            </div>
            <div className="text-center">
              <p className="text-bio-green font-semibold mb-1">⚕️ Precision Medicine</p>
              <p className="text-gray-300">Different cancers = different vulnerabilities</p>
            </div>
          </div>
        </div>

        {/* Analysis roadmap */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-6 text-center">
            🗺️ Our Analysis Roadmap
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-bio-blue/10 rounded-lg p-3">
              <div className="bg-bio-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <p className="text-bio-blue font-semibold">Filter Breast Cancer Data</p>
                <p className="text-xs text-gray-400">Extract only breast cancer cell lines from the dataset</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-bio-green/10 rounded-lg p-3">
              <div className="bg-bio-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <p className="text-bio-green font-semibold">Calculate Mean Gene Effects</p>
                <p className="text-xs text-gray-400">Average gene scores across all breast cancer cell lines</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-purple-500/10 rounded-lg p-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <p className="text-purple-400 font-semibold">Sort & Select Top 10</p>
                <p className="text-xs text-gray-400">Find the most negative scores (most essential genes)</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-amber-500/10 rounded-lg p-3">
              <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <p className="text-amber-400 font-semibold">Repeat for Myeloid Cancer</p>
                <p className="text-xs text-gray-400">Same process: filter → mean → sort → top 10</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-red-500/10 rounded-lg p-3">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <p className="text-red-400 font-semibold">Compare & Visualize</p>
                <p className="text-xs text-gray-400">Compare top 10 lists - what's different between cancer types?</p>
              </div>
            </div>
          </div>
          
          {/* Advanced option */}
          <div className="mt-4 bg-gradient-to-r from-purple-500/5 to-bio-blue/5 border border-purple-500/20 rounded-lg p-3">
            <p className="text-xs text-purple-400 font-semibold mb-1">🚀 Advanced Option:</p>
            <p className="text-xs text-gray-400">
              Later we'll learn <code className="text-bio-yellow">df.groupby()</code> to analyze both cancer types at once!
            </p>
          </div>
        </div>

        {/* Pandas techniques preview */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-5">
          <h4 className="text-purple-400 font-semibold mb-4 text-center">⚙️ Pandas Techniques We'll Learn</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-bio-blue font-semibold text-sm">🔍 Data Selection:</p>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">df.loc[condition]</code> - filter rows by condition</li>
                <li>• <code className="text-bio-yellow">df.loc[:, 'column']</code> - select columns by name</li>
                <li>• <code className="text-bio-yellow">df.iloc[0:5]</code> - select rows by position</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-bio-green font-semibold text-sm">📊 Analysis:</p>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <code className="text-bio-yellow">.mean()</code> - calculate averages</li>
                <li>• <code className="text-bio-yellow">.sort_values()</code> - ranking data</li>
                <li>• <code className="text-bio-yellow">.head(10)</code> - top results</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Excitement builder */}
        <div className="text-center bg-gradient-to-r from-bio-green/10 to-amber-400/10 rounded-xl p-4">
          <p className="text-bio-green font-semibold text-lg mb-4">
            🚀 Let's Discover Cancer's Secrets!
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Time to dive into <span className="text-bio-blue font-semibold">Google Colab</span> and analyze real cancer dependency data
          </p>

          {/* Colab Link Button */}
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N3_depmap_analysis.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
            </svg>
            Open DepMap Analysis Notebook
          </a>
        </div>
      </div>
    </>
  )
}