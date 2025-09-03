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

export function Slide25Functions() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 3: <span className="text-bio-blue">Functions - Packaging Your Code</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            What are Functions?
          </h3>
          <p className="text-gray-300 mb-4">
            Functions are reusable blocks of code that perform specific tasks. Think of them like lab protocols - 
            write the procedure once, then follow it whenever you need that result.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">Basic function syntax:</p>
            <pre className="text-sm text-gray-300">
              <code>{`def function_name(parameters):
    """Optional description"""
    # Your code here
    return result

# Call the function
result = function_name(arguments)`}</code>
            </pre>
          </div>
        </div>

        {/* 1. Simple Functions */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            1️⃣ Simple Functions
          </h3>
          <p className="text-gray-300 mb-4">
            The most basic functions just take variables (numbers, strings) and print the result. Nothing is returned!
          </p>
          <PythonCodeRunner
            initialCode={`# Wrap our mole calculator in a function
def calculate_molarity(moles, volume_liters):
    """Calculate molarity from moles and volume"""
    molarity = moles / volume_liters
    print(f"The molarity is {molarity}")

# Use the function
moles_nacl = 0.1  # mol
volume = 0.5      # L

calculate_molarity(moles_nacl, volume)
`}
            staticOutput={`The molarity is 0.2`}
            hints={[
              "Functions start with 'def' followed by the name",
              "Parameters go in parentheses ()",
              "Use 'return' instead of print to send back a result"
            ]}
            height="250px"
          />
        </div>

        {/* 2. Functions with Multiple Operations */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            2️⃣ Functions that return a value
          </h3>
          <p className="text-gray-300 mb-4">
            In most cases functions return the final result. This is then assigned to a new variable
          </p>
          <PythonCodeRunner
            initialCode={`# Functions that return the result

def calculate_molarity(moles, volume_liters):
    """Calculate molarity from moles and volume - returns result"""
    molarity = moles / volume_liters
    rounded_molarity = round(molarity, 2)
    return rounded_molarity

moles_nacl = 0.1  # mol
volume = 0.5      # L

nacl_molarity = calculate_molarity(moles_nacl, volume)
print(f"The molarity is {nacl_molarity}")
`}
            staticOutput={`The molarity is 0.2`}
            hints={[
              "Functions can have multiple steps",
              "Use intermediate variables for clarity",
              "If there is no return statment, None is returned by default"
            ]}
            height="380px"
          />
        </div>

        {/* 3. Functions That Don't Return Values */}
        <div className="bg-bio-dark/30 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-4">
            3️⃣ Nested Functions and multiple return statements
          </h3>
          <p className="text-gray-300 mb-4">
            Functions can be called with functions and return multiple values
          </p>
          <PythonCodeRunner
            initialCode={`def calculate_number_of_moles(weighed_mass, mw):
    """Calculate the number of moles"""
    return weighed_mass / mw

def calculate_volume(weighed_mass, mw, end_concentration):
    """Calculate the volumnes needed for final solution"""
    number_of_moles = calculate_number_of_moles(weighed_mass, mw)
    volume = 1000 * number_of_moles / end_concentration
    return number_of_moles, volume


weighed_mass = 5.5 #mg
end_concentration = 10 #mM
mw = 356.7

moles, final_vol = calculate_volume(weighed_mass, mw, end_concentration)

print(f"{moles:.2f} moles need to be dissovled in {final_vol:.2f}ml")`}
            staticOutput={`0.02 moles need to be dissovled in 1.54ml`}
            hints={[
              "functions can be called within functions",
              "several variables produced by the function can be returned",
              "The order here matters! moles, then volume"
            ]}
            height="420px"
          />
        </div>

        {/* Practice Exercise */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🎯 Practice: Create a Concentration Calculator
          </h3>
          <p className="text-gray-300 mb-4">
            Write a function that calculates final concentration after dilution.
          </p>
          
          <div className="bg-bio-dark/50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-bio-yellow mb-2">Your Task:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Function name: <code>calculate_final_concentration</code></li>
              <li>• Parameters: initial_conc, volume_added, total_volume</li>
              <li>• Return: final concentration</li>
              <li>• Formula: (initial_conc × volume_added) ÷ total_volume</li>
            </ul>
            <p className="text-gray-300 text-sm mt-2">Test it with: 10 mg/mL, 50 µL added, 200 µL total</p>
          </div>

          <PythonCodeRunner
            initialCode={`# YOUR CODE HERE: Define the function
# def calculate_final_concentration(initial_conc, volume_added, total_volume):
#     # Calculate final concentration
#     # Return the result

# Test your function
initial_conc = 10  # mg/mL
volume_added = 50  # µL  
total_volume = 200  # µL

# result = calculate_final_concentration(initial_conc, volume_added, total_volume)
# print(f"Final concentration: {result} mg/mL")
`}
            staticOutput={``}
            expectedOutput={`Final concentration: 2.5 mg/mL`}
            hints={[
              "def calculate_final_concentration(initial_conc, volume_added, total_volume):",
              "final_conc = (initial_conc * volume_added) / total_volume",
              "return final_conc"
            ]}
            height="280px"
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
              Functions start with <code className="bg-bio-dark/50 px-1 py-0.5 rounded">def</code>
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Parameters go in parentheses
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Use <code className="bg-bio-dark/50 px-1 py-0.5 rounded">return</code> to send back results
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Functions make code reusable
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Some functions print instead of return
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Write once, use many times
            </li>
          </ul>
        </div>

        {/* Google Colab Link */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-4 flex items-center">
            <span className="mr-3">📓</span>
            Practice in Google Colab
          </h3>
          <p className="text-gray-300 mb-4">
            Ready to practice functions? Open this interactive notebook to work through more examples and exercises.
          </p>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/functions.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-semibold rounded-lg hover:from-bio-blue/80 hover:to-purple-500/80 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🚀</span>
            Open Functions Notebook
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </>
  )
}