import Image from 'next/image'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList, CardBody } from '@/components/slides/SlideCard'

const covered = [
  'Variables & assignment',
  'print() and f-strings',
  'Built-in functions — len(), round(), type()',
  'Reading errors — NameError, SyntaxError, TypeError',
  'Four data types — str, int, float, bool',
  'Arithmetic — +, -, *, /',
  '.count() — your first string method',
  'A working GC content calculator',
]

export function Slide35Recap() {
  return (
    <>
      <SlideTitle>
        Recap — <GradientText variant="green">Variables, Types and Operators</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* LEFT — recap cartoon */}
        <div className="relative min-h-0 rounded-xl overflow-hidden bg-white/5">
          <Image
            src="/1_29_recap.png"
            alt="Biology student smiling at her finished GC content program — checklist of today's concepts, the running code, and the GC formula."
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT — what they actually learned */}
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-5">
            Today you learned
          </CardHeading>
          <CardList items={covered} bullet="✓" color="green" />
          <CardBody className="mt-4 md:mt-6 italic text-gray-300">
            One step at a time — and you&apos;ve already written a real bioinformatics
            program. Take a break, grab a coffee. ☕
          </CardBody>
        </SlideCard>

      </div>
    </>
  )
}
