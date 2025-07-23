import React from 'react';

const Step3CodeSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-bio-blue to-bio-yellow">
        Step 3: The Code - Lists & For Loops
      </h1>
      
      <div className="max-w-5xl w-full space-y-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-bio-blue/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-blue">First: Store data in a Python list</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`# List of lists: [name, molecular_weight, mass_mg]
reagents = [
    ["MG132", 475.6, 89.5],
    ["Rapamycin", 914.2, 125.3],
    ["Cycloheximide", 281.4, 45.8],
    ["Staurosporine", 466.5, 78.2],
    ["Wortmannin", 428.4, 65.0],
    # ... add more reagents here
]`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-bio-yellow/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-yellow">Then: Use a for loop to process all reagents</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`# Our function from Step 2
def calculate_volume(molecular_weight, mass_mg, concentration_mM):
    volume_mL = mass_mg / (molecular_weight * concentration_mM)
    return volume_mL

# Process ALL reagents with a for loop
print("Stock solution preparation:")
print("-" * 30)

for reagent in reagents:
    name = reagent[0]
    mw = reagent[1] 
    mass = reagent[2]
    volume = calculate_volume(mw, mass, 10)  # 10mM concentration
    print(f"{name}: Add {volume:.2f} mL of DMSO")`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-bio-green/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-green">Output:</h3>
          <pre className="text-sm overflow-x-auto font-mono text-green-400">
{`Stock solution preparation:
------------------------------
MG132: Add 18.82 mL of DMSO
Rapamycin: Add 13.71 mL of DMSO
Cycloheximide: Add 16.28 mL of DMSO
Staurosporine: Add 16.77 mL of DMSO
Wortmannin: Add 15.17 mL of DMSO`}
          </pre>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg text-gray-300">
            <span className="text-bio-blue font-semibold">Key concepts:</span>{' '}
            <span className="text-bio-yellow font-mono">list[]</span>,{' '}
            <span className="text-bio-yellow font-mono">for</span>,{' '}
            <span className="text-bio-yellow font-mono">in</span>,{' '}
            <span className="text-bio-yellow font-mono">list indexing [0][1][2]</span>
          </p>
        </div>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/lists.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Lists Notebook
          </a>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/for_loops.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-bio-green text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            For Loops Notebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step3CodeSlide;