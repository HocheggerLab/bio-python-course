import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide07Part1Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-blue text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 1
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-8">
        Python <GradientText>String Fundamentals</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">for Biology</span>
      </SlideTitle>
      
      <p className="text-lg text-gray-300 text-center mb-8">
        Working with DNA sequences as strings
      </p>
      
      {/* Preview of what we'll build */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4 text-center">
            🎯 Our First Function: Finding the Start Codon
          </h3>
          <p className="text-gray-300 text-center mb-4 text-sm">
            This is what we&apos;ll build together in the next few slides:
          </p>
          
          <SyntaxHighlighter
            code={`def find_atg(dna_sequence):
    """Find the first ATG start codon in the sequence."""
    for i in range(len(dna_sequence) - 2):
        if dna_sequence[i:i+3] == 'ATG':
            return i
    return None  # Return None if no ATG found`}
            language="python"
          />
          
          <div className="mt-4 text-center">
            <p className="text-bio-yellow text-sm font-semibold">
              Don&apos;t worry if this looks complex - we&apos;ll build it step by step!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}