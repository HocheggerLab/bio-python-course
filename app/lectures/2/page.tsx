import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture2Data } from '@/data/lectures/lecture2-slides'

export default function Lecture2Page() {
  return <SlideViewer lecture={lecture2Data} />
}