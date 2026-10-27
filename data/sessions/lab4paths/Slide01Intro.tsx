import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'

export function Slide01Intro() {
  return (
    <>
      <SlideTitle>
        Your first real <GradientText variant="green">Python project</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        This project is your gateway to three things programmers do every day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-center">
        <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[26rem] md:max-w-none mx-auto">
          <img
            src="/claudia_final.png"
            alt="Claudia cheering at her desk: her program has just analysed a whole file of sequences in one run"
            className="w-full h-auto object-contain"
          />
        </figure>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
              💻 Develop locally
            </CardHeading>
            <CardBody>
              Your own project folder in VS Code, run with{' '}
              <span className="font-mono text-white">uv run</span> — on <span className="text-white">your</span>{' '}
              computer, not in a browser tab.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1 md:mb-2">
              📂 Work with files
            </CardHeading>
            <CardBody>
              Find files with <span className="font-mono text-white">pathlib</span>, read DNA out of them, and
              write your results into a new file.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1 md:mb-2">
              🐝 Analyse a whole collection
            </CardHeading>
            <CardBody>
              99 bee sequences in one run — just like Claudia, whose program does the whole folder at once.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Everything from Lectures 1–4 comes together here: strings, loops, dictionaries, functions and errors.
      </SlideNote>
    </>
  )
}
