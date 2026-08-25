import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_DICTS_BASICS } from './NotebookLink'

const lookup = [
  'Key → value pairs: codon_table = {"ATG": "Met", …}',
  'Look up by key: codon_table["ATG"] → "Met"',
  'Missing key → KeyError; use .get(codon, "?") to stay safe',
]

const build = [
  'Add or update: codon_table["TGG"] = "Trp"',
  'Search a key: "ATG" in codon_table → True / False',
  'Values can be numbers, lists, even other dicts',
]

export function Slide01Dicts() {
  return (
    <>
      <SlideTitle>
        Dictionaries — <GradientText>lookup tables</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">Look it up</CardHeading>
          <CardList items={lookup} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">Build &amp; check</CardHeading>
          <CardList items={build} bullet="▸" color="yellow" />
        </SlideCard>

      </div>

      <NotebookLink url={NOTEBOOK_DICTS_BASICS} label="Dictionaries — practice notebook" />
    </>
  )
}
