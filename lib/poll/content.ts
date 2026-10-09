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

  /* The strings exercise, one step per question, like the list block above.
     Every wrong option is a real mistake, checked in CPython: forgetting the
     brackets on a method, counting from 1, treating the slice end as
     included, searching the messy lower-case dna instead of clean. */
  'l2-t2a': {
    prompt: 'Which line stores an upper-case copy of the sequence in clean?',
    code: 'dna = "atgcgtacggaattcaaatag"',
    optionsAreCode: true,
    options: [
      'clean = dna.upper',
      'clean = upper(dna)',
      'clean = dna.upper()',
      'clean = dna.UPPER()',
    ],
  },
  'l2-t2b': {
    prompt: 'How would you print the number of bases in the sequence?',
    code: 'clean = "ATGCGTACGGAATTCAAATAG"',
    optionsAreCode: true,
    options: [
      'print(len(clean))',
      'print(clean.length())',
      'print(length(clean))',
      'print(clean.count())',
    ],
  },
  'l2-t2c': {
    prompt: 'Which slice gives you the first codon, ATG?',
    code: 'clean = "ATGCGTACGGAATTCAAATAG"',
    optionsAreCode: true,
    options: [
      'clean[1:4]',
      'clean[0:3]',
      'clean[0:2]',
      'clean[3]',
    ],
  },
  'l2-t2d': {
    prompt: 'Which line counts all the G and C bases?',
    optionsAreCode: true,
    options: [
      'clean.count("GC")',
      'dna.count("G") + dna.count("C")',
      'clean.count("G", "C")',
      'clean.count("G") + clean.count("C")',
    ],
  },
  'l2-t2e': {
    prompt: 'How can you locate the starting position of the EcoRI site?',
    code: 'clean = "ATGCGTACGGAATTCAAATAG"',
    optionsAreCode: true,
    options: [
      '"GAATTC" in clean',
      'clean.search("GAATTC")',
      'clean.find("GAATTC")',
      'find(clean, "GAATTC")',
    ],
  },

  /* The dictionary block, as five concept checks rather than the steps of
     one exercise. .get() and adding/updating entries moved to the Lab 2
     notebook, so nothing here relies on them. */
  'l2-t3a': {
    prompt: 'Which line makes a dictionary that maps "ATG" to "Met"?',
    optionsAreCode: true,
    options: ['["ATG": "Met"]', '{"ATG", "Met"}', '{"ATG": "Met"}', '{"ATG" = "Met"}'],
  },
  'l2-t3b': {
    prompt: 'How many entries does the codon table have?',
    code: 'codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}\nprint(len(codon_table))',
    options: ['6', '3', '1'],
  },
  'l2-t3c': {
    prompt: 'Which line gives you "Gly"?',
    code: 'codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}',
    optionsAreCode: true,
    options: ['codon_table["GGT"]', 'codon_table[1]', 'codon_table["Gly"]', 'codon_table("GGT")'],
  },
  'l2-t3d': {
    prompt: 'Which line shows all the amino acids in the table?',
    code: 'codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}',
    optionsAreCode: true,
    options: ['codon_table.keys()', 'codon_table.items()', 'codon_table["values"]', 'codon_table.values()'],
  },
  'l2-t3e': {
    prompt: 'Slice, then look up. What does this print?',
    code:
      'codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}\n' +
      'seq = "ATGGGTTAA"\n' +
      'print(codon_table.get(seq[3:6], "???"))',
    options: [
      'Met',
      '???',
      'Gly',
      'KeyError',
    ],
  },

  /* Lecture 3, the three Try-it-Yourselfs as poll blocks, like lecture 2:
     one question per step, each opening gently, with the code kept as a
     checked revision slide. Every option was run in CPython. */
  'l3-t1a': {
    prompt: 'Which line starts a loop over every incubation period?',
    code: 'incubation_days = [3.0, 4.7, 4.9, 5.8, 3.4]',
    optionsAreCode: true,
    options: [
      'for days in incubation_days',
      'for days in incubation_days:',
      'for incubation_days in days:',
      'for days = incubation_days:',
    ],
  },
  'l3-t1b': {
    prompt: 'Which line turns one period into whole minutes?',
    code: 'for days in incubation_days:\n    # ???',
    optionsAreCode: true,
    options: [
      'minutes = days * 1440',
      'minutes = round(days / 1440)',
      'minutes = round(incubation_days * 1440)',
      'minutes = round(days * 1440)',
    ],
  },
  'l3-t1c': {
    prompt: 'Which line adds minutes to the new list?',
    code: 'incubation_minutes = []\nfor days in incubation_days:\n    minutes = round(days * 1440)\n    # ???',
    optionsAreCode: true,
    options: [
      'incubation_minutes = minutes',
      'incubation_minutes.append(minutes)',
      'incubation_minutes + minutes',
      'minutes.append(incubation_minutes)',
    ],
  },
  'l3-t1d': {
    prompt: 'Where does total = 0 have to go?',
    code: 'for m in incubation_minutes:\n    total = total + m\nprint(total)',
    options: ['Before the loop', 'Inside the loop', 'After the loop'],
  },
  'l3-t1e': {
    prompt: 'What is the total incubation time, in minutes?',
    code: 'print(f"Total incubation time: {total} minutes")',
    options: ['4896', '31392', '21.8', '523.2'],
  },

  'l3-t2a': {
    prompt: 'What is 20 % 3?',
    code: 'print(20 % 3)',
    options: ['6', '2', '6.67', '0'],
  },
  'l3-t2b': {
    prompt: "Which loop gives you each virus's name and its sequence?",
    optionsAreCode: true,
    options: [
      'for seq in sequences:',
      'for name, seq in sequences:',
      'for name, seq in sequences.items():',
      'for name, seq in sequences.values():',
    ],
  },
  'l3-t2c': {
    prompt: 'Which test is True only for a whole number of codons?',
    optionsAreCode: true,
    options: [
      'if len(seq) % 3 == 0:',
      'if len(seq) / 3 == 0:',
      'if len(seq) % 3 = 0:',
      'if seq % 3 == 0:',
    ],
  },
  'l3-t2d': {
    prompt: 'Which line keeps the name of a virus that passes?',
    code: 'ready = []\nfor name, seq in sequences.items():\n    if len(seq) % 3 == 0:\n        # ???',
    optionsAreCode: true,
    options: ['ready = name', 'ready.append(seq)', 'ready.append(sequences)', 'ready.append(name)'],
  },
  'l3-t2e': {
    prompt: 'After the loop, what is len(ready)?',
    options: ['6', '2', '4', '0'],
  },

  'l3-t3a': {
    prompt: 'Which numbers does range(0, 12, 3) give?',
    code: 'for i in range(0, 12, 3):\n    print(i)',
    options: ['0, 3, 6, 9', '0, 3, 6, 9, 12', '3, 6, 9, 12', '0, 1, 2, … 11'],
  },
  'l3-t3b': {
    prompt: 'Which slice gives the codon that starts at i?',
    code: 'for i in range(frame, len(seq) - 2, 3):\n    codon = ???',
    optionsAreCode: true,
    options: ['seq[i:3]', 'seq[i:i+3]', 'seq[i+3]', 'seq[i, i+3]'],
  },
  'l3-t3c': {
    prompt: 'Which line gives the amino acid for codon?',
    optionsAreCode: true,
    options: ['codon_table(codon)', 'codon_table[i]', 'codon_table["codon"]', 'codon_table[codon]'],
  },
  'l3-t3d': {
    prompt: 'protein starts as "". Which line adds each amino acid on?',
    optionsAreCode: true,
    options: [
      'protein = protein + codon_table[codon]',
      'protein = codon_table[codon]',
      'protein + codon_table[codon]',
      'protein.append(codon_table[codon])',
    ],
  },
  'l3-t3e': {
    prompt: 'With frame = 1, which protein falls out?',
    optionsAreCode: true,
    options: ['YGTLDFVGYPRFPAPVEFIA', 'MVRWTLWDTLAFLLLLSLL', 'L', 'ATGGTACGCTGGACT…'],
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
