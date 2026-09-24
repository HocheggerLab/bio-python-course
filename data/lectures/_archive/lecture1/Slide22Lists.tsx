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

export function Slide22Lists() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 2: <span className="text-bio-blue">Lists - Storing Multiple Values</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            What are Lists?
          </h3>
          <p className="text-gray-300 mb-4">
            Lists are containers that hold multiple values in order. Think of them like a test tube rack - 
            each position holds one sample, and you can access them by their position number.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">Basic list syntax:</p>
            <pre className="text-sm text-gray-300">
              <code>{`# Creating lists
samples = [2.5, 3.8, 1.2, 4.5]        # List of numbers
genes = ["BRCA1", "TP53", "MYC"]      # List of strings
mixed = [24, "E. coli", 37.5, True]   # Mixed types

# Accessing values (indexing starts at 0!)
print(samples[0])     # Output: 2.5 (first item)
print(genes[2])       # Output: MYC (third item)
print(len(samples))   # Output: 4 (number of items)`}</code>
            </pre>
          </div>
        </div>

        {/* Creating and Using Lists */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            📋 Creating and Using Lists
          </h3>
          <p className="text-gray-300 mb-4">
            Store your experimental data in lists for batch processing.
          </p>
          <PythonCodeRunner
            initialCode={`# Lab measurements stored in lists
concentrations = [2.5, 3.8, 1.2, 4.5, 2.1]  # mg/mL
sample_ids = ["S001", "S002", "S003", "S004", "S005"]

# Access individual values
print("First concentration:")
print(concentrations[0])

print("\\nThird sample ID:")
print(sample_ids[2])

# Get the number of samples
print("\\nTotal samples:")
print(len(concentrations))

# Access the last item (negative indexing)
print("\\nLast concentration:")
print(concentrations[-1])`}
            staticOutput={`First concentration:
2.5

Third sample ID:
S003

Total samples:
5

Last concentration:
2.1`}
            hints={[
              "List indexing starts at 0, not 1",
              "Use len() to count items in a list",
              "Negative indices count from the end (-1 is last)"
            ]}
            height="380px"
          />
        </div>

        {/* List Operations */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            🔧 List Operations
          </h3>
          <p className="text-gray-300 mb-4">
            Add, remove, and modify values in your lists.
          </p>
          <PythonCodeRunner
            initialCode={`# Start with some gene names
genes = ["BRCA1", "TP53", "MYC"]
print("Original list:")
print(genes)

# Add a new gene
genes.append("EGFR")
print("\\nAfter append:")
print(genes)

# Change a value
genes[1] = "KRAS"
print("\\nAfter changing TP53 to KRAS:")
print(genes)

# Remove a gene
genes.remove("MYC")
print("\\nAfter removing MYC:")
print(genes)

# Check if a gene is in the list
print("\\nIs BRCA1 in the list?")
print("BRCA1" in genes)`}
            staticOutput={`Original list:
['BRCA1', 'TP53', 'MYC']

After append:
['BRCA1', 'TP53', 'MYC', 'EGFR']

After changing TP53 to KRAS:
['BRCA1', 'KRAS', 'MYC', 'EGFR']

After removing MYC:
['BRCA1', 'KRAS', 'EGFR']

Is BRCA1 in the list?
True`}
            hints={[
              "append() adds to the end of the list",
              "Use index assignment to change values",
              "The 'in' keyword checks membership"
            ]}
            height="400px"
          />
        </div>

        {/* Practice Exercise */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🎯 Practice: Manage Sample Data
          </h3>
          <p className="text-gray-300 mb-4">
            Create and manipulate a list of pH measurements.
          </p>
          
          <div className="bg-bio-dark/50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-bio-yellow mb-2">Your Tasks:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Create a list with pH values: 7.2, 7.4, 6.8</li>
              <li>• Add pH 7.5 to the end</li>
              <li>• Print the second pH value (should be 7.4)</li>
              <li>• Print the total number of measurements</li>
            </ul>
          </div>

          <PythonCodeRunner
            initialCode={`# YOUR CODE HERE: Create and manipulate pH measurements
# 1. Create a list called ph_values with 7.2, 7.4, 6.8

# 2. Add 7.5 to the end of the list

# 3. Print the second pH value (remember: indexing starts at 0!)

# 4. Print the total number of measurements
`}
            staticOutput={``}
            expectedOutput={`7.4
4`}
            hints={[
              "Create list: ph_values = [7.2, 7.4, 6.8]",
              "Add value: ph_values.append(7.5)",
              "Second item is at index 1: ph_values[1]",
              "Use len(ph_values) for the count"
            ]}
            height="300px"
          />
        </div>

        {/* Colab Notebook Link */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-bio-blue mb-2">📚 Practice More in Google Colab!</h4>
            <p className="text-sm text-gray-300">
              Master lists with more examples and exercises
            </p>
          </div>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N5_lists.ipynb"
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
              Lists store multiple values in order
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Access items with square brackets [ ]
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Indexing starts at 0, not 1
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Use append() to add items
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              len() gives the number of items
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Negative indices count from the end
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}