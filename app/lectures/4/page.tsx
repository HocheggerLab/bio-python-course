'use client'

import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture4Data } from '@/data/lectures/lecture4-slides'
import { PyodideProvider } from '@/contexts/PyodideContext'

export default function Lecture4Page() {
  return (
    <PyodideProvider>
      <SlideViewer lecture={lecture4Data} />
    </PyodideProvider>
  )
}