import Image from 'next/image'

export default function ORFExplainerSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold text-bio-blue mb-6">
        What are Open Reading Frames (ORFs)?
      </h1>
      
      <div className="max-w-6xl">
        {/* Main image */}
        <div className="bg-white rounded-xl p-4 mb-6">
          <div className="relative w-full h-80">
            <Image
              src="/L2_reading_frame.jpg"
              alt="Three reading frames showing ORF concept"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Explanation */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-bio-green mb-3">
              Key Concepts
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-bio-blue mr-2">•</span>
                <span>DNA/RNA can be read in <strong>3 different frames</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-bio-blue mr-2">•</span>
                <span>Each frame groups nucleotides into different codons</span>
              </li>
              <li className="flex items-start">
                <span className="text-bio-green mr-2">•</span>
                <span>An <strong>Open</strong> frame has no early stop codons</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span>A <strong>Blocked</strong> frame hits a stop codon quickly</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-bio-yellow mb-3">
              ORF Requirements
            </h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-semibold text-bio-green mb-1">Start:</p>
                <p className="ml-4">ATG (codes for Methionine)</p>
              </div>
              <div>
                <p className="font-semibold text-red-400 mb-1">Stop:</p>
                <p className="ml-4">TAA, TAG, or TGA</p>
              </div>
              <div>
                <p className="font-semibold text-bio-blue mb-1">Valid ORF:</p>
                <p className="ml-4">ATG → ... → Stop (in same frame!)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-bio-blue/10 to-bio-green/10 border border-bio-blue/20 rounded-xl p-4 mt-4">
          <p className="text-center text-gray-200">
            <span className="font-semibold">In the example above:</span> Only Frame 1 is "open" - 
            it can produce a full protein. Frames 2 & 3 hit stop codons immediately!
          </p>
        </div>
      </div>
    </div>
  )
}