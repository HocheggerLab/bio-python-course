import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const fixes = [
  'command not found: uv  →  close and reopen your terminal (it finds uv on restart)',
  'can’t find translate_bee.py  →  you’re not in the right folder — use ls / dir and cd',
  'Windows blocks the script  →  reopen PowerShell and run the install line again',
]

export function Slide05YourTurn() {
  return (
    <>
      <SlideTitle>
        Your turn — <GradientText variant="green">your code, your machine</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">You just ran real Python locally</CardHeading>
            <CardBody>
              No Colab, no timeout, no account. A program on your own laptop, translating a bumblebee gene.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">Try it for real</CardHeading>
            <CardBody>
              Run it again and paste a <span className="text-white">different</span> DNA sequence — one of
              your own from Lab 2, or a gene you find online. Same file, new data.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-3">If something breaks</CardHeading>
            <CardList items={fixes} bullet="▸" color="red" />
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              <span className="text-white">Before next lab:</span> you ran a program someone gave you — next
              you&apos;ll <span className="text-white">write your own</span> in VS Code. Install it now so
              you turn up ready:{' '}
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bio-blue underline underline-offset-2 hover:text-bio-yellow transition-colors"
              >
                code.visualstudio.com
              </a>.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
