import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function AILLMSlide() {
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

      <ConceptCard title="🔑 The Golden Rule" icon="" className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-6 font-semibold">
          Type the code <span className="text-bio-blue">YOURSELF</span> first,
          then consult AI for questions and alternatives
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
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
            <p className="text-sm">You don't learn coding by copying AI output</p>
          </div>
        </div>
      </ConceptCard>

      <div className="text-center mt-8">
        <p className="text-xl text-gray-300">
          <strong className="text-bio-green">DO:</strong> Write → Test → Debug → Ask AI → Understand → Improve
        </p>
        <p className="text-xl text-gray-300 mt-2">
          <strong className="text-red-400">DON'T:</strong> Ask AI → Copy → Paste → Submit
        </p>
      </div>
    </>
  )
}