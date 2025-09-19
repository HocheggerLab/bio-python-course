import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function DevelopmentEnvironmentSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-6">
        Beyond <GradientText>Google Colab</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Choosing Your Development Path</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Two pathways to Python mastery - choose what works for you
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        <ConceptCard title="Stay with Colab" icon="☁️" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Zero Setup",
                description: "Continue using Google Colab - no installation needed"
              },
              {
                title: "Perfect for Learning",
                description: "Focus on biology and Python concepts without technical setup"
              },
              {
                title: "Always Available",
                description: "Access your work from any computer with internet"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
          <div className="mt-4 text-center">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
              Recommended for Beginners
            </span>
          </div>
        </ConceptCard>

        <ConceptCard title="VS Code Setup" icon="💻" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Professional Tools",
                description: "Industry-standard editor with powerful debugging and extensions"
              },
              {
                title: "Local Development",
                description: "Work offline, manage files easily, integrate with other tools"
              },
              {
                title: "Research Ready",
                description: "Perfect for larger projects and serious biological analysis"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
          <div className="mt-4 text-center">
            <span className="px-3 py-1 bg-bio-blue/20 text-bio-blue text-sm rounded-full">
              Recommended Path
            </span>
          </div>
        </ConceptCard>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-300 mb-4">
          <strong>Don't worry!</strong> We'll provide step-by-step guides and lab support for all paths.
        </p>
        <p className="text-bio-blue">
          You can always start with one approach and switch later.
        </p>
      </div>
    </>
  )
}