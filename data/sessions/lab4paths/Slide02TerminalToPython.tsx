import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideLead, SlideNote, DefTable, type DefRow } from '@/components/slides/layouts'

const py = (code: string) => <span className="font-mono text-gray-200">{code}</span>

const rows: DefRow[] = [
  { term: 'pwd',        def: py('Path.cwd()'),               extra: 'the folder you are in' },
  { term: 'ls',         def: py('list(p.iterdir())'),        extra: 'everything here, as Paths' },
  { term: 'ls *.fasta', def: py('p.glob("*.fasta")'),        extra: 'only the ones you want' },
  { term: 'cd sequences', def: py('p / "sequences"'),        extra: 'a path one level in' },
  { term: 'cd ..',      def: py('p.parent'),                 extra: 'a path one level up' },
  { term: 'mkdir results', def: py('p.mkdir()'),             extra: 'a new folder' },
]

export function Slide02TerminalToPython() {
  return (
    <>
      <SlideTitle>
        Terminal → <GradientText variant="green">Python</GradientText>
      </SlideTitle>

      <SlideLead>
        Everything you just did by hand, <span className="text-white">pathlib</span> does in code.
        Same ideas, same order — you already know what these mean.
      </SlideLead>

      <div className="mt-4 md:mt-6 xl:mt-8 max-w-5xl mx-auto w-full">
        <DefTable
          rows={rows}
          headers={['in the terminal', 'in Python', 'what you get back']}
          accent="green"
        />
      </div>

      <SlideNote>
        One import gets you all of it: <span className="font-mono">from pathlib import Path</span>
      </SlideNote>
    </>
  )
}
