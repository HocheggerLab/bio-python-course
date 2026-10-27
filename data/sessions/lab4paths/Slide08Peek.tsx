import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import TerminalBlock from '@/components/terminal/TerminalBlock'
import { CodeBox } from './CodeBox'

const CODE = `from pathlib import Path

fasta_file = Path("sequences") / "Bombus_terrestris.fasta"

print("Exists?", fasta_file.exists())
print("Stem:  ", fasta_file.stem)

with open(fasta_file) as f:
    text = f.read()

lines = text.splitlines()
header = lines[0]
dna = "".join(lines[1:])`

export function Slide08Peek() {
  return (
    <>
      <SlideTitle>
        Step 4 — Peek inside <GradientText>one</GradientText> file
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Open <span className="font-mono text-white">peek.py</span> and read it — it&apos;s already written. Then run it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <CodeBox label="peek.py — the important lines" color="blue">{CODE}</CodeBox>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <TerminalBlock
            label="VS Code terminal"
            showToggle={false}
            mac={[
              { cmd: 'uv run peek.py' },
              { out: 'Exists?      True' },
              { out: 'Stem:        Bombus_terrestris' },
              { out: 'Header:        >Bombus_terrestris OR179434.1 COI' },
              { out: 'Length:        621 bases' },
            ]}
          />
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ✏️ <span className="text-white">Your one edit today:</span> change{' '}
              <span className="font-mono">Bombus_terrestris</span> to another bee from the folder. Save, run again.
            </CardBody>
          </SlideCard>
          <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              Spell it wrong on purpose. What does <span className="font-mono">Exists?</span> say — and what happens
              on the next line?
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
