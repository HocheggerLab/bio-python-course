import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function ResourcesNextStepsSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-6">
        <GradientText>Resources</GradientText> & Next Steps
        <br />
        <span className="text-3xl md:text-4xl">We've Got You Covered</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Step-by-step guides and support for every platform
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="Installation Guides" icon="📚" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "macOS Setup Guide",
                description: "Complete walkthrough for Mac users including Homebrew and terminal setup"
              },
              {
                title: "Windows Setup Guide",
                description: "Step-by-step instructions for Windows Terminal, Git, and VS Code"
              },
              {
                title: "VS Code Extensions",
                description: "Curated list of essential extensions for biological programming"
              },
              {
                title: "Troubleshooting FAQ",
                description: "Common issues and solutions for each platform"
              }
            ]}
            icon="📖"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Lab Support" icon="🧑‍🏫" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Hands-on Help",
                description: "Get personal assistance during lab sessions"
              },
              {
                title: "Office Hours",
                description: "Drop-in support for installation and setup issues"
              },
              {
                title: "Peer Support",
                description: "Connect with classmates who've already made the switch"
              },
              {
                title: "Alternative Paths",
                description: "We'll help you find the setup that works best for you"
              }
            ]}
            icon="🤝"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      <div className="mt-12">
        <ConceptCard title="Choose Your Adventure" icon="🗺️" iconColor="purple">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-green-500/10 rounded-lg p-6">
              <span className="text-3xl mb-3 block">☁️</span>
              <h4 className="text-green-400 font-bold mb-2">Stick with Colab</h4>
              <p className="text-gray-300 text-sm mb-4">Perfect for focusing on biology and Python concepts</p>
              <div className="text-xs text-green-300">✓ Zero setup required</div>
            </div>
            
            <div className="text-center bg-bio-blue/10 rounded-lg p-6">
              <span className="text-3xl mb-3 block">💻</span>
              <h4 className="text-bio-blue font-bold mb-2">Try VS Code</h4>
              <p className="text-gray-300 text-sm mb-4">Professional development environment</p>
              <div className="text-xs text-bio-blue">✓ Recommended path</div>
            </div>
            
            <div className="text-center bg-purple-500/10 rounded-lg p-6">
              <span className="text-3xl mb-3 block">🚀</span>
              <h4 className="text-purple-400 font-bold mb-2">Full Setup</h4>
              <p className="text-gray-300 text-sm mb-4">Complete development toolkit</p>
              <div className="text-xs text-purple-300">✓ Career preparation</div>
            </div>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-bio-yellow/10 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-bio-yellow font-bold text-xl mb-4">📋 Action Items</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-bold text-white mb-2">Before Next Week:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Choose your development path</li>
                <li>• Download installation guide for your OS</li>
                <li>• Try basic setup (optional)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">During Lab Session:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Get hands-on installation help</li>
                <li>• Test your setup with real code</li>
                <li>• Connect with study partners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-bio-blue text-lg">
          🌟 <strong>Remember:</strong> Every expert was once a beginner - we're here to help you every step of the way!
        </p>
      </div>
    </>
  )
}