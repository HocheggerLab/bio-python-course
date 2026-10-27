import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'

type Stop = { label: string; title: string; learn: string }

const today: Stop[] = [
  { label: '1', title: 'Does Python run?', learn: 'VS Code · the terminal · uv run' },
  { label: '2', title: 'Get the files', learn: 'download and unzip from the terminal' },
  { label: '3', title: 'Look before you code', learn: 'the FASTA format · the biology of COI' },
  { label: '4', title: 'Peek inside one file', learn: 'Path · open() · with · splitlines()' },
  { label: '5', title: 'Now all 99', learn: 'glob() · a for loop over a folder' },
  { label: '6', title: 'Break it on purpose', learn: 'where Python looks for files' },
]

const home: Stop[] = [
  { label: 'L1', title: 'GC content', learn: 'your own function, on real data' },
  { label: 'L2', title: 'Write a file', learn: 'open(..., "w") · a CSV table' },
  { label: 'L3', title: 'Drift (stretch)', learn: 'translate and compare 99 bees' },
]

function Route({ stops, color }: { stops: Stop[]; color: 'blue' | 'yellow' }) {
  const badge = color === 'blue' ? 'bg-bio-blue/20 text-bio-blue' : 'bg-bio-yellow/20 text-bio-yellow'
  return (
    <ol className="flex flex-col gap-1.5 md:gap-2 xl:gap-3">
      {stops.map((s) => (
        <li key={s.label} className="flex items-center gap-3">
          <span
            className={`inline-flex items-center justify-center rounded-full font-bold shrink-0 w-7 h-7 text-xs md:w-8 md:h-8 md:text-sm ${badge}`}
          >
            {s.label}
          </span>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm md:text-base xl:text-lg leading-tight">{s.title}</p>
            <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-tight">{s.learn}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Slide03TheMap() {
  return (
    <>
      <SlideTitle>
        The map — <GradientText>where we are going</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Small steps. Each one runs before you move on — and each one teaches one new thing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3">
            🧪 Today, in the lab — read 99 files
          </CardHeading>
          <Route stops={today} color="blue" />
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3">
            🏠 Homework — make it produce something
          </CardHeading>
          <Route stops={home} color="yellow" />
          <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-3 md:mt-4">
            Every level has hints and a self-check inside <span className="font-mono text-white">fasta_loop.py</span>.
          </p>
        </SlideCard>
      </div>

      <SlideNote>Lost at any point? Come back to this slide — the step numbers match the slide titles.</SlideNote>
    </>
  )
}
