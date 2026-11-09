import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlideViewer from '@/components/lectures/SlideViewer'
import { LectureData } from '@/data/lectures/types'
import { lab6VsCodeData } from '@/data/sessions/lab6vscode'
import { lab6ExtrasData, lab6GroupbyData, lab6InspectSelectData } from '@/data/sessions/lab6pandas'

const sessionDecks: Record<string, LectureData> = {
  '1': lab6VsCodeData,
  '2': lab6InspectSelectData,
  '3': lab6GroupbyData,
  '4': lab6ExtrasData,
}

export function generateStaticParams() {
  return Object.keys(sessionDecks).map((id) => ({ id }))
}

export default async function Lab6SessionPage({
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
        href="/labs/6"
        className="fixed top-20 left-4 md:top-24 md:left-6 z-40 inline-flex items-center gap-2 rounded-full bg-bio-dark/80 backdrop-blur-md border border-bio-blue/30 text-bio-blue hover:bg-bio-blue/20 hover:text-bio-light-blue transition-colors px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-lg"
      >
        ← Lab 6
      </Link>
      <SlideViewer lecture={deck} />
    </>
  )
}
