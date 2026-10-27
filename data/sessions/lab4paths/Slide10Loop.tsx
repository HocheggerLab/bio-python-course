import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'
import { CodeBox } from './CodeBox'

const CODE = `HERE = Path(__file__).parent
DATA_DIR = HERE / "sequences"

def read_fasta(path):
    """Read one FASTA file, return its DNA."""
    with open(path) as f:
        lines = f.read().splitlines()
    return "".join(lines[1:])

for fasta_file in sorted(DATA_DIR.glob("*.fasta")):
    species = fasta_file.stem
    dna = read_fasta(fasta_file)
    print(f"{species:<28} {len(dna)} bp")`

export function Slide10Loop() {
  return (
    <>
      <SlideTitle>
        Step 5 — Now <GradientText variant="green">all 99</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Same idea as <span className="font-mono text-white">peek.py</span> — wrapped in a function and a loop. Open{' '}
        <span className="font-mono text-white">fasta_loop.py</span>, read it, run it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <CodeBox label="fasta_loop.py — the important lines" color="green">{CODE}</CodeBox>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <TerminalBlock
            label="VS Code terminal"
            showToggle={false}
            mac={[
              { cmd: 'uv run fasta_loop.py' },
              { out: 'Aglaoapis_tridentata         621 bp' },
              { out: 'Amegilla_albigena            621 bp' },
              { out: '...' },
              { out: 'Xylocopa_violacea            621 bp' },
              { out: '' },
              { out: 'Read 99 sequences from sequences/' },
            ]}
          />
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              <span className="font-mono text-white">glob(&quot;*.fasta&quot;)</span> hands the loop only the FASTA
              files — so <span className="font-mono">README.md</span> never gets in. 99, not 100.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Four lines in the loop, 99 files read. Writing the analysis inside this loop is your homework.
      </SlideNote>
    </>
  )
}
