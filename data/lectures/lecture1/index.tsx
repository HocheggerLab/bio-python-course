import { LectureData } from '@/data/lectures/types'
import { Slide01CourseProgramme } from './Slide01CourseProgramme'
import { Slide02HowCourseWorks } from './Slide02HowCourseWorks'
import { Slide03Assessment } from './Slide03Assessment'
import { Slide04Resources } from './Slide04Resources'
import { Slide05HowToLearn } from './Slide05HowToLearn'
import { Slide06ResponsibleAI } from './Slide06ResponsibleAI'
import { Slide07WhyProgramming } from './Slide07WhyProgramming'
import { Slide08WhyPython } from './Slide08WhyPython'
import { Slide08aStoryOfPython } from './Slide08aStoryOfPython'
import { Slide08bStudyResources } from './Slide08bStudyResources'
import { Slide09Roadmap } from './Slide09Roadmap'
import { Slide09bRoadmap2 } from './Slide09bRoadmap2'
import { Slide09cCourseImprovements } from './Slide09cCourseImprovements'
import { Slide10TodaysGoal } from './Slide10TodaysGoal'
import { Slide11HowWeWork } from './Slide11HowWeWork'
// Block 1 — Variables, print, built-ins, errors
import { Slide14Variables } from './Slide14Variables'
import { Slide15NamingVariables } from './Slide15NamingVariables'
import { Slide16Print } from './Slide16Print'
import { Slide17FStrings } from './Slide17FStrings'
import { Slide18BuiltinFunctions } from './Slide18BuiltinFunctions'
import { Slide19Errors } from './Slide19Errors'
import { Slide20CommonErrors } from './Slide20CommonErrors'
import { Slide21TIYFixErrors } from './Slide21TIYFixErrors'
// Block 2 — Data types, operators, GC calculator
import { Slide22DataTypes } from './Slide22DataTypes'
import { Slide23TypeFunction } from './Slide23TypeFunction'
import { Slide24Operators } from './Slide24Operators'
import { Slide25Division } from './Slide25Division'
import { Slide26CountMethod } from './Slide26CountMethod'
import { Slide27FinalDemo } from './Slide27FinalDemo'
import { Slide28TIYSpikeTrain } from './Slide28TIYSpikeTrain'
// Closing poll block — sits before the recap, so an overrun eats the summary
// (which is on the website anyway) rather than the only feedback we get.
import { PollBlockOpener } from './PollBlockOpener'
import { PollQ1 } from './PollQ1'
import { PollQ2 } from './PollQ2'
import { PollQ3 } from './PollQ3'
import { Slide29Recap } from './Slide29Recap'
import { Slide30Outlook } from './Slide30Outlook'

export const lecture1Data: LectureData = {
  id: 'lecture-1',
  title: 'Data Types, Variables and Basic Operations',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Course Programme', content: <Slide01CourseProgramme /> },
    { title: 'How the Course Works', content: <Slide02HowCourseWorks /> },
    { title: 'Assessment & Exams', content: <Slide03Assessment /> },
    { title: 'Your Main Resources', content: <Slide04Resources /> },
    { title: 'How to Learn Programming', content: <Slide05HowToLearn /> },
    { title: 'Using AI Responsibly', content: <Slide06ResponsibleAI /> },
    { title: 'Why Should I Learn Programming?', content: <Slide07WhyProgramming /> },
    { title: 'Why Python?', content: <Slide08WhyPython /> },
    { title: 'The Story of Python', content: <Slide08aStoryOfPython /> },
    { title: 'How You’ll Study Python', content: <Slide08bStudyResources /> },
    { title: "How We'll Work With Python", content: <Slide11HowWeWork /> },
    { title: 'Our Roadmap', content: <Slide09Roadmap /> },
    { title: 'Roadmap — Data Science', content: <Slide09bRoadmap2 /> },
    { title: 'Improving This Module', content: <Slide09cCourseImprovements /> },
    { title: "Session 1 — Today's Goal", content: <Slide10TodaysGoal /> },
    // ── Block 1: Variables · print · built-ins · errors ────
    { title: 'Variables', content: <Slide14Variables /> },
    { title: 'Naming Variables', content: <Slide15NamingVariables /> },
    { title: 'print()', content: <Slide16Print /> },
    { title: 'f-strings', content: <Slide17FStrings /> },
    { title: 'Built-in Functions', content: <Slide18BuiltinFunctions /> },
    { title: 'Errors Are Normal', content: <Slide19Errors /> },
    { title: 'Common Errors', content: <Slide20CommonErrors /> },
    { title: 'TIY — Fix the errors', content: <Slide21TIYFixErrors /> },
    // ── Block 2: Data types · operators · GC calculator ────
    { title: 'The Four Data Types', content: <Slide22DataTypes /> },
    { title: 'type()', content: <Slide23TypeFunction /> },
    { title: 'Arithmetic Operators', content: <Slide24Operators /> },
    { title: 'Division & Decimals', content: <Slide25Division /> },
    { title: 'Counting Characters — .count()', content: <Slide26CountMethod /> },
    { title: "Demo — Claudia's first report", content: <Slide27FinalDemo /> },
    { title: 'TIY — Spike train', content: <Slide28TIYSpikeTrain /> },
    // ── Closing poll block ────────────────────────────────
    { title: 'What stuck?', content: <PollBlockOpener /> },
    { title: 'Question 1 — f-strings', content: <PollQ1 /> },
    { title: 'Question 2 — types', content: <PollQ2 /> },
    { title: 'Question 3 — naming', content: <PollQ3 /> },
    // ── Close ─────────────────────────────────────────────
    { title: 'Recap', content: <Slide29Recap /> },
    { title: "What's Next", content: <Slide30Outlook /> },
  ],
}
