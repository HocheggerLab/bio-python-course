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

export default function Slide18ErrorMessages() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Understanding <GradientText>Python Error Messages</GradientText>
      </SlideTitle>
      
      <div className="space-y-6">
        {/* Error Message Structure */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4">🔍 Anatomy of a Python Error</h3>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400 mb-2">Traceback (most recent call last):</div>
            <div className="text-blue-400 mb-1">  File "script.py", line 42, in &lt;module&gt;</div>
            <div className="text-gray-300 mb-1">    result = find_atg(dna_sequence)</div>
            <div className="text-red-400 mb-2">NameError: name 'find_atg' is not defined</div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-500/20 rounded-lg p-3">
              <div className="text-blue-400 font-semibold">📍 Location</div>
              <div className="text-gray-300">File name and line number</div>
            </div>
            <div className="bg-gray-500/20 rounded-lg p-3">
              <div className="text-gray-300 font-semibold">🔤 Code Line</div>
              <div className="text-gray-300">The actual problematic code</div>
            </div>
            <div className="bg-red-500/20 rounded-lg p-3">
              <div className="text-red-400 font-semibold">❌ Error Type</div>
              <div className="text-gray-300">What went wrong + explanation</div>
            </div>
          </div>
        </div>

        {/* Example 1: Syntax Error */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-orange-500/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">🐛 Example 1: Syntax Error</h3>
          <p className="text-gray-300 mb-3 text-sm">Missing parentheses - Python can't understand the code structure</p>
          <PythonCodeRunner
            initialCode={`# This code has a syntax error - can you spot it?
def find_atg(dna_sequence):
    """Find the first ATG start codon."""
    for i in range(len(dna_sequence - 2):  # ← Error here!
        if dna_sequence[i:i+3] == 'ATG':
            return i
    return None

# Test the function
dna = "CCGATGTTCAAGTACTAAGCC"
result = find_atg(dna)
print(f"ATG found at position: {result}")`}
            staticOutput={`  File "script.py", line 4
    for i in range(len(dna_sequence - 2):
                                        ^
SyntaxError: '(' was never closed`}
            hints={[
              "Look at line 4 - count the opening and closing parentheses",
              "The range() function call is missing a closing parenthesis",
              "Fix: range(len(dna_sequence) - 2)"
            ]}
            height="250px"
          />
        </div>

        {/* Example 2: Type Error */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-yellow-500/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">🧮 Example 2: Type Error</h3>
          <p className="text-gray-300 mb-3 text-sm">Trying to use incompatible data types together</p>
          <PythonCodeRunner
            initialCode={`# This code has a type error - can you fix it?
def find_orf_length(dna_sequence):
    """Calculate total ORF length."""
    atg_position = 5
    
    # Try to add a number to a string - this will fail!
    total_length = dna_sequence + atg_position  # ← Error here!
    return total_length

# Test the function
dna = "ATGTTCAAGTACTAAGCC"
result = find_orf_length(dna)
print(f"Total length: {result}")`}
            staticOutput={`Traceback (most recent call last):
  File "script.py", line 10, in <module>
    result = find_orf_length(dna)
  File "script.py", line 6, in find_orf_length
    total_length = dna_sequence + atg_position
TypeError: can only concatenate str (not "int") to str`}
            hints={[
              "You can't add a string and a number directly",
              "Maybe you meant to add to the length? len(dna_sequence) + atg_position",
              "Or convert the number to string? dna_sequence + str(atg_position)"
            ]}
            height="250px"
          />
        </div>

        {/* Example 3: Name Error */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">🏷️ Example 3: Name Error</h3>
          <p className="text-gray-300 mb-3 text-sm">Using a variable or function that doesn't exist</p>
          <PythonCodeRunner
            initialCode={`# This code has a name error - can you debug it?
def analyze_sequence(dna_sequence):
    """Analyze a DNA sequence."""
    print(f"Analyzing sequence: {dna_sequence}")
    
    # Oops! This variable was never defined
    atg_position = find_start_codon(dna_sequence)  # ← Error here!
    
    if atg_position is not None:
        print(f"Start codon found at position: {atg_position}")
    else:
        print("No start codon found")

# Test the function
dna = "CCGATGTTCAAGTACTAAGCC"
analyze_sequence(dna)`}
            staticOutput={`Analyzing sequence: CCGATGTTCAAGTACTAAGCC
Traceback (most recent call last):
  File "script.py", line 13, in <module>
    analyze_sequence(dna)
  File "script.py", line 6, in analyze_sequence
    atg_position = find_start_codon(dna_sequence)
NameError: name 'find_start_codon' is not defined`}
            hints={[
              "The function 'find_start_codon' doesn't exist",
              "Maybe you meant 'find_atg' from our previous examples?",
              "Or you need to define the find_start_codon function first"
            ]}
            height="250px"
          />
        </div>

        {/* Key Debugging Tips */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">💡 Debugging Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-bio-green font-semibold mb-2">📖 Read the Error Carefully</div>
              <ul className="text-gray-300 space-y-1">
                <li>• Start from the bottom - that's the actual error</li>
                <li>• Note the line number and file name</li>
                <li>• Look at the exact code line mentioned</li>
              </ul>
            </div>
            <div>
              <div className="text-bio-green font-semibold mb-2">🔍 Common Error Patterns</div>
              <ul className="text-gray-300 space-y-1">
                <li>• SyntaxError: Check parentheses, quotes, colons</li>
                <li>• TypeError: Check if data types match</li>
                <li>• NameError: Check spelling and definitions</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Colab Link */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_N4_debugging.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Debugging Practice Notebook
          </a>
        </div>
      </div>
    </div>
  )
}