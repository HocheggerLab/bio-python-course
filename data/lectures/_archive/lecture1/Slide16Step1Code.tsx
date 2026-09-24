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

export function Slide16Step1Code() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Step 1: <span className="text-bio-blue">Calculating the Dilution Volume</span>
        </SlideTitle>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Code explanation */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-bio-blue mb-3">
            Single Reagent Calculation
          </h3>
          <p className="text-gray-300">
            Let's solve our problem for <span className="text-bio-yellow font-semibold">one reagent</span> first. 
            We'll calculate how much solvent to add to achieve the desired concentration.
          </p>
        </div>

        {/* Interactive Python Code */}
        <PythonCodeRunner
          initialCode={`# Step 1: Calculate solvent volume for one reagent

# Define our variables
mol_weight = 342.3      # molecular weight in g/mol
weighed_mass = 5.2      # mass in mg
end_concentration = 10 # desired concentration in mM

# Calculate the volume needed (in mL)
volume = 1000 * (weighed_mass / mol_weight) / end_concentration

# Print the result with 2 decimal places
print(f"Volume needed: {volume:.2f} mL")`}
          staticOutput={`Volume needed: 1.519 mL`}
          hints={[
            "Try changing the weighed_mass to see how it affects the volume",
            "What happens if you change the end_concentration to 0.05 mM?",
            "The formula: volume = 1000 * (mass/mol_weight) / concentration"
          ]}
          height="350px"
        />

        {/* Experiment Section */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            🧪 Try Different Values!
          </h3>
          <div className="text-gray-300 space-y-2">
            <p><strong className="text-bio-green">Challenge 1:</strong> What volume do you need if you weigh 8.5 mg?</p>
            <p><strong className="text-bio-green">Challenge 2:</strong> How does doubling the concentration affect the volume?</p>
            <p><strong className="text-bio-green">Challenge 3:</strong> Try calculating for caffeine (mol_weight = 194.19)!</p>
          </div>
        </div>
{/* Learning outcomes */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-5">
          <h3 className="text-base font-bold text-bio-green mb-3 flex items-center">
            <span className="mr-2">🎯</span>
            Key Novel Concepts
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Use Google Colab notebooks for Python programming
            </li>
             <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Run and modify code cells interactively
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Define variables and perform calculations
            </li>
            <li className="flex items-start">
              <span className="text-bio-blue mr-2">▸</span>
              Format output using f-strings
            </li>
           
          </ul>
        </div>
        {/* Key concepts */}
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/collab_notebooks.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bio-dark/70 hover:bg-purple-500/20 rounded-lg p-4 border-l-4 border-purple-500 block transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-purple-400 mb-2 text-sm flex items-center">
              Google Colab
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </h4>
            <p className="text-xs text-gray-300">
              Run Python code in your browser - no installation needed!
            </p>
          </a>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N2_variables_and_comments.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bio-dark/70 hover:bg-bio-yellow/20 rounded-lg p-4 border-l-4 border-bio-yellow block transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-bio-yellow mb-2 text-sm flex items-center">
              Variables
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </h4>
            <p className="text-xs text-gray-300">
              Store values with meaningful names for clarity and reusability
            </p>
          </a>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N3_datatypes.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bio-dark/70 hover:bg-bio-blue/20 rounded-lg p-4 border-l-4 border-bio-blue block transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-bio-blue mb-2 text-sm flex items-center">
              Datatypes
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </h4>
            <p className="text-xs text-gray-300">
              Numbers, text, and decimals for different kinds of data
            </p>
          </a>
          <a 
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N4_f_strings.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bio-dark/70 hover:bg-bio-green/20 rounded-lg p-4 border-l-4 border-bio-green block transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-bio-green mb-2 text-sm flex items-center">
              f-strings
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </h4>
            <p className="text-xs text-gray-300">
              Format output with <code className="text-bio-yellow">:.2f</code> for 2 decimal places
            </p>
          </a>
        </div>

        
      </div>
    </>
  )
}