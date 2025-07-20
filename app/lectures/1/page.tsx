import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture1Data } from '@/data/lectures/lecture1-slides'

export default function Lecture1Page() {
  return <SlideViewer lecture={lecture1Data} />
}