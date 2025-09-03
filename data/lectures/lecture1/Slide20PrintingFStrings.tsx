'use client'

import dynamic from 'next/dynamic'
import { 
  SlideTitle
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

export function Slide20PrintingFStrings() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 1: <span className="text-bio-blue">Printing &amp; F-Strings</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            Communicating Results with F-Strings
          </h3>
          <p className="text-gray-300 mb-4">
            F-strings are Python&apos;s most powerful way to create formatted output. They let you embed 
            variables directly into text, making your results clear and professional.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">F-string syntax:</p>
            <pre className="text-sm text-gray-300">
              <code>{`# Basic f-string usage
gene = "BRCA1"
expression = 8.5
sample = "HS_001"

print(f"Gene: {gene}")
print(f"Sample {sample}: {gene} expression = {expression}")

# Output:
# Gene: BRCA1
# Sample HS_001: BRCA1 expression = 8.5`}</code>
            </pre>
          </div>
        </div>

        {/* Basic F-String Usage */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            📝 Basic F-String Usage
          </h3>
          <p className="text-gray-300 mb-4">
            Start with <code className="bg-bio-dark px-2 py-1 rounded">f&quot;&quot;</code> and put variables in <code className="bg-bio-dark px-2 py-1 rounded">{`{}`}</code> brackets.
          </p>
          <PythonCodeRunner
            initialCode={`# Variables for our experiment
gene_name = "BRCA1"
sample_id = "HS_001"
temperature = 37
ph_level = 7.4

# Old way - multiple print statements
print("Gene:")
print(gene_name)
print("Temperature:")
print(temperature)

print()  # Empty line

# New way - using f-strings!
print(f"Gene: {gene_name}")
print(f"Sample: {sample_id}")
print(f"Temperature: {temperature}°C")
print(f"pH level: {ph_level}")`}
            staticOutput={`Gene:
BRCA1
Temperature:
37

Gene: BRCA1
Sample: HS_001
Temperature: 37°C
pH level: 7.4`}
            hints={[
              "The 'f' before the quotes makes it an f-string",
              "Variables go inside curly braces {}",
              "Much cleaner than multiple print statements!"
            ]}
            height="360px"
          />
        </div>

        {/* Formatting Numbers */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            🔢 Formatting Numbers
          </h3>
          <p className="text-gray-300 mb-4">
            Control decimal places for precise scientific reporting.
          </p>
          <PythonCodeRunner
            initialCode={`# Number formatting examples
concentration = 2.3456789
cell_count = 1234567
efficiency = 0.875

# Control decimal places with :.2f (2 decimal places)
print(f"Concentration: {concentration:.2f} mg/mL")

# Use :.1f for 1 decimal place
print(f"Concentration: {concentration:.1f} mg/mL")

# Scientific notation with :.2e
print(f"Cell count: {cell_count:.2e} cells/mL")

# Percentage with :.1%
print(f"PCR efficiency: {efficiency:.1%}")`}
            staticOutput={`Concentration: 2.35 mg/mL
Concentration: 2.3 mg/mL
Cell count: 1.23e+06 cells/mL
PCR efficiency: 87.5%`}
            hints={[
              ":.2f means 2 decimal places",
              ":.2e gives scientific notation",
              ":.1% converts to percentage"
            ]}
            height="320px"
          />
        </div>

        {/* Practice Exercise */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🎯 Practice: Create a Lab Report
          </h3>
          <p className="text-gray-300 mb-4">
            Use f-strings to create a simple lab report with the given variables.
          </p>
          
          <div className="bg-bio-dark/50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-bio-yellow mb-2">Your Task:</h4>
            <p className="text-gray-300 text-sm mb-2">Create output that looks like:</p>
            <pre className="text-sm text-bio-green bg-bio-dark p-2 rounded">
{`Sample: E. coli
OD600: 0.65
Growth phase: exponential`}
            </pre>
          </div>

          <PythonCodeRunner
            initialCode={`# Variables provided
organism = "E. coli"
optical_density = 0.65
phase = "exponential"

# YOUR CODE HERE: Use f-strings to create the report
# Hint: You need 3 print statements with f-strings
`}
            staticOutput={``}
            expectedOutput={`Sample: E. coli
OD600: 0.65
Growth phase: exponential`}
            hints={[
              "Use f\"Sample: {organism}\" for the first line",
              "Remember to include the variable names in {}",
              "You need 3 separate print statements"
            ]}
            height="280px"
          />
        </div>

        {/* Colab Notebook Link */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-bio-blue mb-2">📚 Practice More in Google Colab!</h4>
            <p className="text-sm text-gray-300">
              Master f-strings with more examples and exercises
            </p>
          </div>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/f_strings.ipynb"
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

        {/* Key Concepts */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-5">
          <h3 className="text-base font-bold text-bio-green mb-3 flex items-center">
            <span className="mr-2">🎯</span>
            Key Concepts Learned
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              F-strings start with <code>f&quot;&quot;</code>
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Variables go in <code>{`{}`}</code> brackets
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Format decimals with <code>:.2f</code>
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Percentages with <code>:.1%</code>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}