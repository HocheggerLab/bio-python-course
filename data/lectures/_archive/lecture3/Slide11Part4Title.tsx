import Image from 'next/image'
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
          
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
            {/* Wes McKinney Image */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-amber-400/30 mb-3">
                <Image
                  src="/wesmckinney.png"
                  alt="Wes McKinney - Creator of Pandas"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-300 text-sm text-center">
                <span className="text-amber-400 font-semibold">Wes McKinney</span><br />
                Creator of Pandas (2008)
              </p>
            </div>

            {/* Get Started Box */}
            <div className="text-center">
              <p className="text-amber-400 font-semibold text-lg mb-3">
                📚 Learn More About Pandas
              </p>
              <p className="text-gray-300 text-sm mb-4">
                Official documentation with comprehensive guides and API reference
              </p>
              <a
                href="https://pandas.pydata.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-bio-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Pandas Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}