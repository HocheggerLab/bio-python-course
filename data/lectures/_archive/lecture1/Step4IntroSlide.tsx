import React from 'react';
import { SlideTitle } from '@/components/slides';

const Step4IntroSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          Step 4: <span className="text-bio-blue">Working with Real Data Files</span>
        </SlideTitle>
      </div>
      
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-bio-blue/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-yellow">The Problem</h2>
          <div className="space-y-4 text-lg">
            <p>
              <span className="text-red-400 font-bold">Manual data entry</span> for 100 reagents? No thanks!
            </p>
            <p>
              <span className="text-red-400 font-bold">Copy-pasting results</span> back to Excel? Error-prone!
            </p>
            <p className="text-gray-300">
              Your lab already has this data in <span className="text-bio-green font-mono">CSV/Excel files</span>
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-bio-green/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-green">The Solution: File I/O</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📂</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-blue">Read from CSV files</h3>
                <p className="text-gray-300">Load your existing lab data directly</p>
                <p className="text-sm font-mono text-gray-400 mt-1">csv.reader(file)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">💾</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-yellow">Write results back</h3>
                <p className="text-gray-300">Save calculations for lab notebooks & reports</p>
                <p className="text-sm font-mono text-gray-400 mt-1">csv.writer(file)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-xl p-6 border border-bio-blue/30 mt-8">
          <p className="text-center text-xl">
            <span className="text-bio-yellow font-bold">Complete automation:</span> CSV → Python → Results CSV
          </p>
          <p className="text-center text-lg text-gray-300 mt-2">
            Finally, a truly automated workflow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step4IntroSlide;