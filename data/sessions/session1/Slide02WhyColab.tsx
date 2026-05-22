import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { NotebookLink } from './NotebookLink'

export function Slide02WhyColab() {
  return (
    <>
      <SlideTitle>
        Why <GradientText>Google Colab?</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">✅ What you get for free</CardHeading>
          <CardList
            color="green"
            items={[
              <>Python <span className="font-mono text-white">3.x</span> in your browser</>,
              <>NumPy, Pandas, Matplotlib <span className="text-white">pre-installed</span></>,
              <>Save & resume from <span className="text-white">Google Drive</span></>,
              <>Share a link the way you share a Doc</>,
              <>Optional <span className="font-mono text-white">GPU</span> for ML work</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">🪪 All you need</CardHeading>
          <CardBody className="mb-3 md:mb-4">
            A <span className="text-white font-semibold">Google account</span> and a browser. No
            install, no Python on your laptop, nothing to configure.
          </CardBody>
          <CardBody>
            Works the same on <span className="text-white">Windows, Mac, Chromebook</span> and even
            an <span className="text-white">iPad</span>.
          </CardBody>
          <a
            href="https://colab.research.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-auto rounded-full bg-bio-blue/20 hover:bg-bio-blue/30 border border-bio-blue/40 text-bio-blue font-semibold px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
          >
            colab.research.google.com →
          </a>
        </SlideCard>

      </div>

      <NotebookLink />
    </>
  )
}
