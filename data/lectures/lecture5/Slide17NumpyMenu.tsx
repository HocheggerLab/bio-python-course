import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'

const DOCS = 'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'

type Group = {
  heading: string
  color: 'purple' | 'blue' | 'green' | 'yellow' | 'red'
  items: [string, string][]
}

/* Every name here is a real ndarray method (checked against numpy 2.4, which has 53).
   The point is the sheer size of the menu, not learning it. */
const groups: Group[] = [
  {
    heading: '📊 Describe',
    color: 'green',
    items: [
      ['.sum()', 'add them all'],
      ['.mean()', 'the average'],
      ['.std()', 'the spread'],
      ['.var()', 'the variance'],
      ['.min() .max()', 'smallest, largest'],
      ['.prod()', 'multiply them all'],
      ['.cumsum()', 'running total'],
    ],
  },
  {
    heading: '🔍 Find',
    color: 'blue',
    items: [
      ['.argmax()', 'where is the largest?'],
      ['.argmin()', 'where is the smallest?'],
      ['.argsort()', 'the order, by position'],
      ['.nonzero()', 'where is it not 0?'],
      ['.any()', 'is anything True?'],
      ['.all()', 'is everything True?'],
      ['.searchsorted()', 'where would it fit?'],
    ],
  },
  {
    heading: '📐 Reshape',
    color: 'purple',
    items: [
      ['.reshape()', 'new rows × columns'],
      ['.flatten()', 'back to one row'],
      ['.transpose()', 'rows ↔ columns'],
      ['.squeeze()', 'drop empty dimensions'],
      ['.swapaxes()', 'swap two dimensions'],
      ['.diagonal()', 'the diagonal'],
    ],
  },
  {
    heading: '🛠️ Change',
    color: 'yellow',
    items: [
      ['.sort()', 'sort in place'],
      ['.round()', 'round every value'],
      ['.clip()', 'cap values at a limit'],
      ['.astype()', 'change the number type'],
      ['.repeat()', 'repeat each value'],
      ['.copy()', 'an independent copy'],
    ],
  },
  {
    heading: '📤 Hand back',
    color: 'red',
    items: [
      ['.tolist()', 'a plain Python list'],
      ['.item()', 'one plain number'],
      ['.tofile()', 'write to a file'],
      ['.take()', 'pick by position'],
      ['.dot()', 'matrix multiplication'],
    ],
  },
]

export function Slide17NumpyMenu() {
  return (
    <>
      <SlideTitle>
        What an Array <GradientText variant="green">Can Do</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-lg xl:text-xl mt-2 md:mt-3 max-w-4xl mx-auto">
        Every one of these is a method at the array&apos;s reception — and each works on 5 numbers or
        5 million in one call. You don&apos;t learn them; you look them up.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4 mt-4 md:mt-6">
        {groups.map((g) => (
          <SlideCard key={g.heading} color={g.color} layout="start" padding="tight" className="border-t-4">
            <CardHeading size="sm" color={g.color} className="mb-2">
              {g.heading}
            </CardHeading>
            <ul className="flex flex-col gap-1 md:gap-1.5">
              {g.items.map(([name, what]) => (
                <li key={name} className="leading-tight">
                  <span className="font-mono text-white text-xs md:text-sm xl:text-base">{name}</span>
                  <span className="block text-gray-400 text-[11px] md:text-xs xl:text-sm">{what}</span>
                </li>
              ))}
            </ul>
          </SlideCard>
        ))}
      </div>

      <p className="text-center text-sm md:text-lg xl:text-xl mt-4 md:mt-6">
        <span className="text-gray-300">…and about 20 more methods, plus hundreds of np functions. The full menu: </span>
        <a
          href={DOCS}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-bio-blue hover:text-bio-green transition-colors break-all"
        >
          numpy.org/doc → numpy.ndarray
        </a>
      </p>
    </>
  )
}
