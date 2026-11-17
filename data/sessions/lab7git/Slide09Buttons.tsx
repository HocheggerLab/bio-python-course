import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'

/* The GUI comes last on purpose. Shown first, it becomes the only way students
   meet git; shown after the commands, every button is a command they already
   know. VS Code's Source Control panel comes first because the VS Code route
   students already have it, in the same window as the terminal. */

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const map: [string, string][] = [
  ['the list of changed files', 'git status'],
  ['the tick box or + next to a file', 'git add'],
  ['the message box and Commit', 'git commit -m'],
  ['the History tab', 'git log'],
  ['clicking a file to see what changed', 'git diff'],
  ['Discard changes', 'git restore'],
  ['Push origin / Sync', 'git push'],
]

const links: { href: string; label: string; note: string }[] = [
  {
    href: 'https://code.visualstudio.com/docs/sourcecontrol/overview',
    label: 'VS Code · Source Control',
    note: 'already in your editor: the branch icon in the left sidebar',
  },
  {
    href: 'https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop',
    label: 'GitHub Desktop · Getting started',
    note: 'a separate app for macOS and Windows, from GitHub',
  },
]

export function Slide09Buttons() {
  return (
    <>
      <SlideTitle>
        Prefer buttons? <GradientText variant="green">Once the commands make sense</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        There are apps that do git with buttons. Each button runs one of the commands you typed
        today, so you can use them as a window onto your repo. Keep the commands, though.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="neutral" className="mb-3 md:mb-4">
            The button is the command
          </CardHeading>
          <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 md:gap-y-2 text-xs md:text-sm xl:text-base">
            {map.map(([button, command]) => (
              <div key={command} className="contents">
                <span className="text-gray-300">{button}</span>
                {k(command)}
              </div>
            ))}
          </div>
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            Two to try
          </CardHeading>
          <div className="flex flex-col gap-3 md:gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-bio-green/30 bg-bio-green/10 hover:bg-bio-green/20 px-4 py-2.5 transition-colors"
              >
                <span className="block text-bio-green font-semibold text-sm md:text-base xl:text-lg">
                  {l.label} →
                </span>
                <span className="block text-gray-400 text-xs md:text-sm xl:text-base">{l.note}</span>
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-4">
            The terminal is still the tool you will find on every server, in every tutorial and
            in every error message. If a button does something you did not expect,{' '}
            {k('git status')} and {k('git log')} will tell you what happened.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
