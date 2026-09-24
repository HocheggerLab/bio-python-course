import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide11Part2Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-blue text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 2
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-8">
        Python <GradientText>Conditionals</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Making Decisions</span>
      </SlideTitle>
      
      <p className="text-lg text-gray-300 text-center mb-8">
        Teaching Python to make choices based on biological data
      </p>
      
      {/* Preview of conditional logic */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-yellow/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-yellow mb-4 text-center">
            🔍 Focus: The Conditional Logic
          </h3>
          <p className="text-gray-300 text-center mb-4 text-sm">
            Notice the <span className="text-bio-yellow font-semibold">if statement</span> that makes the decision:
          </p>
          
          <SyntaxHighlighter
            code={`def find_atg(dna_sequence):
    """Find the first ATG start codon in the sequence."""
    for i in range(len(dna_sequence) - 2):
        if dna_sequence[i:i+3] == 'ATG':  # ← The key decision!
            return i
    return None  # Return None if no ATG found`}
            language="python"
          />
          
          <div className="mt-4 text-center">
            <p className="text-bio-yellow text-sm font-semibold">
              We&apos;ll learn how <span className="bg-bio-yellow/20 px-2 py-1 rounded">if</span> statements help us find biological patterns!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}