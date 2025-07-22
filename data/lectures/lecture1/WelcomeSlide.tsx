import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function WelcomeSlide() {
  return (
    <>
      <SlideTitle size="xl" className="mb-4">
        Welcome to <GradientText>Python</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">for Biologists</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Transform your research with computational skills
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="What You'll Achieve" icon="🎯" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Write Python Scripts",
                description: "Create tools to automate repetitive tasks, process sequences, and solve biological problems"
              },
              {
                title: "Perform Data Analysis",
                description: "Analyze experimental data, create visualizations, and extract meaningful insights from biological datasets"
              },
              {
                title: "Build Analysis Pipelines",
                description: "Combine multiple tools into powerful workflows for genomics, proteomics, and systems biology"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Course Philosophy" icon="🚀" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Biology First",
                description: "Every example uses real biological data - from DNA sequences to protein structures"
              },
              {
                title: "Learn by Doing",
                description: "Write code from day one with immediate applications to your research interests"
              },
              {
                title: "No Prerequisites",
                description: "Designed for biologists with zero programming experience - we'll guide you every step"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>
    </>
  )
}