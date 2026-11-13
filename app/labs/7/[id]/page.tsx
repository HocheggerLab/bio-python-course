import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlideViewer from '@/components/lectures/SlideViewer'
import { LectureData } from '@/data/lectures/types'
import { lab7GitData } from '@/data/sessions/lab7git'
import { lab7DepMapData } from '@/data/sessions/lab7depmap'

const sessionDecks: Record<string, LectureData> = {
  '1': lab7GitData,
  '2': lab7DepMapData,
}

export function generateStaticParams() {
  return Object.keys(sessionDecks).map((id) => ({ id }))
}

export default async function Lab7SessionPage({
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
        href="/labs/7"
        className="fixed top-20 left-4 md:top-24 md:left-6 z-40 inline-flex items-center gap-2 rounded-full bg-bio-dark/80 backdrop-blur-md border border-bio-blue/30 text-bio-blue hover:bg-bio-blue/20 hover:text-bio-light-blue transition-colors px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-lg"
      >
        ← Lab 7
      </Link>
      <SlideViewer lecture={deck} />
    </>
  )
}
