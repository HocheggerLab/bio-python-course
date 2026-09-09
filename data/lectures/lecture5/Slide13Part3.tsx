import { SectionSlide } from '@/components/slides/layouts'

/* The file the next fourteen slides work on. Offered here rather than buried
   in a runner, so anyone who wants to open it in Excel and scroll around
   before we start writing code can just take it. */
const DATA = '/data/neuron_0588_20180828_5_lecture.csv'

export function Slide13Part3() {
  return (
    <SectionSlide
      eyebrow="Part 3"
      title="One Neuron,"
      accent="Many Trials"
      note="A single trial tells you nothing. Two hundred and fifty of them, added up the right way, tell you what a cell is for."
      action={
        <div className="flex flex-col items-center gap-2">
          <a
            href={DATA}
            download
            className="inline-flex items-center gap-2 rounded border border-bio-blue/40 px-4 py-2
              text-bio-blue hover:bg-bio-blue/10 transition-colors
              text-sm md:text-base xl:text-lg font-semibold"
          >
            ⬇ Download the data
          </a>
          <span className="text-gray-500 text-xs md:text-sm">
            neuron_0588_20180828_5_lecture.csv — 21,238 rows, 6 columns
          </span>
        </div>
      }
    />
  )
}
