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

export function Step1Variables() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 1: <span className="text-bio-blue">Variables & Assignment</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            What are Variables?
          </h3>
          <p className="text-gray-300 mb-4">
            Variables are like <span className="text-bio-yellow font-semibold">labeled containers</span> that store data. 
            In biology, think of them like test tubes with labels - each one holds a specific value you can use later.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">Basic syntax:</p>
            <pre className="text-sm text-gray-300">
              <code>{`# Creating variables
sample_count = 24          # Store a number
gene_name = "BRCA1"        # Store text
temperature = 37.5         # Store a decimal

# Using variables
print(sample_count)        # Output: 24
print(gene_name)           # Output: BRCA1`}</code>
            </pre>
          </div>
        </div>

        {/* Integer Variables */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            🔢 Working with Numbers
          </h3>
          <p className="text-gray-300 mb-4">
            Let's start with numbers - perfect for lab measurements, concentrations, and calculations.
          </p>
          <PythonCodeRunner
            initialCode={`# Integer variables for lab data
sample_count = 24
temperature = 37  # degrees Celsius
ph_level = 7.4

print("Lab Conditions:")
print("Samples:")
print(sample_count)
print("Temperature (°C):")
print(temperature)
print("pH Level:")
print(ph_level)

# Basic operations
total_samples = sample_count + 12
print("\\nAfter adding 12 more samples:")
print(total_samples)

# Temperature conversion
temperature_f = (temperature * 9/5) + 32
print("Temperature in Fahrenheit:")
print(temperature_f)`}
            staticOutput={`Lab Conditions:
Samples:
24
Temperature (°C):
37
pH Level:
7.4

After adding 12 more samples:
36
Temperature in Fahrenheit:
98.6`}
            hints={[
              "Try changing the sample_count to see how it affects total_samples",
              "Variables can be used in calculations multiple times",
              "You can print text and then print the variable on the next line"
            ]}
            height="380px"
          />
        </div>

        {/* String Variables */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            🧬 Working with Text (Strings)
          </h3>
          <p className="text-gray-300 mb-4">
            Strings hold text data - perfect for gene names, sample IDs, and descriptions.
          </p>
          <PythonCodeRunner
            initialCode={`# String variables for biological data
gene_name = "BRCA1"
organism = "Homo sapiens"
sample_id = "HS_001"

print("Sample Information:")
print("Gene:")
print(gene_name)
print("Organism:")
print(organism)
print("Sample ID:")
print(sample_id)

# String operations - combining strings
full_name = gene_name + "_" + organism
print("\\nFull identifier:")
print(full_name)

# String methods
print("\\nGene name length:")
print(len(gene_name))
print("Organism (uppercase):")
print(organism.upper())
print("Sample ID (lowercase):")
print(sample_id.lower())`}
            staticOutput={`Sample Information:
Gene:
BRCA1
Organism:
Homo sapiens
Sample ID:
HS_001

Full identifier:
BRCA1_Homo sapiens

Gene name length:
5
Organism (uppercase):
HOMO SAPIENS
Sample ID (lowercase):
hs_001`}
            hints={[
              "Try changing the gene_name to 'TP53' and see what happens",
              "The + operator combines (concatenates) strings",
              "String methods like .upper() and .lower() transform text"
            ]}
            height="400px"
          />
        </div>

        {/* Variable Swapping Challenge */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🎯 Challenge: Variable Swapping
          </h3>
          <p className="text-gray-300 mb-4">
            Here's a classic programming problem: How do you swap the values of two variables? 
            You have two sample concentrations and need to exchange their values.
          </p>
          
          <div className="bg-bio-dark/50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-bio-yellow mb-2">Your Task:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• The variable <code className="bg-bio-dark px-2 py-1 rounded">sample_a</code> should end up with the value 4.8</li>
              <li>• The variable <code className="bg-bio-dark px-2 py-1 rounded">sample_b</code> should end up with the value 2.5</li>
              <li>• Can you figure out how to swap them?</li>
            </ul>
          </div>

          <PythonCodeRunner
            initialCode={`# Challenge: Swap two sample concentrations
sample_a = 2.5  # mg/mL
sample_b = 4.8  # mg/mL

print("Before swapping:")
print("Sample A:")
print(sample_a)
print("Sample B:")
print(sample_b)

# YOUR CODE HERE: Write code to swap the values


print("\\nAfter swapping:")
print("Sample A (should be 4.8):")
print(sample_a)
print("Sample B (should be 2.5):")
print(sample_b)`}
            staticOutput={`Before swapping:
Sample A:
2.5
Sample B:
4.8

After swapping:
Sample A (should be 4.8):
2.5
Sample B (should be 2.5):
4.8`}
            expectedOutput={`Before swapping:
Sample A:
2.5
Sample B:
4.8

After swapping:
Sample A (should be 4.8):
4.8
Sample B (should be 2.5):
2.5`}
            hints={[
              "Think about using a third variable to temporarily store one value",
              "Or... does Python have a special syntax for swapping?",
              "Try experimenting with different approaches!"
            ]}
            height="350px"
          />
        </div>

        {/* Colab Notebook Link */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-bio-blue mb-2">📚 Practice More in Google Colab!</h4>
            <p className="text-sm text-gray-300">
              Explore variables and comments with more examples and exercises
            </p>
          </div>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/variables_and_comments.ipynb"
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
              Variables store data with descriptive names
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Print statements display variable values
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Numbers and strings behave differently
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Variables can be swapped (challenge!)
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Variables can be reused and updated
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              String methods transform text data
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}