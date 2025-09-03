import Image from 'next/image'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide03DarrensProblem() {
  return (
    <>
      <SlideTitle size="large" className="mb-12">
        Meet <GradientText>Darren</GradientText>: A Biologist with a Problem 🧬
      </SlideTitle>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl items-center">
        {/* Left side - Darren's image */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4">
            <Image
              src="/L2_darren.png"
              alt="Darren the biologist"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-400 text-center italic">
            Darren, PhD student studying gene expression
          </p>
        </div>
        
        {/* Right side - The problem */}
        <div className="space-y-4">
          <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-bio-yellow mb-4">
              The Challenge
            </h3>
            <p className="text-gray-300 mb-4">
              Darren has sequenced hundreds of mRNA molecules from cancer cells. 
              Each sequence could encode important proteins, but finding them manually 
              takes hours per sequence!
            </p>
            <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
              <p className="text-gray-200 font-semibold">📁 Current situation:</p>
              <ul className="text-gray-300 ml-4 space-y-1">
                <li>• 500+ mRNA sequence files</li>
                <li>• Each needs to be checked for ORFs</li>
                <li>• Manual checking takes ~30 min/file</li>
                <li>• That's 250 hours of tedious work!</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-4">
            <p className="text-white font-semibold">
              💡 Solution: Automate with Python!
            </p>
            <p className="text-gray-300 text-sm mt-2">
              What takes 30 minutes by hand can be done in milliseconds with code
            </p>
          </div>
        </div>
      </div>
    </>
  )
}