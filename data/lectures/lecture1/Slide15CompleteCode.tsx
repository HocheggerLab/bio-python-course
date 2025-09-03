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

export function Slide15CompleteCode() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          The Complete Solution: <span className="text-bio-blue">Lists, Loops & Functions</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            Everything We'll Learn Today
          </h3>
          <p className="text-gray-300 mb-4">
            Here's the complete solution to our lab calculation problem. By the end of today's lecture, 
            you'll understand every line of this code and be able to write similar solutions yourself!
          </p>
          
          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-2xl">📋</span>
                <p className="text-sm text-bio-green font-semibold mt-1">Lists</p>
                <p className="text-xs text-gray-400">Store multiple values</p>
              </div>
              <div>
                <span className="text-2xl">🔄</span>
                <p className="text-sm text-bio-yellow font-semibold mt-1">For Loops</p>
                <p className="text-xs text-gray-400">Process each value</p>
              </div>
              <div>
                <span className="text-2xl">📦</span>
                <p className="text-sm text-bio-blue font-semibold mt-1">Functions</p>
                <p className="text-xs text-gray-400">Reusable calculations</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Complete Code */}
        <div className="bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🚀 The Complete Solution - Try It!
          </h3>
          <p className="text-gray-300 mb-4">
            Calculate buffer volumes for multiple reagents with different molecular weights.
          </p>
          
          <PythonCodeRunner
            initialCode={`# List of molecular weights for different reagents
mol_weights = [342.3, 156.8, 456.58]  # g/mol
weighed_mass = 5  # mass in mg
end_concentration = 10  # desired concentration in mM

# Define a reusable function for the calculation
def mw_calculator(mass, concentration, mw):
    """Calculate volume needed for desired concentration"""
    return 1000 * (mass / concentration) / mw

# Process all reagents using a for loop with enumerate
for index, mw in enumerate(mol_weights):
    volume = mw_calculator(weighed_mass, end_concentration, mw)
    print(f"Reagent {index + 1}: MW={mw} g/mol → Volume={volume:.2f} mL")

print("\\n--- Summary ---")
print(f"Prepared {len(mol_weights)} solutions")
print(f"Each at {end_concentration} mM concentration")
print(f"From {weighed_mass} mg of powder")`}
            staticOutput={`Reagent 1: MW=342.3 g/mol → Volume=1.46 mL
Reagent 2: MW=156.8 g/mol → Volume=3.19 mL
Reagent 3: MW=456.58 g/mol → Volume=1.10 mL

--- Summary ---
Prepared 3 solutions
Each at 10 mM concentration
From 5 mg of powder`}
            hints={[
              "Try adding more molecular weights to the list",
              "Change the desired concentration to see different volumes",
              "The function makes it easy to reuse the calculation"
            ]}
            height="420px"
          />
        </div>

        {/* What Each Part Does */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            🔍 Breaking It Down
          </h3>
          
          <div className="space-y-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-sm font-bold text-bio-blue mb-2">1. The Data (Lists)</h4>
              <pre className="text-xs text-gray-300">
                <code>{`mol_weights = [342.3, 156.8, 456.58]  # Store multiple values`}</code>
              </pre>
              <p className="text-xs text-gray-400 mt-2">→ We'll learn this in Step 2</p>
            </div>
            
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-sm font-bold text-bio-yellow mb-2">2. The Function (Reusable Code)</h4>
              <pre className="text-xs text-gray-300">
                <code>{`def mw_calculator(mass, concentration, mw):
    return 1000 * (mass / concentration) / mw`}</code>
              </pre>
              <p className="text-xs text-gray-400 mt-2">→ We'll learn this in Step 3</p>
            </div>
            
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h4 className="text-sm font-bold text-purple-400 mb-2">3. The Loop (Process Everything)</h4>
              <pre className="text-xs text-gray-300">
                <code>{`for index, mw in enumerate(mol_weights):
    volume = mw_calculator(...)`}</code>
              </pre>
              <p className="text-xs text-gray-400 mt-2">→ We'll learn this in Step 2</p>
            </div>
          </div>
        </div>

        {/* Try It Yourself */}
        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-4">
            🎯 Try It Yourself!
          </h3>
          <p className="text-gray-300 mb-4">
            Modify the code above to experiment:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-bio-green mr-2">▸</span>
              Add more molecular weights to the list: <code>[342.3, 156.8, 456.58, 234.5, 678.9]</code>
            </li>
            <li className="flex items-start">
              <span className="text-bio-green mr-2">▸</span>
              Change the concentration to 5 mM and see how volumes change
            </li>
            <li className="flex items-start">
              <span className="text-bio-green mr-2">▸</span>
              Try different masses: 2 mg, 10 mg, etc.
            </li>
            <li className="flex items-start">
              <span className="text-bio-green mr-2">▸</span>
              Add reagent names: <code>reagent_names = ["MG132", "Cycloheximide", "Rapamycin"]</code>
            </li>
          </ul>
        </div>

        {/* What's Next */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-5">
          <h3 className="text-base font-bold text-bio-green mb-3 flex items-center">
            <span className="mr-2">➡️</span>
            Ready to Learn How This Works?
          </h3>
          <p className="text-gray-300 text-sm">
            Don't worry if this looks complex right now! We'll break it down step by step:
          </p>
          <ol className="mt-3 space-y-1 text-sm text-gray-300">
            <li><span className="text-bio-blue font-semibold">Step 1:</span> Variables, data types, and basic calculations</li>
            <li><span className="text-bio-yellow font-semibold">Step 2:</span> Lists and for loops to handle multiple values</li>
            <li><span className="text-bio-green font-semibold">Step 3:</span> Functions to make code reusable</li>
            <li><span className="text-purple-400 font-semibold">Step 4:</span> Reading data from files (bonus!)</li>
          </ol>
        </div>
      </div>
    </>
  )
}