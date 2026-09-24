import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide08Part3Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-green text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 3
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-8">
        Python <GradientText>Classes & Objects</GradientText>
        <br />
        <span className="text-4xl md:text-5xl mt-4 block">Building Your Own Data Types</span>
      </SlideTitle>
      
      <p className="text-lg text-gray-300 text-center mb-8">
        Create custom objects to organize complex biological data and functionality
      </p>
      
      {/* Preview of what we'll learn */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🧬 From Data to Objects
          </h3>
          <p className="text-gray-300 text-center mb-4 text-sm">
            Bundle data with the functions that work on it:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-orange-400 font-semibold text-sm mb-2">Separate Functions & Data</p>
              <SyntaxHighlighter
                code={`sequence = "ATCGATCG"
gc = calculate_gc_content(sequence)
rev_comp = reverse_complement(sequence)
# Data and functions are separate`}
                language="python"
              />
            </div>
            
            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-blue font-semibold text-sm mb-2">Object-Oriented Approach ✨</p>
              <SyntaxHighlighter
                code={`dna = DNASequence("ATCGATCG")
gc = dna.gc_content()
rev_comp = dna.reverse_complement()
# Data and methods together!`}
                language="python"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-bio-blue text-sm font-semibold">
              This is exactly how pandas DataFrames work - let&apos;s build our own!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}