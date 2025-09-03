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

export default function Slide12ConditionalsBasics() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-10">
        <GradientText>Conditionals</GradientText>: Making Decisions in Code
      </SlideTitle>
      
      <div className="space-y-8">
        {/* Basic if statement */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🎯 Basic if Statement
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Use <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">if</code> to make decisions based on conditions:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Basic if statement with DNA
dna_sequence = "ATGCGT"

if len(dna_sequence) > 5:
    print("Long sequence")

if "ATG" in dna_sequence:
    print("Has start codon")`}
            staticOutput={`Long sequence
Has start codon`}
            hints={[
              "Use : (colon) after the if condition",
              "Indent the code that runs when condition is True",
              "Python uses indentation to group code blocks"
            ]}
            height="200px"
          />
        </section>

        {/* if-else */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4">
            🔄 if-else: Choose Between Two Options
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Use <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">else</code> to handle the opposite case:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# if-else example
codon = "ATG"

if codon == "ATG":
    amino_acid = "M"
else:
    amino_acid = "Unknown"

print(f"Codon {codon} codes for {amino_acid}")`}
            staticOutput={`Codon ATG codes for M`}
            hints={[
              "Use == to test equality (not =)",
              "else: handles all cases where if condition is False",
              "Only one of the code blocks will execute"
            ]}
            height="220px"
          />
        </section>

        {/* elif */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-blue mb-4">
            🎪 elif: Multiple Choices
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Use <code className="text-bio-blue bg-bio-dark px-2 py-1 rounded">elif</code> to test multiple conditions:</p>
          </div>
          <PythonCodeRunner
            initialCode={`# elif example with stop codons
codon = "TAG"

if codon == "TAA":
    print("Amber stop codon")
elif codon == "TAG":
    print("Opal stop codon")  
elif codon == "TGA":
    print("Ochre stop codon")
else:
    print("Not a stop codon")`}
            staticOutput={`Opal stop codon`}
            hints={[
              "elif = 'else if' - tests another condition",
              "You can have multiple elif statements",
              "Only the first True condition executes"
            ]}
            height="240px"
          />
        </section>

        {/* Key concepts */}
        <section>
          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              🔑 Key Points to Remember
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <strong className="text-bio-green">Syntax:</strong> Always use : after conditions
              </div>
              <div>
                <strong className="text-bio-yellow">Indentation:</strong> Python uses spaces/tabs to group code
              </div>
              <div>
                <strong className="text-bio-blue">Comparison:</strong> Use == for equality, != for not equal
              </div>
              <div>
                <strong className="text-purple-400">Flow:</strong> Only one block executes per if-elif-else chain
              </div>
            </div>
          </div>
        </section>

        {/* Colab Link */}
        <section>
          <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-bio-blue mb-2">🚀 Practice Conditionals in Google Colab!</h4>
              <p className="text-sm text-gray-300">
                Open the comprehensive conditionals notebook with exercises and biological examples
              </p>
            </div>
            <a 
              href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_N2_conditionals_practice.ipynb"
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