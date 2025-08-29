'use client'

import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture2Data } from '@/data/lectures/lecture2-slides'
import { PyodideProvider } from '@/contexts/PyodideContext'

export default function Lecture2Page() {
  return (
    <PyodideProvider>
      <SlideViewer lecture={lecture2Data} />
    </PyodideProvider>
  )
}