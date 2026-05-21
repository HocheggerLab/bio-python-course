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

const Step3IntroSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          Step 3: <span className="text-bio-blue">Creating Reusable Functions</span>
        </SlideTitle>
      </div>
      
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-bio-blue/30">
          <h2 className="text-2xl font-semibold mb-4 text-bio-yellow">The Problem with Steps 1 & 2</h2>
          <p className="text-lg mb-4">
            Our code works, but what if we need the <span className="text-red-400 font-bold">same calculation for different experiments</span>?
          </p>
          <p className="text-gray-300">
            Currently we'd have to copy and paste the entire code block! <br/>
            There must be a better way to reuse our calculations...
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-bio-green/30 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-bio-green">The Solution: Functions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📦</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-blue">Package calculations into functions</h3>
                <p className="text-gray-300">Write once, use anywhere</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔧</span>
              <div>
                <h3 className="text-xl font-semibold text-bio-yellow">Customize with parameters</h3>
                <p className="text-gray-300">Same function, different inputs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-xl p-6 border border-bio-blue/30">
          <p className="text-center text-xl mb-4">
            <span className="font-mono text-bio-yellow">def</span> = Define a function
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">The solution in action - try it!</p>
            <PythonCodeRunner
              initialCode={`# Our calculation from Step 2, but now as a reusable function!
# Our calculation from Step 2, but now as a reusable function!
def mw_caluclator(weighed_mass, end_concentration, mw):
    volume = 1000 * (weighed_mass / mw) / end_concentration
    return volume

# Now we can use it as a packaged code:

weighed_mass = 5.5 #mg
end_concentration = 10 #mM
mw_list = [356.7, 457.3, 111.11]

result0 = mw_caluclator(weighed_mass, end_concentration, mw_list[0])
result1 = mw_caluclator(weighed_mass, end_concentration, mw_list[1])
result2 = mw_caluclator(weighed_mass, end_concentration, mw_list[2])

print(f"result 0: {result0}")
print(f"result 1: {result1}")
print(f"result 2: {result2}")`}
              staticOutput={`result 0: 1.5419119708438465
result 1: 1.2027115678985347
result 2: 4.950049500495005`}
              hints={[
                "Functions let you reuse the same calculation",
                "Parameters make functions flexible",
                "Call the function with different values"
              ]}
              height="350px"
            />
          </div>
          
          <p className="text-center text-lg text-gray-300 mt-4">
            One function, lots of calculations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3IntroSlide;