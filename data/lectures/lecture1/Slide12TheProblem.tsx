import Image from 'next/image'
import { 
  SlideTitle, 
  ConceptCard
} from '@/components/slides'

export function Slide12TheProblem() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          The <span className="text-red-400">Problem</span>
        </SlideTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Image on the left */}
        <div className="flex justify-center">
          <div className="relative">
            <Image 
              src="/L1-problem.png"
              alt="Lab bottles and reagents for solution preparation" 
              width={480}
              height={360}
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-bio-yellow/90 text-bio-dark px-3 py-1 rounded-full text-sm font-bold">
              ~100 bottles!
            </div>
          </div>
        </div>

        {/* Story on the right */}
        <div className="space-y-6">
          <ConceptCard title="Alex's Challenge" icon="🧪" iconColor="blue">
            <div className="space-y-4 text-left">
              <p className="text-gray-300">
                Alex has been asked to <span className="text-bio-yellow font-semibold">restock solutions</span> in the lab. 
                He has about <span className="text-bio-blue font-bold">100 bottles</span> of different reagents 
                and needs to make <span className="text-bio-green font-bold">10mM stocks</span> for each.
              </p>
              
              <div className="bg-bio-dark/50 rounded-lg p-4 border-l-4 border-bio-blue">
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-bold text-bio-blue">Step 1:</span> Alex starts with <span className="font-bold">MG132</span> 
                  (proteasome inhibitor)
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <div>• Molecular weight: <span className="text-bio-yellow">475.6 g/mol</span></div>
                  <div>• Weight measured: <span className="text-bio-yellow">89.5 mg</span></div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2 text-lg">❓ The Question</h4>
                <p className="text-gray-300 mb-3">
                  How much <span className="text-bio-blue font-bold">solvent</span> does Alex need 
                  to make a <span className="text-bio-green font-bold">10mM solution</span>?
                </p>
                
                <div className="bg-bio-dark rounded-lg p-3 border border-bio-blue/30">
                  <p className="text-xs text-gray-400 mb-1">The formula:</p>
                  <div className="text-center">
                    <p className="font-mono text-bio-yellow">
                      Volume (mL) = <span className="text-bio-green">mass (mg)</span> / (<span className="text-bio-blue">MW (g/mol)</span> × <span className="text-bio-yellow">conc (mM)</span>)
                    </p>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 text-center">
                    Volume = 89.5 / (475.6 × 10) = ?
                  </div>
                </div>
              </div>

              <div className="text-center bg-bio-yellow/10 rounded-lg p-3">
                <p className="text-sm text-gray-300">
                  <span className="text-red-400">🤯</span> That's a lot of calculations for 100 bottles!
                </p>
              </div>
            </div>
          </ConceptCard>
        </div>
      </div>
    </>
  )
}