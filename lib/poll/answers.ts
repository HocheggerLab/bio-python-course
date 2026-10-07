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

  'l3-t1a':
    '**`for days in incubation_days:`**. Name the loop variable first (you pick ' +
    'it), then the list, and end the line with a colon. Without the colon it is ' +
    'a `SyntaxError`. The other way round, `days` does not exist yet ' +
    '(`NameError`), and `=` has no place in a `for` line.',

  'l3-t1b':
    '**`minutes = round(days * 1440)`**. Multiply, because a day is *more* ' +
    'minutes, and round to get a whole number. Without `round()` you get ' +
    '6768.0. Dividing gives a tiny fraction that rounds to 0. And the list as ' +
    'a whole cannot be multiplied and rounded; work on `days`, one value at a time.',

  'l3-t1c':
    '**`incubation_minutes.append(minutes)`**. `.append()` grows the list by ' +
    'one each time round. `=` would throw the list away and keep just one ' +
    'number. `+` cannot join a list to a number, and a number has no ' +
    '`.append()`.',

  'l3-t1d':
    '**Before the loop.** The accumulator starts at 0 *once*, then grows each ' +
    'time round. Inside the loop it is reset every time, so you are left with ' +
    'only the last value (4896). After the loop is too late: `total + m` ' +
    'meets a `total` that does not exist yet (`NameError`).',

  'l3-t1e':
    '**31392**. The five periods in minutes are 4320, 6768, 7056, 8352 and ' +
    '4896. 4896 is `total = 0` *inside* the loop (only the last one survives). ' +
    '21.8 is the total in days (the × 1440 never happened), and 523.2 is hours.',

  'l3-t2a':
    '**2**. 3 goes into 20 six times (18) with **2 left over**, and `%` gives ' +
    'what is left over. 6 is `20 // 3`, 6.67 is `20 / 3`. A remainder of **0** ' +
    'means it divides exactly, which is the test we need next.',

  'l3-t2b':
    '**`for name, seq in sequences.items():`**. `.items()` hands you each key ' +
    'and value as a pair. `for seq in sequences:` runs, but quietly gives you ' +
    'the *keys*, so `seq` would be "HIV-1", not its DNA. Without `.items()`, or ' +
    'with `.values()`, Python cannot split each one into two names (`ValueError`).',

  'l3-t2c':
    '**`if len(seq) % 3 == 0:`**. A remainder of 0 means the length divides ' +
    'exactly into codons. `/ 3` is never 0 for a real sequence. A single `=` ' +
    'assigns rather than compares (`SyntaxError`), and `%` needs the *length*, ' +
    'a number, not the sequence itself.',

  'l3-t2d':
    '**`ready.append(name)`**. We want the *names* of the viruses that pass. ' +
    '`.append(seq)` collects their DNA instead, `.append(sequences)` adds the ' +
    'whole dictionary each time, and `ready = name` replaces the list with a ' +
    'single name.',

  'l3-t2e':
    '**4**: SARS-CoV-2 (30 bases), HIV-1 (24), measles (18) and phiX174 (21). ' +
    '6 means nothing was filtered and 2 means the test was the wrong way round. ' +
    '0 is what `for seq in sequences:` gives: it tests the length of each *name*, ' +
    'and none of them divides by 3.',

  'l3-t3a':
    '**0, 3, 6, 9**. Start at 0, go up in steps of 3, and stop *before* 12. The ' +
    'stop is never included, just like the end of a slice. Without the step you ' +
    'would get every number from 0 to 11.',

  'l3-t3b':
    '**`seq[i:i+3]`**. Start at `i`, stop three later. `seq[i:3]` always stops ' +
    'at 3, so it is empty after the first codon. `seq[i+3]` is a single base, ' +
    'and a slice needs a colon, not a comma.',

  'l3-t3c':
    '**`codon_table[codon]`**. Look up by the key, the codon itself. ' +
    '`codon_table[i]` looks for the *number* `i` (`KeyError`), and ' +
    '`["codon"]` looks for the word "codon", not the value stored in `codon`. ' +
    'A dictionary is not a function, so no round brackets.',

  'l3-t3d':
    '**`protein = protein + codon_table[codon]`**. The accumulator again, ' +
    'with letters instead of numbers. Without `protein +` each amino acid ' +
    'replaces the last. Without `protein =` the result is thrown away, and a ' +
    'string has no `.append()`.',

  'l3-t3e':
    '**MVRWTLWDTLAFLLLLSLL**. The same 60 bases read one base over give a ' +
    'completely different protein: this is how phiX174 packs two genes into ' +
    'one sequence. YGTLDFVGYPRFPAPVEFIA is frame 0 (the loop still starts at 0, ' +
    'not at `frame`). `L` is what is left if each amino acid replaces the last, ' +
    'and ATGGTACGCTGGACT… is the DNA rebuilt: adding `codon` instead of ' +
    '`codon_table[codon]` skips the lookup.',

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
