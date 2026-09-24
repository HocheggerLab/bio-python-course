import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def reverse_complement(seq):
    """Return the reverse complement of a DNA sequence.

    Args:
        seq: A DNA sequence made of A, T, G and C.

    Returns:
        The reverse complement, read 5' to 3'.
    """
    complement = {"A": "T", "T": "A", "G": "C", "C": "G"}
    rc = ""
    for base in seq[::-1]:
        rc = rc + complement[base]
    return rc

# Python keeps it for you — and hands it back on request
help(reverse_complement)
`

const demoOutput = `Help on function reverse_complement in module __main__:

reverse_complement(seq)
    Return the reverse complement of a DNA sequence.

    Args:
        seq: A DNA sequence made of A, T, G and C.

    Returns:
        The reverse complement, read 5' to 3'.`

export function Slide16Docstrings() {
  return (
    <ConceptSlide
      title={<>Say What It Does — <GradientText variant="yellow">docstrings</GradientText></>}
      pointsLayout="rows"
      points={
      <>
        <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-1">
            Reading code is hard
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Reading <strong>your own</strong> code is often harder. In six weeks you will open this
            file, find <span className="font-mono">reverse_complement(seq)</span>, and genuinely not
            remember whether it wanted DNA or RNA — or what it gave back.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-1">
            Three quotes, right under the <span className="font-mono">def</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            A <span className="text-bio-yellow font-semibold">docstring</span> says what goes{' '}
            <strong>in</strong>, what comes <strong>out</strong>, and what the function is{' '}
            <em>for</em> — in English, for a human. It is not a comment: Python{' '}
            <strong>keeps</strong> it.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-1">
            <span className="font-mono">help()</span> — where it shows up
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Every <span className="font-mono">help()</span> you&apos;ve ever run reads somebody&apos;s
            docstring. Write one and your function behaves like a{' '}
            <strong>real Python function</strong> — because now it is one.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — you never wrote a help page, but you have one:</>}
      closing={
        <SlideCard color="neutral" layout="start" padding="tight" className="border-l-4">
          <CardBody className="text-sm md:text-base xl:text-lg">
            A name says <em>what</em>. A docstring says <em>what it expects</em> — and that turns
        out to matter enormously when someone hands it a sequence full of{' '}
        <span className="font-mono text-red-400">N</span>s.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="226px"
        description="Live demo — a docstring, and help() reading it back"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
