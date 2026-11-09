import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'

const DOCS = 'https://code.visualstudio.com/docs'

const links: { href: string; title: string; what: string }[] = [
  { href: `${DOCS}/getstarted/introvideos`, title: 'Introductory videos', what: 'Short official videos: the window, editing, extensions.' },
  { href: `${DOCS}/editing/getting-started/tips-and-tricks`, title: 'Tips and tricks', what: 'The shortcuts worth learning, with animations.' },
  { href: `${DOCS}/configure/settings`, title: 'User and workspace settings', what: 'Everything from the first slide, in full.' },
  { href: `${DOCS}/configure/themes`, title: 'Themes', what: 'Colour and icon themes, and how to install more.' },
  { href: `${DOCS}/python/python-tutorial`, title: 'Python in VS Code', what: 'Running, debugging and environments, step by step.' },
  { href: `${DOCS}/datascience/jupyter-notebooks`, title: 'Jupyter notebooks in VS Code', what: 'Exactly what you do in these labs.' },
  { href: `${DOCS}/datascience/data-science-tutorial`, title: 'Data science tutorial', what: 'A full pandas and plotting walk-through.' },
]

export function Slide04LearnMore() {
  return (
    <>
      <SlideTitle>
        Learn more, <GradientText>free</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        The official VS Code documentation is good, free, and kept up to date. Start with the videos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
        {links.map((l) => (
          <SlideCard key={l.href} href={l.href} external color="blue" layout="start" padding="compact">
            <CardHeading size="sm" color="blue" className="mb-1">
              {l.title} →
            </CardHeading>
            <p className="text-gray-300 text-sm md:text-base">{l.what}</p>
          </SlideCard>
        ))}
      </div>
    </>
  )
}
