import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

export function Slide02GhostText() {
  return (
    <>
      <SlideTitle>
        Turn off the <GradientText>ghost text</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Same rule as Gemini in Colab: write the line yourself before you see an answer.
        There are two kinds of suggestion, and only one of them is AI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            ✅ Keep: the IntelliSense dropdown
          </CardHeading>
          <p className="text-gray-300 text-sm md:text-base">
            Type <span className="font-mono text-white">df.</span> and a list appears of methods that
            really exist, such as <span className="font-mono text-white">head</span> and{' '}
            <span className="font-mono text-white">groupby</span>. It looks things up for you; it
            doesn&apos;t write code for you. Leave it on.
          </p>
        </SlideCard>

        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
            🚫 Switch off: AI that writes the line
          </CardHeading>
          <p className="text-gray-300 text-sm md:text-base mb-3">
            The grey &quot;ghost&quot; code that appears ahead of your cursor, and the chat panel.
            In Settings, search <span className="text-white">disable AI features</span> and tick it:
          </p>
          <CodeBox label="settings.json" color="red">{`"chat.disableAIFeatures": true`}</CodeBox>
        </SlideCard>
      </div>

      <p className="text-center text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
        Later in the course, when you know what good code looks like, you can switch it back on. That is a
        decision for you to make on purpose, not a default.
      </p>
    </>
  )
}
