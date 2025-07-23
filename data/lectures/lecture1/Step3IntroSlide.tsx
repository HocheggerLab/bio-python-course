import React from 'react';

const Step3IntroSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-bio-blue to-bio-yellow">
        Step 3: Processing Many Values at Once
      </h1>
      
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-bio-blue/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-yellow">The Problem</h2>
          <p className="text-lg mb-4">
            We have a function, but still need to call it <span className="text-red-400 font-bold">100 times</span> for 100 reagents
          </p>
          <pre className="text-sm bg-gray-900 p-4 rounded-lg">
            <code className="text-gray-300">
{`calculate_volume(475.6, 89.5, 10)    # MG132
calculate_volume(914.2, 125.3, 10)   # Rapamycin
calculate_volume(281.4, 45.8, 10)    # Cycloheximide
# ... 97 more times 😭`}
            </code>
          </pre>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-bio-green/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-green">The Solution: Two Key Concepts</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📋</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-blue">Python Lists</h3>
                <p className="text-gray-300">Store all your reagent data in one organized structure</p>
                <p className="text-sm font-mono text-gray-400 mt-1">reagents = ["MG132", "Rapamycin", ...]</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔄</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-yellow">For Loops</h3>
                <p className="text-gray-300">Automatically repeat operations for each item in the list</p>
                <p className="text-sm font-mono text-gray-400 mt-1">for reagent in reagents: ...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-gray-300">
            <span className="text-bio-green font-bold">100 calculations</span> with{' '}
            <span className="text-bio-yellow font-bold">~10 lines of code</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3IntroSlide;