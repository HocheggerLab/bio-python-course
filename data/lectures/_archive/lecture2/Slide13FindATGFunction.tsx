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

export default function Slide13FindATGFunction() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-10">
        Building Our First Function: <GradientText>find_atg()</GradientText>
      </SlideTitle>
      
      <div className="space-y-8">
        {/* Function Overview */}
        <section>
          <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 border border-bio-blue/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-bio-blue mb-4">
              🎯 Goal: Find the First ATG in a DNA Sequence
            </h2>
            <div className="text-gray-300 space-y-2">
              <p>Our function needs to:</p>
              <ul className="ml-6 space-y-1">
                <li>• Look at every position in the DNA string</li>
                <li>• Check if the 3 bases starting at that position are "ATG"</li>
                <li>• Return the position when ATG is found</li>
                <li>• Return None if no ATG exists</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 1: Understanding the Loop */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            📍 Step 1: Loop Through Each Position
          </h2>
          <div className="mb-4 text-gray-300">
            <p>We use <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">range(len(dna_sequence) - 2)</code> to avoid going past the end:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Understanding why we use len(dna_sequence) - 2
dna = "ATGCGTAA"
print(f"DNA sequence: {dna}")
print(f"Length: {len(dna)}")
print(f"Valid positions to check for 3-base codons:")

for i in range(len(dna) - 2):
    three_bases = dna[i:i+3]
    print(f"  Position {i}: {three_bases}")`}
            staticOutput={`DNA sequence: ATGCGTAA
Length: 8
Valid positions to check for 3-base codons:
  Position 0: ATG
  Position 1: TGC
  Position 2: GCG
  Position 3: CGT
  Position 4: GTA
  Position 5: TAA`}
            hints={[
              "We stop at len(dna) - 2 because we need 3 bases",
              "If dna has 8 bases, the last valid position is 5 (positions 5,6,7)",
              "Position 6 would only have 2 bases left, position 7 would have 1"
            ]}
            height="280px"
          />
        </section>

        {/* Step 2: Checking for ATG */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4">
            🔍 Step 2: Check if Three Bases Equal "ATG"
          </h2>
          <div className="mb-4 text-gray-300">
            <p>At each position, we extract 3 bases and compare with "ATG":</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Checking each position for ATG
dna = "CGTAATGCAA"
print(f"Looking for ATG in: {dna}\\n")

for i in range(len(dna) - 2):
    codon = dna[i:i+3]
    is_atg = (codon == "ATG")
    
    if is_atg:
        print(f"Position {i}: {codon} ← FOUND ATG!")
    else:
        print(f"Position {i}: {codon}")`}
            staticOutput={`Looking for ATG in: CGTAATGCAA

Position 0: CGT
Position 1: GTA
Position 2: TAA
Position 3: AAT
Position 4: ATG ← FOUND ATG!
Position 5: TGC
Position 6: GCA
Position 7: CAA`}
            hints={[
              "We use == to check if the codon equals 'ATG'",
              "The if statement lets us take action when we find it",
              "In this example, ATG is at position 4"
            ]}
            height="320px"
          />
        </section>

        {/* Step 3: Returning the Position */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-blue mb-4">
            ↩️ Step 3: Return the Position When Found
          </h2>
          <div className="mb-4 text-gray-300">
            <p>As soon as we find ATG, we return its position and stop searching:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# The complete find_atg function
def find_atg(dna_sequence):
    """Find the first ATG start codon in the sequence."""
    for i in range(len(dna_sequence) - 2):
        if dna_sequence[i:i+3] == 'ATG':
            return i  # Exit function immediately with position
    return None  # Return None if no ATG found

# Test the function
test_sequences = [
    "ATGCGTAAA",     # ATG at position 0
    "CGTATGAAA",     # ATG at position 3
    "CGTAAAATG",     # ATG at position 6
    "CGTAAACCC"      # No ATG
]

for dna in test_sequences:
    position = find_atg(dna)
    if position is not None:
        print(f"{dna}: ATG found at position {position}")
    else:
        print(f"{dna}: No ATG found")`}
            staticOutput={`ATGCGTAAA: ATG found at position 0
CGTATGAAA: ATG found at position 3
CGTAAAATG: ATG found at position 6
CGTAAACCC: No ATG found`}
            hints={[
              "return immediately exits the function",
              "Once we find the first ATG, we don't check further positions",
              "If the loop completes without finding ATG, we return None"
            ]}
            height="420px"
          />
        </section>

        {/* Visual Breakdown */}
        <section>
          <div className="bg-gradient-to-r from-bio-dark to-bio-darker border border-gray-600 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              🧩 Function Components Breakdown
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <code className="text-bio-green">def find_atg(dna_sequence):</code>
                  <p className="text-gray-400 text-sm mt-2">Define function with one parameter</p>
                </div>
                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <code className="text-bio-yellow">for i in range(len(dna_sequence) - 2):</code>
                  <p className="text-gray-400 text-sm mt-2">Loop through valid positions</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <code className="text-bio-blue">if dna_sequence[i:i+3] == 'ATG':</code>
                  <p className="text-gray-400 text-sm mt-2">Check if 3 bases equal ATG</p>
                </div>
                <div className="bg-bio-dark/50 rounded-lg p-4">
                  <code className="text-purple-400">return i</code>
                  <p className="text-gray-400 text-sm mt-2">Return position and exit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Challenge */}
        <section>
          <div className="bg-gradient-to-r from-bio-yellow/20 to-bio-yellow/10 border border-bio-yellow/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-bio-yellow mb-4">
              💡 Try It Yourself!
            </h3>
            <p className="text-gray-300 mb-4">
              Modify the function to find ALL ATG positions (not just the first):
            </p>
            <PythonCodeRunner
              initialCode={`# Challenge: Find ALL ATG positions
def find_all_atgs(dna_sequence):
    """Find all ATG positions in the sequence."""
    positions = []  # List to store all positions
    
    # TODO: Modify the loop to find all ATGs
    # Hint: Don't return immediately, save positions instead
    
    for i in range(len(dna_sequence) - 2):
        if dna_sequence[i:i+3] == 'ATG':
            return i  # This stops at first ATG - fix this!
    
    return positions

# Test with multiple ATGs
dna = "ATGAAATGCCATG"
result = find_all_atgs(dna)
print(f"ATG positions in {dna}: {result}")`}
              expectedOutput="ATG positions in ATGAAATGCCATG: [0, 5, 10]"
              hints={[
                "Instead of 'return i', use 'positions.append(i)'",
                "Let the loop continue to find all ATGs",
                "Return the positions list at the end"
              ]}
              height="350px"
            />
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              🔑 Key Concepts We Combined
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              <div className="text-center">
                <div className="text-bio-green font-bold text-lg mb-2">For Loops</div>
                <div className="text-sm">Visit each position</div>
              </div>
              <div className="text-center">
                <div className="text-bio-yellow font-bold text-lg mb-2">String Slicing</div>
                <div className="text-sm">Extract 3 bases</div>
              </div>
              <div className="text-center">
                <div className="text-bio-blue font-bold text-lg mb-2">Conditionals</div>
                <div className="text-sm">Check if equals ATG</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}