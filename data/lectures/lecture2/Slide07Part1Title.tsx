import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide07Part1Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-blue text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 1
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-12">
        Python <GradientText>String Fundamentals</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">for Biology</span>
      </SlideTitle>
      
      <p className="text-xl text-gray-300 text-center">
        Working with DNA sequences as strings
      </p>
    </>
  )
}