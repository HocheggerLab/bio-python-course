/**
 * The three assessed pieces. Weightings sum to 100.
 *
 * Themes for both projects are still open — stated as TBC rather than left
 * blank, because "we have not decided" is information a student can act on
 * and an empty card is not.
 */
export interface AssessmentItem {
  id: string
  name: string
  weight: number
  week: number
  format: string
  covers: string
  submission: string
  detail: string[]
  tbc?: string
}

export const assessment: AssessmentItem[] = [
  {
    id: 'test',
    name: 'Test on Python fundamentals',
    weight: 15,
    week: 5,
    format: 'In-class MCQ test, 1 hour',
    covers: 'Weeks 1–4 — base Python',
    submission: 'Taken in-class (Thurs 3-5 pm workshop, Week 5)',
    detail: [
      'Master the fundamentals of Python before the project assignments.',
      'Prepare using the practice quizzes on Canvas.',
      'Multiple-choice pen-and-paper test, completed in-class rather than at home.',
      'Reasonable Adjustments are arranged in advance — you will be told where to sit.',
    ],
  },
  {
    id: 'project-1',
    name: 'Project 1 — Short programming assignment',
    weight: 15,
    week: 7,
    format: 'Take-home',
    covers: 'Weeks 1–4 — base Python',
    submission: 'Colab notebook + GitHub repository with your revisions',
    detail: [
      'A shorter project (15%) to help you learn the ropes.',
      'Understand the assessment format before starting Project 2 (70%).',
      'Receive feedback on your submitted work to improve your coding before Project 2.',
    ],
    tbc: 'Theme: a next-generation sequencing task — to be confirmed.',
  },
  {
    id: 'project-2',
    name: 'Project 2 — Final programming project',
    weight: 70,
    week: 11,
    format: 'Take-home',
    covers: 'The whole module, including the packages from Weeks 5–8',
    submission: 'Colab notebook + GitHub repository with your revisions',
    detail: [
      'The substantial piece of work: a real question, a real dataset, and your own analysis.',
      'Marked on the analysis and the code, so the repository history counts — commit as you go.',
    ],
    tbc: 'Theme: still being decided.',
  },
]
