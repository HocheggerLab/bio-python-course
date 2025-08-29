'use client'

import dynamic from 'next/dynamic'
import { PyodideProvider } from '@/contexts/PyodideContext'
import StaticCodeDisplay from '@/components/python/StaticCodeDisplay'

// Dynamically import PythonCodeRunner to avoid SSR issues
const PythonCodeRunner = dynamic(
  () => import('@/components/python/PythonCodeRunner'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6 text-center">
        <div className="animate-pulse">Loading Python environment...</div>
      </div>
    )
  }
)

export default function TestPyodidePage() {
  return (
    <PyodideProvider>
      <div className="min-h-screen bg-bio-darker p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-bio-blue mb-2">
              Pyodide Test Page
            </h1>
            <p className="text-gray-400">
              Test interactive Python execution with browser compatibility checks
            </p>
          </header>

          {/* Basic Python Test */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Basic Python Test
            </h2>
            <PythonCodeRunner
              initialCode={`# Test basic Python functionality
print("Hello from Python!")
x = 2 + 3
print(f"2 + 3 = {x}")

# Test our biology tools
print(f"GC content of 'ATCG': {gc_content('ATCG')}%")`}
              staticOutput={`Hello from Python!
2 + 3 = 5
GC content of 'ATCG': 50.0%`}
              description="Basic Python functionality test"
              height="150px"
            />
          </section>

          {/* DNA Analysis Test */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              DNA Analysis Test
            </h2>
            <PythonCodeRunner
              initialCode={`# DNA sequence analysis
dna = "ATGCGTAAATAG"

print(f"Sequence: {dna}")
print(f"Length: {len(dna)} bp")
print(f"GC Content: {gc_content(dna):.1f}%")

# Extract codons
codons = [dna[i:i+3] for i in range(0, len(dna), 3)]
print(f"Codons: {codons}")

# Translate to protein
protein = translate_dna(dna)
print(f"Protein: {protein}")`}
              staticOutput={`Sequence: ATGCGTAAATAG
Length: 12 bp
GC Content: 41.7%
Codons: ['ATG', 'CGT', 'AAA', 'TAG']
Protein: MRK*`}
              description="DNA sequence analysis with biology tools"
              height="200px"
            />
          </section>

          {/* Interactive Challenge */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Interactive Challenge
            </h2>
            <PythonCodeRunner
              initialCode={`# Challenge: Find the GC content of this sequence
mystery_dna = "GCGCGCATATATGCGC"

# Your code here:
# 1. Calculate GC content
# 2. Check if it's above 60%
# 3. Print the result

`}
              expectedOutput="GC Content: 68.75%"
              hints={[
                "Use gc_content(sequence) function",
                "Compare the result with 60",
                "Use print() to show your results"
              ]}
              onSuccess={() => console.log('Challenge completed!')}
              staticOutput={`GC Content: 68.75%
This sequence has high GC content (above 60%)`}
              description="Interactive challenge with hints"
              height="180px"
            />
          </section>

          {/* Static Fallback Example */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Static Fallback Example
            </h2>
            <StaticCodeDisplay
              title="Example: Static Code Display"
              code={`# This is what users see when Pyodide isn't supported
dna = "ATGCGTAAA"
protein = translate_dna(dna)
print(f"DNA: {dna}")
print(f"Protein: {protein}")`}
              output={`DNA: ATGCGTAAA
Protein: MRK`}
              description="This shows how the fallback looks for unsupported browsers"
              showBrowserWarning={true}
              browserMessage="This is a demo of the static fallback display"
            />
          </section>
        </div>
      </div>
    </PyodideProvider>
  )
}