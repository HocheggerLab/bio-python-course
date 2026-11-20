import { LectureData } from '@/data/lectures/types'
// A 40-minute lecture (Nov 2026), then ten minutes to close the course.
// Continues lecture 7's SOX10 case: the figure said skin needs SOX10; is that
// real, or chance? Part 1, the plotting landscape and seaborn; Part 2, the
// p-value, Mann–Whitney and a reusable compare(). Then Pearson vs Spearman,
// and the MDM2/p53 clue that hands over to the project. Multiple testing was
// cut (Nov 2026): too much for the room; DataCamp stats courses instead. Every
// number on the slides was checked against public/data/depmap_lecture.csv.

import { SlideRecapL8, SlideTodayL8, SlideSeabornSection, SlideStatsSection } from './SlidesIntro'
import { SlideLandscape, SlidePandasPlot, SlideSeabornIdea, SlideSeabornBox } from './SlidesSeaborn'
import {
  SlideChance, SlidePValue, SlideWhichTest, SlideSciPy, SlideMannWhitney, SlideOneInTwenty,
  SlideSmallButSignificant, SlideWriteOnce,
} from './SlidesStats'
import { SlideCorrelation, SlideP53Hook, SlideCloseL8 } from './SlidesMany'
import {
  SlideQuiz1Opener, SlideQuiz1Q1, SlideQuiz1Q2, SlideQuiz1Q3,
  SlideQuiz2Opener, SlideQuiz2Q1, SlideQuiz2Q2, SlideQuiz2Q3,
} from './SlideQuizzes'
import { SlideCourseSection, SlideCourseLookBack, SlideWhereNext, SlideResources } from './SlidesCourse'

export const lecture8Data: LectureData = {
  id: 'lecture-8',
  title: 'Statistics — Is It Real?',
  slides: [
    { title: 'Last week you saw it', content: <SlideRecapL8 /> },
    { title: 'Today: is it real?', content: <SlideTodayL8 /> },

    // Part 1, ~12 min
    { title: 'Part 1 — Better figures, fewer lines', content: <SlideSeabornSection /> },
    { title: 'The plotting landscape', content: <SlideLandscape /> },
    { title: 'pandas: the table plots itself', content: <SlidePandasPlot /> },
    { title: 'seaborn: name the columns', content: <SlideSeabornIdea /> },
    { title: 'Three groups, every cell line shown', content: <SlideSeabornBox /> },
    { title: 'Quiz 1', content: <SlideQuiz1Opener /> },
    { title: 'Quiz 1 — Which library? (1)', content: <SlideQuiz1Q1 /> },
    { title: 'Quiz 1 — Which library? (2)', content: <SlideQuiz1Q2 /> },
    { title: 'Quiz 1 — Which library? (3)', content: <SlideQuiz1Q3 /> },

    // Part 2, ~16 min
    { title: 'Part 2 — Real, or chance?', content: <SlideStatsSection /> },
    { title: 'Chance makes differences too', content: <SlideChance /> },
    { title: 'What a p-value is', content: <SlidePValue /> },
    { title: 'Which test? Ask the data', content: <SlideWhichTest /> },
    { title: 'SciPy: the scientist’s toolbox', content: <SlideSciPy /> },
    { title: 'Skin vs the rest: mannwhitneyu', content: <SlideMannWhitney /> },
    { title: 'The 0.05 cut-off: 1 false alarm in 20', content: <SlideOneInTwenty /> },
    { title: 'Significant is not the same as big', content: <SlideSmallButSignificant /> },
    { title: 'Write it once, use it everywhere', content: <SlideWriteOnce /> },
    { title: 'One more clue: skin needs MDM2', content: <SlideP53Hook /> },
    { title: 'Quiz 2', content: <SlideQuiz2Opener /> },
    { title: 'Quiz 2 — Reading p', content: <SlideQuiz2Q1 /> },
    { title: 'Quiz 2 — Which test?', content: <SlideQuiz2Q2 /> },
    { title: 'Quiz 2 — What do you conclude?', content: <SlideQuiz2Q3 /> },

    // Correlation, then the close
    { title: 'Two columns: do they move together?', content: <SlideCorrelation /> },
    { title: 'What you can do now', content: <SlideCloseL8 /> },

    // Course close, 10 min
    { title: 'Looking back', content: <SlideCourseSection /> },
    { title: 'Eight weeks, one toolkit', content: <SlideCourseLookBack /> },
    { title: 'Where next? Two paths', content: <SlideWhereNext /> },
    { title: 'Where to learn more', content: <SlideResources /> },
  ],
}
