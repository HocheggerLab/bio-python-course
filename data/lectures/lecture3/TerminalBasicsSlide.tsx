import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function TerminalBasicsSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-6">
        <GradientText>Terminal</GradientText> Essentials
        <br />
        <span className="text-3xl md:text-4xl">Your Command Line Companion</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Master the basics - it's easier than you think!
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="Why Use Terminal?" icon="⚡" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Powerful & Fast",
                description: "Many tasks are faster with commands than clicking through menus"
              },
              {
                title: "Automation Ready",
                description: "Essential for running scripts and batch processing data"
              },
              {
                title: "Universal Skills",
                description: "Works the same on servers, clusters, and cloud computing"
              },
              {
                title: "Professional Standard",
                description: "Expected skill in computational biology and data science"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Essential Commands" icon="💻" iconColor="blue">
          <div className="bg-bio-dark/50 rounded-lg p-4 font-mono text-sm">
            <div className="space-y-3">
              <div>
                <span className="text-bio-blue">pwd</span>
                <span className="text-gray-400 ml-2">show current directory</span>
              </div>
              <div>
                <span className="text-bio-blue">ls</span>
                <span className="text-gray-400 ml-2">list files and folders</span>
              </div>
              <div>
                <span className="text-bio-blue">cd</span> folder_name
                <span className="text-gray-400 ml-2">change directory</span>
              </div>
              <div>
                <span className="text-bio-blue">python</span> script.py
                <span className="text-gray-400 ml-2">run Python script</span>
              </div>
              <div>
                <span className="text-bio-blue">uv add</span> package_name
                <span className="text-gray-400 ml-2">install Python package</span>
              </div>
            </div>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <ConceptCard title="Mac Terminal" icon="🍎" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Built-in Terminal",
                description: "Applications → Utilities → Terminal"
              },
              {
                title: "Homebrew Package Manager",
                description: "Install UV, Git, and other tools easily"
              },
              {
                title: "Unix Commands",
                description: "Same commands used on research servers"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Windows Options" icon="🪟" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Windows Terminal",
                description: "Modern terminal app from Microsoft Store"
              },
              {
                title: "Git Bash",
                description: "Unix-like commands on Windows"
              },
              {
                title: "PowerShell",
                description: "Windows native with powerful scripting"
              }
            ]}
            icon="→"
            iconColor="purple"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-4 bg-bio-yellow/10 rounded-lg px-6 py-3">
          <span className="text-2xl">💡</span>
          <div className="text-left">
            <p className="text-bio-yellow font-bold">Don't Panic!</p>
            <p className="text-gray-300 text-sm">We'll practice together in the lab - start with just a few commands</p>
          </div>
        </div>
      </div>
    </>
  )
}