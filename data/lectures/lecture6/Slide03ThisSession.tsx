import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody, CardEyebrow } from '@/components/slides/SlideCard'

const parts = [
  {
    color: 'blue' as const,
    eyebrow: 'Part 1',
    heading: 'The DataFrame',
    body: (
      <>
        Open the file and meet two receptions — the table and its columns — then go looking for
        trouble in the data.
      </>
    ),
  },
  {
    color: 'yellow' as const,
    eyebrow: 'Part 2',
    heading: 'The road to the answer',
    body: (
      <>
        Five steps, one pandas method each, from the raw table to the crop that would lose its
        bees. Run each one, then fix a broken copy.
      </>
    ),
  },
  {
    color: 'green' as const,
    eyebrow: 'The verdict',
    heading: 'Settle the bet',
    body: <>Your votes from the start, now with the answer.</>,
  },
  {
    color: 'red' as const,
    eyebrow: 'In the lab',
    heading: 'The pandas workout',
    body: <>Everything else pandas can do, tried on the same survey at your own pace.</>,
  },
]

export function Slide03ThisSession() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          This session — <GradientText>one question, five steps</GradientText>
        </>
      }
      lead={
        <>
          One question, answered with pandas from start to finish. The rest of pandas is for the
          lab.
        </>
      }
      note={
        <>
          You won&apos;t remember every method — nobody does. The cheat sheet at the end is for
          practising later.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {parts.map((p) => (
          <SlideCard key={p.eyebrow} color={p.color} layout="start" padding="compact" className="border-t-4">
            <CardEyebrow color={p.color}>{p.eyebrow}</CardEyebrow>
            <CardHeading size="sm" color={p.color} className="mb-2 mt-1">
              {p.heading}
            </CardHeading>
            <CardBody>{p.body}</CardBody>
          </SlideCard>
        ))}
      </div>
    </ConceptSlide>
  )
}
