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

  /* Lecture 4 — the three Try-it-Yourself exercises, asked one step at a time.
     The code itself is kept as a revision exercise after each block. */

  // Block 1 — break it down: mean GC of the sequences that start with ATG
  'l4-t1a': {
    prompt: 'Which of these is ONE step — small enough to look up how to do?',
    options: [
      'Analyse the sequences',
      'Keep only the sequences that start with ATG',
      'Work out the answer',
      'Write the program',
    ],
  },
  'l4-t1b': {
    prompt: 'Which order of steps works?',
    options: [
      'Keep the ATG starters → GC of each → mean',
      'Mean → GC of each → keep the ATG starters',
      'GC of each → mean → keep the ATG starters',
      'Mean → keep the ATG starters → GC of each',
    ],
  },
  'l4-t1c': {
    prompt: 'Step: keep only the sequences that start with ATG. Which test does it?',
    code: 'for seq in seqs:\n    if ???:\n        atg_seqs.append(seq)',
    optionsAreCode: true,
    options: ['seq[:3] == "ATG"', '"ATG" in seq', 'seq[3] == "ATG"', 'seq[0] == "ATG"'],
  },
  'l4-t1d': {
    prompt: 'Step: work out the GC content of each one. Which Python shape is that?',
    options: [
      'A for loop that appends each GC value to a new list',
      'One if statement',
      'A dictionary lookup',
      'A single print()',
    ],
  },
  'l4-t1e': {
    prompt: 'Step: report the mean. Which line?',
    code: '# gc_values holds the GC % of the ATG starters only',
    optionsAreCode: true,
    options: [
      'sum(gc_values) / len(gc_values)',
      'sum(gc_values) / len(seqs)',
      'len(gc_values) / sum(gc_values)',
      'max(gc_values)',
    ],
  },

  // Block 2 — package the spaghetti into gc_content(seq)
  'l4-t2a': {
    prompt: 'Which line starts the function?',
    optionsAreCode: true,
    options: ['def gc_content(seq):', 'def gc_content(seq)', 'gc_content(seq):', 'def gc_content:'],
  },
  'l4-t2b': {
    prompt: 'Which line belongs inside the function?',
    code: 'def gc_content(seq):\n    # ???',
    optionsAreCode: true,
    options: [
      'gc = (seq.count("G") + seq.count("C")) / len(seq) * 100',
      'gc = (seq1.count("G") + seq1.count("C")) / len(seq1) * 100',
      'gc = ("seq".count("G") + "seq".count("C")) / len("seq") * 100',
      'gc = (gc_content.count("G") + gc_content.count("C")) / len(gc_content) * 100',
    ],
  },
  'l4-t2c': {
    prompt: 'Which last line hands the answer back to whoever called the function?',
    optionsAreCode: true,
    options: ['return round(gc, 1)', 'print(round(gc, 1))', 'return', 'round(gc, 1)'],
  },
  'l4-t2d': {
    prompt: 'Where does the docstring go?',
    options: [
      'Straight under the def line, indented',
      'Just above the def line',
      'After the return line',
      'In a # comment at the end',
    ],
  },
  'l4-t2e': {
    prompt: 'What does this print?',
    code: `def gc_content(seq):
    gc = (seq.count("G") + seq.count("C")) / len(seq) * 100
    print(round(gc, 1))

result = gc_content("GGGCGCGCGCAATATA")
print(result)`,
    options: ['62.5, then None', '62.5, then 62.5', 'None', '62.5'],
  },

  // Block 3 — a defensive clean_dna(seq)
  'l4-t3a': {
    prompt: 'Step 1 — tidy the input. Which line?',
    code: 'def clean_dna(seq):\n    # ???',
    optionsAreCode: true,
    options: [
      'seq = seq.upper().strip()',
      'seq.upper().strip()',
      'seq = seq.upper.strip',
      'seq = upper(strip(seq))',
    ],
  },
  'l4-t3b': {
    prompt: 'Step 2 — which condition is True when seq is NOT clean DNA?',
    optionsAreCode: true,
    options: [
      'not all(base in "ATGC" for base in seq)',
      'all(base in "ATGC" for base in seq)',
      '"ATGC" in seq',
      'seq != "ATGC"',
    ],
  },
  'l4-t3c': {
    prompt: 'Inside that if — which line fails loudly?',
    optionsAreCode: true,
    options: [
      'raise ValueError(f"Not DNA: {seq}")',
      'print(f"Not DNA: {seq}")',
      'return ValueError(f"Not DNA: {seq}")',
      'ValueError(f"Not DNA: {seq}")',
    ],
  },
  'l4-t3d': {
    prompt: 'What does clean_dna("atgcn") do?',
    code: `def clean_dna(seq):
    seq = seq.upper().strip()
    if not all(base in "ATGC" for base in seq):
        raise ValueError(f"Not DNA: {seq}")
    return seq`,
    options: [
      'Returns "ATGCN"',
      'Raises ValueError: Not DNA: ATGCN',
      'Raises ValueError: Not DNA: atgcn',
      'Returns None',
    ],
  },
  'l4-t3e': {
    prompt: 'What does this print?',
    code: `for s in ["atg", "AXG", "gc "]:
    try:
        print(clean_dna(s))
    except ValueError:
        print("skipped", s)`,
    options: [
      'ATG · skipped AXG · GC',
      'ATG — then the program crashes',
      'ATG · GC',
      'skipped AXG',
    ],
  },

  /* Lecture 5 — the three Try-it-Yourselfs as three-question blocks; the code
     follows each block as a revision exercise. Verified against CPython and
     the course data files. */

  // Block 1 — random through its API: attribute vs method, arguments, the docs
  'l5-t1a': {
    prompt: 'Which line rolls a die?',
    code: 'import random',
    optionsAreCode: true,
    options: ['random.randint', 'random.randint(1, 6)', 'randint(1, 6)', 'random.randint[1, 6]'],
  },
  'l5-t1b': {
    prompt: 'Which line picks one random base from the list?',
    code: 'bases = ["A", "C", "G", "T"]',
    optionsAreCode: true,
    options: ['random.choice()', 'bases.choice()', 'random.choice(bases)', 'random.choice("bases")'],
  },
  'l5-t1c': {
    prompt: 'The docs say: "random.shuffle(x) — shuffle the sequence x in place." What does this print?',
    code: 'bases = ["A", "C", "G", "T"]\nresult = random.shuffle(bases)\nprint(result)',
    options: ['A shuffled list, e.g. [\'G\', \'A\', \'T\', \'C\']', 'None', 'An error', '[\'A\', \'C\', \'G\', \'T\']'],
  },

  // Block 2 — interrogate the array: import, frames vs trials, the highest value
  'l5-t2a': {
    prompt: 'Which line lets you write np.loadtxt(...)?',
    optionsAreCode: true,
    options: ['import numpy', 'import numpy as np', 'from numpy import np', 'import np'],
  },
  'l5-t2b': {
    prompt: 'nogo is 1 for each of the 9 frames a nogo signal plays. How many nogo trials were there?',
    code: 'nogo = np.loadtxt(F, delimiter=",", skiprows=1, usecols=3)',
    optionsAreCode: true,
    options: ['len(nogo)', 'nogo.sum()', 'nogo.sum() / 9', 'nogo.count(1) / 9'],
  },
  'l5-t2c': {
    prompt: "Which line gives the neuron's highest activity?",
    code: 'dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)\n# dff.argmax() gives 11713: WHERE the highest value is, not what it is',
    optionsAreCode: true,
    options: ['dff.argmax()', 'dff.max()', 'dff.max', 'dff.highest()'],
  },

  // numpy toolbox (toy array): boolean filter, np.where()[0], argmax
  'l5-n1': {
    prompt: 'Which line keeps only the readings above 0.4?',
    code: 'readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9])',
    optionsAreCode: true,
    options: ['readings > 0.4', 'readings[readings > 0.4]', '[readings > 0.4]', 'readings.filter(0.4)'],
  },
  'l5-n2': {
    prompt: 'Which line gives the positions of the readings above 0.4, as a plain array?',
    code: 'readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9])',
    optionsAreCode: true,
    options: ['np.where(readings > 0.4)[0]', 'np.where(readings > 0.4)', 'readings[readings > 0.4]', '(readings > 0.4).sum()'],
  },
  'l5-n3': {
    prompt: 'At which position is the largest reading? Which line tells you?',
    code: 'readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9])',
    optionsAreCode: true,
    options: ['readings.max()', 'readings.index(0.9)', 'readings.argmax()', 'max(readings)'],
  },

  // Block 3 — the same analysis on a second neuron (moved to the lab; not in the lecture deck)
  'l5-t3a': {
    prompt: 'To run this analysis on a second neuron, what do you change?',
    options: [
      'Rewrite response_to() for the new cell',
      'Only the filename, F',
      'The column numbers 2 and 3',
      'Everything — a new cell needs new code',
    ],
  },
  'l5-t3b': {
    prompt: 'Each window is dff[i-10:i+30], with the event starting at i. Why does the peak use curve[10:]?',
    code: 'print(f"{name:7s} peak {curve[10:].max():+.3f}")',
    options: [
      'To skip the 10 frames from before the event',
      'Because numpy counts from 10',
      'To skip the header row of the CSV',
      'Because the first 10 values are always 0',
    ],
  },
  'l5-t3c': {
    prompt: 'Neuron one: go +0.29, nogo +0.06. Neuron two: go +1.28, nogo +1.04. Does neuron two tell go from nogo?',
    options: [
      'Yes — just as sharply as neuron one',
      'Hardly — its go and nogo responses are close',
      'Yes — but it prefers nogo',
      'It does not respond to either',
    ],
  },

  /* Lecture 6 — one block of three per part, asked in the room; each part's
     revision slide repeats the tools as code. Every wrong option is a real
     mistake, checked against pandas 3 (what Pyodide runs). */
  /* The bet: asked right after the question is set, shown again at the end
     with the answer marked (PollSlide `prediction` hides it the first time).
     Raspberry is the tempting answer — the most bumblebee visits — but it
     has plenty of honeybees too; broad bean has almost nothing else. */
  'l6-bet': {
    prompt: 'Place your bet: the bumblebees vanish, the honeybees stay. Which crop would be left with almost no bee visits?',
    options: ['Raspberry', 'Squash', 'Broad bean', 'Apple', 'Blackberry'],
  },
  /* Part 2's "your call": the room votes on a question, the lecturer types
     the winner live. Not a quiz — there is no right option. */
  'l6-call': {
    prompt: 'Your call: which question should we ask the table? I will type the winner live.',
    options: [
      'Where were the busiest single surveys (more than 5 bumblebees)?',
      'Raspberries: are bumblebees busier in May or in August?',
      'Squash and courgette: who actually visits them?',
      'What was going on at Moulsecoomb in July?',
    ],
  },
  'l6-p1a': {
    prompt: 'What does df.shape give you?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")  # 1,620 surveys, 13 columns',
    optionsAreCode: true,
    options: ['1620', '(13, 1620)', '(1620, 13)', '[1620, 13]'],
  },
  'l6-p1b': {
    prompt: 'Which line gives you the Bumblebees column as a Series?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: ['df[["Bumblebees"]]', 'df["Bumblebees"]', 'df("Bumblebees")', 'df.Bumblebees()'],
  },
  'l6-p1c': {
    prompt: 'How many surveys saw at least one bumblebee? Which line tells you?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: ['df["Bumblebees"].sum()', 'df["Bumblebees"].count()', 'len(df["Bumblebees"])', '(df["Bumblebees"] > 0).sum()'],
  },
  'l6-p2a': {
    prompt: 'Which line keeps only the Raspberry surveys, as a table?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: ['df["Crop"] == "Raspberry"', 'df[df["Crop"] == "Raspberry"]', 'df[df["Crop"] = "Raspberry"]', 'df["Raspberry"]'],
  },
  'l6-p2b': {
    prompt: 'Which line keeps the June surveys that saw at least one bumblebee?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: [
      'df[(df["Month"] == "June") & (df["Bumblebees"] > 0)]',
      'df[df["Month"] == "June" & df["Bumblebees"] > 0]',
      'df[(df["Month"] == "June") and (df["Bumblebees"] > 0)]',
      'df[(df["Month"] == "June") | (df["Bumblebees"] > 0)]',
    ],
  },
  'l6-p2c': {
    prompt: 'Which line gives only Crop and Flowers, for surveys with more than 100 flowers?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: [
      'df.loc[["Crop", "Flowers"], df["Flowers"] > 100]',
      'df[df["Flowers"] > 100, ["Crop", "Flowers"]]',
      'df.loc[df["Flowers"] > 100, ["Crop", "Flowers"]]',
      'df.loc(df["Flowers"] > 100, ["Crop", "Flowers"])',
    ],
  },
  'l6-p3a': {
    prompt: 'Which line shows the five surveys with the most bumblebees?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: [
      'df.sort_values("Bumblebees").head()',
      'df["Bumblebees"].max()',
      'df.sort("Bumblebees").head()',
      'df.sort_values("Bumblebees", ascending=False).head()',
    ],
  },
  'l6-p3b': {
    prompt: 'Which line tells you how many surveys were done in each month?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: ['df["Month"].value_counts()', 'df["Month"].unique()', 'df["Month"].nunique()', 'df["Month"].count()'],
  },
  'l6-p3c': {
    prompt: 'Which line gives the total number of honeybees at each allotment?',
    code: 'df = pd.read_csv("pollinators_lecture.csv")',
    optionsAreCode: true,
    options: [
      'df.groupby("Honeybees")["Allotment"].sum()',
      'df["Allotment"].value_counts()',
      'df.groupby("Allotment")["Honeybees"].sum()',
      'df["Honeybees"].sum()',
    ],
  },

  /* Part 2 — the road to the answer. One fix-the-code question after each
     step: the broken line is the step just run, so the answer repeats it.
     Every error message below was produced by pandas 3.1. */
  'l6-f1': {
    prompt: 'Step 1, broken. Which line should replace the first one?',
    code: `rasp = df["Crop"] == "Raspberry"
rasp["Bumblebees"].sum()
# KeyError: 'Bumblebees'`,
    optionsAreCode: true,
    options: [
      'rasp = df[df["Crop"] == "Raspberry"]',
      'rasp = df["Crop"] = "Raspberry"',
      'rasp = df["Raspberry"]',
      'rasp = df[df["Crop"]] == "Raspberry"',
    ],
  },
  'l6-f2': {
    prompt: 'Step 2, broken. Which line works?',
    code: `visits = df.groupby("Crop")["Honeybees", "Bumblebees"].sum()
# ValueError: Cannot subset columns with a tuple
# with more than one element. Use a list instead.`,
    optionsAreCode: true,
    options: [
      'visits = df.groupby["Crop"][["Honeybees", "Bumblebees"]].sum()',
      'visits = df.groupby(Crop)[["Honeybees", "Bumblebees"]].sum()',
      'visits = df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()',
      'visits = df["Crop"].groupby()[["Honeybees", "Bumblebees"]].sum()',
    ],
  },
  'l6-f3': {
    prompt: 'Step 3 runs without an error, but broad bean gets a share of 34.5. Which line is right?',
    code: `visits["share"] = visits["Bumblebees"] / visits["Honeybees"] + visits["Bumblebees"]
print(visits.loc["Bbean"])`,
    optionsAreCode: true,
    options: [
      'visits.share = visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])',
      'visits["share"] = visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])',
      'visits["share"] == visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])',
      'share = visits["Bumblebees"] / visits["Honeybees"] + visits["Bumblebees"]',
    ],
  },
  'l6-f4': {
    prompt: 'Step 4 runs, but the top of the list is Squash, Courgette, Cherry: the lowest shares. Which line puts the highest first?',
    code: `print(visits.sort_values("share").head())`,
    optionsAreCode: true,
    options: [
      'print(visits.sort_values().head())',
      'print(visits["share"].sort().head())',
      'print(visits.sort_values("share").tail(1))',
      'print(visits.sort_values("share", ascending=False).head())',
    ],
  },
  'l6-f5': {
    prompt: 'Step 5 runs, but prints True and False instead of a table. Which line keeps the crops with at least 20 bumblebee visits?',
    code: `enough = visits["Bumblebees"] >= 20
print(enough)`,
    optionsAreCode: true,
    options: [
      'enough = visits[visits["Bumblebees"] => 20]',
      'enough = visits["Bumblebees" >= 20]',
      'enough = visits[visits["Bumblebees"] >= 20]',
      'enough = visits.loc["Bumblebees" >= 20]',
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

  /* Lecture 7 quiz 1, visual: four fixes for a scatter that hides its message.
     The figures are on the slide (public/l7-quiz/q2_*.png). */
  'l7-q1v': {
    prompt:
      'The message: skin cancer lines need both BRAF and SOX10. Look at the four figures on the screen. Which shows it most clearly?',
    options: [
      'Every cancer type its own colour',
      'Skin cancer in colour, the rest grey',
      'Skin cancer as bigger dots',
      'Skin cancer as triangles',
    ],
  },

  /* Lecture 7 quiz 1, visual: four fixes for a line drawn through categories
     (public/l7-quiz/q3_*.png). */
  'l7-q1w': {
    prompt:
      'The message: skin cancer lines need SOX10 more than other cancers. Look at the four figures on the screen. Which shows it most clearly?',
    options: [
      'A histogram of all SOX10 values',
      'One bar per cancer type, alphabetical',
      'Skin vs all other cancers, box with dots',
      'SOX10 against the row number',
    ],
  },

  /* Lecture 7 quiz 2: indexing into a row of panels. */
  'l7-q2c': {
    prompt: 'After fig, axes = plt.subplots(1, 2), which line draws a histogram in the right-hand panel?',
    optionsAreCode: true,
    options: [
      'axes[2].hist(values)',
      'axes[1].hist(values)',
      'fig[1].hist(values)',
      'plt.hist(values, panel=2)',
    ],
  },

  /* Lecture 7 quiz 3: the DepMap analysis. */
  'l7-q3a': {
    prompt:
      'RAN has the lowest mean gene effect in skin cancer lines. Why is it still a poor drug target for melanoma?',
    options: [
      'RAN is not expressed in skin',
      'Every cell needs RAN, so a drug would kill healthy cells too',
      'RAN is mutated in melanoma',
      'The DepMap measurements for RAN are unreliable',
    ],
  },
  'l7-q3b': {
    prompt: 'skin and rest are the mean gene effects in skin and in all other cancers. Which line gives the genes skin needs MORE than other cancers?',
    optionsAreCode: true,
    options: [
      'skin.nsmallest(10)',
      '(skin - rest).nlargest(10)',
      '(skin - rest).nsmallest(10)',
      '(rest - skin).nsmallest(10)',
    ],
  },
  'l7-q3c': {
    prompt:
      'Why draw every cell line as a dot on top of the SOX10 box plot, instead of one bar for the mean?',
    options: [
      'It makes the mean easier to read',
      'It shows that some skin lines hardly need SOX10 at all',
      'matplotlib cannot draw a box plot without points',
      'It shows how many lineages there are',
    ],
  },
}

export function getContent(id: string): PollContent | undefined {
  return Object.prototype.hasOwnProperty.call(POLL_CONTENT, id)
    ? POLL_CONTENT[id]
    : undefined
}
