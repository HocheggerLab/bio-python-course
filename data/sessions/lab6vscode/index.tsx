import { LectureData } from '@/data/lectures/types'
import { Slide01WhereSettingsLive } from './Slide01WhereSettingsLive'
import { Slide02GhostText } from './Slide02GhostText'
import { Slide03Comfortable } from './Slide03Comfortable'
import { Slide04LearnMore } from './Slide04LearnMore'

export const lab6VsCodeData: LectureData = {
  id: 'lab-6-vscode-settings',
  title: 'Lab 6 · Make VS Code yours',
  slides: [
    { title: 'Where settings live', content: <Slide01WhereSettingsLive /> },
    { title: 'Turn off the ghost text', content: <Slide02GhostText /> },
    { title: 'Make it comfortable', content: <Slide03Comfortable /> },
    { title: 'Learn more, free', content: <Slide04LearnMore /> },
  ],
}
