import { LectureData } from '@/data/lectures/types'
import { Slide01WhyGit } from './Slide01WhyGit'
import { Slide02InitAndStatus } from './Slide02InitAndStatus'
import { Slide03AddCommit } from './Slide03AddCommit'
import { Slide04ReadingHistory } from './Slide04ReadingHistory'
import { Slide05Restore } from './Slide05Restore'
import { Slide06Gitignore } from './Slide06Gitignore'
import { Slide07GitHub } from './Slide07GitHub'
import { Slide08Branches } from './Slide08Branches'

/* The tech session for Lab 7: git on one local repo, for one person.
   Branching and merging are deliberately left out — with no collaborators a
   branch has no job to do, and a live merge conflict is the fastest way to
   leave a room frightened of git. The linear cycle plus git restore is what
   they will actually use; branches get three minutes and a course link. */

export const lab7GitData: LectureData = {
  id: 'lab-7-git',
  title: 'Lab 7 · Git: a lab notebook for code',
  slides: [
    { title: 'A lab notebook for code', content: <Slide01WhyGit /> },
    { title: 'init and status', content: <Slide02InitAndStatus /> },
    { title: 'The add, commit cycle', content: <Slide03AddCommit /> },
    { title: 'Reading the history', content: <Slide04ReadingHistory /> },
    { title: 'Undo: git restore', content: <Slide05Restore /> },
    { title: 'What not to commit', content: <Slide06Gitignore /> },
    { title: 'GitHub and push', content: <Slide07GitHub /> },
    { title: 'Branches: not today', content: <Slide08Branches /> },
  ],
}
