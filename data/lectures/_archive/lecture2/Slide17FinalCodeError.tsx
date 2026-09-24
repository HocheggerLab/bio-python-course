'use client'

import dynamic from 'next/dynamic'
import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

// Dynamically import PythonCodeRunner to avoid SSR issues
const PythonCodeRunner = dynamic(
  () => import('@/components/python/PythonCodeRunner'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6 text-center">
        <div className="animate-pulse">Loading interactive Python...</div>
      </div>
    )
  }
)

export default function Slide17FinalCodeError() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        <GradientText>Debugging</GradientText> & Error Handling
      </SlideTitle>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          {/* Introduction */}
          <div className="text-center mb-6">
            <p className="text-lg text-gray-300 mb-3">
              Let's examine our code with line numbers to understand debugging
            </p>
            <div className="text-red-400 font-semibold text-sm">
              Line numbers help us identify exactly where errors occur
            </div>
          </div>

          {/* Interactive Code with Line Numbers */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-red-500/30 rounded-xl p-4">
            <PythonCodeRunner
              initialCode={`# The Genetic Code (simplified version)
CODON_TABLE = {
    'TTT': 'F', 'TTC': 'F', 'TTA': 'L', 'TTG': 'L',
    'TCT': 'S', 'TCC': 'S', 'TCA': 'S', 'TCG': 'S',
    'TAT': 'Y', 'TAC': 'Y', 'TAA': '*', 'TAG': '*',
    'TGT': 'C', 'TGC': 'C', 'TGA': '*', 'TGG': 'W',
    'CTT': 'L', 'CTC': 'L', 'CTA': 'L', 'CTG': 'L',
    'CCT': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
    'CAT': 'H', 'CAC': 'H', 'CAA': 'Q', 'CAG': 'Q',
    'CGT': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R',
    'ATT': 'I', 'ATC': 'I', 'ATA': 'I', 'ATG': 'M',
    'ACT': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
    'AAT': 'N', 'AAC': 'N', 'AAA': 'K', 'AAG': 'K',
    'AGT': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
    'GTT': 'V', 'GTC': 'V', 'GTA': 'V', 'GTG': 'V',
    'GCT': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
    'GAT': 'D', 'GAC': 'D', 'GAA': 'E', 'GAG': 'E',
    'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G'
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
        if len(codon) == 3:  # Make sure we have a complete codon
            orf += codon
            if codon in CODON_TABLE and CODON_TABLE[codon] == '*':
                break
    return orf

# Step 3: Translate DNA to protein
def translate_orf(orf):
    """Translate DNA ORF to protein sequence."""
    protein = ''
    for i in range(0, len(orf), 3):
        codon = orf[i:i+3]
        if len(codon) == 3 and codon in CODON_TABLE:
            protein += CODON_TABLE[codon]
    return protein

# Step 4: Main function that puts it all together
def find_protein_sequence(dna_sequence):
    """Main function to find protein sequence from DNA."""
    atg_index = find_atg(dna_sequence)
    orf = find_orf(dna_sequence, atg_index)
    protein_sequence = translate_orf(orf)
    return protein_sequence

# ===== DEMO: Try it with a sample sequence! =====
sample_dna = "GCGATGTTCAAGTACTAAGCC"
result = find_protein_sequence(sample_dna)
print(f"🎯 Protein sequence: {result}")
print("Now you can edit the code and see line numbers!")`}
              showLineNumbers={true}
              staticOutput={`🎯 Protein sequence: MFKY*
Now you can edit the code and see line numbers!`}
              hints={[
                "Notice the line numbers on the left - perfect for debugging!",
                "Try introducing an error and see which line Python reports",
                "Line numbers help when reading error messages"
              ]}
              height="600px"
            />
          </div>

          {/* Debugging Concepts */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
              <div className="text-red-400 font-bold text-sm mb-1">Error Messages</div>
              <div className="text-gray-400 text-xs">Read Python errors</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-center">
              <div className="text-orange-400 font-bold text-sm mb-1">Debugging</div>
              <div className="text-gray-400 text-xs">Find and fix issues</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-center">
              <div className="text-yellow-400 font-bold text-sm mb-1">Edge Cases</div>
              <div className="text-gray-400 text-xs">Handle special inputs</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-center">
              <div className="text-purple-400 font-bold text-sm mb-1">Handling Expected Errors</div>
              <div className="text-gray-400 text-xs">Graceful error handling</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}