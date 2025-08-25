import SlideViewer from '@/components/lectures/SlideViewer'
import { lecture3Data } from '@/data/lectures/lecture3-slides'

export default function Lecture3Page() {
  return <SlideViewer lecture={lecture3Data} />
}