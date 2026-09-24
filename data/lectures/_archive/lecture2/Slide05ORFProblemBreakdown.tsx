'use client'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide05ORFProblemBreakdown() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-12 text-center">
        Breaking Down the <GradientText>ORF Problem</GradientText>
      </SlideTitle>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full space-y-8">
          {/* Problem Statement */}
          <div className="text-center mb-10">
            <p className="text-xl text-gray-300 mb-4">
              To find and translate an Open Reading Frame, we need to solve 3 simple steps:
            </p>
          </div>

          {/* 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-bio-blue/20 to-bio-blue/10 border border-bio-blue/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-bio-blue text-bio-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-bio-blue">Find First ATG</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Scan the DNA string and find the first ATG start codon
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm font-mono text-bio-blue">
                CGTAAC<span className="bg-bio-blue/30">ATG</span>CGTAAATAG
                <br />
                <span className="text-gray-400">     ↑ position 6</span>
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
                From ATG, collect codons until we hit a STOP codon
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm font-mono">
                <div className="text-bio-green">ATG-CGT-AAA-<span className="text-bio-yellow">TAG</span></div>
                <div className="text-gray-400 text-xs mt-1">ORF: ATGCGTAAATAG</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-bio-yellow/20 to-bio-yellow/10 border border-bio-yellow/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-bio-yellow text-bio-dark text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-bio-yellow">Translate to Protein</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Convert each codon to its amino acid using the genetic code
              </p>
              <div className="bg-bio-dark/50 rounded-lg p-3 text-sm font-mono">
                <div className="text-bio-yellow">M - R - K - *</div>
                <div className="text-gray-400 text-xs mt-1">Protein sequence</div>
              </div>
            </div>

          </div>

          {/* Flow Arrow */}
          <div className="text-center py-6">
            <div className="text-gray-400 text-lg">
              Simple and straightforward! 🧬 → 🔍 → 🧪
            </div>
          </div>

          {/* Implementation Strategy */}
          <div className="bg-gradient-to-r from-bio-dark to-bio-darker border border-gray-600 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">💡 Our Learning Path</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
              <div>
                <strong className="text-bio-blue">String Slicing & Conditionals:</strong> Find ATG in DNA sequence
              </div>
              <div>
                <strong className="text-bio-green">Loops & Logic:</strong> Extract ORF from start to stop codon
              </div>
              <div>
                <strong className="text-bio-yellow">Dictionaries:</strong> Use codon table to translate to protein
              </div>
              <div>
                <strong className="text-red-400">Debugging:</strong> Fix errors and test our ORF finder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}