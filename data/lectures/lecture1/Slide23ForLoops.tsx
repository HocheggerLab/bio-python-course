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

export function Slide23ForLoops() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 2: <span className="text-bio-blue">For Loops - Processing Each Item</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            What are For Loops?
          </h3>
          <p className="text-gray-300 mb-4">
            For loops automatically repeat code for each item in a list. Instead of writing the same code 
            multiple times, you write it once and Python applies it to every value.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">For loop syntax:</p>
            <pre className="text-sm text-gray-300">
              <code>{`# Basic for loop structure
samples = [2.5, 3.8, 1.2]

for concentration in samples:
    # This code runs for each value
    print(concentration)
    
# Output:
# 2.5
# 3.8
# 1.2`}</code>
            </pre>
          </div>
        </div>

        {/* 1. Simple For Loops */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            1️⃣ Simple For Loops
          </h3>
          <p className="text-gray-300 mb-4">
            Start with the basics - print each item in a list.
          </p>
          <PythonCodeRunner
            initialCode={`# List of gene names
genes = ["BRCA1", "TP53", "MYC", "EGFR", "KRAS"]

# Print each gene
print("Genes in our study:")
for gene in genes:
    print(gene)

print("\\n--- With formatting ---")
# Add some formatting
for gene in genes:
    print(f"Gene: {gene}")
    
print("\\n--- With calculations ---")
# List of concentrations
concentrations = [2.5, 3.8, 1.2, 4.5]

for conc in concentrations:
    # Calculate dilution factor
    dilution = conc / 0.1
    print(f"{conc} mg/mL needs {dilution}x dilution")`}
            staticOutput={`Genes in our study:
BRCA1
TP53
MYC
EGFR
KRAS

--- With formatting ---
Gene: BRCA1
Gene: TP53
Gene: MYC
Gene: EGFR
Gene: KRAS

--- With calculations ---
2.5 mg/mL needs 25.0x dilution
3.8 mg/mL needs 38.0x dilution
1.2 mg/mL needs 12.0x dilution
4.5 mg/mL needs 45.0x dilution`}
            hints={[
              "The loop variable (gene, conc) takes each value in turn",
              "Indentation shows what's inside the loop",
              "You can do calculations with each value"
            ]}
            height="420px"
          />
        </div>

        {/* 2. Building New Lists */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            2️⃣ Building New Lists with Loops
          </h3>
          <p className="text-gray-300 mb-4">
            Create new lists by processing data - start empty, then append!
          </p>
          <PythonCodeRunner
            initialCode={`# Original data
mol_weights = [100.0, 150.0, 200.0, 250.0]  # g/mol
mass = 5.0  # mg

# Create new list with calculated volumes
volumes = []  # Start with empty list

for mw in mol_weights:
    # Calculate volume for 10 mM solution
    vol = (mass / mw) * 100  # mL
    volumes.append(vol)  # Add to new list

print("Molecular weights (g/mol):")
print(mol_weights)
print("\\nVolumes needed for 10 mM (mL):")
print(volumes)

# Create formatted results list
results = []
for i in range(len(mol_weights)):
    result = f"MW {mol_weights[i]}: add {volumes[i]:.2f} mL"
    results.append(result)

print("\\nFormatted results:")
for r in results:
    print(r)`}
            staticOutput={`Molecular weights (g/mol):
[100.0, 150.0, 200.0, 250.0]

Volumes needed for 10 mM (mL):
[5.0, 3.3333333333333335, 2.5, 2.0]

Formatted results:
MW 100.0: add 5.00 mL
MW 150.0: add 3.33 mL
MW 200.0: add 2.50 mL
MW 250.0: add 2.00 mL`}
            hints={[
              "Start with an empty list: []",
              "Use append() to add calculated values",
              "Build up results step by step"
            ]}
            height="420px"
          />
        </div>

        {/* 3. Range and Enumerate */}
        <div className="bg-bio-dark/30 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-4">
            3️⃣ Using range() and enumerate()
          </h3>
          <p className="text-gray-300 mb-4">
            Access indices when you need to work with multiple lists or track position.
          </p>
          <PythonCodeRunner
            initialCode={`# Two related lists
sample_ids = ["S001", "S002", "S003", "S004"]
od_readings = [0.15, 0.42, 0.78, 1.23]

# Method 1: range(len()) to access both lists
print("Using range(len()):")
for i in range(len(sample_ids)):
    print(f"{sample_ids[i]}: OD = {od_readings[i]}")

# Method 2: enumerate() gives index AND value
print("\\nUsing enumerate (with numbering):")
for i, sample in enumerate(sample_ids):
    # i is the index, sample is the value
    print(f"{i+1}. {sample}: OD = {od_readings[i]}")
    
# enumerate is great for adding line numbers
print("\\nProcessing results:")
results = ["Pass", "Pass", "Fail", "Pass"]
for num, result in enumerate(results, start=1):  # start=1 begins counting at 1
    print(f"Test {num}: {result}")`}
            staticOutput={`Using range(len()):
S001: OD = 0.15
S002: OD = 0.42
S003: OD = 0.78
S004: OD = 1.23

Using enumerate (with numbering):
1. S001: OD = 0.15
2. S002: OD = 0.42
3. S003: OD = 0.78
4. S004: OD = 1.23

Processing results:
Test 1: Pass
Test 2: Pass
Test 3: Fail
Test 4: Pass`}
            hints={[
              "range(len(list)) gives you indices: 0, 1, 2, ...",
              "enumerate() gives you (index, value) pairs",
              "Use start=1 with enumerate to count from 1"
            ]}
            height="440px"
          />
        </div>

        {/* Practice Exercise */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🎯 Practice: Process pH Readings
          </h3>
          <p className="text-gray-300 mb-4">
            Create a new list showing whether each pH is acidic, neutral, or basic.
          </p>
          
          <div className="bg-bio-dark/50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-bio-yellow mb-2">Your Task:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Create an empty list called descriptions</li>
              <li>• For each pH value, create a description string</li>
              <li>• Append each description to the list</li>
              <li>• Print the final list</li>
            </ul>
            <p className="text-gray-300 text-sm mt-2">Expected output:</p>
            <pre className="text-sm text-bio-green bg-bio-dark p-2 rounded">
{`['pH 6.5', 'pH 7.0', 'pH 7.4', 'pH 8.2']`}
            </pre>
          </div>

          <PythonCodeRunner
            initialCode={`# pH readings
ph_values = [6.5, 7.0, 7.4, 8.2]

# YOUR CODE HERE: Create descriptions list
# 1. Create empty list called descriptions
# 2. Loop through ph_values
# 3. Create string f"pH {value}"
# 4. Append to descriptions
# 5. Print the result
`}
            staticOutput={``}
            expectedOutput={`['pH 6.5', 'pH 7.0', 'pH 7.4', 'pH 8.2']`}
            hints={[
              "Start with: descriptions = []",
              "Use: for ph in ph_values:",
              "Create: desc = f\"pH {ph}\"",
              "Add: descriptions.append(desc)"
            ]}
            height="300px"
          />
        </div>

        {/* Colab Notebook Link */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/30 rounded-xl p-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-bio-blue mb-2">📚 Practice More in Google Colab!</h4>
            <p className="text-sm text-gray-300">
              Master for loops with more examples and exercises
            </p>
          </div>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/for_loops.ipynb"
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

        {/* 4. List Comprehensions - Advanced */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            4️⃣ Advanced: List Comprehensions
          </h3>
          <p className="text-gray-300 mb-4">
            Python's shortcut for creating lists - same result, more compact! 
            <span className="text-sm text-gray-400"> (Optional - for those who want to explore)</span>
          </p>
          <PythonCodeRunner
            initialCode={`# Converting concentrations mg/mL to µg/mL

# Standard way with for loop
concentrations_mg = [2.5, 3.8, 1.2, 4.5]
concentrations_ug = []

for conc in concentrations_mg:
    concentrations_ug.append(conc * 1000)

print("Standard for loop:")
print(concentrations_ug)

# List comprehension - one line!
concentrations_ug_comp = [conc * 1000 for conc in concentrations_mg]

print("\\nList comprehension:")
print(concentrations_ug_comp)

# More examples
genes = ["brca1", "tp53", "myc", "egfr"]

# Convert to uppercase
genes_upper = [gene.upper() for gene in genes]
print("\\nUppercase genes:")
print(genes_upper)

# Create labels
labels = [f"Gene_{gene}" for gene in genes]
print("\\nLabeled genes:")
print(labels)

# Calculate dilutions
od_values = [0.1, 0.3, 0.6, 1.2]
dilutions = [od / 0.1 for od in od_values]
print("\\nDilution factors:")
print(dilutions)`}
            staticOutput={`Standard for loop:
[2500.0, 3800.0, 1200.0, 4500.0]

List comprehension:
[2500.0, 3800.0, 1200.0, 4500.0]

Uppercase genes:
['BRCA1', 'TP53', 'MYC', 'EGFR']

Labeled genes:
['Gene_brca1', 'Gene_tp53', 'Gene_myc', 'Gene_egfr']

Dilution factors:
[1.0, 3.0, 6.0, 12.0]`}
            hints={[
              "Format: [expression for item in list]",
              "Same result as for loop + append",
              "Use whichever style you find clearer!"
            ]}
            height="420px"
          />
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
              For loops process each item in a list
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Build new lists with append()
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              range(len()) for index access
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              enumerate() for index + value
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Indentation defines loop body
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              List comprehensions are optional shortcuts
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}