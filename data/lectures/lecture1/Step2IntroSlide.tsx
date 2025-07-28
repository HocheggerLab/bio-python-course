import React from 'react';
import { SlideTitle } from '@/components/slides';

const Step2IntroSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          Step 2: <span className="text-bio-blue">Creating Reusable Functions</span>
        </SlideTitle>
      </div>
      
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-bio-blue/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-yellow">The Problem with Step 1</h2>
          <p className="text-lg mb-4">
            Our code works, but it's <span className="text-red-400 font-bold">not reusable</span>
          </p>
          <p className="text-gray-300">
            What if we need to calculate for different concentrations? <br/>
            Or use this calculation in another project?
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-bio-green/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-green">The Solution: Functions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📦</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-blue">Package your code</h3>
                <p className="text-gray-300">Turn calculations into reusable building blocks</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔧</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-yellow">Use anywhere</h3>
                <p className="text-gray-300">Call the same function with different inputs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-xl p-6 border border-bio-blue/30">
          <p className="text-center text-xl">
            <span className="font-mono text-bio-yellow">def</span> = Define a function
          </p>
          <p className="text-center text-lg text-gray-300 mt-2">
            The foundation of modular programming
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step2IntroSlide;