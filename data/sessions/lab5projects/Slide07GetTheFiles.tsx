import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'
import { CodeBox } from './CodeBox'
import { LAB5_ZIP_PATH, LAB5_ZIP_URL } from './download'

const TREE = `lab5-neurons/
├── 01_numpy_small_data.ipynb          everyone starts here
├── 02_neuron_analysis_basics.ipynb    then this …
├── 02_neuron_analysis_advanced.ipynb  … or this
├── data/
│   ├── neuron_0588_20180828_5_lecture.csv
│   └── neuron_0406_20180620_8_lecture.csv
├── results/
└── sample.ipynb`

export function Slide07GetTheFiles() {
  return (
    <>
      <SlideTitle>
        Get this week&apos;s <GradientText variant="green">notebooks</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Same notebooks as Colab — now in your project. Run this in{' '}
        <span className="text-white">VS Code&apos;s terminal</span> (Terminal → New Terminal), which
        already opens inside <span className="font-mono text-white">lab5-neurons</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <TerminalBlock
            label="VS Code terminal"
            mac={[
              { comment: '# 1. download' },
              { cmd: `curl -O ${LAB5_ZIP_URL}` },
              { comment: '# 2. unpack — the CSVs land in data/' },
              { cmd: 'tar -xf lab5.zip' },
              { comment: '# 3. look' },
              { cmd: 'ls data' },
            ]}
            windows={[
              { comment: '# 1. download — note curl.exe, not curl' },
              { cmd: `curl.exe -O ${LAB5_ZIP_URL}` },
              { comment: '# 2. unpack — the CSVs land in data/' },
              { cmd: 'tar -xf lab5.zip' },
              { comment: '# 3. look' },
              { cmd: 'ls data' },
            ]}
          />
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ⚠️ Terminal trouble? Download{' '}
              <a href={LAB5_ZIP_PATH} className="text-bio-yellow underline">
                lab5.zip
              </a>{' '}
              in the browser, unzip it, and drag the three notebooks and the{' '}
              <span className="font-mono">data</span> folder into VS Code&apos;s Explorer.
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
              Three new notebooks in the Explorer, two CSVs inside{' '}
              <span className="font-mono text-white">data/</span>.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        The notebooks read from <span className="font-mono">data/</span> — and fetch the files
        themselves if they are missing, so they still work in Colab.
      </SlideNote>
    </>
  )
}
