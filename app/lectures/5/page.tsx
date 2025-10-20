'use client'

import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture5Data } from '@/data/lectures/lecture5-slides'
import { PyodideProvider } from '@/contexts/PyodideContext'

export default function Lecture5Page() {
  return (
    <PyodideProvider>
      <SlideViewer lecture={lecture5Data} />
    </PyodideProvider>
  )
}
