import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide14Part3Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-blue text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 3
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-8">
        Python <GradientText>Dictionaries</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Match Codons with Amino Acids</span>
      </SlideTitle>
      
      <p className="text-lg text-gray-300 text-center mb-8">
        Using key-value pairs to store and look up biological information
      </p>
      
      {/* Preview of dictionary usage */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4 text-center">
            🗂️ Next Function: The Codon Reader
          </h3>
          <p className="text-gray-300 text-center mb-4 text-sm">
            Notice the <span className="text-bio-blue font-semibold">dictionary lookup</span> that finds stop codons:
          </p>
          
          <SyntaxHighlighter
            code={`# Step 2: Extract ORF from ATG to STOP codon
def find_orf(dna_sequence, atg_index):
    """Find the ORF starting from ATG position until stop codon."""
    orf = ''
    for i in range(atg_index, len(dna_sequence) - 2):
        codon = dna_sequence[i:i+3]
        if len(codon) == 3:  # Make sure we have a complete codon
            orf += codon
            if codon in CODON_TABLE and CODON_TABLE[codon] == '*':  # ← Dictionary magic!
                break
    return orf`}
            language="python"
          />
          
          <div className="mt-4 text-center">
            <p className="text-bio-blue text-sm font-semibold">
              We&apos;ll learn how <span className="bg-bio-blue/20 px-2 py-1 rounded">CODON_TABLE[codon]</span> looks up amino acids instantly!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}