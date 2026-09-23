import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02ClaudiaHook } from './Slide02ClaudiaHook'
import { Slide03DataContainers } from './Slide03DataContainers'
// Block 1 — Lists
import { Slide04Lists } from './Slide04Lists'
import { Slide05IndexingSlicing } from './Slide05IndexingSlicing'
import { Slide06GrowingList } from './Slide06GrowingList'
import { Slide07EditingList } from './Slide07EditingList'
import { Slide08ListsHoldAnything } from './Slide08ListsHoldAnything'
import { Slide09NumberLists } from './Slide09NumberLists'
import { Slide10TIYMean } from './Slide10TIYMean'
// Block 2 — Strings are sequences
import { Slide11StringIsSequence } from './Slide11StringIsSequence'
import { Slide12Encoding } from './Slide12Encoding'
import { Slide13SlicingCodons } from './Slide13SlicingCodons'
import { Slide15BuildingStrings } from './Slide15BuildingStrings'
import { Slide16StringMethods } from './Slide16StringMethods'
import { Slide17Transcription } from './Slide17Transcription'
import { Slide18TIYSequenceReport } from './Slide18TIYSequenceReport'
// Block 3 — Dictionaries
import { Slide19CodonTable } from './Slide19CodonTable'
import { Slide20DictExamples } from './Slide20DictExamples'
import { Slide21DictKeysAndValues } from './Slide21DictKeysAndValues'
import { Slide22LookupByKey } from './Slide22LookupByKey'
import { Slide23KeyErrorGet } from './Slide23KeyErrorGet'
import { Slide24BuildingDicts } from './Slide24BuildingDicts'
import { Slide25TIYTranslate } from './Slide25TIYTranslate'
// Wrap-up
import { Slide26Recap } from './Slide26Recap'
import { Slide27Outlook } from './Slide27Outlook'

export const lecture2Data: LectureData = {
  id: 'lecture-2',
  title: 'From One Sequence to Many: Lists, Strings & Maps',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Recap — Session 1', content: <Slide01Recap /> },
    { title: 'From One Sequence to Many', content: <Slide02ClaudiaHook /> },
    { title: 'This Session — Containers', content: <Slide03DataContainers /> },
    // ── Block 1: Lists ─────────────────────────────────────
    { title: 'Lists', content: <Slide04Lists /> },
    { title: 'Indexing & Slicing', content: <Slide05IndexingSlicing /> },
    { title: 'Growing a List', content: <Slide06GrowingList /> },
    { title: 'Editing a List', content: <Slide07EditingList /> },
    { title: 'Lists Hold Anything', content: <Slide08ListsHoldAnything /> },
    { title: 'Lists of Numbers', content: <Slide09NumberLists /> },
    { title: 'TIY — Clean data, find the mean', content: <Slide10TIYMean /> },
    // ── Block 2: Strings are sequences ─────────────────────
    { title: 'A String Is a Sequence', content: <Slide11StringIsSequence /> },
    { title: 'How Big Is a Character?', content: <Slide12Encoding /> },
    { title: 'Slicing Out Codons', content: <Slide13SlicingCodons /> },
    { title: 'Building Strings', content: <Slide15BuildingStrings /> },
    { title: 'String Methods', content: <Slide16StringMethods /> },
    { title: 'Transcription with .replace()', content: <Slide17Transcription /> },
    { title: 'TIY — Profile a sequence', content: <Slide18TIYSequenceReport /> },
    // ── Block 3: Dictionaries ──────────────────────────────
    { title: 'Dictionaries — a lookup table', content: <Slide19CodonTable /> },
    { title: 'Dictionaries Are Everywhere', content: <Slide20DictExamples /> },
    { title: 'Keys & Values', content: <Slide21DictKeysAndValues /> },
    { title: 'Looking Up by Key', content: <Slide22LookupByKey /> },
    { title: 'KeyError & .get()', content: <Slide23KeyErrorGet /> },
    { title: 'Building & Checking', content: <Slide24BuildingDicts /> },
    { title: 'TIY — Translate by lookup', content: <Slide25TIYTranslate /> },
    // ── Wrap-up ────────────────────────────────────────────
    { title: 'Recap — Lists, Strings & Maps', content: <Slide26Recap /> },
    { title: 'What’s Next — Control Flow', content: <Slide27Outlook /> },
  ],
}
