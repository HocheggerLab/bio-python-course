import { LectureData, Slide } from './types'
import {
  Step2IntroSlide,
  Step2CodeSlide,
  Step3IntroSlide,
  Step3CodeSlide,
  Step4IntroSlide,
  Step4CodeSlide,
  FinalResultSlide
} from './lecture1'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Scaling with Loops",
    contentType: "center",
    component: Step2IntroSlide
  },
  {
    title: "Loops: The Code",
    contentType: "center",
    component: Step2CodeSlide
  },
  {
    title: "Processing Many Values at Once",
    contentType: "center",
    component: Step3IntroSlide
  },
  {
    title: "Lists & For Loops: The Code",
    contentType: "center",
    component: Step3CodeSlide
  },
  {
    title: "Working with Real Data Files",
    contentType: "center",
    component: Step4IntroSlide
  },
  {
    title: "File I/O: The Code",
    contentType: "center",
    component: Step4CodeSlide
  },
  {
    title: "The Complete Solution",
    contentType: "center",
    component: FinalResultSlide
  }
]

const slides: Slide[] = slideDefinitions.map((def, index) => ({
  id: index + 1,
  title: def.title,
  contentType: def.contentType,
  content: <def.component />,
  ...(def.notes && { notes: def.notes }),
  ...(def.duration && { duration: def.duration })
}))

export const lecture2Data: LectureData = {
  id: '2',
  title: 'Lists, Loops & File I/O',
  slides
}