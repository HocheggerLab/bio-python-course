import { LectureData } from '@/data/lectures/types'
// Intro — the data, and why we need other people's code
import { Slide01Recap } from './Slide01Recap'
import { Slide02Part2 } from './Slide02Part2'
import { Slide03TodaysData } from './Slide03TodaysData'
import { Slide04ThisSession } from './Slide04ThisSession'
// 1 · Classes — the hotel and its reception (the API)
import { Slide05LaundryDIY, Slide05LaundryHotel } from './Slide05Laundry'
import { Slide06Objects } from './Slide06Objects'
// 2 · Borrow them — packages, through random
import { Slide07Packages } from './Slide07Packages'
import { Slide08RandomGame } from './Slide08RandomGame'
import { Slide09RandomQuestion } from './Slide09RandomQuestion'
import { Slide10RandomQuizOpener, Slide10RandomQ1, Slide10RandomQ2, Slide10RandomQ3 } from './Slide10RandomQuiz'
import { Slide11RevisionRandom } from './Slide11RevisionRandom'
// 3 · numpy — imports, speed, the array's reception, and the toolbox
import { Slide12PartNumpy } from './Slide12PartNumpy'
import { Slide13Imports } from './Slide13Imports'
import { Slide14WhyNotList } from './Slide14WhyNotList'
import { Slide15Speed } from './Slide15Speed'
import { Slide16NumpyApi } from './Slide16NumpyApi'
import { Slide17NumpyMenu } from './Slide17NumpyMenu'
import { Slide18Filter } from './Slide18Filter'
import { Slide19Where } from './Slide19Where'
import { Slide20NumpyQuizOpener, Slide20NumpyQ1, Slide20NumpyQ2, Slide20NumpyQ3 } from './Slide20NumpyQuiz'
import { Slide21RevisionNumpy } from './Slide21RevisionNumpy'
// 4 · The neuron: the experiment, the file, first arrays — the analysis itself is the lab (see forLab/)
import { Slide22PartNeuron } from './Slide22PartNeuron'
import { Slide23TheExperiment } from './Slide23TheExperiment'
import { Slide24Recording } from './Slide24Recording'
import { Slide25TheFile } from './Slide25TheFile'
import { Slide26FirstArray } from './Slide26FirstArray'
import { Slide27GoSignal } from './Slide27GoSignal'
import { Slide28ArrayQuizOpener, Slide28ArrayQ1, Slide28ArrayQ2, Slide28ArrayQ3 } from './Slide28ArrayQuiz'
import { Slide29RevisionArray } from './Slide29RevisionArray'
import { Slide30InTheLab } from './Slide30InTheLab'
import { Slide31ArrayVsList } from './Slide31ArrayVsList'
import { Slide32Recap } from './Slide32Recap'

export const lecture5Data: LectureData = {
  id: 'lecture-5',
  title: 'Arrays — One Neuron, Many Trials',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Part 1 Done — You Have Mastered the Basics', content: <Slide01Recap /> },
    { title: 'Part 2 — Python Meets Real Data', content: <Slide02Part2 /> },
    { title: "Today's Data — a Neuron Firing", content: <Slide03TodaysData /> },
    { title: 'This Session — Tools for Real Data', content: <Slide04ThisSession /> },
    // ── 1 · Classes ────────────────────────────────────────
    { title: 'Do It All Yourself', content: <Slide05LaundryDIY /> },
    { title: 'Hand It Over', content: <Slide05LaundryHotel /> },
    { title: 'Build the Simplest Object', content: <Slide06Objects /> },
    // ── 2 · Borrow them: random ────────────────────────────
    { title: "Borrow Other People's Classes", content: <Slide07Packages /> },
    { title: 'Roll the Dice — random', content: <Slide08RandomGame /> },
    { title: 'How Does random Actually Work?', content: <Slide09RandomQuestion /> },
    { title: "Quiz — Use random's reception", content: <Slide10RandomQuizOpener /> },
    { title: 'Quiz 1 — Call a method', content: <Slide10RandomQ1 /> },
    { title: 'Quiz 2 — Pass an argument', content: <Slide10RandomQ2 /> },
    { title: 'Quiz 3 — Read the docs', content: <Slide10RandomQ3 /> },
    { title: "Revision — Use random's Reception", content: <Slide11RevisionRandom /> },
    // ── 3 · numpy ──────────────────────────────────────────
    { title: 'numpy — a Class for Numbers', content: <Slide12PartNumpy /> },
    { title: 'Three Ways to Import', content: <Slide13Imports /> },
    { title: "A List Can't Do Arithmetic", content: <Slide14WhyNotList /> },
    { title: 'A Loop vs One numpy Call', content: <Slide15Speed /> },
    { title: "The Array's Reception", content: <Slide16NumpyApi /> },
    { title: 'What an Array Can Do', content: <Slide17NumpyMenu /> },
    { title: 'Boolean Filtering — Keep What Passes', content: <Slide18Filter /> },
    { title: 'Where Is It? — argmax and np.where', content: <Slide19Where /> },
    { title: 'Quiz — The numpy toolbox', content: <Slide20NumpyQuizOpener /> },
    { title: 'Quiz 1 — Filter', content: <Slide20NumpyQ1 /> },
    { title: 'Quiz 2 — Where?', content: <Slide20NumpyQ2 /> },
    { title: 'Quiz 3 — Where is the biggest?', content: <Slide20NumpyQ3 /> },
    { title: 'Revision — The numpy Toolbox', content: <Slide21RevisionNumpy /> },
    // ── 4 · The neuron ─────────────────────────────────────
    { title: 'Back to the Mouse — One Neuron, Many Trials', content: <Slide22PartNeuron /> },
    { title: 'The Experiment — Touching a Whisker', content: <Slide23TheExperiment /> },
    { title: 'The Trace, With the Signals Marked', content: <Slide24Recording /> },
    { title: 'What Is Actually In the File', content: <Slide25TheFile /> },
    { title: 'Your First Array', content: <Slide26FirstArray /> },
    { title: 'Your Second Array — the go Signal', content: <Slide27GoSignal /> },
    { title: 'Quiz — Interrogate the array', content: <Slide28ArrayQuizOpener /> },
    { title: 'Quiz 1 — Import numpy', content: <Slide28ArrayQ1 /> },
    { title: 'Quiz 2 — Frames or trials?', content: <Slide28ArrayQ2 /> },
    { title: 'Quiz 3 — The highest value', content: <Slide28ArrayQ3 /> },
    { title: 'Revision — Interrogate the Array', content: <Slide29RevisionArray /> },
    { title: 'In the Lab — Does It Tell go From nogo?', content: <Slide30InTheLab /> },
    { title: 'List or Array?', content: <Slide31ArrayVsList /> },
    { title: 'What You Can Do Now', content: <Slide32Recap /> },
  ],
}
