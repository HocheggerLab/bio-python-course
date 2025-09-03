import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export default function Slide14Part3Title() {
  return (
    <>
      <div className="text-center mb-8">
        <p className="text-bio-blue text-xl mb-4 font-semibold uppercase tracking-wider">
          Part 3
        </p>
      </div>
      
      <SlideTitle size="xl" className="mb-12">
        Python <GradientText>Dictionaries</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Match Codons with Amino Acids</span>
      </SlideTitle>
      
      <p className="text-xl text-gray-300 text-center">
        Using key-value pairs to store and look up biological information
      </p>
    </>
  )
}