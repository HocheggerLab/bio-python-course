'use client'

export default function ORFProblemBreakdownSlide() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <h1 className="text-4xl font-bold text-bio-blue mb-8 text-center">
        Breaking Down the ORF Problem
      </h1>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full space-y-8">
          {/* Problem Statement */}
          <div className="text-center mb-10">
            <p className="text-xl text-gray-300 mb-4">
              To find Open Reading Frames, we need to solve 4 connected problems:
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-bio-blue/20 to-bio-blue/10 border border-bio-blue/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-bio-blue text-bio-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-bio-blue">Find START Codons</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Loop through DNA string and find all ATG positions
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm font-mono text-bio-blue">
                ATGCGT<span className="bg-bio-blue/30">ATG</span>AAATAG
                <br />
                <span className="text-gray-400">↑pos 0   ↑pos 6</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-bio-green/20 to-bio-green/10 border border-bio-green/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-bio-green text-bio-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-bio-green">Extract ORF</h3>
              </div>
              <p className="text-gray-300 mb-3">
                From each ATG, get codons until first STOP codon
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm font-mono">
                <div className="text-bio-green">ATG-CGT-AAA-<span className="text-bio-yellow">TAG</span></div>
                <div className="text-gray-400 text-xs mt-1">DNA: ATGCGTAAATAG</div>
                <div className="text-gray-400 text-xs">Protein: M-R-K-*</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-bio-yellow/20 to-bio-yellow/10 border border-bio-yellow/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-bio-yellow text-bio-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-bio-yellow">Find Longest ORF</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Compare all ORFs and identify the longest one
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm">
                <div className="text-gray-300">ORF 1: 12 nucleotides</div>
                <div className="text-bio-yellow font-semibold">ORF 2: 45 nucleotides ← Longest!</div>
                <div className="text-gray-300">ORF 3: 9 nucleotides</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-purple-400">Scale to Many Sequences</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Read sequences from file and analyze multiple DNA strings
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm font-mono text-purple-400">
                sequence1.txt → 3 ORFs
                <br />
                sequence2.txt → 7 ORFs  
                <br />
                sequence3.txt → 2 ORFs
              </div>
            </div>

          </div>

          {/* Flow Arrow */}
          <div className="text-center py-6">
            <div className="text-gray-400 text-lg">
              Let's tackle each step one by one! 🧬 → 🔍 → 📊 → 📁
            </div>
          </div>

          {/* Implementation Strategy */}
          <div className="bg-gradient-to-r from-bio-dark to-bio-darker border border-gray-600 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">💡 Our Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong className="text-bio-blue">Step 1-2:</strong> Build basic ORF finding function
              </div>
              <div>
                <strong className="text-bio-green">Step 3:</strong> Add comparison logic for longest ORF
              </div>
              <div>
                <strong className="text-bio-yellow">Step 4a:</strong> Learn file reading with Python
              </div>
              <div>
                <strong className="text-purple-400">Step 4b:</strong> Process multiple sequences in batch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}