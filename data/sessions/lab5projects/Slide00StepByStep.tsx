import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideNote } from '@/components/slides/layouts'
import StepByStepList from './StepByStepList'

/* The whole setup on one slide, every command in full and click-to-copy
   (StepByStepList). The fixes for each step live on /labs/5/setup; the room
   moves on together, one ✅ at a time. */

export function Slide00StepByStep() {
  return (
    <>
      <SlideTitle>
        Today, <GradientText variant="green">step by step</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Click a command to copy it, paste it into your terminal, press Enter. The guide with a fix
        for every step:{' '}
        <span className="font-mono text-bio-yellow">python-for-biologists.vercel.app/labs/5/setup</span>
      </p>

      <StepByStepList />

      <SlideNote>
        Green sticky at every ✅ — we move on together. A check fails? The fix is right under it in
        the guide. Still stuck: red sticky.
      </SlideNote>
    </>
  )
}
