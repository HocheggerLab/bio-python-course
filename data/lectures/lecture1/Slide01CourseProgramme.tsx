import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'

export function Slide01CourseProgramme() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <SlideTitle>
        Course <GradientText>Programme</GradientText>
      </SlideTitle>
      <p className="text-gray-500 text-xl mt-8 italic">— slide to be designed when full programme is confirmed —</p>
    </div>
  )
}
