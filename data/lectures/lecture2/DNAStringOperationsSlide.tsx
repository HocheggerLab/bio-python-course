export default function DNAStringOperationsSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold text-bio-blue mb-8">
        DNA-Specific String Operations
      </h1>
      
      <div className="max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Left column - Indexing & Slicing for Codons */}
          <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-bio-green mb-4">
              Indexing & Slicing for Codon Extraction
            </h3>
            <div className="font-mono text-sm space-y-3">
              <div className="bg-bio-dark/50 rounded-lg p-3">
                <p className="text-gray-300 mb-2">
                  <span className="text-bio-green">dna</span> = <span className="text-orange-400">"ATGCGTAAATAG"</span>
                </p>
                <div className="text-xs text-gray-400 mb-2">Extract codons using [i:i+3]:</div>
                <div className="space-y-1">
                  <p><code className="text-bio-blue">dna[0:3]</code> <span className="text-gray-400">→ "ATG"</span> <span className="text-bio-green text-xs">(start!)</span></p>
                  <p><code className="text-bio-blue">dna[3:6]</code> <span className="text-gray-400">→ "CGT"</span></p>
                  <p><code className="text-bio-blue">dna[6:9]</code> <span className="text-gray-400">→ "AAA"</span></p>
                  <p><code className="text-bio-blue">dna[9:12]</code> <span className="text-gray-400">→ "TAG"</span> <span className="text-red-400 text-xs">(stop!)</span></p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Find & Count Methods */}
          <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-bio-yellow mb-4">
              Finding Motifs & Counting
            </h3>
            <div className="font-mono text-sm space-y-3">
              <div className="bg-bio-dark/50 rounded-lg p-3">
                <p className="text-gray-300 mb-2">
                  <span className="text-bio-green">sequence</span> = <span className="text-orange-400">"ATGCGTAAATAG"</span>
                </p>
                <div className="space-y-1">
                  <p><code className="text-bio-blue">sequence.find("ATG")</code> <span className="text-gray-400">→ 0</span></p>
                  <p><code className="text-bio-blue">sequence.find("TAG")</code> <span className="text-gray-400">→ 9</span></p>
                  <p><code className="text-bio-blue">sequence.find("TTT")</code> <span className="text-gray-400">→ -1</span> <span className="text-gray-500 text-xs">(not found)</span></p>
                  <p><code className="text-bio-blue">sequence.count("A")</code> <span className="text-gray-400">→ 4</span></p>
                  <p><code className="text-bio-blue">sequence.count("AT")</code> <span className="text-gray-400">→ 2</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section - DNA to RNA conversion */}
        <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-green mb-4">
            DNA → RNA Conversion with .replace()
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="font-mono text-sm">
              <div className="bg-bio-dark/50 rounded-lg p-3">
                <p className="text-gray-300 mb-2">
                  <span className="text-bio-green">dna_template</span> = <span className="text-orange-400">"ATGCGTAAATAG"</span>
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-bio-green">rna</span> = <span className="text-bio-green">dna_template</span><span className="text-bio-blue">.replace("T", "U")</span>
                </p>
                <p className="text-gray-400">
                  Result: <span className="text-orange-400">"AUGCGUAAAUAG"</span>
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-2"><strong className="text-bio-yellow">Key Insight:</strong></p>
              <p>Converting DNA template strand to RNA is as simple as replacing all T's with U's!</p>
              <p className="mt-2 text-gray-400">This works because RNA polymerase reads the template strand 3' → 5'</p>
            </div>
          </div>
        </div>
        
        {/* Practice hint */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-4 mt-6">
          <p className="text-center text-white">
            <span className="font-semibold">Practice:</span> Try extracting codons from a sequence using slicing: 
            <code className="mx-2 text-bio-blue">[i:i+3]</code> where i = 0, 3, 6, 9...
          </p>
        </div>
      </div>
    </div>
  )
}