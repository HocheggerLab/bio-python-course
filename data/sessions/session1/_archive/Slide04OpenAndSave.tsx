import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink } from '../NotebookLink'

export function Slide04OpenAndSave() {
  return (
    <>
      <SlideTitle>
        Open, <GradientText>Save</GradientText>, Share
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">📥 Open a notebook</CardHeading>
          <CardList
            color="blue"
            numbered
            items={[
              <>Click an <span className="text-white font-semibold">Open in Colab</span> link on this site</>,
              <>Or paste a GitHub URL into <span className="font-mono text-white">File → Open notebook → GitHub</span></>,
              <>The notebook opens in <span className="text-white">read/run</span> mode</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">💾 Keep your work</CardHeading>
          <CardList
            color="green"
            numbered
            items={[
              <><span className="font-mono text-white">File → Save a copy in Drive</span></>,
              <>Your copy lives in <span className="text-white">My Drive / Colab Notebooks</span></>,
              <>Edits and outputs save automatically from now on</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">🔗 Share</CardHeading>
          <CardList
            color="yellow"
            numbered
            items={[
              <>Top-right <span className="text-white font-semibold">Share</span> button — works like Google Docs</>,
              <>Set link access to <span className="font-mono text-white">Anyone with the link</span></>,
              <>Great for getting help — paste the link in a message</>,
            ]}
          />
        </SlideCard>

      </div>

      <NotebookLink />
    </>
  )
}
