import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  {
    term: 'What it holds',
    def: 'Anything at all — numbers, text, other lists',
    extra: 'One type, all the way through',
  },
  {
    term: 'x * 2',
    def: 'Repeats the list: [1, 2] becomes [1, 2, 1, 2]',
    extra: 'Doubles every value: [2, 4]',
  },
  {
    term: 'x + y',
    def: 'Joins them end to end',
    extra: 'Adds them value by value',
  },
  {
    term: 'x - 1',
    def: 'TypeError',
    extra: 'Subtracts 1 from all of them',
  },
  {
    term: 'Size',
    def: 'Grows and shrinks — append, remove',
    extra: 'Fixed once you make it',
  },
  {
    term: 'Shape',
    def: 'Flat, or lists inside lists',
    extra: 'Genuinely 2-D, 3-D, however many',
  },
  {
    term: 'Summarising',
    def: 'sum(x) / len(x)',
    extra: '.mean() .std() .max() .argmax()',
  },
]

export function Slide22ArrayVsList() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          List or <GradientText variant="green">Array?</GradientText>
        </>
      }
      lead={
        <>
          A list is a general-purpose container. An array is a{' '}
          <span className="text-bio-green font-semibold">block of numbers that does maths</span>.
          Neither replaces the other.
        </>
      }
      note={
        <>
          Reach for a <strong>list</strong> when you are collecting things one at a time, or they
          aren&apos;t all numbers. Reach for an <strong>array</strong> the moment you want to do
          the same arithmetic to all of them.
        </>
      }
    >
      <DefTable rows={rows} headers={['', 'Python list', 'numpy array']} accent="green" />
    </ConceptSlide>
  )
}
