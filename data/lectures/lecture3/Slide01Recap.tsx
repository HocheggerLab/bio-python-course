'use client'

import { 
  SlideTitle, 
  GradientText 
} from '@/components/slides'

export default function Slide01Recap() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Recap: <GradientText>Our Python Journey</GradientText> So Far
      </SlideTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Lecture 1 Recap */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4">📚 Lecture 1: Python Basics</h3>
          <div className="space-y-3">
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Variables & Data Types</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>int</code>: whole numbers (42, -10)</li>
                <li>• <code>float</code>: decimals (3.14, 2.718)</li>
                <li>• <code>str</code>: text ("ATGCGTA")</li>
                <li>• <code>bool</code>: True/False</li>
              </ul>
            </div>
            
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Core Operations</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Arithmetic: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
                <li>• Comparisons: <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code></li>
                <li>• String operations: <code>+</code>, <code>*</code>, <code>len()</code></li>
              </ul>
            </div>
            
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Biological Application</h4>
              <p className="text-gray-300 text-sm">
                Calculated GC content, buffer concentrations, and basic sequence analysis
              </p>
            </div>
          </div>
        </div>

        {/* Lecture 2 Recap */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4">🧬 Lecture 2: DNA Analysis</h3>
          <div className="space-y-3">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">String Manipulation</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Slicing: <code>dna[0:3]</code></li>
                <li>• Finding: <code>dna.find("ATG")</code></li>
                <li>• Iteration: <code>for base in dna</code></li>
                <li>• Range: <code>range(0, len(dna), 3)</code></li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Functions & Conditionals</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>def function_name():</code></li>
                <li>• <code>if</code>/<code>elif</code>/<code>else</code></li>
                <li>• <code>return</code> values</li>
                <li>• Defensive programming</li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Dictionaries</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Codon tables: <code>{`{'ATG': 'M'}`}</code></li>
                <li>• Key-value pairs</li>
                <li>• <code>dict.get(key)</code></li>
                <li>• <code>key in dict</code></li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">ORF Finder Project</h4>
              <p className="text-gray-300 text-sm">
                Built a complete Open Reading Frame finder with start codon detection and translation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Programming Concepts */}
      <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-green mb-3">🎯 Key Programming Concepts Mastered</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Iteration</h4>
            <p className="text-gray-300 text-sm">
              Process sequences systematically with <code>for</code> loops
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Decision Making</h4>
            <p className="text-gray-300 text-sm">
              Handle different cases with <code>if</code> statements
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📦</div>
            <h4 className="text-bio-yellow font-semibold mb-1">Abstraction</h4>
            <p className="text-gray-300 text-sm">
              Package code into reusable functions
            </p>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6 mt-6">
        <h3 className="text-xl font-bold text-white mb-3">🚀 Today: Data Analysis with Pandas</h3>
        <p className="text-white/90">
          We'll apply everything we've learned to analyze real biological datasets, 
          perform linear regression on cancer data, and discover patterns in experimental results!
        </p>
      </div>
    </div>
  )
}