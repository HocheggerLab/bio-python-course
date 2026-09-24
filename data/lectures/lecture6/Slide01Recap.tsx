import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const rows: DefRow[] = [
  { term: 'np.array', def: 'one type, one block of memory', extra: 'fast' },
  { term: 'arr[arr > 1]', def: 'ask every value at once', extra: 'masks' },
  { term: 'np.stack', def: 'a list of trials becomes a table', extra: '2-D' },
  { term: '.mean(axis=0)', def: 'collapse the rows, keep the columns', extra: 'the answer' },
]

export function Slide01Recap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Last week you <GradientText>analysed neuron firing with numpy</GradientText>
        </>
      }
      lead={
        <>
          In the lab we found that numpy is much faster than a list and a for loop. Numpy is
          powerful and useful to analyse large numerical series.
        </>
      }
      closing={
        <p className="text-center text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mt-2 md:mt-4">
          <span className="text-gray-100">numpy has no answer to that.</span>{' '}
          <GradientText variant="green">pandas</GradientText>
          <span className="text-gray-100"> does.</span>
        </p>
      }
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <DefTable rows={rows} headers={['you can already', 'what it does', '']} accent="blue" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2">
              And it goes a long way
            </CardHeading>
            <CardBody>
              The array numpy introduced became the shape of scientific computing — pandas, scipy
              and scikit-learn all sit on top of it. <span className="text-white">PyTorch</span>{' '}
              took the same idea and put it on GPUs, and that is the machinery modern AI is built
              from, ChatGPT and Claude included.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              But not today&apos;s problem
            </CardHeading>
            <CardBody>
              An array holds <span className="text-white">one kind of thing</span>. Today a row
              reads <span className="font-mono text-white">August, Hoggs, Rbean, 140, 0, 1</span> —
              words and numbers together, every column meaning something different.
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </ConceptSlide>
  )
}
