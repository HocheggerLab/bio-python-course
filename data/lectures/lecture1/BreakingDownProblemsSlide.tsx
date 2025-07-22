import { 
  SlideTitle, 
  ConceptCard
} from '@/components/slides'

export function BreakingDownProblemsSlide() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Breaking Down <span className="text-bio-yellow">Problems</span>
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main concept */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-bio-yellow mb-4 text-center">
            An Essential Programming Skill
          </h3>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
            Complex problems become manageable when divided into smaller, 
            <span className="text-bio-blue font-semibold"> logical steps</span>
          </p>
        </div>

        {/* Problem decomposition example */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: The Big Problem */}
          <ConceptCard title="The Big Problem" icon="🏔️" iconColor="red">
            <div className="space-y-4 text-left">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-gray-300 font-semibold">
                  "Process 100 reagents and generate a report with calculated volumes"
                </p>
              </div>
              <div className="text-center py-4">
                <span className="text-4xl">😰</span>
                <p className="text-gray-400 mt-2">Overwhelming!</p>
              </div>
            </div>
          </ConceptCard>

          {/* Right: Broken Down */}
          <ConceptCard title="Broken Down" icon="🧩" iconColor="green">
            <div className="space-y-3 text-left">
              <div className="bg-bio-green/10 border-l-4 border-bio-green rounded-lg p-3">
                <p className="text-sm text-gray-300">
                  <span className="text-bio-green font-bold">1.</span> Solve for one reagent first
                </p>
              </div>
              <div className="bg-bio-blue/10 border-l-4 border-bio-blue rounded-lg p-3">
                <p className="text-sm text-gray-300">
                  <span className="text-bio-blue font-bold">2.</span> Create a reusable function
                </p>
              </div>
              <div className="bg-bio-yellow/10 border-l-4 border-bio-yellow rounded-lg p-3">
                <p className="text-sm text-gray-300">
                  <span className="text-bio-yellow font-bold">3.</span> Apply to all reagents
                </p>
              </div>
              <div className="bg-purple-500/10 border-l-4 border-purple-500 rounded-lg p-3">
                <p className="text-sm text-gray-300">
                  <span className="text-purple-400 font-bold">4.</span> Handle input/output
                </p>
              </div>
              <div className="text-center pt-2">
                <span className="text-3xl">😊</span>
                <p className="text-bio-green text-sm mt-1">Manageable!</p>
              </div>
            </div>
          </ConceptCard>
        </div>

        {/* Key principles */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-bio-dark/70 rounded-lg p-6 border border-bio-blue/30">
            <div className="text-center mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="font-bold text-bio-blue mb-2">Start Simple</h4>
            <p className="text-sm text-gray-300">
              Always begin with the simplest case. Get one thing working before adding complexity.
            </p>
          </div>

          <div className="bg-bio-dark/70 rounded-lg p-6 border border-bio-green/30">
            <div className="text-center mb-4">
              <span className="text-3xl">🔄</span>
            </div>
            <h4 className="font-bold text-bio-green mb-2">Iterate & Improve</h4>
            <p className="text-sm text-gray-300">
              Build incrementally. Each step should work before moving to the next.
            </p>
          </div>

          <div className="bg-bio-dark/70 rounded-lg p-6 border border-bio-yellow/30">
            <div className="text-center mb-4">
              <span className="text-3xl">🧪</span>
            </div>
            <h4 className="font-bold text-bio-yellow mb-2">Test Each Step</h4>
            <p className="text-sm text-gray-300">
              Verify your solution works for edge cases before scaling up.
            </p>
          </div>
        </div>

        {/* Real-world application */}
        <div className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 rounded-lg p-6 border border-bio-blue/30">
          <h3 className="text-xl font-bold text-bio-blue mb-4 flex items-center justify-center">
            <span className="mr-2">💡</span>
            This Skill Applies Everywhere
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-bio-green font-semibold">Lab Work:</span> Protocol optimization
              </p>
              <p className="text-gray-300">
                <span className="text-bio-green font-semibold">Data Analysis:</span> Processing large datasets
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-bio-blue font-semibold">Research:</span> Experimental design
              </p>
              <p className="text-gray-300">
                <span className="text-bio-blue font-semibold">Automation:</span> Workflow development
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}