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

export default function Slide07RandomExample() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Standard Library Example: <GradientText>Random</GradientText> 🎲
      </SlideTitle>
      
      <p className="text-gray-300 text-center mb-6 text-lg">
        Perfect for biological simulations - no installation needed!
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* What is the random module */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4">🎯 What is `random`?</h3>
          
          <div className="space-y-3">
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Built-in capabilities:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Generate random numbers</li>
                <li>• Sample from populations</li>
                <li>• Shuffle sequences</li>
                <li>• Pick random choices</li>
                <li>• Statistical distributions</li>
              </ul>
            </div>
            
            <div className="bg-bio-green/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Perfect for biology:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Random DNA sequences</li>
                <li>• Monte Carlo simulations</li>
                <li>• Bootstrap sampling</li>
                <li>• Mutation modeling</li>
                <li>• Population genetics</li>
              </ul>
            </div>
          </div>

          <SyntaxHighlighter
            code={`import random

# Always available in Python!
# No pip install needed`}
            language="python"
          />
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-400 mb-3">🧬 Example 1: Genetic Drift & Sample Randomization</h3>
            
            <PythonCodeRunner
              key="genetic-drift-example"
              initialCode={`import random

# Simulating genetic drift - random allele selection
population = ['A', 'A', 'A', 'a', 'a']

# Sample for next generation (with replacement)
next_gen = random.choices(population, k=5)
print(f"Original: {population}")
print(f"Next gen: {next_gen}")

# Randomly shuffle experimental samples
samples = ['control', 'treatment1', 'treatment2', 'treatment3']
random.shuffle(samples)
print(f"Randomized order: {samples}")`}
              height="350px"
            />
          </div>

          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-4">
            <h3 className="text-lg font-bold text-bio-green mb-3">🧪 Example 2: DNA Point Mutations</h3>
            
            <PythonCodeRunner
              key="dna-mutation-example"
              initialCode={`from random import choice

# Simulating random DNA mutations
dna_sequence = "ATCGATCGTAGC"
nucleotides = ['A', 'T', 'C', 'G']

# Pick a random nucleotide for point mutation
mutation = choice(nucleotides)
position = 5
mutated_sequence = dna_sequence[:position] + mutation + dna_sequence[position+1:]

print(f"Original:  {dna_sequence}")
print(f"Mutated:   {mutated_sequence}")
print(f"Mutation:  {dna_sequence[position]} → {mutation} at position {position}")`}
              height="350px"
            />
          </div>
        </div>
      </div>

      {/* Common Methods */}
      <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-yellow/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-yellow mb-4 text-center">🔧 Most Useful Methods for Biology</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-bio-yellow/10 rounded-lg p-3">
            <h4 className="text-bio-yellow font-semibold mb-2">Numbers</h4>
            <SyntaxHighlighter
              code={`random.random()      # 0.0 to 1.0
random.randint(1,6)   # 1 to 6
random.uniform(0,100) # float range`}
              language="python"
            />
          </div>
          
          <div className="bg-bio-yellow/10 rounded-lg p-3">
            <h4 className="text-bio-yellow font-semibold mb-2">Selections</h4>
            <SyntaxHighlighter
              code={`random.choice(list)     # pick one
random.choices(list,k=3) # pick 3 (replacement)
random.sample(list,3)    # pick 3 (no replacement)`}
              language="python"
            />
          </div>
          
          <div className="bg-bio-yellow/10 rounded-lg p-3">
            <h4 className="text-bio-yellow font-semibold mb-2">Shuffling</h4>
            <SyntaxHighlighter
              code={`random.shuffle(list)  # shuffle in-place
random.seed(42)       # reproducible results`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* Colab Link */}
      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_N1_builtin_packages.ipynb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
          </svg>
          Built-in Modules Practice Notebook
        </a>
      </div>
    </div>
  )
}