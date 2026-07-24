import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'

/* Code lines, each tinted to match its flowchart node */
const codeLines: Array<{ text: string; bar: string; dim?: boolean }> = [
  { text: 'large = []', bar: 'border-white/40' },
  { text: 'for g in genomes:', bar: 'border-bio-blue' },
  { text: '    if g > 10000:', bar: 'border-bio-yellow' },
  { text: '        large.append(g)', bar: 'border-bio-green' },
  { text: 'print(large)', bar: 'border-white/40' },
]

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center text-gray-500 leading-none my-1">
      {label && <span className="text-[10px] md:text-xs italic text-gray-400 mb-0.5">{label}</span>}
      <span className="text-lg md:text-2xl">↓</span>
    </div>
  )
}

function FlowBox({
  color,
  children,
  className = '',
}: {
  color: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-lg border ${color} px-3 py-2 md:px-4 md:py-3 text-center w-full ${className}`}
    >
      {children}
    </div>
  )
}

export function Slide12bProgramFlow() {
  return (
    <>
      <SlideTitle>
        The Same Program, as a <GradientText>Flowchart</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* Left — the code, colour-matched line by line */}
        <div className="flex flex-col justify-center gap-4">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Five lines of code — but they don&apos;t run straight down. The colours show which line
            is which box on the right:
          </p>
          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4 font-mono text-sm md:text-base xl:text-lg">
            {codeLines.map((line) => (
              <div
                key={line.text}
                className={`border-l-4 ${line.bar} pl-3 py-1 whitespace-pre text-gray-200`}
              >
                {line.text}
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base">
            The <span className="text-bio-blue font-semibold">loop</span> runs the{' '}
            <span className="text-bio-yellow font-semibold">decision</span> once per genome — and
            only the ones that pass get{' '}
            <span className="text-bio-green font-semibold">kept</span>.
          </p>
        </div>

        {/* Right — the flowchart */}
        <div className="flex flex-col items-center justify-center min-h-0">
          <div className="w-full max-w-xs md:max-w-sm flex flex-col items-center">

            {/* START */}
            <FlowBox color="border-white/30 bg-white/5">
              <span className="font-mono text-gray-200 text-sm md:text-base">large = []</span>
              <span className="block text-[10px] md:text-xs text-gray-400 mt-0.5">
                start with an empty list
              </span>
            </FlowBox>

            <Arrow />

            {/* LOOP CONTAINER */}
            <div className="w-full rounded-xl border-2 border-bio-blue/50 bg-bio-blue/5 p-3 md:p-4">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="font-mono text-bio-blue text-xs md:text-sm font-semibold">
                  for each genome g
                </span>
                <span className="text-bio-blue text-sm md:text-base" title="repeats">
                  ↻ repeat
                </span>
              </div>

              {/* DECISION */}
              <FlowBox color="border-bio-yellow/50 bg-bio-yellow/10">
                <span className="font-mono text-bio-yellow text-sm md:text-base">g &gt; 10000 ?</span>
              </FlowBox>

              {/* TRUE / FALSE branches */}
              <div className="grid grid-cols-2 gap-2 md:gap-3 mt-2 md:mt-3">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-xs font-semibold text-bio-green mb-1">
                    True ↓
                  </span>
                  <FlowBox color="border-bio-green/50 bg-bio-green/10">
                    <span className="font-mono text-bio-green text-xs md:text-sm">
                      large.append(g)
                    </span>
                  </FlowBox>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1">
                    False ↓
                  </span>
                  <FlowBox color="border-white/15 bg-white/5">
                    <span className="font-mono text-gray-400 text-xs md:text-sm">skip it</span>
                  </FlowBox>
                </div>
              </div>
            </div>

            <Arrow label="when the list runs out" />

            {/* END */}
            <FlowBox color="border-white/30 bg-white/5">
              <span className="font-mono text-gray-200 text-sm md:text-base">print(large)</span>
              <span className="block text-[10px] md:text-xs text-bio-green/80 mt-0.5 font-mono">
                [48502, 29903]
              </span>
            </FlowBox>

          </div>
        </div>

      </div>
    </>
  )
}
