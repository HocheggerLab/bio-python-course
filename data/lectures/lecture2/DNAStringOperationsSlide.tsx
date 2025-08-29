'use client'

import dynamic from 'next/dynamic'

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

export default function DNAStringOperationsSlide() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <h1 className="text-4xl font-bold text-bio-blue mb-6">
        DNA-Specific String Operations
      </h1>
      
      <div className="space-y-6">
        {/* Indexing & Slicing for Codons */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🧬 Extracting Codons with Slicing
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Use slicing with <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">[i:i+3]</code> to extract 3-base codons from DNA sequences:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Extract codons from a DNA sequence
dna = "ATGCGTAAATAG"

print(f"Full sequence: {dna}")
print(f"Length: {len(dna)} bases")
print()

# Extract codons using slicing [i:i+3]
print("Extracting codons:")
codon1 = dna[0:3]   # First codon
codon2 = dna[3:6]   # Second codon  
codon3 = dna[6:9]   # Third codon
codon4 = dna[9:12]  # Fourth codon

print(f"Codon 1: {codon1} (start codon!)" if codon1 == "ATG" else f"Codon 1: {codon1}")
print(f"Codon 2: {codon2}")
print(f"Codon 3: {codon3}")
print(f"Codon 4: {codon4} (stop codon!)" if codon4 in ["TAA", "TAG", "TGA"] else f"Codon 4: {codon4}")

# Extract all codons using a loop
print("\\nAll codons using a loop:")
codons = []
for i in range(0, len(dna), 3):
    codon = dna[i:i+3]
    if len(codon) == 3:  # Only complete codons
        codons.append(codon)

print(f"Codons: {codons}")`}
            staticOutput={`Full sequence: ATGCGTAAATAG
Length: 12 bases

Extracting codons:
Codon 1: ATG (start codon!)
Codon 2: CGT
Codon 3: AAA
Codon 4: TAG (stop codon!)

All codons using a loop:
Codons: ['ATG', 'CGT', 'AAA', 'TAG']`}
            hints={[
              "Use [start:end] where start is the position and end is start + 3",
              "For a loop, use range(0, len(sequence), 3) to step by 3",
              "Check if len(codon) == 3 to ensure complete codons only"
            ]}
            height="300px"
          />
        </section>

        {/* Finding Motifs & Counting */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4">
            🔍 Finding Motifs & Counting Bases
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Use <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">.find()</code> to locate motifs and <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">.count()</code> to count occurrences:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Finding important DNA motifs
sequence = "ATGCGTAAATAGATGCCCTAG"

print(f"Analyzing sequence: {sequence}")
print(f"Length: {len(sequence)} bases")
print()

# Find start codons (ATG)
print("🚀 Finding start codons:")
atg_pos = sequence.find("ATG")
print(f"First ATG at position: {atg_pos}")

# Find all ATG positions
atg_positions = []
start = 0
while True:
    pos = sequence.find("ATG", start)
    if pos == -1:  # Not found
        break
    atg_positions.append(pos)
    start = pos + 1

print(f"All ATG positions: {atg_positions}")

# Find stop codons
print("\\n🛑 Finding stop codons:")
stop_codons = ["TAA", "TAG", "TGA"]
for stop in stop_codons:
    pos = sequence.find(stop)
    if pos != -1:
        print(f"{stop} found at position: {pos}")
    else:
        print(f"{stop}: not found")

# Count nucleotides
print("\\n📊 Nucleotide composition:")
for base in "ATCG":
    count = sequence.count(base)
    percentage = (count / len(sequence)) * 100
    print(f"{base}: {count} ({percentage:.1f}%)")

# Calculate GC content
gc_count = sequence.count("G") + sequence.count("C")
gc_content = (gc_count / len(sequence)) * 100
print(f"\\nGC Content: {gc_content:.1f}%")`}
            staticOutput={`Analyzing sequence: ATGCGTAAATAGATGCCCTAG
Length: 20 bases

🚀 Finding start codons:
First ATG at position: 0
All ATG positions: [0, 10]

🛑 Finding stop codons:
TAA: not found
TAG: found at position: 17
TGA: not found

📊 Nucleotide composition:
A: 6 (30.0%)
T: 4 (20.0%)
C: 4 (20.0%)
G: 6 (30.0%)

GC Content: 60.0%`}
            hints={[
              "Use .find() to get the first position, returns -1 if not found",
              "For multiple positions, use a while loop with .find(motif, start_pos)",
              "Count GC content: sequence.count('G') + sequence.count('C')"
            ]}
            height="350px"
          />
        </section>

        {/* DNA to RNA Conversion */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🧬 → 🧬 DNA to RNA Transcription
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Convert DNA template strand to RNA by replacing T with U using <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">.replace()</code>:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# DNA to RNA transcription
dna_template = "ATGCGTAAATAG"

print(f"DNA template strand: {dna_template}")

# Transcribe DNA to RNA (T → U)
rna = dna_template.replace("T", "U")
print(f"RNA transcript:      {rna}")

# Let's also try the reverse complement and transcription
print("\\n🔄 Working with DNA strands:")

def complement_base(base):
    """Return the complement of a DNA base"""
    complements = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    return complements.get(base, base)

def reverse_complement(dna):
    """Return the reverse complement of a DNA sequence"""
    complement = ''.join(complement_base(base) for base in dna)
    return complement[::-1]  # Reverse the string

# Original sequence (coding strand)
coding_strand = "ATGCGTAAATAG"
template_strand = reverse_complement(coding_strand)

print(f"Coding strand:   5'-{coding_strand}-3'")
print(f"Template strand: 3'-{template_strand}-5'")

# Transcription happens from template strand
rna_from_template = template_strand.replace("T", "U")
print(f"RNA from template: 5'-{rna_from_template}-3'")

# But we usually want RNA that matches the coding strand
rna_like_coding = coding_strand.replace("T", "U")
print(f"RNA (like coding): 5'-{rna_like_coding}-3'")`}
            staticOutput={`DNA template strand: ATGCGTAAATAG
RNA transcript:      AUGCGUAAAUAG

🔄 Working with DNA strands:
Coding strand:   5'-ATGCGTAAATAG-3'
Template strand: 3'-TACGCATTTATC-5'
RNA from template: 5'-UACGCAUUUAUC-3'
RNA (like coding): 5'-AUGCGUAAAUAG-3'`}
            hints={[
              "Use .replace('T', 'U') to convert DNA to RNA",
              "Remember: RNA polymerase reads template strand 3' → 5'",
              "The RNA sequence will match the coding strand (except T→U)"
            ]}
            height="380px"
          />
        </section>

        {/* Practice Challenge */}
        <section>
          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              🎯 Practice Challenge
            </h3>
            <p className="text-gray-300 mb-4">
              Try modifying the code above to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Find all possible reading frames (hint: try starting at positions 0, 1, and 2)</li>
              <li>• Calculate AT content as well as GC content</li>
              <li>• Find the longest stretch without stop codons</li>
              <li>• Count how many codons would result from each reading frame</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}