import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const rows = [
  { name: 'Bacteriophage λ', bp: 48502, pct: 100, tag: 'a phage!' },
  { name: 'SARS-CoV-2', bp: 29903, pct: 61.7, tag: '' },
  { name: 'HIV-1', bp: 9719, pct: 20, tag: '' },
  { name: 'Hepatitis B', bp: 3182, pct: 6.6, tag: '' },
]

export function Slide05GenomeReveal() {
  return (
    <>
      <SlideTitle>
        Which Genome Is <GradientText>Bigger</GradientText>?
      </SlideTitle>

      <div className="flex flex-col gap-3 md:gap-5 mt-3 md:mt-5 flex-1 min-h-0">

        <SlideCard color="neutral" layout="start" padding="compact">
          <CardBody>
            You just totalled those four numbers without really looking at them. Now look — the{' '}
            <strong>bacteriophage</strong> that infects bacteria dwarfs <strong>HIV</strong>. Ask
            most people and they&apos;d pick the human virus:
          </CardBody>
        </SlideCard>

        {/* genome size bars */}
        <div className="flex flex-col gap-2 md:gap-3 flex-1 min-h-0 justify-center">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center gap-2 md:gap-4">
              <div className="w-28 md:w-44 text-right text-xs md:text-base text-gray-300 shrink-0">
                {r.name}
              </div>
              <div className="flex-1 bg-white/5 rounded-full h-4 md:h-6 overflow-hidden">
                <div
                  className="h-full rounded-full bg-bio-green/60"
                  style={{ width: `${r.pct}%` }}
                />
              </div>
              <div className="w-24 md:w-32 text-left font-mono text-xs md:text-base text-gray-300 shrink-0">
                {r.bp.toLocaleString()} bp
                {r.tag && <span className="text-bio-green"> ← {r.tag}</span>}
              </div>
            </div>
          ))}
        </div>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Why? Genome economy
          </CardHeading>
          <CardBody className="text-xs md:text-sm xl:text-base">
            RNA viruses (SARS-CoV-2, HIV, flu) copy themselves <em>without</em> proofreading, so
            errors cap their genomes at roughly 30&nbsp;kb. To survive, they pack genes tightly —
            even <strong>overlapping</strong> them. Phage λ is a <strong>DNA</strong> virus: accurate
            copying lets it afford a far bigger genome. <em>Nasty to humans ≠ big.</em>
          </CardBody>
        </SlideCard>

      </div>
    </>
  )
}
