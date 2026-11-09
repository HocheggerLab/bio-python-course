import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const quick: React.ReactNode[] = [
  <><span className="text-white">Theme</span>: {k('Cmd/Ctrl K')}, then {k('Cmd/Ctrl T')}. Arrow through them and watch the editor change</>,
  <><span className="text-white">Zoom</span> the whole window: {k('Cmd/Ctrl +')} and {k('Cmd/Ctrl −')}</>,
  <><span className="text-white">Wrap long lines</span>: {k('Option Z')} (Mac) or {k('Alt Z')} (Windows)</>,
  <><span className="text-white">Can&apos;t find a command?</span> {k('Cmd/Ctrl Shift P')} searches all of them</>,
]

export function Slide03Comfortable() {
  return (
    <>
      <SlideTitle>
        Make it <GradientText>comfortable</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            Quick changes, no settings file
          </CardHeading>
          <CardList items={quick} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            A sensible starting point
          </CardHeading>
          <CodeBox label="settings.json" color="yellow">{`{
  "editor.fontSize": 15,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "files.autoSave": "afterDelay",
  "chat.disableAIFeatures": true
}`}</CodeBox>
          <p className="text-gray-400 text-xs md:text-sm mt-3">
            Auto save means a script always runs the version you see on screen.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
