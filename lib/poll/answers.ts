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
    '**`print(len(clean))`**, which prints 21. `len()` counts every base. ' +
    '`length()` is not a function in Python, strings have no `.length()` ' +
    'method, and `.count()` needs something to look for: it counts how often ' +
    'a substring appears.',

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
    '**`clean.find("GAATTC")`**, which gives 9. `.find()` returns the position ' +
    'where the match *starts*, counting from 0. `"GAATTC" in clean` only says ' +
    '`True` or `False`, strings have no `.search()` method, and `find(clean, ' +
    '"GAATTC")` is a `NameError`: `find` only exists as a method, after the dot.',

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
    '"GGT", and it is in the table, so `.get()` returns its value. "???" is the ' +
    'fallback, which `.get()` only gives when the key is *missing*. "Met" is the ' +
    'first codon, `seq[0:3]`. And `.get()` never raises a `KeyError`: that is ' +
    'the reason to use it instead of `[ ]`.',

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

  'l4-t1a':
    '**Keep only the sequences that start with ATG.** It is one thing, and you could ' +
    'look up how to do it. "Analyse the sequences" and "work out the answer" are the ' +
    'whole problem again, just renamed. A good step is small enough that you can ' +
    'see the line of code behind it.',

  'l4-t1b':
    '**Keep the ATG starters → GC of each → mean.** Each step needs what the one ' +
    'before it made. A mean is a single number, so once you have it you can no ' +
    'longer pick out which sequences went into it. Filter first, then measure, ' +
    'then summarise.',

  'l4-t1c':
    '**`seq[:3] == "ATG"`**: the first three bases, compared with ATG. `"ATG" in seq` ' +
    'is True if ATG appears *anywhere*, so CATATG would sneak in. `seq[3]` and ' +
    '`seq[0]` are single bases, and one letter can never equal three.',

  'l4-t1d':
    '**A for loop that appends each GC value to a new list.** "Each one" is the cue ' +
    'for a loop, and keeping every answer is the cue for `.append()`. That is the ' +
    'transform shape from Session 3. An if decides, a lookup translates, and print ' +
    'only shows.',

  'l4-t1e':
    '**`sum(gc_values) / len(gc_values)`**: the total divided by how many values ' +
    'went into it. Dividing by `len(seqs)` counts every sequence, including the ones ' +
    'you filtered out, so the mean comes out far too low. The other way up is not a ' +
    'mean, and `max()` is the largest value.',

  'l4-t2a':
    '**`def gc_content(seq):`**: `def`, the name, the parameter in brackets, and a ' +
    'colon. Without the colon it is a `SyntaxError`. Without `def`, Python thinks you ' +
    'are calling a function that does not exist yet. Without the brackets there is ' +
    'nowhere for the sequence to go in.',

  'l4-t2b':
    '**The line that uses `seq`.** Inside the function, the parameter is the ' +
    'sequence, whichever one was passed in. `seq1` would always measure the same ' +
    'sequence. `"seq"` in quotes is the three letters s, e, q. `gc_content` is the ' +
    'function itself, not a sequence.',

  'l4-t2c':
    '**`return round(gc, 1)`** hands the number back, so `gc1 = gc_content(seq1)` ' +
    'has something to store. `print` only shows it on screen. A bare `return` hands ' +
    'back `None`. `round(gc, 1)` on its own works the number out and then throws it ' +
    'away.',

  'l4-t2d':
    '**Straight under the def line, indented.** It has to be the first thing inside ' +
    'the function: that is how Python knows it is the docstring, and how `help()` ' +
    'finds it. Above the def it is just a stray string. After the return it never ' +
    'runs. A `#` comment is for the code, not for the person calling it.',

  'l4-t2e':
    '**62.5, then None.** The `print` inside the function shows 62.5 on screen, but ' +
    'nothing is returned. A function with no `return` hands back `None`, so ' +
    '`result` is `None`, and that is what the second print shows. Seeing None ' +
    'where you expected a number usually means a missing `return`.',

  'l4-t3a':
    '**`seq = seq.upper().strip()`**. String methods hand back a *new* string, so you ' +
    'must store it. Without `seq =`, the tidy copy is made and thrown away. Without ' +
    'the brackets, `seq.upper` is the method itself, not a call, so `.strip` fails ' +
    'with an `AttributeError`. `upper()` and `strip()` are methods, not stand-alone ' +
    'functions.',

  'l4-t3b':
    '**`not all(base in "ATGC" for base in seq)`**. `all()` is True when every base ' +
    'is A, T, G or C, so `not all(...)` is True as soon as one is not. Without the ' +
    '`not`, you would raise an error for every *good* sequence. `"ATGC" in seq` looks ' +
    'for the four letters in a row, and `seq != "ATGC"` compares the whole string.',

  'l4-t3c':
    '**`raise ValueError(f"Not DNA: {seq}")`** stops the function and says why. ' +
    '`print` shows a message but carries on as if nothing were wrong. `return` hands ' +
    'the error back as an ordinary value. `ValueError(...)` on its own creates the ' +
    'error and then does nothing with it.',

  'l4-t3d':
    '**Raises ValueError: Not DNA: ATGCN.** The tidy step runs first, so by the time ' +
    'of the check `seq` is already `"ATGCN"`, in upper case. N is not one of A, T, G ' +
    'or C, so `not all(...)` is True and the function raises. It never reaches the ' +
    '`return`.',

  'l4-t3e':
    '**ATG · skipped AXG · GC.** `"atg"` and `"gc "` are tidied and returned. `"AXG"` ' +
    'raises a `ValueError`, the `except` block catches it, and the loop carries on. ' +
    'That is the point of try / except: one bad sequence no longer stops the whole ' +
    'run. Without it, the program would crash at AXG.',

  'l5-t1a':
    '**`random.randint(1, 6)`**: the module, a dot, the method, and brackets with the ' +
    'range. Without brackets you only get the method itself — Python prints ' +
    '`<bound method Random.randint of <random.Random object>>`, which shows that random ' +
    'is itself an object of a class. `randint(1, 6)` alone is a `NameError`: it lives ' +
    'inside random. Square brackets are a `TypeError`: you cannot index a method.',

  'l5-t1b':
    '**`random.choice(bases)`**: choice needs to be told what to choose from. Empty ' +
    'brackets are a `TypeError` (missing argument). `bases.choice()` is an ' +
    '`AttributeError`: a list has no choice method; random does. With quotes, ' +
    '`"bases"` is just a word, so you get a random letter of b-a-s-e-s.',

  'l5-t1c':
    '**None.** "In place" means shuffle reorders the list you gave it and hands nothing ' +
    'back. `bases` is now shuffled; `result` is `None`. No error, just a surprise if you ' +
    'skipped the docs. Reading the API tells you what goes in and what comes out.',

  'l5-t2a':
    '**`import numpy as np`**: the whole package, under the short alias everyone uses. ' +
    'Plain `import numpy` works too, but then you must write `numpy.loadtxt`; `np` is a ' +
    '`NameError`. `from numpy import np` is an `ImportError`: numpy has nothing called ' +
    'np inside it. `import np` is a `ModuleNotFoundError`: there is no package called np.',

  'l5-t2b':
    '**`nogo.sum() / 9`**: adding up the 0s and 1s counts the 1s, but each 1 is a frame. ' +
    '`nogo.sum()` alone gives 2376 frames; every nogo signal lasts 9 frames, so that is ' +
    '264 trials. `len(nogo)` counts every frame of the recording (21238). Arrays have no ' +
    '`.count()` method, so the last one is an `AttributeError`: a list habit that does ' +
    'not carry over.',

  'l5-t2c':
    '**`dff.max()`**: the array\'s own method for its largest value, 4.308. Without the ' +
    'brackets, `dff.max` is the method itself, not its answer. `dff.highest()` is an ' +
    '`AttributeError`: no such method, so check the menu. `dff.argmax()` answers a ' +
    'different question: not what the highest value is, but where it is (frame 11713).',

  'l5-n1':
    '**`readings[readings > 0.4]`**: the comparison makes a mask of True/False, and the ' +
    'mask inside square brackets keeps the values under a True: 0.5, 0.8, 0.9. ' +
    '`readings > 0.4` on its own is only the mask. `[readings > 0.4]` wraps the mask in a ' +
    'list, and arrays have no `.filter()` method (`AttributeError`).',

  'l5-n2':
    '**`np.where(readings > 0.4)[0]`**: positions 1, 3 and 5. Without the `[0]` you get ' +
    '`(array([1, 3, 5]),)`, a tuple with the array inside, because np.where answers for ' +
    'every dimension. `readings[readings > 0.4]` gives the values, not the positions, and ' +
    '`(readings > 0.4).sum()` only counts them: 3.',

  'l5-n3':
    '**`readings.argmax()`**: position 5. `readings.max()` and `max(readings)` both give ' +
    'the value, 0.9, not where it is. `.index()` is a list method; arrays do not have it ' +
    '(`AttributeError`).',

  'l5-t3a':
    '**Only the filename, F.** The analysis is written once, and the data goes in ' +
    'through one line. Both files have the same columns, so `response_to()` and the ' +
    'column numbers stay as they are. That is real analysis: the same code, run on ' +
    'the next cell.',

  'l5-t3b':
    '**To skip the 10 frames from before the event.** Each window starts 10 frames ' +
    'early, so `curve[10:]` is the response from the event onwards. The 10 frames in ' +
    'front are the baseline to compare it against. Neither numpy nor Python counts ' +
    'from 10; both count from 0.',

  'l5-t3c':
    '**Hardly — its go and nogo responses are close.** Neuron one answered go about ' +
    'five times more strongly than nogo (0.29 against 0.06). Neuron two gives 1.28 ' +
    'against 1.04, so it fires whatever the whiskers felt. Two cells, two ' +
    'personalities, and the same lines of code found both.',

  'l6-bet':
    '**Broad bean.** 23 bumblebee visits against 2 from honeybees: 92% of its bee ' +
    'visits are bumblebees, so without them almost nothing is left. Raspberry had the ' +
    '*most* bumblebee visits (311), but also 245 from honeybees: it would lose a lot and ' +
    'keep a lot. Squash barely notices: 104 honeybees, 15 bumblebees.',

  'l6-call':
    'A vote, not a quiz: whichever wins, we type it live and read the answer together.',

  'l6-p1a':
    '**`(1620, 13)`**: rows first, then columns, in a tuple, the same as a numpy ' +
    'grid. One row is one survey, so there are 1,620 of them. `shape` is an attribute, ' +
    'so no brackets after it.',

  'l6-p1b':
    '**`df["Bumblebees"]`**: one name in square brackets gives one column, a Series. ' +
    'With a list inside, `df[["Bumblebees"]]`, you get a one-column *DataFrame* instead. ' +
    '`df("Bumblebees")` and `df.Bumblebees()` both raise `TypeError: … not callable`: a ' +
    'table and a column are not functions.',

  'l6-p1c':
    '**`(df["Bumblebees"] > 0).sum()`**: 311 surveys. The comparison makes a mask of ' +
    'True/False, and summing it counts the Trues, as on arrays last week. ' +
    '`.sum()` on the column adds up the bees (548), not the surveys. `.count()` and ' +
    '`len()` both give 1620: every survey, bee or no bee.',

  'l6-p2a':
    '**`df[df["Crop"] == "Raspberry"]`**: 269 rows, all 13 columns. The comparison on its ' +
    'own is only the mask, a column of True/False. One `=` assigns rather than compares, ' +
    'so Python stops with a `SyntaxError`. `df["Raspberry"]` looks for a *column* called ' +
    'Raspberry: `KeyError`.',

  'l6-p2b':
    '**`df[(df["Month"] == "June") & (df["Bumblebees"] > 0)]`**: 70 surveys. Without the ' +
    'brackets Python works out `"June" & df["Bumblebees"]` first and raises a ' +
    '`TypeError`. `and` wants a single True or False, so a whole mask raises ' +
    '`ValueError: … ambiguous`. `|` means *either*: 485 surveys, every June one plus ' +
    'every one with a bumblebee.',

  'l6-p2c':
    '**`df.loc[df["Flowers"] > 100, ["Crop", "Flowers"]]`**: 339 rows, 2 columns. Rows go ' +
    'before the comma and columns after, so swapping them fails (`IndexingError`). Plain ' +
    '`df[...]` takes one thing, not a rows-and-columns pair (`InvalidIndexError`). And ' +
    '`.loc` uses square brackets, not round ones (`TypeError`).',

  'l6-p3a':
    '**`df.sort_values("Bumblebees", ascending=False).head()`**: the 13-bee raspberry ' +
    'survey at Roedale comes first. Without `ascending=False` the smallest come first, ' +
    'five surveys with 0. `.max()` gives just the number 13, not the surveys. DataFrames ' +
    'have no `.sort()` method (`AttributeError`).',

  'l6-p3b':
    '**`df["Month"].value_counts()`**: one count per month, August first with 527. ' +
    '`.unique()` lists the six months but does not count them. `.nunique()` says there ' +
    'are 6 of them. `.count()` gives 1620, every non-empty value in the column.',

  'l6-p3c':
    '**`df.groupby("Allotment")["Honeybees"].sum()`**: split by allotment, look at the ' +
    'Honeybees column, add up each pile. Weald comes out top with 259. Swap the two names ' +
    'and pandas groups by bee count and *adds up the allotment names* into long glued-' +
    'together text, with no error. `value_counts()` counts surveys, not bees, and ' +
    '`df["Honeybees"].sum()` is one total for the whole city, 662.',

  'l6-f1':
    '**`rasp = df[df["Crop"] == "Raspberry"]`**. The comparison alone is only the mask, ' +
    '1,620 True/False values, and a mask has no Bumblebees column. Put it *inside* ' +
    '`df[ ]` and you get the 269 raspberry rows back. The single `=` is the nasty one: no ' +
    'error at all, it quietly sets every crop in the table to "Raspberry".',

  'l6-f2':
    '**`df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()`**. Two columns need a ' +
    '*list*, so two pairs of brackets: the outer ones pick, the inner ones make the list. ' +
    '`groupby` is a method, so round brackets (`groupby[...]` is a `TypeError`), and the ' +
    'column name is text, so quotes (`Crop` alone is a `NameError`).',

  'l6-f3':
    '**`visits["share"] = visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])`**. ' +
    'Without the brackets Python divides first, as in maths: 23 / 2 + 23 = 34.5. ' +
    '`visits.share = ...` does not make a column (pandas only warns), `==` compares instead ' +
    'of assigning, and a plain `share` variable never joins the table.',

  'l6-f4':
    '**`ascending=False`**. `sort_values` puts the smallest first unless told otherwise. ' +
    '`sort_values()` with no column is a `TypeError`, a Series has no `.sort()`, and ' +
    '`.tail(1)` shows Pepper: no bees at all, so 0 / 0 and no share (`NaN`), which ' +
    'pandas always sorts to the end.',

  'l6-f5':
    '**`visits[visits["Bumblebees"] >= 20]`**. Same move as step 1: the comparison is the ' +
    'mask, the outer brackets keep the rows where it is True. `=>` is not Python ' +
    '(`SyntaxError`), and `"Bumblebees" >= 20` compares a word with a number: `TypeError`.',

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

  'l7-q1v':
    '**B.** The message is about one group, so give that group the colour and grey out ' +
    'everything else. **A** gives 30 colours nobody can tell apart (and a legend nobody can ' +
    'read). **C** uses size, which says *more of something*, not *a different group*. **D** ' +
    'uses shape, which is correct for a category, but triangles and circles of the same ' +
    'colour are hard to tell apart in a crowd.',

  'l7-q1w':
    '**C.** The message compares two groups, so show exactly those two, with every cell ' +
    'line as a dot. **B** shows it too, but you have to find Skin among 30 labels, and one ' +
    'bar per group hides the spread. **A** throws the cancer type away; **D** puts the row ' +
    'number on the x-axis, which means nothing. And the problem figure? A line joins the ' +
    'dots as if the cancer types were in an order: they are categories, so no line. ' +
    '(Its other dips, Eye and Vulva/Vagina, are melanomas too: ocular and mucosal.)',

  'l7-q2b':
    '**The whole figure and one panel.** `fig` is the sheet of paper (size, overall ' +
    'title, saving); `ax` is the panel you draw on and label. Nothing is drawn yet: the ' +
    'panel is empty until you call something like `ax.hist()`.',

  'l7-q2a':
    '`bins=80`. The number of bins decides how finely the values are cut up: more bins, ' +
    'narrower bars, more detail (too many and it turns into noise). A bigger figure, ' +
    'different limits or a new title change how it is framed, not how the data are counted.',

  'l7-q2c':
    '`axes[1].hist(values)`. The panels are numbered from 0, like a list: `axes[0]` ' +
    'is the left panel and `axes[1]` the right. `axes[2]` would be an `IndexError`, ' +
    'and the figure itself does not draw: its axes do.',

  'l7-q3a':
    '**Every cell needs RAN.** It moves proteins in and out of the nucleus in every ' +
    'cell, cancer or not, so it tops the list for every cancer type. A drug against it ' +
    'would kill healthy cells as well. A target is a gene the cancer needs *more* than ' +
    'other cells do.',

  'l7-q3b':
    '`(skin - rest).nsmallest(10)`. Gene effects are negative when a gene is needed, so ' +
    'the *most negative* difference is the gene skin needs most compared with the rest. ' +
    '`nlargest` gives the genes skin needs *less*; `skin.nsmallest(10)` is the naive ' +
    'question again (RAN and friends).',

  'l7-q3c':
    '**It shows the cell lines a mean hides.** Most skin lines need SOX10 badly, but ' +
    'about 18 of 73 hardly need it at all. One bar for the mean would show a single ' +
    'number and hide that split. The box with dots on top is also the figure your ' +
    'final project asks for.',

  'l7-q3d':
    '`ax.scatter(lung[...], lung[...], label="lung")`. Every `ax.<method>` call *adds* ' +
    'to that panel \u2014 nothing you draw replaces what is already there, which is why each ' +
    'call needs its own `label=`. Calling `plt.subplots()` again does not add anything: it ' +
    'makes a second, empty figure and draws into that, which is why the skin lines seem to ' +
    'vanish. `fig` holds the panels but does not draw; its axes do.',

  'l7-q3e':
    '**12 panels, bottom-right is `axes[2][3]`.** 3 rows \u00d7 4 columns = 12, and `axes` ' +
    'comes back as a 2-D NumPy array indexed `[row][column]` counting from 0 \u2014 so the ' +
    'last row is 2 and the last column is 3. `axes[3][4]` is an `IndexError`, and ' +
    '`axes[4][3]` has the two swapped. To touch all twelve without nesting loops: ' +
    '`for ax in axes.flat:`.',

  'l7-q3f':
    '**SOX10 runs the melanocyte identity programme.** It is a neural-crest transcription ' +
    'factor that drives MITF and the pigment programme, and melanoma arises from melanocytes ' +
    'and keeps that identity \u2014 so it stays dependent on the switch that makes the cell what ' +
    'it is. This is **lineage addiction**: the dependency follows what the cell *is*, not a ' +
    'mutation it carries. Every cell line has the gene; the others simply are not running the ' +
    'programme that needs it. Compare RAN, which every cell needs \u2014 only the selective kind ' +
    'makes a drug target. It also explains the ~18 of 73 skin lines on the box plot that do not ' +
    'need SOX10: those have de-differentiated out of the melanocytic state.',
}

export const getAnswerProse = (id: string): string | undefined =>
  Object.prototype.hasOwnProperty.call(POLL_ANSWERS, id) ? POLL_ANSWERS[id] : undefined
