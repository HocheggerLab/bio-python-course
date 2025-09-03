import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide11Part2Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-blue text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 2
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-12">
        Python <GradientText>Conditionals</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Making Decisions</span>
      </SlideTitle>
      
      <p className="text-xl text-gray-300 text-center">
        Teaching Python to make choices based on biological data
      </p>
    </>
  )
}