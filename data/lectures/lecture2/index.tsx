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
import { Slide14TIYSliceCodons } from './Slide14TIYSliceCodons'
import { Slide15BuildingStrings } from './Slide15BuildingStrings'
import { Slide16StringMethods } from './Slide16StringMethods'
import { Slide17Transcription } from './Slide17Transcription'
import { Slide18TIYSequenceReport } from './Slide18TIYSequenceReport'
// Block 3 — Dictionaries
import { Slide19CodonTable } from './Slide19CodonTable'
import { Slide20DictExamples } from './Slide20DictExamples'
import { Slide21LookupByKey } from './Slide21LookupByKey'
import { Slide22KeyErrorGet } from './Slide22KeyErrorGet'
import { Slide23BuildingDicts } from './Slide23BuildingDicts'
import { Slide24TIYTranslate } from './Slide24TIYTranslate'
// Wrap-up
import { Slide25Recap } from './Slide25Recap'
import { Slide26Outlook } from './Slide26Outlook'

export const lecture2Data: LectureData = {
  id: 'lecture-2',
  title: 'From One Sequence to Many: Lists, Strings & Maps',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { id: 1, title: 'Recap — Session 1',         contentType: 'top', content: <Slide01Recap /> },
    { id: 2, title: 'From One Sequence to Many',  contentType: 'center', content: <Slide02ClaudiaHook /> },
    { id: 3, title: 'This Session — Containers',  contentType: 'center', content: <Slide03DataContainers /> },
    // ── Block 1: Lists ─────────────────────────────────────
    { id: 4, title: 'Lists',                      contentType: 'top', content: <Slide04Lists /> },
    { id: 5, title: 'Indexing & Slicing',         contentType: 'top', content: <Slide05IndexingSlicing /> },
    { id: 6, title: 'Growing a List',             contentType: 'top', content: <Slide06GrowingList /> },
    { id: 7, title: 'Editing a List',             contentType: 'top', content: <Slide07EditingList /> },
    { id: 8,  title: 'Lists Hold Anything',       contentType: 'top', content: <Slide08ListsHoldAnything /> },
    { id: 9,  title: 'Lists of Numbers',          contentType: 'top', content: <Slide09NumberLists /> },
    { id: 10, title: 'TIY — Clean data, find the mean', contentType: 'top', content: <Slide10TIYMean /> },
    // ── Block 2: Strings are sequences ─────────────────────
    { id: 11, title: 'A String Is a Sequence',    contentType: 'top', content: <Slide11StringIsSequence /> },
    { id: 12, title: 'How Big Is a Character?',   contentType: 'top', content: <Slide12Encoding /> },
    { id: 13, title: 'Slicing Out Codons',        contentType: 'top', content: <Slide13SlicingCodons /> },
    { id: 14, title: 'TIY — Slice the codons',    contentType: 'top', content: <Slide14TIYSliceCodons /> },
    { id: 15, title: 'Building Strings',          contentType: 'top', content: <Slide15BuildingStrings /> },
    { id: 16, title: 'String Methods',            contentType: 'top', content: <Slide16StringMethods /> },
    { id: 17, title: 'Transcription with .replace()', contentType: 'top', content: <Slide17Transcription /> },
    { id: 18, title: 'TIY — Profile a sequence', contentType: 'top', content: <Slide18TIYSequenceReport /> },
    // ── Block 3: Dictionaries ──────────────────────────────
    { id: 19, title: 'Dictionaries — a lookup table', contentType: 'top', content: <Slide19CodonTable /> },
    { id: 20, title: 'Dictionaries Are Everywhere', contentType: 'center', content: <Slide20DictExamples /> },
    { id: 21, title: 'Looking Up by Key',         contentType: 'top', content: <Slide21LookupByKey /> },
    { id: 22, title: 'KeyError & .get()',         contentType: 'top', content: <Slide22KeyErrorGet /> },
    { id: 23, title: 'Building & Checking',       contentType: 'top', content: <Slide23BuildingDicts /> },
    { id: 24, title: 'TIY — Translate by lookup', contentType: 'top', content: <Slide24TIYTranslate /> },
    // ── Wrap-up ────────────────────────────────────────────
    { id: 25, title: 'Recap — Lists, Strings & Maps', contentType: 'center', content: <Slide25Recap /> },
    { id: 26, title: 'What’s Next — Control Flow',     contentType: 'center', content: <Slide26Outlook /> },
  ],
}
