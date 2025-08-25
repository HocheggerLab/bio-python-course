import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function GitVersionControlSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-6">
        <GradientText>Git</GradientText> Version Control
        <br />
        <span className="text-3xl md:text-4xl">Track Every Change</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Never lose your work again - the scientist's backup system
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="Why Scientists Need Git" icon="🔬" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Research History",
                description: "Track exactly what changed in your analysis and when"
              },
              {
                title: "Safe Experimentation",
                description: "Try new approaches without fear of breaking working code"
              },
              {
                title: "Collaboration",
                description: "Work with others without emailing files back and forth"
              },
              {
                title: "Publication Ready",
                description: "Share exact code versions that produced your results"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Git Workflow" icon="🔄" iconColor="blue">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-bio-blue rounded-full flex items-center justify-center text-bio-dark font-bold text-sm">1</div>
              <div>
                <h4 className="text-bio-yellow font-bold">Clone</h4>
                <p className="text-gray-300 text-sm">Download a project from GitHub</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-bio-blue rounded-full flex items-center justify-center text-bio-dark font-bold text-sm">2</div>
              <div>
                <h4 className="text-bio-yellow font-bold">Edit</h4>
                <p className="text-gray-300 text-sm">Make changes to your code</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-bio-blue rounded-full flex items-center justify-center text-bio-dark font-bold text-sm">3</div>
              <div>
                <h4 className="text-bio-yellow font-bold">Commit</h4>
                <p className="text-gray-300 text-sm">Save a snapshot with description</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-bio-blue rounded-full flex items-center justify-center text-bio-dark font-bold text-sm">4</div>
              <div>
                <h4 className="text-bio-yellow font-bold">Push</h4>
                <p className="text-gray-300 text-sm">Upload changes to share</p>
              </div>
            </div>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-12">
        <ConceptCard title="Essential Git Commands" icon="💻" iconColor="purple">
          <div className="bg-bio-dark/50 rounded-lg p-6 font-mono text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-bio-yellow font-bold mb-3">Getting Started</h4>
                <div className="space-y-2 text-gray-300">
                  <div><span className="text-bio-blue">git clone</span> &lt;url&gt;</div>
                  <div><span className="text-bio-blue">git status</span></div>
                  <div><span className="text-bio-blue">git add</span> .</div>
                </div>
              </div>
              <div>
                <h4 className="text-bio-yellow font-bold mb-3">Daily Use</h4>
                <div className="space-y-2 text-gray-300">
                  <div><span className="text-bio-blue">git commit</span> -m "message"</div>
                  <div><span className="text-bio-blue">git push</span></div>
                  <div><span className="text-bio-blue">git pull</span></div>
                </div>
              </div>
            </div>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="text-center bg-green-500/10 rounded-lg p-4">
          <span className="text-2xl mb-2 block">🎯</span>
          <h4 className="text-green-400 font-bold mb-2">VS Code Integration</h4>
          <p className="text-gray-300 text-sm">Git is built into VS Code - point, click, commit!</p>
        </div>
        
        <div className="text-center bg-purple-500/10 rounded-lg p-4">
          <span className="text-2xl mb-2 block">🌟</span>
          <h4 className="text-purple-400 font-bold mb-2">GitHub Integration</h4>
          <p className="text-gray-300 text-sm">Share your research code with the world</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-bio-blue text-lg">
          💡 <strong>Remember:</strong> Git is like a time machine for your code - you can always go back!
        </p>
      </div>
    </>
  )
}