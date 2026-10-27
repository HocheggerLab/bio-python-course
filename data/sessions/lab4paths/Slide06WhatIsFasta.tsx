import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const FASTA = `>Bombus_terrestris OR179434.1 COI
TGATCAGGAATAATTGGTTCATCTATAAGATTATTAATTCGAATAGAATTAAGACATCCA
GGTATATGAATTAATAATGATCAAATTTATAATTCTTTAGTAACAAGACATGCATTTTTA
ATAATTTTTTTTATAGTTATACCTTTTATAATTGGTGGATTTGGAAATTATCTAATTCCA
...`

const parts: React.ReactNode[] = [
  <>
    <span className="text-white">Line 1</span> starts with <span className="font-mono text-white">&gt;</span> — the
    header: species, GenBank accession, gene.
  </>,
  <>
    <span className="text-white">Every other line</span> is DNA, wrapped at 60 letters. The line breaks mean nothing
    — to get the sequence back, you glue the lines together.
  </>,
  <>
    The <span className="text-white">file name</span> is data too:{' '}
    <span className="font-mono text-white">Genus_species.fasta</span>.
  </>,
]

export function Slide06WhatIsFasta() {
  return (
    <>
      <SlideTitle>
        Step 3 — Look <GradientText variant="yellow">before</GradientText> you code
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Click <span className="font-mono text-white">sequences/Bombus_terrestris.fasta</span> in the Explorer. A file
        is just text — VS Code opens it like any other.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <CodeBox label="Bombus_terrestris.fasta — the buff-tailed bumblebee" color="blue">
          {FASTA}
        </CodeBox>
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3">
            FASTA, in full
          </CardHeading>
          <CardList items={parts} bullet="▸" color="blue" />
        </SlideCard>
      </div>

      <SlideCard color="green" layout="start" padding="tight" className="mt-4 md:mt-6 border-l-4">
        <CardBody>
          🐝 All 99 files hold the <span className="text-white">same 621 bases</span> of one gene — COI, the
          &quot;barcode&quot; used to tell species apart — from 99 different bees.
        </CardBody>
      </SlideCard>

      <SlideNote>
        The <span className="font-mono text-white">README.md</span> in there is not a FASTA file — keep an eye on what
        happens to it later.
      </SlideNote>
    </>
  )
}
