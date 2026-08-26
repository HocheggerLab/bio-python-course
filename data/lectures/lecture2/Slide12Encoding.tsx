import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const rows = [
  { ex: 'A G T C', kind: 'letters & digits (ASCII)', bits: '8 bits', note: '1 byte' },
  { ex: 'é  ñ  λ', kind: 'accents, Greek, Cyrillic', bits: '16 bits', note: '2 bytes' },
  { ex: '漢  字', kind: 'kanji / Chinese / Korean', bits: '24 bits', note: '3 bytes' },
  { ex: '🧬 🦠', kind: 'emoji', bits: '32 bits', note: '4 bytes' },
]

export function Slide12Encoding() {
  return (
    <>
      <SlideTitle>
        How Big Is a <GradientText>Character?</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 items-start">

        {/* LEFT — the encoding idea + the size table */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Every character is stored as bits
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              When text is saved or sent, each character is encoded as a pattern of bits. The
              worldwide standard is <strong>UTF-8</strong>, and it uses <em>more</em> bits for
              fancier characters.
            </CardBody>
          </SlideCard>

          <SlideCard color="neutral" layout="start" padding="compact" className="flex-1 min-h-0 overflow-auto">
            {rows.map((r) => (
              <div key={r.kind} className="grid grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4 py-1.5 md:py-2 border-b border-white/5 last:border-0">
                <div className="font-mono text-bio-blue text-sm md:text-xl xl:text-2xl">{r.ex}</div>
                <div className="text-gray-400 text-[11px] md:text-sm xl:text-base">{r.kind}</div>
                <div className="text-right">
                  <div className="font-mono text-bio-green text-xs md:text-base xl:text-lg">{r.bits}</div>
                  <div className="text-gray-500 text-[10px] md:text-xs">{r.note}</div>
                </div>
              </div>
            ))}
          </SlideCard>
        </div>

        {/* RIGHT — the biology punchline */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              A DNA base needs only 2 bits
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              With just four options, one base could be packed into{' '}
              <span className="font-mono text-bio-yellow">2 bits</span> (A=00, T=01, G=10, C=11).
              But as an ordinary text character it takes <strong>8</strong> — four times bigger
              than it needs to be. Across a 3-billion-base genome, that waste adds up.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              So… bits or letters?
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              For squeezing whole genomes into memory, specialised tools pack{' '}
              <strong>4 bases per byte</strong> with bit operations. But for learning — and for
              almost every working biologist — a plain, readable{' '}
              <span className="font-mono text-bio-green">ATGC</span> string is exactly the right
              tool. Clarity beats cleverness.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
