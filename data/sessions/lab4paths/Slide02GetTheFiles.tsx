import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'
import { CodeBox } from './CodeBox'
import { LAB4_ZIP_PATH, LAB4_ZIP_URL } from './download'

const TREE = `lab4/
├── peek.py          look inside ONE file
├── fasta_loop.py    read ALL of them
└── sequences/
    ├── Aglaoapis_tridentata.fasta
    ├── Amegilla_albigena.fasta
    ├── ...           99 bees in total
    └── README.md     where the data came from`

export function Slide02GetTheFiles() {
  return (
    <>
      <SlideTitle>
        Step 2 — Get the <GradientText variant="green">files</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Download straight into your <span className="font-mono text-white">lab4</span> folder from the terminal —
        then nobody has to go hunting through Downloads.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <TerminalBlock
            label="VS Code terminal"
            mac={[
              { comment: '# 1. download' },
              { cmd: `curl -O ${LAB4_ZIP_URL}` },
              { comment: '# 2. unpack' },
              { cmd: 'tar -xf lab4.zip' },
              { comment: '# 3. look' },
              { cmd: 'ls sequences' },
            ]}
            windows={[
              { comment: '# 1. download — note curl.exe, not curl' },
              { cmd: `curl.exe -O ${LAB4_ZIP_URL}` },
              { comment: '# 2. unpack' },
              { cmd: 'tar -xf lab4.zip' },
              { comment: '# 3. look' },
              { cmd: 'ls sequences' },
            ]}
          />
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ⚠️ Terminal trouble? Download{' '}
              <a href={LAB4_ZIP_PATH} className="text-bio-yellow underline">
                lab4.zip
              </a>{' '}
              in the browser, unzip it, and drag the three items into the{' '}
              <span className="font-mono">lab4</span> folder in VS Code&apos;s Explorer.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <CodeBox label="what you should now have" color="green">{TREE}</CodeBox>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green">
              Checkpoint
            </CardHeading>
            <CardBody>
              The same three items appear in VS Code&apos;s <span className="text-white">Explorer</span> on the left.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        <span className="font-mono text-white">tar -xf</span> unzips on Mac <em>and</em> Windows — one command for
        everyone.
      </SlideNote>
    </>
  )
}
