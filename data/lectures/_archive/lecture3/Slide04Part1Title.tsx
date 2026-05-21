import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide04Part1Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-purple-400 text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 1 & 2
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-8">
        Python <GradientText>Package Ecosystem & Standard Library Modules</GradientText>
        <br />
        <span className="text-4xl md:text-5xl mt-4 block">Working with Open Source Code</span>
      </SlideTitle>
      
      <p className="text-lg text-gray-300 text-center mb-8">
        Leverage thousands of scientific tools built by the community
      </p>
      
      {/* Preview of what we'll learn */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">
            📦 The Power of Packages
          </h3>
          <p className="text-gray-300 text-center mb-4 text-sm">
            Transform complex tasks into simple commands:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold text-sm mb-2">Without Packages (100+ lines)</p>
              <SyntaxHighlighter
                code={`# Manual correlation calculation
for gene1 in genes:
    for gene2 in genes:
        # Complex math...
        # More complex math...
        # Even more math...`}
                language="python"
              />
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-3">
              <p className="text-bio-green font-semibold text-sm mb-2">With Pandas (1 line) ✨</p>
              <SyntaxHighlighter
                code={`# Calculate all correlations at once
correlations = df.corr()`}
                language="python"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-bio-yellow text-sm font-semibold">
              Let&apos;s explore how to tap into this incredible ecosystem!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}