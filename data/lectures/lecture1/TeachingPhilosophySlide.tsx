import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function TeachingPhilosophySlide() {
  return (
    <>
      <SlideTitle className="mb-6">
        How to Teach (and Learn) <GradientText>Python</GradientText>
      </SlideTitle>

      <div className="max-w-5xl mx-auto space-y-6">
        <div className="card bg-gradient-to-br from-bio-dark to-bio-darker/50 border-bio-blue/30">
          <h3 className="text-2xl font-bold text-bio-blue mb-4">The Truth About Learning to Code</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-bio-yellow font-semibold">You cannot learn Python from lectures.</span> My aim is to show you what's possible 
            and give you the tools to build projects useful for your studies. But <span className="text-bio-green font-semibold">you must do the work</span> - 
            actually write code, make mistakes, debug, and learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ConceptCard title="📚 What We Provide" icon="" className="h-full">
            <FeatureList
              items={[
                { title: "Resources & Notebooks:", description: "Ready-to-use examples" },
                { title: "Lab Sessions:", description: "Hands-on practice time" },
                { title: "Slack Channel:", description: "Community support" },
                { title: "Real Bio Problems:", description: "Practical applications" }
              ]}
              icon="✓"
              iconColor="green"
              titleColor="default"
              spacing="tight"
            />
          </ConceptCard>

          <ConceptCard title="💪 What You Must Do" icon="" className="h-full">
            <FeatureList
              items={[
                { title: "Type Code Yourself:", description: "No copy-paste learning" },
                { title: "Embrace Errors:", description: "They're how you learn" },
                { title: "Build Projects:", description: "Apply what you learn" },
                { title: "Practice Daily:", description: "Consistency is key" }
              ]}
              icon="→"
              iconColor="blue"
              titleColor="default"
              spacing="tight"
            />
          </ConceptCard>
        </div>

        <ConceptCard title="🔑 The Golden Rule" icon="" className="border-bio-yellow/50">
          <p className="text-lg text-center mb-6 font-semibold">
            Practice writing code <span className="text-bio-blue">YOURSELF</span> and work on <span className="text-bio-blue">YOUR OWN PROJECTS!</span>
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center bg-bio-dark rounded-lg p-4">
              <div className="text-3xl mb-2">💪</div>
              <p className="text-sm">You don't get fit by watching fitness videos</p>
            </div>
            <div className="text-center bg-bio-dark rounded-lg p-4">
              <div className="text-3xl mb-2">🎸</div>
              <p className="text-sm">You don't learn guitar by watching YouTube</p>
            </div>
            <div className="text-center bg-bio-dark rounded-lg p-4">
              <div className="text-3xl mb-2">💻</div>
              <p className="text-sm">You don't learn coding by following a lecture</p>
            </div>
          </div>
        </ConceptCard>

        <div className="bg-gradient-to-r from-red-900/20 to-bio-green/20 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-center">Your Potential Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-red-400 font-semibold mb-2">Worst Case Scenario</p>
              <p className="text-gray-300">Overview of Python applications for biology - still valuable knowledge!</p>
            </div>
            <div className="text-center">
              <p className="text-bio-green font-semibold mb-2">Best Case Scenario</p>
              <p className="text-gray-300">Start your coding journey, solve real problems, build useful projects!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}