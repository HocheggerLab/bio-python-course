import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'

const commands: React.ReactNode[] = [
  <>
    <span className="font-mono text-white">pwd</span> — print working directory. Where am I{' '}
    <em>right now</em>?
  </>,
  <>
    <span className="font-mono text-white">ls</span> — list what is in this folder.{' '}
    <span className="font-mono text-white">dir</span> on Windows.
  </>,
  <>
    <span className="font-mono text-white">cd sequences</span> — go in.{' '}
    <span className="font-mono text-white">cd ..</span> — go back up.
  </>,
]

export function Slide01WhereAmI() {
  return (
    <>
      <SlideTitle>
        Where <GradientText>am I</GradientText>?
      </SlideTitle>

      <SlideLead>
        In Colab every file lands in the same place, on a machine you never see. On your own
        laptop nothing lands anywhere predictable — and today you have{' '}
        <span className="text-white">99 files</span> to find.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3">
            Three commands, in the terminal
          </CardHeading>
          <CardList items={commands} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3">
            Why any of this matters
          </CardHeading>
          <CardBody>
            Your download went <span className="text-white">somewhere</span>. Not the same
            somewhere as the person next to you — different username, different folder, and on
            Windows a <span className="font-mono text-white">\</span> instead of a{' '}
            <span className="font-mono text-white">/</span>.
            <br />
            <br />
            That is the entire reason Python has{' '}
            <span className="font-mono text-white">Path</span> objects instead of just gluing
            strings together.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        Open a terminal now — in VS Code it is <span className="font-mono">⌃`</span> — and use those
        three commands to find the folder you unzipped.
      </SlideNote>
    </>
  )
}
