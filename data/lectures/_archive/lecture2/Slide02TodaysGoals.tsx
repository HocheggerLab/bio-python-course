import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide02TodaysGoals() {
  return (
    <>
      <SlideTitle size="xl" className="mb-16">
        Today's Goal: Build an <GradientText>ORF Finder</GradientText> 🧬
      </SlideTitle>
      
      <div className="max-w-4xl">
        <div className="bg-bio-card border border-bio-blue/20 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Our Python Program Will:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-bio-green text-2xl mr-3">1.</span>
                <div>
                  <p className="text-gray-200 font-semibold">Find Start Codons</p>
                  <p className="text-gray-400 text-sm">Locate all ATG positions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-bio-green text-2xl mr-3">2.</span>
                <div>
                  <p className="text-gray-200 font-semibold">Find Stop Codons</p>
                  <p className="text-gray-400 text-sm">Scan for TAA, TAG, TGA in-frame</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-bio-green text-2xl mr-3">3.</span>
                <div>
                  <p className="text-gray-200 font-semibold">Extract ORFs</p>
                  <p className="text-gray-400 text-sm">Get sequences between start & stop</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-bio-blue text-2xl mr-3">4.</span>
                <div>
                  <p className="text-gray-200 font-semibold">Find Longest ORF</p>
                  <p className="text-gray-400 text-sm">Identify the most likely protein</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-bio-blue text-2xl mr-3">5.</span>
                <div>
                  <p className="text-gray-200 font-semibold">Translate to Protein</p>
                  <p className="text-gray-400 text-sm">Convert DNA codons to amino acids</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-bio-blue text-2xl mr-3">6.</span>
                <div>
                  <p className="text-gray-200 font-semibold">Process Many Files</p>
                  <p className="text-gray-400 text-sm">Automate for 100s of sequences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-4 mt-6">
          <p className="text-center text-white">
            <span className="font-semibold">Skills we'll learn:</span> String operations • Dictionaries • 
            Conditionals • File I/O • Biopython
          </p>
        </div>
      </div>
    </>
  )
}