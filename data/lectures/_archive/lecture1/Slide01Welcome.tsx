import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function Slide01Welcome() {
  return (
    <>
      <SlideTitle size="xl" className="mb-4">
        Lecture 1: <GradientText>Getting Started</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">with Python</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        From learning mindset to lab calculation automation
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ConceptCard title="What We'll Cover Today" icon="📚" iconColor="blue">
          <FeatureList
            items={[
              {
                title: "How to Learn Python",
                description: "Effective strategies and mindset for coding success"
              },
              {
                title: "Basic Introduction to Python",
                description: "What Python is and why it's perfect for biology"
              },
              {
                title: "Breaking Down Problems",
                description: "Essential skill for tackling coding projects"
              },
              {
                title: "Python Fundamentals",
                description: "Variables, data types, lists, loops, and functions"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Our First Project" icon="🧪" iconColor="green">
          <FeatureList
            items={[
              {
                title: "Lab Solution Calculator",
                description: "Automate the calculation of volumes needed for making 10mM solutions from different reagents"
              },
              {
                title: "Real Problem Solving",
                description: "Help 'Alex' process 100 bottles efficiently using Python instead of manual calculations"
              },
              {
                title: "Step-by-Step Approach",
                description: "Learn to break down complex problems into manageable, programmable steps"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>
    </>
  )
}