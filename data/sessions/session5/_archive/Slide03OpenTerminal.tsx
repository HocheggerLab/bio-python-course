import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardEyebrow, CardList } from '@/components/slides/SlideCard'

/* a small keycap, e.g. ⌘ or Win */
function Key({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] md:text-xs font-mono text-white leading-none align-middle">
      {children}
    </span>
  )
}

export function Slide03OpenTerminal() {
  return (
    <>
      <SlideTitle>
        Now for <GradientText>Real</GradientText> — Open Your Own Terminal
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        The sandbox was practice. Here&apos;s how to open the real thing on your own machine — the
        <strong className="text-white"> same commands</strong> work there.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* MAC */}
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">🍎 macOS</CardHeading>
          <CardList
            color="blue"
            numbered
            items={[
              <>Press <Key>⌘</Key> <Key>Space</Key> to open Spotlight</>,
              <>Type <span className="font-mono text-white">Terminal</span> and hit <Key>Return</Key></>,
              <>(or <span className="font-mono text-white">Applications → Utilities → Terminal</span>)</>,
            ]}
          />
          <CardBody className="mt-3 md:mt-4 text-xs md:text-sm">
            You&apos;ll see a prompt ending in <span className="font-mono text-white">%</span> — that&apos;s
            <span className="font-mono text-white"> zsh</span>, ready for a command.
          </CardBody>
        </SlideCard>

        {/* WINDOWS */}
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">⊞ Windows</CardHeading>
          <CardList
            color="green"
            numbered
            items={[
              <>Press the <Key>⊞ Win</Key> key (or click Start)</>,
              <>Type <span className="font-mono text-white">PowerShell</span> and hit <Key>Enter</Key></>,
              <>(or right-click Start → <span className="font-mono text-white">Terminal</span>)</>,
            ]}
          />
          <CardBody className="mt-3 md:mt-4 text-xs md:text-sm">
            Use <span className="font-mono text-white">PowerShell</span>, not the old{' '}
            <span className="font-mono text-white">Command Prompt</span> — <span className="font-mono text-white">ls</span>{' '}
            and <span className="font-mono text-white">cd</span> work the same as on a Mac there.
          </CardBody>
        </SlideCard>

      </div>

      {/* WARP PRO TIP */}
      <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4 mt-4 md:mt-5">
        <CardEyebrow color="yellow">Pro tip</CardEyebrow>
        <CardHeading size="sm" color="yellow" className="mt-1 mb-2 md:mb-3">
          One nicer terminal for both — <span className="font-mono">Warp</span>
        </CardHeading>
        <CardBody className="text-xs md:text-sm xl:text-base">
          <a href="https://www.warp.dev" target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline font-semibold">warp.dev</a>{' '}
          is a free, modern terminal that looks and works <strong>the same on Mac and Windows</strong> —
          with autocomplete and a built-in AI helper (think Gemini-in-Colab: a teacher, not a crutch).
          Download it, choose <span className="font-mono text-white">Skip for now</span> — no account
          needed to start. On a locked-down university laptop that won&apos;t let you install it?
          No problem — <strong>everything you just learned works exactly the same</strong> in the
          built-in terminal above.
        </CardBody>
      </SlideCard>
    </>
  )
}
