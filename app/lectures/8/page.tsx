'use client'

import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture8Data } from '@/data/lectures/lecture8-slides'
import { PyodideProvider } from '@/contexts/PyodideContext'

export default function Lecture8Page() {
  return (
    <PyodideProvider>
      <SlideViewer lecture={lecture8Data} />
    </PyodideProvider>
  )
}
