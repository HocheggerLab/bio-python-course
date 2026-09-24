import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlideViewer from '@/components/lectures/SlideViewer'
import { LectureData } from '@/data/lectures/types'
import { lab3LoopsData } from '@/data/sessions/lab3loops'
import { lab3IfElseData } from '@/data/sessions/lab3ifelse'
import { lab3VsCodeData } from '@/data/sessions/lab3vscode'

const sessionDecks: Record<string, LectureData> = {
  '1': lab3LoopsData,
  '2': lab3IfElseData,
  '3': lab3VsCodeData,
}

export default async function Lab3SessionPage({
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
        href="/labs/3"
        className="fixed top-20 left-4 md:top-24 md:left-6 z-40 inline-flex items-center gap-2 rounded-full bg-bio-dark/80 backdrop-blur-md border border-bio-blue/30 text-bio-blue hover:bg-bio-blue/20 hover:text-bio-light-blue transition-colors px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-lg"
      >
        ← Lab 3
      </Link>
      <SlideViewer lecture={deck} />
    </>
  )
}
