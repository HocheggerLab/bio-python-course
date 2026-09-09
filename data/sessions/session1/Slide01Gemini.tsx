import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { NotebookLink } from './NotebookLink'

export function Slide01Gemini() {
  return (
    <>
      <SlideTitle>
        Using <GradientText>Gemini</GradientText> in Colab
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Colab has a built-in AI assistant. Used well it&apos;s a brilliant tutor —
        used badly it does your thinking for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="red" layout="start" padding="compact">
          <CardHeading size="sm" color="red" className="mb-3 md:mb-4">🚫 Turn off autocomplete</CardHeading>
          <CardBody className="mb-3 md:mb-4">
            <span className="font-mono text-white">Tools → Settings → AI Assistance</span> →
            uncheck <span className="text-white font-semibold">Automatic code completions</span>.
          </CardBody>
          <CardBody>
            Ghost-text suggestions short-circuit your learning. You should write the
            line <span className="text-white">before</span> seeing the answer.
          </CardBody>
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">💬 Use it as a teacher</CardHeading>
          <CardList
            color="green"
            items={[
              <><span className="font-mono text-white">What does this error mean?</span></>,
              <><span className="font-mono text-white">How else could I solve this?</span></>,
              <><span className="font-mono text-white">How could I improve this?</span></>,
              <><span className="font-mono text-white">Explain this line to me.</span></>,
            ]}
          />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">🧠 Golden rule</CardHeading>
          <CardBody className="mb-3 md:mb-4">
            <span className="text-white font-semibold">Always try to get things working yourself first.</span>
          </CardBody>
          <CardBody>
            Then ask Gemini to <span className="text-white">explain</span>, <span className="text-white">critique</span>,
            or <span className="text-white">suggest alternatives</span>. Don&apos;t outsource your thinking.
          </CardBody>
        </SlideCard>

      </div>

      <NotebookLink />
    </>
  )
}
