/**
 * The one fixed question set, used by both rounds so the mid-course and final
 * answers can be compared directly. Covers lectures and labs together.
 *
 * Shared by the form and the validator. Changing an `id` orphans answers
 * already stored under the old one, so reword freely but rename with care.
 */

export const AGREEMENT = [
  'Strongly disagree',
  'Disagree',
  'Neutral',
  'Agree',
  'Strongly agree',
] as const

export interface RatingQuestion {
  id: string
  text: string
}

export interface ChoiceQuestion {
  id: string
  text: string
  options: readonly string[]
}

export interface CommentQuestion {
  id: string
  text: string
}

export const RATINGS: RatingQuestion[] = [
  { id: 'lecture_clarity', text: 'The lectures explain the Python ideas clearly.' },
  { id: 'lecture_interactive', text: 'The live polls and try-it-yourself exercises in lectures help me learn.' },
  { id: 'lab_notebooks', text: 'The lab notebooks are a good way to practise what the lecture introduced.' },
  { id: 'lab_level', text: 'Choosing basics or advanced in the labs lets me work at the right level.' },
  { id: 'lab_help', text: 'I can get help when I am stuck in a lab.' },
  { id: 'bio_examples', text: 'The biology examples make the programming feel relevant to my degree.' },
  { id: 'website', text: 'The course website makes it easy to find what I need.' },
  { id: 'confidence', text: 'I feel more confident writing Python than I did at the start of the course.' },
]

export const CHOICES: ChoiceQuestion[] = [
  {
    id: 'pace',
    text: 'The pace of the course is…',
    options: ['Too slow', 'A bit slow', 'About right', 'A bit fast', 'Too fast'],
  },
  {
    id: 'hours',
    text: 'Outside timetabled sessions, I spend about this long on the course each week:',
    options: ['Under 1 hour', '1–2 hours', '2–4 hours', 'More than 4 hours'],
  },
]

export const COMMENTS: CommentQuestion[] = [
  { id: 'helping', text: 'What is helping you learn most?' },
  { id: 'change', text: 'What one change would most improve the course?' },
  { id: 'other', text: 'Anything else you would like to tell us?' },
]

export const MAX_COMMENT_CHARS = 1500

/** Every field is optional: a half-filled form is better than none. */
export interface FeedbackAnswers {
  ratings: Record<string, number>
  choices: Record<string, number>
  comments: Record<string, string>
}

export const emptyAnswers = (): FeedbackAnswers => ({ ratings: {}, choices: {}, comments: {} })
