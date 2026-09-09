import { LectureData } from '@/data/lectures/types'
import { Slide01CourseProgramme } from './Slide01CourseProgramme'
import { Slide02HowCourseWorks } from './Slide02HowCourseWorks'
import { Slide03Assessment } from './Slide03Assessment'
import { Slide04Resources } from './Slide04Resources'
import { Slide05HowToLearn } from './Slide05HowToLearn'
import { Slide06ResponsibleAI } from './Slide06ResponsibleAI'
import { Slide07WhyProgramming } from './Slide07WhyProgramming'
import { Slide08WhyPython } from './Slide08WhyPython'
import { Slide09StoryOfPython } from './Slide09StoryOfPython'
import { Slide10StudyResources } from './Slide10StudyResources'
import { Slide11Roadmap } from './Slide11Roadmap'
import { Slide12Roadmap2 } from './Slide12Roadmap2'
import { Slide13CourseImprovements } from './Slide13CourseImprovements'
import { Slide15TodaysGoal } from './Slide15TodaysGoal'
import { Slide14HowWeWork } from './Slide14HowWeWork'
// Block 1 — Variables, print, built-ins, errors
import { Slide16Variables } from './Slide16Variables'
import { Slide17NamingVariables } from './Slide17NamingVariables'
import { Slide18Print } from './Slide18Print'
import { Slide19FStrings } from './Slide19FStrings'
import { Slide20BuiltinFunctions } from './Slide20BuiltinFunctions'
import { Slide21Errors } from './Slide21Errors'
import { Slide22CommonErrors } from './Slide22CommonErrors'
import { Slide23TIYFixErrors } from './Slide23TIYFixErrors'
// Block 2 — Data types, operators, GC calculator
import { Slide24DataTypes } from './Slide24DataTypes'
import { Slide25TypeFunction } from './Slide25TypeFunction'
import { Slide26Operators } from './Slide26Operators'
import { Slide27Division } from './Slide27Division'
import { Slide28CountMethod } from './Slide28CountMethod'
import { Slide29FinalDemo } from './Slide29FinalDemo'
import { Slide30TIYSpikeTrain } from './Slide30TIYSpikeTrain'
// Closing poll block — sits before the recap, so an overrun eats the summary
// (which is on the website anyway) rather than the only feedback we get.
import { Slide31PollBlockOpener } from './Slide31PollBlockOpener'
import { Slide32PollQ1 } from './Slide32PollQ1'
import { Slide33PollQ2 } from './Slide33PollQ2'
import { Slide34PollQ3 } from './Slide34PollQ3'
import { Slide35Recap } from './Slide35Recap'
import { Slide36Outlook } from './Slide36Outlook'

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
    { title: 'The Story of Python', content: <Slide09StoryOfPython /> },
    { title: 'How You’ll Study Python', content: <Slide10StudyResources /> },
    { title: 'Our Roadmap', content: <Slide11Roadmap /> },
    { title: 'Roadmap — Data Science', content: <Slide12Roadmap2 /> },
    { title: 'Improving This Module', content: <Slide13CourseImprovements /> },
    { title: "How We'll Work With Python", content: <Slide14HowWeWork /> },
    { title: "Session 1 — Today's Goal", content: <Slide15TodaysGoal /> },
    // ── Block 1: Variables · print · built-ins · errors ────
    { title: 'Variables', content: <Slide16Variables /> },
    { title: 'Naming Variables', content: <Slide17NamingVariables /> },
    { title: 'print()', content: <Slide18Print /> },
    { title: 'f-strings', content: <Slide19FStrings /> },
    { title: 'Built-in Functions', content: <Slide20BuiltinFunctions /> },
    { title: 'Errors Are Normal', content: <Slide21Errors /> },
    { title: 'Common Errors', content: <Slide22CommonErrors /> },
    { title: 'TIY — Fix the errors', content: <Slide23TIYFixErrors /> },
    // ── Block 2: Data types · operators · GC calculator ────
    { title: 'The Four Data Types', content: <Slide24DataTypes /> },
    { title: 'type()', content: <Slide25TypeFunction /> },
    { title: 'Arithmetic Operators', content: <Slide26Operators /> },
    { title: 'Division & Decimals', content: <Slide27Division /> },
    { title: 'Counting Characters — .count()', content: <Slide28CountMethod /> },
    { title: "Demo — Claudia's first report", content: <Slide29FinalDemo /> },
    { title: 'TIY — Spike train', content: <Slide30TIYSpikeTrain /> },
    // ── Closing poll block ────────────────────────────────
    { title: 'What stuck?', content: <Slide31PollBlockOpener /> },
    { title: 'Question 1 — f-strings', content: <Slide32PollQ1 /> },
    { title: 'Question 2 — types', content: <Slide33PollQ2 /> },
    { title: 'Question 3 — naming', content: <Slide34PollQ3 /> },
    // ── Close ─────────────────────────────────────────────
    { title: 'Recap', content: <Slide35Recap /> },
    { title: "What's Next", content: <Slide36Outlook /> },
  ],
}
