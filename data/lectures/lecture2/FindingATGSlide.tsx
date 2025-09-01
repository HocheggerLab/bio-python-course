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

export default function FindingATGSlide() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <h1 className="text-4xl font-bold text-bio-blue mb-6">
        Finding ATGs: Loops + Slicing
      </h1>
      
      <div className="space-y-8">
        {/* Step 1: Loop Through Positions */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🔄 Step 1: Loop Through Every Position
          </h2>
          <div className="mb-4 text-gray-300 space-y-2">
            <p>To find ATGs, we need to check <em>every possible position</em> in the DNA string:</p>
            <ul className="ml-6 space-y-1">
              <li>• Position 0: Check bases 0-1-2</li>
              <li>• Position 1: Check bases 1-2-3</li>
              <li>• Position 2: Check bases 2-3-4</li>
              <li>• And so on...</li>
            </ul>
          </div>
          <PythonCodeRunner
            initialCode={`# There are 3 ways to loop through a string
dna = "ATGCGTAAATAG"
# 1 Using a simpke for loop
print("simple for loop")
for i in dna:
    print(i)

# 2. Using range(len(dna))
print("range(len(dna))")
for i in range(len(dna)):
    print(i)

# 3. Using enumerate
print("enumerate(dna)")
for i, base in enumerate(dna):
    print(f"Position {i}: {base}")
    
# This gives us all possible starting positions!`}
            staticOutput={`simple for loop
A
T
G
C
G
T
AAATAG
range(len(dna))
0
1
2
3
4
5
6
7
8
9
10
11`}
            hints={[
              "Use range(len(dna)) to get positions 0, 1, 2, ... up to the last position",
              "We check every single position, not just every 3rd position like with codons",
              "enumerate(dna) gives us both the position and the base at that position"
            ]}
            height="280px"
          />
        </section>

        {/* Step 2: Slice 3 Bases at Each Position */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4">
            🔪 Step 2: Extract 3 Bases from Each Position
          </h2>
          <div className="mb-4 text-gray-300 space-y-2">
            <p>At each position, slice out exactly 3 bases to check if it could be a start codon:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Extract 3 bases from each position
dna = "ATGCGTAAATAG"

print("Extracting 3-base sequences from each position:")
print()

for i in range(len(dna)):
    # Extract 3 bases starting at position i
    three_bases = dna[i:i+3]
    print(f"Position {i}: '{three_bases}'")
    
    # Show what happens when we run out of bases
    if len(three_bases) < 3:
        print(f"  -> Only {len(three_bases)} base(s) left!")

print()
print("🤔 Next question: How do we check if each 3-base sequence is 'ATG'?")`}
            staticOutput={`Extracting 3-base sequences from each position:

Position 0: 'ATG'
Position 1: 'TGC'
Position 2: 'GCG'
Position 3: 'CGT'
Position 4: 'GTA'
Position 5: 'TAA'
Position 6: 'AAA'
Position 7: 'AAT'
Position 8: 'ATA'
Position 9: 'TAG'
Position 10: 'AG'
  -> Only 2 base(s) left!
Position 11: 'G'
  -> Only 1 base(s) left!

🤔 Next question: How do we check if each 3-base sequence is 'ATG'?`}
            hints={[
              "Use dna[i:i+3] to slice 3 bases starting at position i",
              "When i gets close to the end, we might get fewer than 3 bases",
              "Notice we find 'ATG' at position 0 and 'TAG' at position 9!"
            ]}
            height="350px"
          />
        </section>

        {/* The Problem We've Hit */}
        <section>
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              🚧 We&apos;ve Hit a Problem!
            </h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>What we can do:</strong> Extract 3-base sequences from every position ✅
              </p>
              <p>
                <strong>What we can&apos;t do yet:</strong> Check IF a sequence equals &quot;ATG&quot; ❌
              </p>
              <p className="text-bio-yellow">
                <strong>We need:</strong> A way to make decisions in our code - Python <em>conditionals</em>!
              </p>
            </div>
          </div>
        </section>

        {/* Transition to Next Section */}
        <section>
          <div className="bg-gradient-to-r from-bio-blue/20 to-purple-500/20 border border-bio-blue/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              📚 Coming Up Next: Python Conditionals
            </h3>
            <div className="text-gray-300 space-y-2">
              <p>To solve our ATG-finding problem, we&apos;ll learn:</p>
              <ul className="ml-6 space-y-1">
                <li>• <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">if</code> statements for making decisions</li>
                <li>• Comparing strings with <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">==</code></li>
                <li>• <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">elif</code> and <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">else</code> for multiple conditions</li>
                <li>• Putting it all together to find ATGs automatically!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Colab Link */}
        <section>
          <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-bio-blue mb-2">🚀 Practice String Manipulation in Google Colab!</h4>
              <p className="text-sm text-gray-300">
                Try the full string manipulation notebook with more loop and slicing exercises
              </p>
            </div>
            <a 
              href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/string_manipulation.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bio-blue hover:bg-bio-blue/80 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z" fill="currentColor"/>
              </svg>
              Open in Colab
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}