import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const COLAB = `# in Colab — this just works
import numpy as np`

const LAPTOP = `# on your laptop — this does not
import numpy as np

ModuleNotFoundError: No module named 'numpy'`

export function Slide01ColabLied() {
  return (
    <>
      <SlideTitle>
        Colab has been <GradientText variant="yellow">hiding something</GradientText>
      </SlideTitle>

      <SlideLead>
        Every notebook this term started with{' '}
        <span className="font-mono text-white">import numpy</span> and it simply worked. That was
        not Python being helpful. That was Google having already installed it for you.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="Colab" color="green">{COLAB}</CodeBox>
        <CodeBox label="your machine, five minutes from now" color="red">{LAPTOP}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2">
            Python ships with very little
          </CardHeading>
          <CardBody>
            The standard library gave you <span className="font-mono text-white">pathlib</span>,{' '}
            <span className="font-mono text-white">csv</span>,{' '}
            <span className="font-mono text-white">random</span>. Everything else —{' '}
            <span className="font-mono text-white">numpy</span>,{' '}
            <span className="font-mono text-white">pandas</span>,{' '}
            <span className="font-mono text-white">matplotlib</span> — someone else wrote, and you
            have to go and get.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2">
            Today: get it yourself
          </CardHeading>
          <CardBody>
            One command to make a <span className="text-white">project</span>, one to add a{' '}
            <span className="text-white">package</span>. Then the same analysis you did in the
            notebooks, running on all five neurons, on your own machine.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        Colab pre-installs several hundred packages. Convenient — until you need to explain to
        someone else exactly what your analysis depends on.
      </SlideNote>
    </>
  )
}
