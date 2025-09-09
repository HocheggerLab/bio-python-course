'use client'

import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture3Data } from '@/data/lectures/lecture3-slides'
import { PyodideProvider } from '@/contexts/PyodideContext'

export default function Lecture3Page() {
  return (
    <PyodideProvider>
      <SlideViewer lecture={lecture3Data} />
    </PyodideProvider>
  )
}