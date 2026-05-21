'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { SlideTitle } from '@/components/slides';

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

const Step2IntroSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          Step 2: <span className="text-bio-blue">Analyzing Many Values at Once</span>
        </SlideTitle>
      </div>
      
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-bio-blue/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-yellow">The Problem with Step 1</h2>
          <p className="text-lg mb-4">
            We can only process <span className="text-red-400 font-bold">one value at a time</span>
          </p>
          <p className="text-gray-300">
            What if we have 10 samples? 100 samples? 1000 genes? <br/>
            Do we copy-paste our code for each one?
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-bio-green/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-green">The Solution: Lists & Loops</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📋</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-blue">Lists store multiple values</h3>
                <p className="text-gray-300">Keep all your data organized in one place</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔄</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-yellow">Loops process each value</h3>
                <p className="text-gray-300">Automatically repeat operations for every item</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-xl p-6 border border-bio-blue/30">
          <p className="text-center text-xl mb-4">
            <span className="font-mono text-bio-yellow">[ ]</span> = List of values&nbsp;&nbsp;&nbsp;
            <span className="font-mono text-bio-yellow">for</span> = Process each one
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">The solution in action - try it!</p>
            <PythonCodeRunner
              initialCode={`# List of concentrations to analyze

# List of weights to analyze
mol_weights = [100.0, 150.0, 200.0, 250.0, 300.0]
weighed_mass = 2.5 # mg
end_concentration = 10 # mM, we want a final concentration of 10 mM

# Process ALL of them with one loop!
for mw in mol_weights:
    # Calculate working solution
    volume = 1000 * (weighed_mass / mw) / end_concentration
    
    # Print results for this sample
    print(f"Dissolve {weighed_mass:.2f} mg in {volume:.1f} µL buffer")
    print()  # Empty line between samples`}
              staticOutput={`Dissolve 2.50 mg in 2.5 µL buffer

Dissolve 2.50 mg in 1.7 µL buffer

Dissolve 2.50 mg in 1.2 µL buffer

Dissolve 2.50 mg in 1.0 µL buffer

`}
              hints={[
                "Try adding more concentrations to the list",
                "Notice how the same code handles any number of samples",
                "The loop variable 'stock_conc' takes each value in turn"
              ]}
              height="320px"
            />
          </div>
          
          <p className="text-center text-lg text-gray-300 mt-4">
            One loop handles 5, 50, or 5000 samples!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step2IntroSlide;