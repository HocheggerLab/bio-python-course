import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlideViewer from '@/components/lectures/SlideViewer'
import { LectureData } from '@/data/lectures/types'
import { lab5Arrays1DData } from '@/data/sessions/lab5arrays1d'
import { lab5Arrays2DData } from '@/data/sessions/lab5arrays2d'
import { lab5ProjectsData } from '@/data/sessions/lab5projects'

const sessionDecks: Record<string, LectureData> = {
  '1': lab5Arrays1DData,
  '2': lab5Arrays2DData,
  '3': lab5ProjectsData,
}

export default async function Lab5SessionPage({
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
        href="/labs/5"
        className="fixed top-20 left-4 md:top-24 md:left-6 z-40 inline-flex items-center gap-2 rounded-full bg-bio-dark/80 backdrop-blur-md border border-bio-blue/30 text-bio-blue hover:bg-bio-blue/20 hover:text-bio-light-blue transition-colors px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-lg"
      >
        ← Lab 5
      </Link>
      <SlideViewer lecture={deck} />
    </>
  )
}
