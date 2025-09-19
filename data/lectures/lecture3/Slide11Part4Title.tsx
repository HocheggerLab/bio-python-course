import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide11Part4Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-amber-400 text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 4
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-8">
        Enter <GradientText>Pandas</GradientText>
        <br />
        <span className="text-4xl md:text-5xl mt-4 block">The Library That Changed Data Science</span>
      </SlideTitle>
      
      <p className="text-lg text-gray-300 text-center mb-8">
        From spreadsheets to data science revolution - now with hands-on biological data!
      </p>
      
      {/* Historical context and transition */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-amber-400/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-400 mb-6 text-center">
            📊 A Brief History: Why Pandas Exists
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <h4 className="text-red-400 font-semibold text-sm mb-2">❌ Before Pandas (2008)</h4>
              <p className="text-xs text-gray-300 mb-2">Data analysis meant:</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Excel for small datasets</li>
                <li>• R for statistics</li>
                <li>• SQL for databases</li>
                <li>• MATLAB for matrices</li>
                <li>• Separate tools = messy workflows!</li>
              </ul>
            </div>
            
            <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/30">
              <h4 className="text-amber-400 font-semibold text-sm mb-2">🚀 Pandas Revolution (2008-now)</h4>
              <p className="text-xs text-gray-300 mb-2">One library to rule them all:</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Read any file format</li>
                <li>• Clean messy data</li>
                <li>• Statistical analysis</li>
                <li>• Visualization</li>
                <li>• All in Python!</li>
              </ul>
            </div>
            
            <div className="bg-bio-blue/10 rounded-lg p-4 border border-bio-blue/30">
              <h4 className="text-bio-blue font-semibold text-sm mb-2">🧬 For Biology Today</h4>
              <p className="text-xs text-gray-300 mb-2">Perfect for biological data:</p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Gene expression matrices</li>
                <li>• Clinical trial data</li>
                <li>• DNA sequence analysis</li>
                <li>• Protein structures</li>
                <li>• Publication-ready plots</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-amber-500/10 to-bio-blue/10 rounded-lg p-4">
            <p className="text-bio-blue font-semibold mb-2">🎯 Remember Our Classes?</p>
            <SyntaxHighlighter
              code={`# Classes prepare you for this!
df.head()           # DataFrame method - just like our DNASequence.length()
df.groupby('gene')  # DataFrame method - objects that know their data
df.describe()       # DataFrame method - built-in functionality`}
              language="python"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-amber-400 font-semibold text-lg mb-2">
              🚀 Time to Get Hands-On!
            </p>
            <p className="text-gray-300 text-sm">
              Let's switch to <span className="text-bio-blue font-semibold">Google Colab</span> where we can work with real biological datasets
            </p>
          </div>
        </div>
      </div>
    </>
  )
}