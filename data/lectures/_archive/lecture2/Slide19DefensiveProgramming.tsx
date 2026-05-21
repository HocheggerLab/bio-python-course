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

export default function Slide19DefensiveProgramming() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        <GradientText>Defensive Programming</GradientText> for Biological Data
      </SlideTitle>
      
      <div className="space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-yellow/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-yellow mb-4">🛡️ Expect the Unexpected</h3>
          <div className="text-gray-300 space-y-2">
            <p><strong>Real biological data is messy:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• DNA sequences might not contain ATG start codons</li>
              <li>• FASTA files may have ambiguous bases (N, R, Y)</li>
              <li>• User input could be empty or invalid</li>
              <li>• Sequences might be too short for analysis</li>
            </ul>
            <p className="mt-3 text-bio-yellow"><strong>Solution:</strong> Use <code>if</code> statements to validate data and handle expected scenarios gracefully!</p>
          </div>
        </div>

        {/* Simple ATG Finder with Quality Checks */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-bio-green mb-3">🔍 Simple ATG Finder with Data Validation</h3>
          <p className="text-gray-300 mb-3 text-sm">Two key checks: valid DNA bases and ATG presence</p>
          <PythonCodeRunner
            initialCode={`def find_atg(dna_sequence):
    """Find ATG with basic quality checks."""
    
    # Quality check 1: Are only ATGC letters in the string?
    valid_bases = set('ATGC')
    if not all(base in valid_bases for base in dna_sequence):
        print("Warning: Sequence contains non-ATGC characters")
        return None
    
    # Look for ATG
    for i in range(len(dna_sequence) - 2):
        if dna_sequence[i:i+3] == 'ATG':
            return i
    
    # Quality check 2: Return None if no ATG present
    return None

# Test with different sequences
test_sequences = [
    "CCGATGTTTAAAGCC",    # Valid sequence with ATG
    "CCGTTACCGTT",        # Valid sequence, no ATG
    "CCGTTANCCGTT",       # Contains invalid base N
    "CCGATGXTTAAAGCC",    # Contains invalid base X
]

for seq in test_sequences:
    print(f"Sequence: {seq}")
    result = find_atg(seq)
    if result is not None:
        print(f"  ✓ ATG found at position {result}")
    else:
        print(f"  ✗ No valid ATG found")
    print()`}
            height="300px"
          />
        </div>

        {/* Key Principles */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-blue mb-4">💡 Defensive Programming Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-bio-blue font-semibold mb-2">✅ Always Validate Input</div>
              <ul className="text-gray-300 space-y-1">
                <li>• Check for empty or None values</li>
                <li>• Validate data types (string vs number)</li>
                <li>• Verify biological constraints</li>
              </ul>
            </div>
            <div>
              <div className="text-bio-blue font-semibold mb-2">🔧 Handle Expected Failures</div>
              <ul className="text-gray-300 space-y-1">
                <li>• No ATG found → return None</li>
                <li>• Invalid bases → clean or warn</li>
                <li>• Short sequences → inform user</li>
              </ul>
            </div>
            <div>
              <div className="text-bio-blue font-semibold mb-2">📝 Provide Clear Feedback</div>
              <ul className="text-gray-300 space-y-1">
                <li>• Print warnings for data issues</li>
                <li>• Return meaningful values</li>
                <li>• Document what went wrong</li>
              </ul>
            </div>
            <div>
              <div className="text-bio-blue font-semibold mb-2">🛡️ Fail Gracefully</div>
              <ul className="text-gray-300 space-y-1">
                <li>• Return None instead of crashing</li>
                <li>• Continue processing when possible</li>
                <li>• Don't let one bad sequence stop analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alternative: try/except blocks */}
        <div className="bg-gradient-to-br from-purple-900/20 to-bio-dark border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">🔄 Alternative: try/except blocks</h3>
          <div className="text-gray-300 space-y-3">
            <p><strong>try/except</strong> is useful for building robust software applications:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-500/10 rounded-lg p-3">
                <div className="text-purple-300 font-semibold mb-2">🏗️ Software Development</div>
                <ul className="text-sm space-y-1">
                  <li>• File I/O operations</li>
                  <li>• Network connections</li>
                  <li>• Database queries</li>
                  <li>• User interface errors</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-3">
                <div className="text-purple-300 font-semibold mb-2">🧪 Data Science</div>
                <ul className="text-sm space-y-1">
                  <li>• Use simple <code>if</code> statements</li>
                  <li>• Validate data explicitly</li>
                  <li>• Handle expected scenarios</li>
                  <li>• Focus on data quality</li>
                </ul>
              </div>
            </div>
            <div className="bg-bio-blue/10 rounded-lg p-3 mt-4">
              <p className="text-bio-blue text-sm">
                <strong>💡 For data science:</strong> Missing ATGs, invalid bases, or empty sequences aren't "exceptions" - 
                they're normal biological scenarios that need explicit handling with <code>if</code> statements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}