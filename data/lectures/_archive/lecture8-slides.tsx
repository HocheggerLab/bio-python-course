import { LectureData, Slide } from './types'
import { Slide01Intro, Slide02IntroToLLMs, Slide03ChatbotVsAgent } from './lecture8'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Introduction & Objectives",
    contentType: "center",
    component: Slide01Intro
  },
  {
    title: "Intro to LLMs",
    contentType: "top",
    component: Slide02IntroToLLMs
  },
  {
    title: "Chatbot vs Agent",
    contentType: "top",
    component: Slide03ChatbotVsAgent
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

export const lecture8Data: LectureData = {
  id: '8',
  title: 'LLMs and Agentic AI in Biology',
  slides
}
