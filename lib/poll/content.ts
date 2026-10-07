/**
 * Question wording, shared by the phone page and the lecture slide.
 *
 * Deliberately free of answers: this module is imported by client components,
 * so anything in here ships to the browser. `correctIndex` lives next door in
 * questions.ts, which only the server imports.
 *
 * Naming: `<lecture>-p<n>` is the code question inside part n; `<lecture>-r<n>`
 * is a recall question in the closing block. One code poll per part keeps the
 * interruptions to three an hour.
 */
export interface PollContent {
  /** The question, as the student reads it on their phone. */
  prompt: string
  /** Optional code block shown above the options. */
  code?: string
  /** Rendered mono when every option is code. */
  optionsAreCode?: boolean
  options: string[]
}

export const POLL_CONTENT: Record<string, PollContent> = {
  /* Try-it-Yourself polls. Unlike the recall questions these are asked while
     the room is still typing, so the options are the answers the exercise
     actually produces — each wrong one is a specific mistake a student makes,
     not a plausible-looking number. Verified against CPython. */

  /* The list exercise, one step per question, asked in the room; the code
     itself is left as a revision exercise for after the lecture. Each
     question builds on the last, starting from plain indexing so complete
     beginners get a gentle first tap. Every wrong option is a real mistake:
     counting from 1, round brackets, assigning instead of deleting. */
  'l2-t1a': {
    prompt: 'Which gives you the third reading, 88?',
    code: 'readings = [42, 17, 88, 63, 29, ...]',
    optionsAreCode: true,
    options: ['readings[3]', 'readings[2]', 'readings[1]', 'readings(2)'],
  },
  'l2-t1b': {
    prompt: 'The 2nd reading (17) was a pipetting error. Which line removes it?',
    code: 'readings = [42, 17, 88, 63, 29, ...]',
    optionsAreCode: true,
    options: ['del readings[2]', 'readings[1] = 0', 'del readings[1]', 'del readings(1)'],
  },
  'l2-t1c': {
    prompt: 'A late replicate came in. Which line adds 19 to the end?',
    optionsAreCode: true,
    options: ['readings.append(19)', 'readings.append[19]', 'readings + 19', 'readings[20] = 19'],
  },
  'l2-t1d': {
    prompt: 'We started with 20 readings. After both edits, what is len(readings)?',
    code: 'del readings[1]\nreadings.append(19)\nprint(len(readings))',
    options: ['19', '21', '20', '18'],
  },
  'l2-t1e': {
    prompt: 'Which line gives the mean, rounded to 1 decimal place?',
    optionsAreCode: true,
    options: [
      'round(sum(readings) // len(readings), 1)',
      'round(sum(readings) / len(readings), 1)',
      'round(sum(readings) / 20)',
      'readings.sum() / readings.len()',
    ],
  },

  /* The whole exercise turns on cleaning first. On the raw lower-case string
     .count("G") is 0 and .find("GAATTC") is -1, so skipping step 1 is visible
     in the answer rather than merely wrong. */
  'l2-t2': {
    prompt: 'What GC count and EcoRI position did your report show?',
    options: [
      'GC 8, EcoRI at 9',
      'GC 0, EcoRI at -1',
      'GC 8, EcoRI at 10',
      'GC 10, EcoRI at 9',
    ],
  },

  /* CGT is deliberately absent from the table: .get returns "?" where [] would
     raise KeyError. Picking Arg means translating from memory, not from the
     dictionary in front of them. */
  'l2-t3': {
    prompt: 'What peptide did you get?',
    optionsAreCode: true,
    options: ['Met-?-Stop', 'Met-Arg-Stop', 'Met-Gly-Stop', 'KeyError'],
  },

  /* Every wrong option here is the right number in the wrong unit -- days,
     hours, seconds. Rounding makes no difference to this data, so a units
     slip is the only mistake the exercise can actually produce. */
  'l3-t1': {
    prompt: 'What was your total incubation time, in minutes?',
    options: ['31392', '523.2', '21.8', '1883520'],
  },

  /* Six sequences in, four divisible by 3. Answering 6 means the filter never
     ran; answering 2 means the test was inverted. */
  'l3-t2': {
    prompt: 'How many sequences are ready to translate?',
    options: ['4', '6', '2', '3'],
  },

  /* Same 60 bases, read one base over. Option B is frame 0 -- picking it means
     the loop still starts at 0 rather than at `frame`, which is the one line
     the exercise is about. */
  'l3-t3': {
    prompt: 'What protein did frame 1 give you?',
    optionsAreCode: true,
    options: [
      'MVRWTLWDTLAFLLLLSLL',
      'YGTLDFVGYPRFPAPVEFIA',
      'MVRWTLWDTLAFLLLLSLL?',
      'YGTLDFVGYPRFPAPVEFI',
    ],
  },

  /* Part 1 — grown out of the two-strains exercise. The bug is silent apart
     from a warning: both lines draw, the legend is simply empty. */
  'l7-p1': {
    prompt:
      'Both growth curves are drawn, but the legend comes out empty. Which change fixes it?',
    code: `fig, ax = plt.subplots()
ax.plot(time_h, fast)
ax.plot(time_h, slow)
ax.legend()`,
    optionsAreCode: true,
    options: [
      'ax.legend(loc="upper left")',
      'ax.plot(time_h, fast, label="fast")',
      'ax.set_legend(["fast", "slow"])',
      'ax.labels("fast", "slow")',
    ],
  },


  /* Lecture 1 closing block — three recall questions, asked before the recap
     so an overrun eats the summary (which is on the website) rather than the
     only feedback we get. Each maps onto a bug in the Lab 1 notebooks, so the
     lecture and the lab reinforce the same three mistakes. */
  'l1-r1': {
    prompt: 'Which line prints  Sample S-014 has pH 7.4  ?',
    code: `sample = "S-014"
ph = 7.4`,
    optionsAreCode: true,
    options: [
      'print("Sample {sample} has pH {ph}")',
      'print(f"Sample {sample} has pH {ph}")',
      'print("Sample $sample has pH $ph")',
      'print(f"Sample {{sample}} has pH {{ph}}")',
    ],
  },
  'l1-r2': {
    prompt: 'A reading comes back from a file as "3.14", with the quotes. What does type() say it is?',
    code: 'print(type("3.14"))',
    optionsAreCode: true,
    options: ["<class 'float'>", "<class 'str'>", "<class 'int'>", "<class 'decimal'>"],
  },
  'l1-r3': {
    prompt: 'Which of these is a variable name Python will accept?',
    optionsAreCode: true,
    options: ['2nd_sample', 'buffer ph', 'buffer_ph', '.count'],
  },

  /* Closing recall block. */
  'l7-r1': {
    prompt:
      'You have made a figure with fig, ax = plt.subplots(). Which line gives that panel a title?',
    optionsAreCode: true,
    options: [
      'plt.set_title("Growth")',
      'fig.set_title("Growth")',
      'ax.set_title("Growth")',
      'ax.title("Growth")',
    ],
  },

  /* Probes the distinction the whole of Part 2 hangs on. The three wrong
     answers are all measured on a scale; only the lineage is a label. */
  'l7-r2': {
    prompt: 'Which of these columns holds categorical data?',
    options: [
      'SOX10 dependency score',
      'Cancer lineage — Skin, Lung, Bowel…',
      'Cell doubling time, in hours',
      'Gene expression, in TPM',
    ],
  },

  /* One continuous column and nothing to split it by — the histogram case.
     Every distractor needs something the question does not give you: a second
     column, a category, or groups. */
  'l7-r3': {
    prompt:
      'You have SOX10 expression for all 1,165 cell lines — one column, 1,165 numbers, nothing else. Which method?',
    optionsAreCode: true,
    options: [
      'ax.scatter(x, y)',
      'ax.barh(names, values)',
      'ax.hist(values)',
      'ax.boxplot(groups)',
    ],
  },
}

export function getContent(id: string): PollContent | undefined {
  return Object.prototype.hasOwnProperty.call(POLL_CONTENT, id)
    ? POLL_CONTENT[id]
    : undefined
}
