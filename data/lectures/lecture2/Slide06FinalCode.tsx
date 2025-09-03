'use client'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide06FinalCode() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-12 text-center">
        The <GradientText>Complete Code</GradientText> - What We'll Build
      </SlideTitle>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          {/* Introduction */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-300 mb-4">
              Let's see the complete solution first - then we'll build it step by step
            </p>
            <div className="text-bio-yellow font-semibold">
              Don't worry about understanding every line now! We'll learn each part together.
            </div>
          </div>

          {/* Code Display */}
          <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
            <div className="bg-black/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-bio-green mb-4"># The Genetic Code - Maps DNA codons to amino acids</div>
              <div className="text-white mb-2">
                <span className="text-bio-blue">CODON_TABLE</span> = {'{'}
              </div>
              <div className="text-gray-300 ml-4 mb-2">
                <span className="text-bio-yellow">'TTT'</span>: <span className="text-bio-yellow">'F'</span>, <span className="text-bio-yellow">'TTC'</span>: <span className="text-bio-yellow">'F'</span>, <span className="text-bio-yellow">'TTA'</span>: <span className="text-bio-yellow">'L'</span>, <span className="text-bio-yellow">'TTG'</span>: <span className="text-bio-yellow">'L'</span>,<br/>
                <span className="text-bio-yellow">'TCT'</span>: <span className="text-bio-yellow">'S'</span>, <span className="text-bio-yellow">'TCC'</span>: <span className="text-bio-yellow">'S'</span>, <span className="text-bio-yellow">'TCA'</span>: <span className="text-bio-yellow">'S'</span>, <span className="text-bio-yellow">'TCG'</span>: <span className="text-bio-yellow">'S'</span>,<br/>
                <span className="text-bio-yellow">'TAT'</span>: <span className="text-bio-yellow">'Y'</span>, <span className="text-bio-yellow">'TAC'</span>: <span className="text-bio-yellow">'Y'</span>, <span className="text-bio-yellow">'TAA'</span>: <span className="text-red-400">'*'</span>, <span className="text-bio-yellow">'TAG'</span>: <span className="text-red-400">'*'</span>,<br/>
                <span className="text-gray-500"># ... and 52 more codons</span>
              </div>
              <div className="text-white mb-6">{'}'}</div>

              <div className="text-bio-green mb-2"># Step 1: Find the START codon (ATG)</div>
              <div className="text-white mb-2">
                <span className="text-purple-400">def</span> <span className="text-bio-blue">find_atg</span>(dna_sequence):
              </div>
              <div className="text-gray-300 ml-4 mb-2">
                <span className="text-bio-green">"""Find the first ATG start codon in the sequence."""</span><br/>
                <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-bio-blue">range</span>(<span className="text-bio-blue">len</span>(dna_sequence) - 2):<br/>
                <span className="ml-4"><span className="text-purple-400">if</span> dna_sequence[i:i+3] == <span className="text-bio-yellow">'ATG'</span>:</span><br/>
                <span className="ml-8"><span className="text-purple-400">return</span> i</span>
              </div>

              <div className="text-bio-green mb-2 mt-6"># Step 2: Extract ORF from ATG to STOP codon</div>
              <div className="text-white mb-2">
                <span className="text-purple-400">def</span> <span className="text-bio-blue">find_orf</span>(dna_sequence, atg_index):
              </div>
              <div className="text-gray-300 ml-4 mb-2">
                <span className="text-bio-green">"""Find the ORF starting from ATG position until stop codon."""</span><br/>
                orf = <span className="text-bio-yellow">''</span><br/>
                <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-bio-blue">range</span>(atg_index, <span className="text-bio-blue">len</span>(dna_sequence) - 2, 3):<br/>
                <span className="ml-4">codon = dna_sequence[i:i+3]</span><br/>
                <span className="ml-4">orf += codon</span><br/>
                <span className="ml-4"><span className="text-purple-400">if</span> CODON_TABLE[codon] == <span className="text-red-400">'*'</span>:</span><br/>
                <span className="ml-8"><span className="text-purple-400">break</span></span><br/>
                <span className="text-purple-400">return</span> orf
              </div>

              <div className="text-bio-green mb-2 mt-6"># Step 3: Translate DNA to protein</div>
              <div className="text-white mb-2">
                <span className="text-purple-400">def</span> <span className="text-bio-blue">translate_orf</span>(orf):
              </div>
              <div className="text-gray-300 ml-4 mb-2">
                <span className="text-bio-green">"""Translate DNA ORF to protein sequence."""</span><br/>
                protein = <span className="text-bio-yellow">''</span><br/>
                <span className="text-purple-400">for</span> i <span className="text-purple-400">in</span> <span className="text-bio-blue">range</span>(0, <span className="text-bio-blue">len</span>(orf), 3):<br/>
                <span className="ml-4">codon = orf[i:i+3]</span><br/>
                <span className="ml-4">protein += CODON_TABLE[codon]</span><br/>
                <span className="text-purple-400">return</span> protein
              </div>

              <div className="text-bio-green mb-2 mt-6"># Step 4: Main function that puts it all together</div>
              <div className="text-white mb-2">
                <span className="text-purple-400">def</span> <span className="text-bio-blue">find_protein_sequence</span>(dna_sequence):
              </div>
              <div className="text-gray-300 ml-4">
                <span className="text-bio-green">"""Main function to find protein sequence from DNA."""</span><br/>
                atg_index = <span className="text-bio-blue">find_atg</span>(dna_sequence)<br/>
                orf = <span className="text-bio-blue">find_orf</span>(dna_sequence, atg_index)<br/>
                protein_sequence = <span className="text-bio-blue">translate_orf</span>(orf)<br/>
                <span className="text-purple-400">return</span> protein_sequence
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-bio-green/20 to-bio-green/10 border border-bio-green/30 rounded-xl p-4 text-center">
              <div className="text-bio-green font-bold text-lg mb-2">String Slicing</div>
              <div className="text-gray-300 text-sm">Extract codons from DNA</div>
            </div>
            
            <div className="bg-gradient-to-br from-bio-yellow/20 to-bio-yellow/10 border border-bio-yellow/30 rounded-xl p-4 text-center">
              <div className="text-bio-yellow font-bold text-lg mb-2">Conditionals</div>
              <div className="text-gray-300 text-sm">Make decisions with if/else</div>
            </div>
            
            <div className="bg-gradient-to-br from-bio-blue/20 to-bio-blue/10 border border-bio-blue/30 rounded-xl p-4 text-center">
              <div className="text-bio-blue font-bold text-lg mb-2">Dictionaries</div>
              <div className="text-gray-300 text-sm">Map codons to amino acids</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
              <div className="text-red-400 font-bold text-lg mb-2">Debugging</div>
              <div className="text-gray-300 text-sm">Fix errors and test code</div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-bio-dark to-bio-darker border border-gray-600 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">🎯 What's Next?</h3>
              <p className="text-gray-300">
                Now we'll learn each Python concept needed to build this solution, 
                starting with the basics and working up to the complete program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}