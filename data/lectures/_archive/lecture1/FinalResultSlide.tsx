import React from 'react';
import Link from 'next/link';
import { SlideTitle } from '@/components/slides';

const FinalResultSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          🎉 <span className="text-bio-green">The Complete Solution</span>
        </SlideTitle>
      </div>
      
      <div className="max-w-6xl w-full space-y-8">
        {/* Problem Summary */}
        <div className="bg-gray-900 rounded-lg p-6 border border-bio-blue/30">
          <h3 className="text-2xl font-semibold mb-4 text-bio-blue">What we solved:</h3>
          <p className="text-lg text-gray-300">
            Transform <span className="text-bio-yellow font-semibold">manual lab calculations</span> into an 
            <span className="text-bio-green font-semibold"> automated Python pipeline</span> that processes 
            multiple reagents from CSV files
          </p>
        </div>

        {/* The Journey */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-bio-blue/20 to-bio-blue/10 rounded-lg p-4 border border-bio-blue/30">
            <div className="text-3xl mb-2">🔢</div>
            <h4 className="font-bold text-bio-blue mb-2">Step 1</h4>
            <p className="text-sm text-gray-300">Basic calculation with variables</p>
          </div>
          
          <div className="bg-gradient-to-br from-bio-yellow/20 to-bio-yellow/10 rounded-lg p-4 border border-bio-yellow/30">
            <div className="text-3xl mb-2">⚙️</div>
            <h4 className="font-bold text-bio-yellow mb-2">Step 2</h4>
            <p className="text-sm text-gray-300">Reusable functions for clean code</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg p-4 border border-purple-500/30">
            <div className="text-3xl mb-2">🔄</div>
            <h4 className="font-bold text-purple-400 mb-2">Step 3</h4>
            <p className="text-sm text-gray-300">Lists & loops for batch processing</p>
          </div>
          
          <div className="bg-gradient-to-br from-bio-green/20 to-bio-green/10 rounded-lg p-4 border border-bio-green/30">
            <div className="text-3xl mb-2">📁</div>
            <h4 className="font-bold text-bio-green mb-2">Step 4</h4>
            <p className="text-sm text-gray-300">File I/O for real lab workflows</p>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 rounded-lg p-6 border border-bio-green/30">
          <h3 className="text-xl font-semibold mb-4 text-center">
            <span className="text-bio-green">From 100 manual calculations</span> → 
            <span className="text-bio-blue"> 10 lines of automated code</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-bio-yellow">⏰ Time Saved</div>
              <p className="text-sm text-gray-300">Hours → Seconds</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-bio-green">🎯 Accuracy</div>
              <p className="text-sm text-gray-300">No calculation errors</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-bio-blue">🔄 Reusable</div>
              <p className="text-sm text-gray-300">Works for any dataset</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6 border-l-4 border-l-bio-yellow">
          <h3 className="text-xl font-semibold mb-3 text-bio-yellow flex items-center">
            🚀 What's Next?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="mb-2">
                <strong className="text-bio-blue">Hands-on Practice:</strong>{' '}
                <Link href="/notebooks/lecture-1" className="text-bio-yellow hover:text-bio-green underline transition-colors">
                  Work through the Colab notebooks
                </Link>
              </p>
              <p><strong className="text-bio-blue">Lab Sessions:</strong> Apply these skills to your own data</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Lecture 2:</strong> DNA sequence analysis & pattern matching</p>
              <p><strong className="text-bio-green">Advanced Topics:</strong> Data visualization & statistical analysis</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bio-blue to-bio-green">
            Ready to automate your lab work with Python? 🧬
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalResultSlide;