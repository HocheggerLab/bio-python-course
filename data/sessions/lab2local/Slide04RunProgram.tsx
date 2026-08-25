import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import TerminalBlock from '@/components/terminal/TerminalBlock'

const RAW =
  'https://raw.githubusercontent.com/HocheggerLab/y3-bio-python/main/lab02/translate_bee.py'

export function Slide04RunProgram() {
  return (
    <>
      <SlideTitle>
        Step 3 — <GradientText variant="green">Run a real program</GradientText> 🐝
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">

        {/* download */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base">
            Download the bumblebee gene translator into your folder:
          </p>
          <TerminalBlock
            label="Terminal"
            mac={[{ cmd: `curl -O ${RAW}` }, { out: 'translate_bee.py  ✔ downloaded' }]}
            windows={[{ cmd: `curl.exe -O ${RAW}` }, { out: 'translate_bee.py  ✔ downloaded' }]}
          />
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              It&apos;s the complete translator Claudia built in Lectures 1–4 — the genetic code, the
              clean-up, the safety checks — now a file you own.
            </CardBody>
          </SlideCard>
        </div>

        {/* run */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base">
            Run it — then press <span className="font-mono text-white">Enter</span> for the example gene:
          </p>
          <TerminalBlock
            label="Terminal"
            showToggle={false}
            mac={[
              { cmd: 'uv run translate_bee.py' },
              { out: '🐝  Bumblebee gene translator' },
              { comment: 'Paste a DNA sequence, or press Enter for the example.' },
              { comment: '> ' },
              { out: 'DNA     : ATGTTTGTT…GATTAA' },
              { out: 'Protein : MFVLTHGKPWELARIGNSVD' },
              { out: 'Length  : 20 amino acids' },
            ]}
          />
        </div>

      </div>
    </>
  )
}
