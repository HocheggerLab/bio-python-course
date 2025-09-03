'use client'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide06FinalCode() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-12 text-center">
        The <GradientText>Complete Code</GradientText> - What We'll Build
      </SlideTitle>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          {/* Introduction */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-300 mb-4">
              Let's see the complete solution first - then we'll build it step by step
            </p>
            <div className="text-bio-yellow font-semibold">
              Don't worry about understanding every line now! We'll learn each part together.
            </div>
          </div>

          {/* Code Display */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
            <SyntaxHighlighter
              code={`# The Genetic Code - Maps DNA codons to amino acids
CODON_TABLE = {
    'TTT': 'F', 'TTC': 'F', 'TTA': 'L', 'TTG': 'L',
    'TCT': 'S', 'TCC': 'S', 'TCA': 'S', 'TCG': 'S',
    'TAT': 'Y', 'TAC': 'Y', 'TAA': '*', 'TAG': '*',
    # ... and 52 more codons
}

# Step 1: Find the START codon (ATG)
def find_atg(dna_sequence):
    """Find the first ATG start codon in the sequence."""
    for i in range(len(dna_sequence) - 2):
        if dna_sequence[i:i+3] == 'ATG':
            return i

# Step 2: Extract ORF from ATG to STOP codon
def find_orf(dna_sequence, atg_index):
    """Find the ORF starting from ATG position until stop codon."""
    orf = ''
    for i in range(atg_index, len(dna_sequence) - 2, 3):
        codon = dna_sequence[i:i+3]
        orf += codon
        if CODON_TABLE[codon] == '*':
            break
    return orf

# Step 3: Translate DNA to protein
def translate_orf(orf):
    """Translate DNA ORF to protein sequence."""
    protein = ''
    for i in range(0, len(orf), 3):
        codon = orf[i:i+3]
        protein += CODON_TABLE[codon]
    return protein

# Step 4: Main function that puts it all together
def find_protein_sequence(dna_sequence):
    """Main function to find protein sequence from DNA."""
    atg_index = find_atg(dna_sequence)
    orf = find_orf(dna_sequence, atg_index)
    protein_sequence = translate_orf(orf)
    return protein_sequence`}
              language="python"
              className="bg-black/50"
            />
          </div>

          {/* Key Concepts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-bio-green/20 to-bio-green/10 border border-bio-green/30 rounded-xl p-4 text-center">
              <div className="text-bio-green font-bold text-lg mb-2">String Slicing</div>
              <div className="text-gray-300 text-sm">Extract codons from DNA</div>
            </div>
            
            <div className="bg-gradient-to-br from-bio-yellow/20 to-bio-yellow/10 border border-bio-yellow/30 rounded-xl p-4 text-center">
              <div className="text-bio-yellow font-bold text-lg mb-2">Conditionals</div>
              <div className="text-gray-300 text-sm">Make decisions with if/else</div>
            </div>
            
            <div className="bg-gradient-to-br from-bio-blue/20 to-bio-blue/10 border border-bio-blue/30 rounded-xl p-4 text-center">
              <div className="text-bio-blue font-bold text-lg mb-2">Dictionaries</div>
              <div className="text-gray-300 text-sm">Map codons to amino acids</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
              <div className="text-red-400 font-bold text-lg mb-2">Debugging</div>
              <div className="text-gray-300 text-sm">Fix errors and test code</div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-bio-dark to-bio-darker border border-gray-600 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">🎯 What's Next?</h3>
              <p className="text-gray-300">
                Now we'll learn each Python concept needed to build this solution, 
                starting with the basics and working up to the complete program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}