import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlideViewer from '@/components/lectures/SlideViewer'
import { LectureData } from '@/data/lectures/types'
import { lab4FunctionsData } from '@/data/sessions/lab4functions'
import { lab4ErrorsData } from '@/data/sessions/lab4errors'
import { lab4PathsData } from '@/data/sessions/lab4paths'

const sessionDecks: Record<string, LectureData> = {
  '1': lab4FunctionsData,
  '2': lab4ErrorsData,
  '3': lab4PathsData,
}

export default async function Lab4SessionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const deck = sessionDecks[id]
  if (!deck) notFound()

  return (
    <>
      <Link
        href="/labs/4"
        className="fixed top-20 left-4 md:top-24 md:left-6 z-40 inline-flex items-center gap-2 rounded-full bg-bio-dark/80 backdrop-blur-md border border-bio-blue/30 text-bio-blue hover:bg-bio-blue/20 hover:text-bio-light-blue transition-colors px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-lg"
      >
        ← Lab 4
      </Link>
      <SlideViewer lecture={deck} />
    </>
  )
}
