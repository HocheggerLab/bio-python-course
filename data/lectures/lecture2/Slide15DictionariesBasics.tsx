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

export default function Slide15DictionariesBasics() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-10">
        <GradientText>Dictionaries</GradientText>: Key-Value Pairs for Biology
      </SlideTitle>
      
      <div className="space-y-8">
        {/* Basic Dictionary Creation */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🗂️ Creating a Simple Codon Dictionary
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Dictionaries map <strong>keys</strong> to <strong>values</strong>. Perfect for codon → amino acid!</p>
          </div>
          <PythonCodeRunner
            initialCode={`# Create a simple codon dictionary
codon_table = {
    'ATG': 'M',  # key: value
    'TGG': 'W',
    'TTT': 'F',
    'TAA': '*'   # Stop codon
}

print(codon_table)`}
            staticOutput={`{'ATG': 'M', 'TGG': 'W', 'TTT': 'F', 'TAA': '*'}`}
            hints={[
              "Use curly braces {} to create dictionaries",
              "Format: {'key': 'value', 'key2': 'value2'}",
              "Keys are codons, values are amino acids"
            ]}
            height="200px"
          />
        </section>

        {/* Accessing Keys and Values */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-blue mb-4">
            🔍 Accessing Keys and Values
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Get values by key and loop through the dictionary:</p>
          </div>
          <PythonCodeRunner
            initialCode={`codon_table = {
    'ATG': 'M',  # key: value
    'TGG': 'W',
    'TTT': 'F',
    'TAA': '*'   # Stop codon
}

# Access specific values
print(codon_table['ATG'])
print(codon_table['TAA'])

# Get all keys, values, or both
print(codon_table.keys())
print(codon_table.values())

# Loop through keys and values
for codon, amino_acid in codon_table.items():
    print(f"{codon} → {amino_acid}")`}
            staticOutput={`M
*
dict_keys(['ATG', 'TGG', 'TTT', 'TAA'])
dict_values(['M', 'W', 'F', '*'])
ATG → M
TGG → W
TTT → F
TAA → *`}
            hints={[
              "Use square brackets [key] to get values",
              "Use .keys() to get all keys, .values() to get all values",
              "Use .items() to loop through both keys and values together"
            ]}
            height="240px"
          />
        </section>

        {/* Adding and Changing Values */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4">
            ✏️ Adding and Changing Values
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Modify existing entries or add new ones:</p>
          </div>
          <PythonCodeRunner
            initialCode={`codon_table = {
    'ATG': 'M',  # key: value
    'TGG': 'W',
    'TTT': 'F',
    'TAA': '*'   # Stop codon
}

# Add new codons
codon_table['AAA'] = 'K'
codon_table['CCC'] = 'P'

# Change existing value (rarely needed for genetic code!)
codon_table['ATG'] = 'Start'

print(codon_table)`}
            staticOutput={`{'ATG': 'Start', 'TGG': 'W', 'TTT': 'F', 'TAA': '*', 'AAA': 'K', 'CCC': 'P'}`}
            hints={[
              "Use dict[key] = value to add new entries",
              "Same syntax overwrites existing values",
              "Dictionaries grow automatically when you add new keys"
            ]}
            height="220px"
          />
        </section>

        {/* Safe Operations */}
        <section>
          <h2 className="text-2xl font-semibold text-bio-green mb-4">
            🛡️ Safe Operations: get() and pop()
          </h2>
          <div className="mb-4 text-gray-300">
            <p>Handle missing keys safely and remove entries:</p>
          </div>
          <PythonCodeRunner
            initialCode={`codon_table = {
    'ATG': 'M',  # key: value
    'TGG': 'W',
    'TTT': 'F',
    'TAA': '*'   # Stop codon
}

# Safe lookup with get() - won't crash if key missing
print(codon_table.get('ATG'))      # Found
print(codon_table.get('XYZ'))      # Missing - returns None
print(codon_table.get('XYZ', '?')) # Missing - returns default

# Remove and return value with pop()
removed = codon_table.pop('TAA')
print(f"Removed: {removed}")
print(codon_table)`}
            staticOutput={`M
None
?
Removed: *
{'ATG': 'M', 'TGG': 'W', 'TTT': 'F'}`}
            hints={[
              "Use .get(key) instead of [key] to avoid errors",
              "Use .get(key, default) to provide a fallback value", 
              "Use .pop(key) to remove and return a value"
            ]}
            height="280px"
          />
        </section>
        
        {/* Colab Link */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_N3_dictionaries.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Dictionaries Notebook
          </a>
        </div>
      </div>
    </div>
  )
}