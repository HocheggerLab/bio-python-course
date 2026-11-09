import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const editor: React.ReactNode[] = [
  <>Open it: {k('Cmd ,')} on a Mac, {k('Ctrl ,')} on Windows</>,
  <>Type in the search box. Every setting has a name, so you never need to scroll</>,
  <><span className="text-white">User</span> tab: every folder you open · <span className="text-white">Workspace</span> tab: this project only</>,
]

export function Slide01WhereSettingsLive() {
  return (
    <>
      <SlideTitle>
        Where <GradientText>settings</GradientText> live
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Everything about VS Code can be changed, and it is all in one place. There are two ways in:
        the same settings, shown two ways.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            The Settings editor: search and tick
          </CardHeading>
          <CardList items={editor} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            settings.json: the same thing as text
          </CardHeading>
          <p className="text-gray-300 text-sm md:text-base mb-3">
            {k('Cmd/Ctrl Shift P')} → <span className="text-white">Preferences: Open User Settings (JSON)</span>.
            Handy for copying settings from a tutorial:
          </p>
          <CodeBox label="settings.json" color="yellow">{`{
  "editor.fontSize": 16,
  "files.autoSave": "afterDelay"
}`}</CodeBox>
        </SlideCard>
      </div>
    </>
  )
}
