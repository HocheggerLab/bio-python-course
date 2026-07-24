import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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

export function Slide11Docstrings() {
  return (
    <>
      <SlideTitle>
        Say What It Does — <GradientText variant="yellow">docstrings</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              Reading code is hard
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Reading <strong>your own</strong> code is often harder. In six weeks you will open this
              file, find <span className="font-mono">reverse_complement(seq)</span>, and genuinely not
              remember whether it wanted DNA or RNA — or what it gave back.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Three quotes, right under the <span className="font-mono">def</span>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              A <span className="text-bio-yellow font-semibold">docstring</span> says what goes{' '}
              <strong>in</strong>, what comes <strong>out</strong>, and what the function is{' '}
              <em>for</em> — in English, for a human. It is not a comment: Python{' '}
              <strong>keeps</strong> it.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">help()</span> — where it shows up
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Every <span className="font-mono">help()</span> you&apos;ve ever run reads somebody&apos;s
              docstring. Write one and your function behaves like a{' '}
              <strong>real Python function</strong> — because now it is one.
            </CardBody>
          </SlideCard>

          <SlideCard color="neutral" layout="start" padding="tight">
            <CardBody className="text-[11px] md:text-sm">
              💡 A name says <em>what</em>. A docstring says <em>what it expects</em> — and that turns
              out to matter enormously when someone hands it a sequence full of{' '}
              <span className="font-mono text-red-400">N</span>s.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — you never wrote a help page, but you have one:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="460px"
              showLineNumbers
              description="Live demo — a docstring, and help() reading it back"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
