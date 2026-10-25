import { LectureData } from '@/data/lectures/types'
import { Slide01Functions } from './Slide01Functions'
import { Slide02RecapRange } from './Slide02RecapRange'
import { Slide03TryRange } from './Slide03TryRange'
import { Slide04RecapSlicing } from './Slide04RecapSlicing'
import { Slide05TrySlicing } from './Slide05TrySlicing'

export const lab4FunctionsData: LectureData = {
  id: 'lab-4-functions',
  title: 'Lab 4 · Functions',
  slides: [
    { title: 'Functions', content: <Slide01Functions /> },
    { title: 'Recap — range()', content: <Slide02RecapRange /> },
    { title: 'Try it — range()', content: <Slide03TryRange /> },
    { title: 'Recap — slicing', content: <Slide04RecapSlicing /> },
    { title: 'Try it — slicing', content: <Slide05TrySlicing /> },
  ],
}
