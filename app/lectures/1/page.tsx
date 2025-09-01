'use client'

import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture1Data } from '@/data/lectures/lecture1-slides'
import { PyodideProvider } from '@/contexts/PyodideContext'

export default function Lecture1Page() {
  return (
    <PyodideProvider>
      <SlideViewer lecture={lecture1Data} />
    </PyodideProvider>
  )
}