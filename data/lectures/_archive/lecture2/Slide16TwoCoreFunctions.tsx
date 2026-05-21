'use client'

import dynamic from 'next/dynamic'
import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

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

export default function Slide16TwoCoreFunctions() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        The Two <GradientText>Core Functions</GradientText> - Interactive Demo
      </SlideTitle>
      
      <div className="space-y-6">
        {/* First Code Cell: Dictionary and Functions */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-bio-blue mb-3">📚 Dictionary & Functions Setup</h3>
          <PythonCodeRunner
            initialCode={`# Genetic code dictionary (simplified)
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

dna = "ATGTTCCATCATTAAGCCGG"

print("✅ Dictionary loaded and dna sequence defined!")`}
            staticOutput={`✅ Dictionary loaded and dna sequence defined!`}
            hints={[
              "Run this cell first to set up the dictionary",
              "Notice how CODON_TABLE maps 3-letter DNA codes to amino acids",
              "The functions use this dictionary to translate sequences"
            ]}
            height="300px"
          />
        </div>

        {/* Second Code Cell: Example Usage */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-bio-green mb-3">🧬 Try It Out!</h3>
          <PythonCodeRunner
            initialCode={`# # Step 2: Extract ORF from ATG to STOP codon
def find_orf(dna_sequence):
    """Find the ORF starting from ATG position until stop codon."""
    orf = ''
    for i in range(len(dna_sequence) - 2):
        codon = dna_sequence[i:i+3]
        if len(codon) == 3:
            orf += codon
            if codon in CODON_TABLE and CODON_TABLE[codon] == '*':
                break
    return orf
# Step 1: Extract the ORF
orf = find_orf(dna)
print(f"ORF extracted: {orf}")
print(f"ORF length: {len(orf)} nucleotides")
print()

# Step 2: Translate DNA to protein
def translate_orf(orf):
    """Translate DNA ORF to protein sequence."""
    protein = ''
    for i in range(0, len(orf), 3):
        codon = orf[i:i+3]
        if len(codon) == 3 and codon in CODON_TABLE:
            protein += CODON_TABLE[codon]
    return protein


protein = translate_orf(orf)
print(f"Protein sequence: {protein}")
print(f"Protein length: {len(protein)} amino acids")
print()
`}
            staticOutput={`ORF extracted: ATGTGTGTTTTCTCCCCACATATCTCACATATTTTATAA
ORF length: 39 nucleotides

Protein sequence: MCVFSPHISHIL*
Protein length: 13 amino acids`}
            hints={[
              "Try changing the DNA sequence to see different results",
              "What happens if you change the ATG position?",
              "Notice how each 3-letter codon becomes 1 amino acid"
            ]}
            height="350px"
          />
        </div>
      </div>
    </div>
  )
}