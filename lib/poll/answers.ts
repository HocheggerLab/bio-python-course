/**
 * The worked explanations, server-side only.
 *
 * These used to be a `answer` ReactNode prop passed from each slide into the
 * client `PollSlide`. Next serialises *every* prop of a client component into
 * the RSC flight payload whether or not it is rendered, so `showBars && answer`
 * gated the display and not the transmission: a student viewing source could
 * read the explanation — which names the correct option — before voting.
 *
 * Keeping them here means they only ever leave the server through
 * /api/poll/results, which already refuses anyone without the teacher cookie.
 *
 * **Never import this module from a client component.** It is imported by the
 * results route alone. `correctIndex` lives next door in questions.ts for the
 * same reason.
 *
 * Markup is deliberately minimal, since these cross the wire as plain strings:
 *
 *   `code`      → monospace
 *   **bold**    → strong
 *   *italic*    → emphasis
 */
export const POLL_ANSWERS: Record<string, string> = {
  'l2-t1a':
    '**`readings[2]`**. Python counts from 0, so the third item sits at index 2. ' +
    '`readings[3]` is the fourth item (63), `readings[1]` the second (17), and ' +
    'round brackets mean *call*, so `readings(2)` is a `TypeError`.',

  'l2-t1b':
    '**`del readings[1]`**. The 2nd item is index 1. `del readings[2]` throws ' +
    'away the good 88 instead; `readings[1] = 0` keeps a fake zero that drags ' +
    'the mean down; and `del readings(1)` is a `SyntaxError`, since positions ' +
    'always take square brackets.',

  'l2-t1c':
    '**`readings.append(19)`**. `.append` is a method, so it takes round ' +
    'brackets like any call: `append[19]` is a `TypeError`. `readings + 19` ' +
    'fails because `+` joins a list to another list, not to a number, and ' +
    '`readings[20] = 19` is an `IndexError`: you can only replace items that ' +
    'already exist.',

  'l2-t1d':
    '**20**. Start with 20, `del` takes one away (19), `.append` adds one back ' +
    '(20). The list changes in place, so every line works on the result of the ' +
    'one before.',

  'l2-t1e':
    '**`round(sum(readings) / len(readings), 1)`**, which gives 51.7. `//` is ' +
    'floor division and throws the decimals away before rounding (51); ' +
    '`round(x)` with no second number rounds to a whole number (52); and lists ' +
    'have no `.sum()` method: `sum()` and `len()` are functions you hand the ' +
    'list to.',

  'l2-t2a':
    '**`clean = dna.upper()`**. A method needs its round brackets to run: ' +
    'without them, `clean` holds the method itself, not an upper-case string. ' +
    '`upper` is not a function on its own (`NameError`), and Python is ' +
    'case-sensitive, so `.UPPER()` does not exist (`AttributeError`).',

  'l2-t2b':
    '**21**. `len()` counts every base. 20 is the position of the *last* base: ' +
    'positions start at 0, so they run from 0 to 20. 7 is the number of codons.',

  'l2-t2c':
    '**`clean[0:3]`**. The first base is at position 0, and the end of a slice ' +
    'is not included, so `0:3` gives positions 0, 1, 2. `[1:4]` starts one too ' +
    'late (TGC), `[0:2]` stops one too early (AT), and `[3]` is a single base.',

  'l2-t2d':
    '**`clean.count("G") + clean.count("C")`**, which gives 8. `.count("GC")` ' +
    'counts the two-letter text *GC* (just 1 here). On the messy `dna` there ' +
    'are no upper-case G or C at all, so you get 0. `.count()` takes one thing ' +
    'to look for, so `.count("G", "C")` is a `TypeError`.',

  'l2-t2e':
    '**9**. `.find()` gives the position where the match *starts*, counting from ' +
    '0. 10 is counting from 1, and 15 is where the site ends. `-1` is how ' +
    '`.find()` says *not found*. That is what you get searching the lower-case ' +
    '`dna`, which is why we clean first.',

  'l2-t3a':
    '**`{"ATG": "Met"}`**. Curly brackets, and a colon between each key and ' +
    'its value. Square brackets make a list, which has no pairs, so ' +
    '`["ATG": "Met"]` is a `SyntaxError`. With a comma instead of a colon you ' +
    'get a *set* of two loose strings, nothing paired. And `=` is for naming ' +
    'variables, not for pairing a key with its value.',

  'l2-t3b':
    '**3**. `len()` counts *entries*, and each key with its value is one entry. ' +
    '6 counts the keys and the values separately; 1 counts the dictionary itself.',

  'l2-t3c':
    '**`codon_table["GGT"]`**. You look up by the *key* (the codon) and get ' +
    'back the *value* (the amino acid). A dictionary has no positions, so ' +
    '`[1]` is a `KeyError`. `["Gly"]` is backwards: "Gly" is a value, not a ' +
    'key. Round brackets mean *call*, and a dictionary is not a function.',

  'l2-t3d':
    '**`codon_table.values()`**. The amino acids are the values. `.keys()` ' +
    'gives the codons, and `.items()` gives the codon–amino acid pairs. ' +
    '`["values"]` looks for a key literally called "values", so it is a `KeyError`.',

  'l2-t3e':
    '**Gly**. Work from the inside out: `seq[3:6]` slices out the second codon, ' +
    '"GGT", and `codon_table["GGT"]` looks it up. "Met" is the first codon, ' +
    '`seq[0:3]`. "GGT" is the slice before it is looked up. A slice is just a ' +
    'string, so it works fine as a key: no `KeyError`.',

  'l3-t1':
    '**31392 minutes.** One day is 1440 minutes, so 21.8 days of total ' +
    'incubation is 31,392 minutes. The other options are the same answer in ' +
    'the wrong unit: 523.2 hours, 21.8 days, 1,883,520 seconds. Always carry ' +
    'the unit with the number.',

  'l3-t2':
    '**4.** `hepatitis B` (20 bases) and `phage λ` (16) are not whole numbers ' +
    'of codons, so `len(seq) % 3` is 2 and 1 rather than 0. Answering 6 means ' +
    'the filter never ran; answering 2 means the test was the wrong way round.',

  'l3-t3':
    '**MVRWTLWDTLAFLLLLSLL.** The same 60 bases read one position over give a ' +
    'completely different protein — that is what a reading frame *is*. If you ' +
    'got `YGTLDFVGYPRFPAPVEFIA` the loop still starts at 0; it has to start at ' +
    '`frame`: `range(frame, len(seq) - 2, 3)`.',

  'l1-r1':
    'Only `f"..."` substitutes. Without the `f` Python prints the braces ' +
    'literally — no error, wrong output, and it will sit in a script for weeks. ' +
    'Doubled braces `{{ }}` are how you ask for a literal brace, and `$name` is ' +
    'a different language altogether.',

  'l1-r2':
    'A `str`. The quotes win over what the characters look like — and arithmetic ' +
    'on it either raises `TypeError` or, worse, quietly does the wrong thing: ' +
    '`"3" * 2` is `"33"`. This is the single most common data-handling bug in biology.',

  'l1-r3':
    '`buffer_ph`. Names cannot contain a space and cannot start with a digit ' +
    'or a special character (e.g. `.`). All three of the ' +
    'others generate a `SyntaxError`.',

  'l7-p1':
    'The label belongs on the `plot` call, not the legend: `ax.legend()` only ' +
    'draws what has already been labelled. Without it matplotlib warns *"No ' +
    'artists with labels found"* and draws an empty box — `loc=` moves that empty ' +
    'box around.',

  'l7-r1':
    '`ax.set_title()`. Not `plt`, which has no such method; not `fig`, which titles ' +
    'the whole sheet with `suptitle`; and `ax.title` is an attribute, not a function.',

  'l7-r2':
    '**Cancer lineage.** It is a *label* you can count — there are 73 skin lines ' +
    'and 124 lung. The other three are **continuous**: measured on a scale, and any ' +
    'value in between is possible. A score of `−0.83` means something; a lineage ' +
    'halfway between Skin and Lung does not.',

  'l7-r3':
    '`ax.hist()` — one continuous column is a **distribution**. Each of the others ' +
    'needs something you were not given: `scatter` a second column, `barh` a ' +
    'category to label the bars, and `boxplot` groups to split on.',
}

export const getAnswerProse = (id: string): string | undefined =>
  Object.prototype.hasOwnProperty.call(POLL_ANSWERS, id) ? POLL_ANSWERS[id] : undefined
