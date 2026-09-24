/**
 * The teaching pattern, which the table has to make obvious:
 * a lecture introduces a topic, and the *following* week's workshop practises
 * it. So Lab 1 sits in week 2, and the last lab lands a week after the last
 * lecture.
 */
export interface ScheduleWeek {
  week: number
  /** Lectures run weeks 1–8. */
  lecture?: { num: number; title: string }
  /** Workshops run weeks 2–11; the last two are project time. */
  workshop?: { num?: number; title: string }
  /** Deadlines and the in-class test. */
  assessment?: string
  /** Which project the workshop time is given over to. */
  projectWork?: string
}

export const scheduleData: ScheduleWeek[] = [
  {
    week: 1,
    lecture: { num: 1, title: 'Data Types, Variables and Basic Operations' },
  },
  {
    week: 2,
    lecture: { num: 2, title: 'From One Sequence to Many: Lists, Strings & Maps' },
    workshop: { num: 1, title: 'Setup & First Steps' },
  },
  {
    week: 3,
    lecture: { num: 3, title: 'Control Flow: Teaching a Program to Run Itself' },
    workshop: { num: 2, title: 'Lists, Strings & Maps' },
  },
  {
    week: 4,
    lecture: { num: 4, title: 'Algorithms, Functions & Defensive Programming' },
    workshop: { num: 3, title: 'Loops, Logic & VS Code' },
    projectWork: 'Project 1',
  },
  {
    week: 5,
    lecture: { num: 5, title: 'Arrays — One Neuron, Many Trials' },
    workshop: { num: 4, title: 'Functions, Errors & Files' },
    assessment: 'Test (15%) — sat in this workshop',
    projectWork: 'Project 1',
  },
  {
    week: 6,
    lecture: { num: 6, title: 'DataFrames — Who Pollinates Your Dinner?' },
    workshop: { num: 5, title: 'Arrays, numpy & Projects' },
    projectWork: 'Projects 1 & 2',
  },
  {
    week: 7,
    lecture: { num: 7, title: 'Plotting — Making Data Visible' },
    workshop: { num: 6, title: 'Explorative Data Analysis' },
    assessment: 'Project 1 due (15%)',
    projectWork: 'Projects 1 & 2',
  },
  {
    week: 8,
    lecture: { num: 8, title: 'LLMs & Agentic AI' },
    workshop: { num: 7, title: 'End-to-End Data Mining' },
    projectWork: 'Project 2',
  },
  {
    week: 9,
    workshop: { num: 8, title: 'LLMs & Agentic AI' },
    projectWork: 'Project 2',
  },
  {
    week: 10,
    workshop: { title: 'Project workshop' },
    projectWork: 'Project 2',
  },
  {
    week: 11,
    workshop: { title: 'Project workshop' },
    assessment: 'Project 2 due (70%)',
    projectWork: 'Project 2',
  },
]
