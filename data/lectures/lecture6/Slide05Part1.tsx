import { SectionSlide } from '@/components/slides/layouts'

export function Slide05Part1() {
  return (
    <SectionSlide
      eyebrow="Part 1"
      title="A column is an array"
      accent="with a name"
      note="Working with messy tabular data of varied types, the reality of biology data..."
      action={
        <figure className="mt-2 md:mt-4">
          <div className="rounded-lg overflow-hidden ring-1 ring-white/10 w-[260px] md:w-[340px] xl:w-[420px] mx-auto">
            <img
              src="/L6-panda.jpg"
              alt="A giant panda sitting up, eating bamboo"
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="mt-2 text-gray-400 text-xs md:text-sm xl:text-base leading-relaxed max-w-lg mx-auto">
            Named after <span className="text-white">panel data</span>, not the bear — but nobody
            has ever resisted the pun.
            <br />
            <span className="text-gray-500 text-[10px] md:text-xs">
              KQuhen, Wikimedia Commons, CC BY-SA 4.0
            </span>
          </figcaption>
        </figure>
      }
    />
  )
}
