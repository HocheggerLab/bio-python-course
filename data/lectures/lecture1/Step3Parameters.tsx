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

export function Step3Parameters() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 3: <span className="text-bio-blue">Function Parameters & Arguments</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            Making Functions Flexible
          </h3>
          <p className="text-gray-300 mb-4">
            Parameters make functions adaptable - like adjusting a protocol for different reagents or conditions. 
            You can set default values and use keywords for clarity.
          </p>
          
          <div className="bg-bio-dark rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-400 mb-2">Parameter types:</p>
            <pre className="text-sm text-gray-300">
              <code>{`def function_name(required_param, optional_param=default_value):
    # Function body
    return result

# Call with positional arguments
function_name(value1, value2)

# Call with keyword arguments  
function_name(required_param=value1, optional_param=value2)`}</code>
            </pre>
          </div>
        </div>

        {/* 1. Default Parameters */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-green mb-4">
            1️⃣ Default Parameters
          </h3>
          <p className="text-gray-300 mb-4">
            Set common values as defaults - parameters with = signs are optional!
          </p>
          <PythonCodeRunner
            initialCode={`def calculate_molarity(moles, volume=1.0, units="M"):
    """Calculate molarity with optional volume and units"""
    molarity = moles / volume
    print(f"Concentration: {molarity} {units}")

# Use with just moles (default volume=1.0, units="M")
calculate_molarity(0.5)

# Override the volume
calculate_molarity(0.2, volume=0.5)

# Override both optional parameters
calculate_molarity(0.1, volume=2.0, units="mM")
`}
            staticOutput={`Concentration: 0.5 M
Concentration: 0.4 M
Concentration: 0.05 mM`}
            hints={[
              "Parameters with '=' have default values",
              "You can skip optional parameters",
              "Override defaults by providing values"
            ]}
            height="250px"
          />
        </div>

        {/* 2. Keyword Arguments */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-yellow mb-4">
            2️⃣ Keyword Arguments
          </h3>
          <p className="text-gray-300 mb-4">
            Use parameter names to make function calls clearer - no need to remember order!
          </p>
          <PythonCodeRunner
            initialCode={`def dilute_sample(stock_conc, target_conc=1.0, final_vol=100):
    """Calculate dilution volumes"""
    stock_vol = (target_conc * final_vol) / stock_conc
    buffer_vol = final_vol - stock_vol
    return stock_vol, buffer_vol

# Without keyword arguments - hard to remember what's what!
s1, b1 = dilute_sample(10, 2, 50)
print(f"Method 1: {s1:.1f} µL stock + {b1:.1f} µL buffer")

# With keyword arguments - much clearer!
s2, b2 = dilute_sample(stock_conc=10, target_conc=2, final_vol=50)
print(f"Method 2: {s2:.1f} µL stock + {b2:.1f} µL buffer")

# Skip parameters using defaults
s3, b3 = dilute_sample(stock_conc=5)  # Uses defaults
print(f"Method 3: {s3:.1f} µL stock + {b3:.1f} µL buffer")
`}
            staticOutput={`Method 1: 10.0 µL stock + 40.0 µL buffer
Method 2: 10.0 µL stock + 40.0 µL buffer
Method 3: 20.0 µL stock + 80.0 µL buffer`}
            hints={[
              "Use parameter_name=value for clarity",
              "Keyword arguments can be in any order",
              "Mix positional and keyword (positional first)"
            ]}
            height="280px"
          />
        </div>

        {/* 3. Multiple Return Values */}
        <div className="bg-bio-dark/30 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-4">
            3️⃣ Functions Returning Multiple Values
          </h3>
          <p className="text-gray-300 mb-4">
            Functions can return more than one value - separate them with commas!
          </p>
          <PythonCodeRunner
            initialCode={`def calculate_stock_and_buffer(stock_conc, target_conc, final_vol):
    """Calculate both volumes needed for dilution"""
    stock_vol = (target_conc * final_vol) / stock_conc  
    buffer_vol = final_vol - stock_vol
    # Return both values separated by comma
    return stock_vol, buffer_vol

# Get both return values at once
stock_needed, buffer_needed = calculate_stock_and_buffer(10, 2, 100)

print(f"To make 100 µL of 2 mg/mL solution:")
print(f"Add {stock_needed:.1f} µL stock")
print(f"Add {buffer_needed:.1f} µL buffer")

# You can also get them as a single tuple
volumes = calculate_stock_and_buffer(5, 1, 200) 
print(f"\\nAll volumes: {volumes}")
`}
            staticOutput={`To make 100 µL of 2 mg/mL solution:
Add 20.0 µL stock
Add 80.0 µL buffer

All volumes: (40.0, 160.0)`}
            hints={[
              "Return multiple values with commas",
              "Unpack with: value1, value2 = function()",
              "Or get as tuple: results = function()"
            ]}
            height="280px"
          />
        </div>

        {/* Practice Exercise */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            🎯 Practice: Default Parameters
          </h3>
          <p className="text-gray-300 mb-4">
            Write a function with default values for dilutions.
          </p>
          
          <div className="bg-bio-dark/50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-bio-yellow mb-2">Your Task:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Function: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">make_solution(stock_conc, target_conc=1.0)</code></li>
              <li>• Calculate dilution factor: stock_conc ÷ target_conc</li>
              <li>• Test with 10 mg/mL stock (use default target)</li>
            </ul>
          </div>

          <PythonCodeRunner
            initialCode={`# YOUR CODE HERE: Define the function
# def make_solution(stock_conc, target_conc=1.0):
#     dilution_factor = # Your calculation here
#     return dilution_factor

# Test your function
stock = 10  # mg/mL

# Use default target_conc=1.0
# factor = make_solution(stock)
# print(f"Dilute 1:{factor}")
`}
            staticOutput={``}
            expectedOutput={`Dilute 1:10.0`}
            hints={[
              "def make_solution(stock_conc, target_conc=1.0):",
              "dilution_factor = stock_conc / target_conc",
              "return dilution_factor"
            ]}
            height="220px"
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
              Default parameters: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">param=value</code>
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Keyword arguments for clarity
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Multiple return values with commas
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Unpack: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">a, b = function()</code>
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Positional args come before keyword
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Functions become more flexible
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
            Ready to practice function parameters? Open this interactive notebook to work through more examples and exercises.
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