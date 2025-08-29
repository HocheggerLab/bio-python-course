export default function ReviewDataTypesSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold text-bio-blue mb-8">
        Quick Review: Data Types & Strings
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
        {/* Left column - Basic Data Types */}
        <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-green mb-4">
            Basic Data Types
          </h3>
          <div className="space-y-3">
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <code className="text-bio-blue">int</code>
              <span className="text-gray-400 ml-3">→ </span>
              <span className="text-gray-200">42, -17, 1000</span>
              <p className="text-gray-400 text-sm mt-1">Whole numbers</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <code className="text-bio-blue">float</code>
              <span className="text-gray-400 ml-3">→ </span>
              <span className="text-gray-200">3.14, -0.5, 2.7e-8</span>
              <p className="text-gray-400 text-sm mt-1">Decimal numbers</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <code className="text-bio-blue">str</code>
              <span className="text-gray-400 ml-3">→ </span>
              <span className="text-gray-200">"ATCG", 'DNA'</span>
              <p className="text-gray-400 text-sm mt-1">Text sequences</p>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-3">
              <code className="text-bio-blue">bool</code>
              <span className="text-gray-400 ml-3">→ </span>
              <span className="text-gray-200">True, False</span>
              <p className="text-gray-400 text-sm mt-1">Logical values</p>
            </div>
          </div>
        </div>
        
        {/* Right column - String Operations */}
        <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-yellow mb-4">
            String Operations We Learned
          </h3>
          <div className="space-y-2">
            <div className="font-mono text-sm">
              <p className="text-gray-300">
                <span className="text-bio-green">dna</span> = <span className="text-orange-400">"ATCGATCG"</span>
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="text-bio-blue">len(dna)</code>
                <span className="text-gray-400">→ 8</span>
              </div>
              <div className="flex justify-between">
                <code className="text-bio-blue">dna[0]</code>
                <span className="text-gray-400">→ "A"</span>
              </div>
              <div className="flex justify-between">
                <code className="text-bio-blue">dna[0:3]</code>
                <span className="text-gray-400">→ "ATC"</span>
              </div>
              <div className="flex justify-between">
                <code className="text-bio-blue">dna + "TAA"</code>
                <span className="text-gray-400">→ "ATCGATCGTAA"</span>
              </div>
              <div className="flex justify-between">
                <code className="text-bio-blue">dna * 2</code>
                <span className="text-gray-400">→ "ATCGATCGATCGATCG"</span>
              </div>
              <div className="flex justify-between">
                <code className="text-bio-blue">"AT" in dna</code>
                <span className="text-gray-400">→ True</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-4 mt-6 max-w-4xl">
        <p className="text-center text-white">
          <span className="font-semibold">Remember:</span> In Python, strings are sequences of characters - 
          perfect for representing DNA, RNA, and protein sequences!
        </p>
      </div>
    </div>
  )
}