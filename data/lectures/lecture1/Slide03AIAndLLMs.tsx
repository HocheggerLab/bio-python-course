import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function Slide03AIAndLLMs() {
  return (
    <>
      <SlideTitle className="mb-4">
        AI & LLMs: <GradientText>A Double-Edged Sword</GradientText>
      </SlideTitle>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
        <div className="card border-bio-green/50">
          <h3 className="text-2xl font-bold text-bio-green mb-4 flex items-center">
            <span className="text-3xl mr-3">✅</span>
            The Blessing
          </h3>
          <FeatureList
            items={[
              { title: "24/7 Teacher:", description: "Get explanations anytime" },
              { title: "Skilled Buddy:", description: "Debug and optimize code together" },
              { title: "Idea Explorer:", description: "Discover alternative solutions" }
            ]}
            icon="•"
            iconColor="green"
            titleColor="default"
            spacing="tight"
          />
        </div>

        <div className="card border-red-500/50">
          <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
            <span className="text-3xl mr-3">⚠️</span>
            The Curse
          </h3>
          <FeatureList
            items={[
              { title: "Copy-Paste Trap:", description: "No learning happens" },
              { title: "Shallow Understanding:", description: "Miss core concepts" },
              { title: "Dependency:", description: "Can't code without AI help" }
            ]}
            icon="•"
            iconColor="red"
            titleColor="default"
            spacing="tight"
          />
        </div>
      </div>

      <div className="text-center mt-8 max-w-4xl mx-auto">
        <ConceptCard title="The Right Approach" icon="🎯" className="border-bio-blue/30">
          <p className="text-xl text-gray-300 mb-4">
            <strong className="text-bio-green">DO:</strong> Write → Test → Debug → Ask AI → Understand → Improve
          </p>
          <p className="text-xl text-gray-300">
            <strong className="text-red-400">DON'T:</strong> Ask AI → Copy → Paste → Submit
          </p>
        </ConceptCard>
      </div>
    </>
  )
}