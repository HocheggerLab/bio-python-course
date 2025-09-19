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

export function Slide19DataTypes() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 1: <span className="text-bio-blue">Data Types</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            Python's Core Data Types
          </h3>
          <p className="text-gray-300 mb-4">
            Python has four fundamental data types that you'll use constantly in biological analysis. 
            Each type has specific properties and uses in lab calculations.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">The four core types:</p>
            <pre className="text-sm text-gray-300">
              <code>{`# Integer (int) - whole numbers
sample_count = 24
pcr_cycles = 35

# Float (float) - decimal numbers  
ph_level = 7.4
concentration = 2.5

# String (str) - text data
gene_name = "BRCA1"
sequence = "ATGCGATCG"

# Boolean (bool) - True/False
is_complete = True
contaminated = False`}</code>
            </pre>
          </div>
        </div>

        {/* Integers */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            🔢 Integers (int)
          </h3>
          <p className="text-gray-300 mb-4">
            Whole numbers - perfect for counting samples, cycles, or time points.
          </p>
          <PythonCodeRunner
            initialCode={`# Integer examples
sample_count = 24
pcr_cycles = 35
days_incubated = 7

print(sample_count)
print(pcr_cycles)
print(days_incubated)`}
            staticOutput={`24
35
7`}
            hints={[
              "Integers are whole numbers with no decimal point",
              "Great for counting discrete items in the lab",
              "Try changing the values and see what happens"
            ]}
            height="280px"
          />
        </div>

        {/* Floats */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            💧 Floats (float)
          </h3>
          <p className="text-gray-300 mb-4">
            Numbers with decimal points - essential for measurements and concentrations.
          </p>
          <PythonCodeRunner
            initialCode={`# Float examples
ph_level = 7.4
concentration = 2.5
temperature = 37.0

print(ph_level)
print(concentration)
print(temperature)`}
            staticOutput={`7.4
2.5
37.0`}
            hints={[
              "Floats can represent precise measurements",
              "Always use floats for lab measurements",
              "Even whole numbers can be floats if you add .0"
            ]}
            height="280px"
          />
        </div>

        {/* Strings */}
        <div className="bg-bio-dark/30 border border-purple-400/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🧬 Strings (str)
          </h3>
          <p className="text-gray-300 mb-4">
            Text data - perfect for gene names, sample IDs, and DNA sequences.
          </p>
          <PythonCodeRunner
            initialCode={`# String examples
gene_name = "BRCA1"
dna_sequence = "ATGCGATCG"
sample_id = "Sample_001"

print(gene_name)
print(dna_sequence)
print(sample_id)`}
            staticOutput={`BRCA1
ATGCGATCG
Sample_001`}
            hints={[
              "Strings are always enclosed in quotes",
              "You can use single 'quotes' or double \"quotes\"",
              "DNA sequences are stored as strings"
            ]}
            height="280px"
          />
        </div>

        {/* Booleans */}
        <div className="bg-bio-dark/30 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-4">
            ✅ Booleans (bool)
          </h3>
          <p className="text-gray-300 mb-4">
            True or False values - used for conditions and logical operations.
          </p>
          <PythonCodeRunner
            initialCode={`# Boolean examples
experiment_complete = True
contaminated = False
passed_quality_check = True

print(experiment_complete)
print(contaminated)
print(passed_quality_check)`}
            staticOutput={`True
False
True`}
            hints={[
              "Booleans are either True or False (note the capital letters)",
              "Useful for tracking experiment status",
              "You'll use these with if statements later"
            ]}
            height="280px"
          />
        </div>

        {/* Type Checking */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🔍 Checking Data Types
          </h3>
          <p className="text-gray-300 mb-4">
            Python can tell you what type of data you're working with using the type() function.
          </p>
          <PythonCodeRunner
            initialCode={`# Check data types
sample_count = 24
ph_level = 7.4
gene_name = "BRCA1"
is_ready = True

print(type(sample_count))
print(type(ph_level))
print(type(gene_name))
print(type(is_ready))`}
            staticOutput={`<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>`}
            hints={[
              "The type() function shows what kind of data you have",
              "This is helpful for debugging your code",
              "Different types behave differently in calculations"
            ]}
            height="320px"
          />
        </div>

        {/* Colab Notebook Link */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-bio-blue mb-2">📚 Practice More in Google Colab!</h4>
            <p className="text-sm text-gray-300">
              Explore data types with more examples and exercises
            </p>
          </div>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N3_datatypes.ipynb"
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
              <strong>int:</strong> Whole numbers for counting
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              <strong>float:</strong> Decimal numbers for measurements
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              <strong>str:</strong> Text data in quotes
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              <strong>bool:</strong> True or False values
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Use type() to check data types
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Choose the right type for your data
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}