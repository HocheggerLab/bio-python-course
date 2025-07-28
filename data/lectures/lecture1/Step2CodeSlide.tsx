import React from 'react';
import { SlideTitle } from '@/components/slides';

const Step2CodeSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          Step 2: <span className="text-bio-blue">The Code</span> - Creating a Function
        </SlideTitle>
      </div>
      
      <div className="max-w-5xl w-full space-y-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-bio-blue/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-blue">Before: Our Step 1 code</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`molecular_weight = 475.6  # g/mol for MG132
mass_mg = 89.5           # mg weighed
concentration_mM = 10    # desired concentration

volume_mL = 1000 * mass_mg / (molecular_weight * concentration_mM)
print(f"Add {volume_mL:.2f} mL of DMSO")`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-bio-yellow/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-yellow">After: Packaged as a function</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`def calculate_volume(mol_weight, weighed_mass, end_concentration):
    """Calculate solvent volume needed for stock solution"""
    volume_mL = 1000 * weighed_mass / mol_weight / end_concentration
    return volume_mL

# Now we can use it for any reagent!
volume = calculate_volume(475.6, 89.5, 10)
print(f"MG132: Add {volume:.2f} mL of DMSO")

# Different concentration? No problem!
volume_5mM = calculate_volume(475.6, 89.5, 5)
print(f"MG132 (5mM): Add {volume_5mM:.2f} mL of DMSO")`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-bio-green/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-green">Output:</h3>
          <pre className="text-sm overflow-x-auto font-mono text-green-400">
{`MG132: Add 18.82 mL of DMSO
MG132 (5mM): Add 37.64 mL of DMSO`}
          </pre>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg text-gray-300">
            <span className="text-bio-blue font-semibold">Key concepts:</span>{' '}
            <span className="text-bio-yellow font-mono">def</span> (define),{' '}
            def <span className="text-bio-yellow font-mono">(argument)</span> (input data),{' '}
            <span className="text-bio-yellow font-mono">return</span> (output data),{' '}
            <span className="text-bio-yellow font-mono">"""docstring"""</span> (documentation)
          </p>
        </div>

        <div className="mt-8">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/functions.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bio-blue to-bio-green text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Try it in Google Colab
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step2CodeSlide;