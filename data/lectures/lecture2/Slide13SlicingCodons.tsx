import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGCGTACGTAG"   # four codons, read in threes

print(seq[0:3])    # first codon — ATG is a start codon!
print(seq[3:6])    # second codon
print(seq[-3:])    # last codon — TAG is a stop codon!
`

const demoOutput = `ATG
CGT
TAG`

export function Slide13SlicingCodons() {
  return (
    <ConceptSlide
      title={<>Slicing Out <GradientText>Codons</GradientText></>}
      lead={
        <>
          A codon is a 3-base slice: <span className="font-mono">seq[0:3]</span> grabs the
          first three bases. Just like with lists, we slice with{' '}
          <span className="font-mono">[start:end]</span>, and the <strong>end is not
          included</strong>, so <span className="font-mono">0:3</span> gives positions 0, 1, 2.
        </>
      }
      note={
      <>Run it — then can you figure out how to slice the 3rd codon?</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="125px"
        description="Live demo — slicing codons"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
