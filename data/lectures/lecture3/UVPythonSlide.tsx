import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function UVPythonSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-6">
        <GradientText>UV Python</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Modern Package Management</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Lightning-fast Python package management that just works
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="What is UV?" icon="⚡" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Next-Generation Tool",
                description: "Modern replacement for pip and conda - 100x faster installations"
              },
              {
                title: "Dependency Management",
                description: "Automatically handles package versions and conflicts"
              },
              {
                title: "Project Isolation",
                description: "Each project gets its own clean environment"
              },
              {
                title: "Reproducible Science",
                description: "Lock files ensure everyone gets the same package versions"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Why Biologists Need This" icon="🧬" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Avoid Package Hell",
                description: "No more 'it works on my machine' - consistent environments everywhere"
              },
              {
                title: "Easy Collaboration",
                description: "Share exact package requirements with collaborators"
              },
              {
                title: "Experiment Safely",
                description: "Try new packages without breaking existing projects"
              },
              {
                title: "Publish Ready",
                description: "Easy to document exactly what packages your research used"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      <div className="mt-12">
        <ConceptCard title="Essential UV Commands" icon="💻" iconColor="purple">
          <div className="bg-bio-dark/50 rounded-lg p-6 font-mono text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-bio-yellow font-bold mb-3">Project Setup</h4>
                <div className="space-y-2 text-gray-300">
                  <div><span className="text-bio-blue">uv init</span> my-bio-project</div>
                  <div><span className="text-bio-blue">cd</span> my-bio-project</div>
                  <div><span className="text-bio-blue">uv add</span> pandas numpy matplotlib</div>
                </div>
              </div>
              <div>
                <h4 className="text-bio-yellow font-bold mb-3">Daily Workflow</h4>
                <div className="space-y-2 text-gray-300">
                  <div><span className="text-bio-blue">uv add</span> biopython</div>
                  <div><span className="text-bio-blue">uv run</span> python my_script.py</div>
                  <div><span className="text-bio-blue">uv sync</span></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-600">
              <p className="text-gray-400 text-xs">
                <strong>Pro tip:</strong> UV automatically creates and manages virtual environments for you!
              </p>
            </div>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-4 bg-bio-blue/10 rounded-lg px-6 py-3">
          <span className="text-2xl">🚀</span>
          <div className="text-left">
            <p className="text-bio-blue font-bold">Installation</p>
            <p className="text-gray-300 text-sm">We'll provide step-by-step guides for Mac and Windows</p>
          </div>
        </div>
      </div>
    </>
  )
}