import Image from 'next/image'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide02TheProblem() {
  return (
    <>
      <SlideTitle size="large" className="mb-12">
        The <GradientText>Problem</GradientText>: A Cancer Researcher with Big Data 📊
      </SlideTitle>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl items-center">
        {/* Left side - Sarah's image */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4">
            <Image
              src="/L3-problem.png"
              alt="Sarah the cancer researcher"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-400 text-center italic">
            Sarah, Postdoc studying cancer cell dependencies
          </p>
        </div>
        
        {/* Right side - The problem */}
        <div className="space-y-4">
          <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-bio-yellow mb-4">
              The Challenge: DepMap Dataset
            </h3>
            <p className="text-gray-300 mb-4">
              Sarah is analyzing the Cancer Dependency Map (DepMap) - a massive dataset 
              showing which genes cancer cells need to survive. But the data is overwhelming!
            </p>
            <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
              <p className="text-gray-200 font-semibold">📊 Dataset dimensions:</p>
              <ul className="text-gray-300 ml-4 space-y-1">
                <li>• 1,200+ cancer cell lines (rows)</li>
                <li>• 30,000+ gene dependencies (columns)</li>
                <li>• 36 million data points total!</li>
                <li>• Excel crashes trying to open it</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-4">
            <p className="text-white font-semibold">
              🔬 Her Question:
            </p>
            <p className="text-gray-300 text-sm mt-2">
              "Which genes show similar dependencies across differnet cancer cell lines compared to the ATR checkpoint kinase?"
            </p>
          </div>

          <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-4">
            <p className="text-white font-semibold">
              💡 Solution: Pandas DataFrames!
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Handle millions of data points effortlessly and find patterns in seconds
            </p>
          </div>
        </div>
      </div>
    </>
  )
}