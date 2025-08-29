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

export default function DNAStringOperationSlideSlicing() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <h1 className="text-4xl font-bold text-bio-blue mb-6">
        DNA String Slicing
      </h1>
      
      <div className="space-y-8">
        {/* Basic Slicing Explanation */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🔪 Understanding String Slicing
          </h2>
          <div className="mb-4 text-gray-300 space-y-2">
            <p>String slicing lets you extract parts of a string using <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">[start:end]</code> notation:</p>
            <ul className="ml-6 space-y-1">
              <li>• <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">string[1:4]</code> gets characters at positions 1, 2, and 3</li>
              <li>• Position counting starts from 0</li>
              <li>• The end position is <em>not included</em></li>
            </ul>
          </div>
          <PythonCodeRunner
            initialCode={`# Basic string slicing with DNA
dna = "ATGCGTAAA"

# Try different slicing examples
print("Basic slicing examples:")
print(dna[0:3])  # First 3 bases
print(dna[1:4])  # Bases 1-3 (positions 1,2,3)`}
            staticOutput={`Basic slicing examples:
ATG
TGC`}
            hints={[
              "Remember: Python uses 0-based indexing",
              "The end position in [start:end] is not included"
            ]}
            height="200px"
          />
        </section>

        {/* Challenge Section */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4">
            🎯 Try It Yourself!
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Complete the challenge: Print the last three bases of the DNA sequence using slicing.</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Challenge: Print out the last three bases of the DNA sequence
dna = "ATGCGTAAA"

# Your code here:
# Use slicing to get the last 3 bases and print them
`}
            expectedOutput="AAA"
            staticOutput={`AAA`}
            hints={[
              "Use negative indexing: [-3:] gets the last 3 characters",
              "Or use [len(dna)-3:] to slice from position 6 to the end",
              "Remember to use print() to show your result"
            ]}
            onSuccess={() => console.log('Challenge completed!')}
            height="180px"
          />
        </section>


        {/* Practice Challenge */}
        <section>
          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              🎯 Practice Challenge
            </h3>
            <p className="text-gray-300 mb-4">
              Try these basic slicing exercises:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Extract just the middle 4 bases of &quot;ATGCGTAAA&quot;</li>
              <li>• Get the first half of the DNA sequence</li>
              <li>• Extract every other base using step slicing [::2]</li>
              <li>• Practice using negative indices to get sections from the end</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}