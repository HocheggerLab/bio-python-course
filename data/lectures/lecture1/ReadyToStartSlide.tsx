import { 
  SlideTitle, 
  GradientText,
  ConceptCard
} from '@/components/slides'

export function ReadyToStartSlide() {
  return (
    <>
      <div className="text-center">
        <div className="pb-10">
          <SlideTitle>
            Ready to <GradientText>Start Coding</GradientText>?
          </SlideTitle>
        </div>

        <div className="text-6xl mb-8 animate-float">
          🚀
        </div>

        <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Let's set up your Python environment and write your first program!
        </p>

        <div className="inline-block">
          <ConceptCard title="Today's Goal" icon="" className="text-center">
            <h3 className="text-2xl font-bold text-bio-blue mb-4">Molecular Weight Calculator</h3>
            <p className="text-lg text-gray-300">
              By the end of this lecture, you'll have written a Python program<br />
              that calculates the correct volume of a solution to prepare a desired concentration.
            </p>
          </ConceptCard>
        </div>
      </div>
    </>
  )
}