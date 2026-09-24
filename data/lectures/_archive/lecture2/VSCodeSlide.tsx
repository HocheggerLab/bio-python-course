import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function VSCodeSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-6">
        <GradientText>VS Code</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Your New Python Laboratory</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        A professional code editor designed for scientists and researchers
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="Why VS Code?" icon="🔬" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Built for Science",
                description: "Excellent Jupyter notebook support, data visualization, and scientific libraries"
              },
              {
                title: "Intelligent Coding",
                description: "Auto-completion, error detection, and suggestions as you type"
              },
              {
                title: "Debug Like a Pro",
                description: "Step through your code line by line to understand and fix issues"
              },
              {
                title: "Extensions Ecosystem",
                description: "Python, Jupyter, Git integration, and thousands of research tools"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Perfect for Biologists" icon="🧬" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "File Management",
                description: "Organize your data files, scripts, and results in one place"
              },
              {
                title: "Multiple Formats",
                description: "Edit Python, CSV, FASTA, markdown, and more with syntax highlighting"
              },
              {
                title: "Integrated Terminal",
                description: "Run commands and scripts without leaving your editor"
              },
              {
                title: "Version Control",
                description: "Built-in Git support to track changes and collaborate safely"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      <div className="mt-12">
        <ConceptCard title="Getting Started" icon="🚀" iconColor="purple">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <h4 className="text-bio-yellow font-bold mb-2">Download & Install</h4>
              <p className="text-gray-300 text-sm">Free from code.visualstudio.com<br/>Available for Mac, Windows, Linux</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <h4 className="text-bio-yellow font-bold mb-2">Install Extensions</h4>
              <p className="text-gray-300 text-sm">Python, Jupyter, Git integration<br/>We'll guide you through this</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <h4 className="text-bio-yellow font-bold mb-2">Start Coding</h4>
              <p className="text-gray-300 text-sm">Create your first project<br/>and never look back!</p>
            </div>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-8 text-center">
        <p className="text-bio-blue text-lg">
          💡 <strong>Pro tip:</strong> VS Code works great alongside Colab - use both while you transition!
        </p>
      </div>
    </>
  )
}