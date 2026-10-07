'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


const tasks: Step[] = [
  { label: 'Slice out the three codons (bases 0:3, 3:6, 6:9)', accent: 'yellow' },
  { label: 'Translate each one by looking it up: codon_table[codon1]', accent: 'yellow' },
]


const initialCode = `seq = "ATGGGTTAA"
codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}

# 1. Slice out the three codons
codon1 = ""
codon2 = ""
codon3 = ""

# 2. Translate each one — look it up in the table
aa1 = ""
aa2 = ""
aa3 = ""

print(f"Peptide: {aa1}-{aa2}-{aa3}")
`

const solution = `seq = "ATGGGTTAA"
codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}

# 1. Slice out the three codons
codon1 = seq[0:3]
codon2 = seq[3:6]
codon3 = seq[6:9]

# 2. Translate each one — look it up in the table
aa1 = codon_table[codon1]
aa2 = codon_table[codon2]
aa3 = codon_table[codon3]

print(f"Peptide: {aa1}-{aa2}-{aa3}")
`

const expectedOutput = `Peptide: Met-Gly-Stop`

const checks: StepCheck[] = [
  {
    label: 'codon1, codon2 and codon3 are the three codons',
    test: '[codon1, codon2, codon3] == [seq[0:3], seq[3:6], seq[6:9]]',
  },
  {
    label: 'aa1, aa2 and aa3 are their amino acids',
    test: '[aa1, aa2, aa3] == [codon_table[seq[i:i + 3]] for i in (0, 3, 6)]',
  },
]

const hints = [
  'Slice as in the strings block: codon1 = seq[0:3], codon2 = seq[3:6], codon3 = seq[6:9].',
  'Look up by key: aa1 = codon_table[codon1]. The codon is the key, the amino acid is the value.',
]

/**
 * The dictionary exercise as revision, for after the lecture. In the room
 * the dictionary ideas are asked as five polls (Slide24DictQuiz). .get()
 * and the missing codon moved to the Lab 2 notebook, so every codon here is
 * in the table.
 */
export function Slide24RevisionTranslate() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Translate by lookup</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span> It
          puts both halves of today together: <strong>slice</strong> each codon out of the sequence,
          then <strong>look it up</strong> in the table. Press Run and each step is checked for you.
        </>
      }
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        checks={checks}
        solution={solution}
        height="400px"
        description="Revision — translate three codons by lookup"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
