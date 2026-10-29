"""Practice question bank for /practice — Lectures 1–4.

Source of truth for lib/practice/questions.json. Run

    python3 scripts/practice/build.py

to check every question against real Python and regenerate the JSON. The build
refuses to write if any answer key is wrong.

Question kinds
--------------
out    "What is printed?" — the code is run; its output must equal the keyed
       option, and no other option may also equal it. "A XError is raised."
       options match a raised exception of that type.
blank  The code has a ____ gap. Each option is substituted and run; only the
       keyed option may print `expect`.
value  `check` is a Python expression; str() of its value must equal the keyed
       option. For short factual questions with a checkable answer.
idea   A conceptual question with no code to run. Kept few, checked by hand.

Levels: E (easy), I (intermediate), A (advanced — includes the advanced-notebook
topics: copies, sorted/zip/lambda, comprehensions, while, try/else/finally ...).
"""

Q = []


def out(level, sec, prompt, code, opts, ans, why):
    Q.append(dict(kind="out", level=level, sec=sec, prompt=prompt, code=code, opts=opts, ans=ans, why=why))


def blank(level, sec, prompt, code, opts, ans, expect, why):
    Q.append(dict(kind="blank", level=level, sec=sec, prompt=prompt, code=code, opts=opts, ans=ans, expect=expect, why=why))


def value(level, sec, prompt, opts, ans, check, why, code=None):
    Q.append(dict(kind="value", level=level, sec=sec, prompt=prompt, code=code, opts=opts, ans=ans, check=check, why=why))


def idea(level, sec, prompt, opts, ans, why, code=None):
    Q.append(dict(kind="idea", level=level, sec=sec, prompt=prompt, code=code, opts=opts, ans=ans, why=why))


P = "What is printed?"

# ── Variables & printing ─────────────────────────────────────────────────────
S = "variables"
out("E", S, P, 'colonies = 5\ncolonies = 8\nprint(colonies)',
    ["5", "8", "13", "colonies"], 1,
    "A variable holds one value at a time. The second assignment replaces 5 with 8.")
idea("E", S, 'Which line stores the text "TP53" in a variable called gene?',
     ['gene = "TP53"', '"TP53" = gene', 'gene == "TP53"', 'print(gene, "TP53")'], 0,
     "The name goes on the left of a single =, the value on the right. == compares; it does not store anything.")
out("E", S, P, 'print("Mice:", 12)',
    ["Mice:12", "Mice: 12", '"Mice:" 12', "Mice: , 12"], 1,
    "print() shows each item it is given, separated by a single space. The quotes are not printed.")
out("E", S, P, 'name = "Ana"\nwells = 96\nprint(f"{name} filled {wells} wells")',
    ["Ana filled 96 wells", "{name} filled {wells} wells", "name filled wells wells", "Ana filled wells wells"], 0,
    "In an f-string, every {name} is replaced by that variable's value.")
idea("E", S, "Which of these is NOT allowed as a Python variable name?",
     ["gene_count", "geneCount", "gene count", "_gene"], 2,
     "Names may contain letters, digits and underscores. A space splits it into two names, which is a SyntaxError.")
out("I", S, P, 'a = 3\nb = a\na = 10\nprint(a, b)',
    ["10 10", "3 3", "10 3", "3 10"], 2,
    "b = a copies the value 3 into b at that moment. Changing a afterwards does not change b.")
out("I", S, P, 'total = 20\ntotal = total - 5\ntotal = total * 2\nprint(total)',
    ["30", "35", "10", "15"], 0,
    "Each line uses the value from the line before: 20 - 5 is 15, then 15 * 2 is 30.")
out("I", S, P, 'temp = 36.86\nprint(f"Temp: {temp:.1f} C")',
    ["Temp: 36.8 C", "Temp: 36.9 C", "Temp: 36.86 C", "Temp: 37 C"], 1,
    ":.1f shows one decimal place, rounding 36.86 to 36.9.")
out("I", S, P, 'name = "Ben"\nprint("Hello {name}")',
    ["Hello Ben", "Hello {name}", "Hello name", "A NameError is raised."], 1,
    "Without the f in front, the braces are ordinary characters and are printed as they are.")
out("I", S, P, 'reads = 10\nreads -= 4\nreads -= 4\nprint(reads)',
    ["2", "6", "10", "14"], 0,
    "reads -= 4 is short for reads = reads - 4. Done twice: 10 → 6 → 2.")
out("A", S, P, 'dose = 2.5\nmice = 4\nprint(f"{dose * mice:.0f} mg")',
    ["10 mg", "10.0 mg", "2.5 * 4 mg", "{dose * mice:.0f} mg"], 0,
    "An f-string can hold a whole expression. 2.5 * 4 is 10.0, and :.0f shows it with no decimal places.")
out("A", S, P, 'x, y = 3, 7\nx = y\ny = x\nprint(x, y)',
    ["7 3", "3 7", "7 7", "3 3"], 2,
    "x = y makes x 7. By the time y = x runs, x is already 7, so y becomes 7 too. The old 3 is lost.")
out("A", S, P, 'label = "well"\nlabel = label + "_" + str(3)\nlabel = label.upper()\nprint(label)',
    ["well_3", "WELL_3", "WELL_STR(3)", "A TypeError is raised."], 1,
    "str(3) turns the number into text so it can be joined: well_3. upper() then returns the capitalised copy, which is stored back in label.")
out("A", S, P, 'a = 2\nb = a * 3\na = b + a\nprint(a, b)',
    ["8 6", "6 8", "12 6", "8 8"], 0,
    "b is 2 * 3 = 6. Then a becomes 6 + 2 = 8. b keeps its own value, 6.")
out("A", S, P, 'n = 17\nprint(f"{n // 5} plates, {n % 5} left over")',
    ["3 plates, 2 left over", "3.4 plates, 2 left over", "3 plates, 3 left over", "{n // 5} plates, {n % 5} left over"], 0,
    "// gives the whole number of times 5 fits into 17 (3); % gives what is left (2). Both are worked out inside the f-string.")

# ── Data types ───────────────────────────────────────────────────────────────
S = "types"
value("E", S, "What is the type of 42?", ["int", "float", "str", "bool"], 0, "type(42).__name__",
      "A whole number without a decimal point is an int.")
value("E", S, "What is the type of 3.0?", ["int", "float", "str", "bool"], 1, "type(3.0).__name__",
      "The decimal point makes it a float, even though the value is a whole number.")
value("E", S, 'What is the type of "True"?', ["bool", "str", "int", "float"], 1, 'type("True").__name__',
      "Anything inside quotes is a string, even if it looks like True or a number.")
out("E", S, P, "print(type(7 / 7))",
    ["<class 'int'>", "<class 'float'>", "1", "<class 'str'>"], 1,
    "Division with / always gives a float, even when it comes out exactly: 7 / 7 is 1.0.")
blank("E", S, 'Which replaces ____ to turn the text "42" into a whole number?',
      'x = ____\nprint(type(x).__name__, x)',
      ['int("42")', "str(42)", 'float("42")', '"42" + 0'], 0, "int 42",
      'int() converts text that looks like a whole number into an int. float() would give 42.0, and "42" + 0 is a TypeError.')
out("I", S, P, 'print("3" + "4")',
    ["7", "34", '"3""4"', "A TypeError is raised."], 1,
    "Both are strings, so + joins them end to end. To add them as numbers, convert them first.")
out("I", S, P, 'print(int("3") + 4)',
    ["34", "7", "A TypeError is raised.", '"7"'], 1,
    'int("3") is the number 3, so this is ordinary addition.')
out("I", S, P, "print(int(4.9))",
    ["5", "4", "4.9", "A ValueError is raised."], 1,
    "int() on a float cuts off the decimal part. It does not round.")
out("I", S, P, "print(len(str(1234)))",
    ["1234", "4", "10", "A TypeError is raised."], 1,
    'str(1234) is the text "1234", which has 4 characters. len() of the number itself would be a TypeError.')
out("I", S, P, 'print(float("2.5") * 2)',
    ["5.0", "5", "2.52.5", "A TypeError is raised."], 0,
    'float("2.5") is the number 2.5. A float times an int is a float: 5.0.')
out("A", S, P, 'print(int("3.5"))',
    ["3", "4", "3.5", "A ValueError is raised."], 3,
    'int() can convert "3" but not text with a decimal point. Use float("3.5") first, then int() if needed.')
out("A", S, P, 'print(int(float("2.9")) + 1)',
    ["3", "3.9", "4", "A ValueError is raised."], 0,
    'float("2.9") is 2.9; int() cuts it to 2; adding 1 gives 3.')
out("A", S, P, 'print(str(10 / 4) + "0")',
    ["2.50", "2.5", "12.5", "A TypeError is raised."], 0,
    '10 / 4 is 2.5; str() turns it into the text "2.5"; + "0" joins another character on the end.')
out("A", S, P, 'print(str(2) + str(3) * 2)',
    ["2323", "233", "10", "A TypeError is raised."], 1,
    '* happens before +. str(3) * 2 repeats the text: "33". Then "2" + "33" is "233".')
out("A", S, P, 'x = 10 / 5\nprint(x, type(x) == int)',
    ["2 True", "2.0 False", "2.0 True", "2 False"], 1,
    "/ always gives a float, so x is 2.0 — and a float is not an int.")

# ── Operators & logic ────────────────────────────────────────────────────────
S = "operators"
out("E", S, P, "print(2 ** 3)", ["6", "8", "9", "23"], 1, "** raises to a power: 2 × 2 × 2 = 8.")
out("E", S, P, "print(10 % 3)", ["3", "1", "3.33", "0"], 1, "% gives the remainder: 10 is 3 × 3 with 1 left over.")
out("E", S, P, "print(7 // 2)", ["3.5", "3", "4", "1"], 1, "// divides and drops the decimal part: 3.5 becomes 3.")
out("E", S, P, "print(5 > 3 and 2 > 4)", ["True", "False", "5", "A SyntaxError is raised."], 1,
    "and needs both sides to be True. 2 > 4 is False, so the whole thing is False.")
idea("E", S, "Which operator checks whether two values are equal?", ["=", "==", "!=", "=>"], 1,
     "== compares. A single = stores a value in a variable. != means 'not equal'.")
out("I", S, P, "print(2 + 3 * 4)", ["20", "14", "24", "9"], 1,
    "Multiplication happens before addition: 3 * 4 is 12, then 2 + 12 is 14.")
out("I", S, P, "print((2 + 3) * 4 / 2)", ["10", "10.0", "7.0", "14.0"], 1,
    "Brackets first: 5 * 4 is 20, and 20 / 2 is 10.0 — a float, because / always gives one.")
out("I", S, P, "print(not 4 > 2)", ["True", "False", "not True", "2"], 1,
    "4 > 2 is True, and not flips it to False.")
out("I", S, P, "cells = 250\nvolume = 0.5\nprint(cells / volume)", ["125.0", "500.0", "500", "250.5"], 1,
    "Cells per unit volume: 250 / 0.5 is 500.0. Dividing by a number below 1 makes the result bigger.")
out("I", S, P, "print(17 % 5 == 2)", ["True", "False", "2", "3"], 0,
    "17 % 5 is 2 (17 = 3 × 5 + 2), and 2 == 2 is True.")
out("A", S, P, "print(10 - 2 * 3 ** 2)", ["-8", "72", "64", "-26"], 0,
    "** first (3 ** 2 = 9), then * (2 * 9 = 18), then - (10 - 18 = -8).")
out("A", S, P, "print(1 < 5 < 3)", ["True", "False", "A SyntaxError is raised.", "5"], 1,
    "A chained comparison means 1 < 5 and 5 < 3. The second part is False, so the result is False.")
out("A", S, P, "x = 12\nprint(x % 2 == 0 and not x > 10)", ["True", "False", "12", "A SyntaxError is raised."], 1,
    "x is even (True), but x > 10 is True, so not x > 10 is False. True and False is False.")
out("A", S, P, "minutes = 135\nprint(minutes // 60, minutes % 60)", ["2 15", "2.25 15", "2 25", "1 75"], 0,
    "// gives whole hours (2) and % gives the minutes left over (15): 135 minutes is 2 h 15 min.")
out("A", S, P, "temp = 37\nprint(36 <= temp <= 38 and temp != 37)", ["True", "False", "37", "A SyntaxError is raised."], 1,
    "37 is inside the range (True), but temp != 37 is False, and both must be True.")

# ── Lists ────────────────────────────────────────────────────────────────────
S = "lists"
out("E", S, P, "growth = [12, 7, 30]\nprint(growth[0])", ["12", "7", "30", "[12]"], 0,
    "Counting starts at 0, so growth[0] is the first item.")
out("E", S, P, "weights = [21, 19, 25]\nweights.append(23)\nprint(weights)",
    ["[21, 19, 25, 23]", "[23, 21, 19, 25]", "[21, 19, 25]", "[21, 19, 25, [23]]"], 0,
    ".append() adds one item to the end of the list.")
out("E", S, P, "print([5, 9, 1][1])", ["5", "9", "1", "[9]"], 1, "Index 1 is the second item, because counting starts at 0.")
idea("E", S, "Which method adds one item to the end of a list?", [".append()", ".add()", ".end()", ".join()"], 0,
     ".append() adds to the end. Lists have no .add() or .end(); .join() is a string method.")
out("E", S, P, "x = [3, 6, 9, 12]\nprint(x[:2])", ["[3, 6]", "[3, 6, 9]", "[6, 9]", "[9, 12]"], 0,
    "x[:2] starts at the beginning and stops before index 2: the first two items.")
out("I", S, P, "x = [8, 2, 5]\nx[1] = 4\nprint(x)", ["[8, 4, 5]", "[4, 2, 5]", "[8, 2, 4]", "[8, 2, 5]"], 0,
    "Lists can be changed in place: x[1] = 4 replaces the second item.")
out("I", S, P, "x = [10, 20, 30, 40]\nprint(x[-2:])", ["[30, 40]", "[20, 30]", "[40]", "[10, 20]"], 0,
    "-2 is the second-to-last item; leaving out the end runs to the end of the list.")
out("I", S, P, "x = [3, 1, 2]\nx.sort()\nprint(x)", ["[1, 2, 3]", "[3, 2, 1]", "[3, 1, 2]", "None"], 0,
    ".sort() reorders the list itself, smallest first.")
out("I", S, P, "lengths = [120, 90, 240]\nprint(sum(lengths) / len(lengths))", ["150.0", "150", "450", "3"], 0,
    "sum() adds the items (450), len() counts them (3), and / gives the mean as a float.")
out("I", S, P, "x = [4, 7]\nx.insert(0, 9)\nprint(x)", ["[9, 4, 7]", "[4, 7, 9]", "[4, 9, 7]", "[0, 9, 4, 7]"], 0,
    ".insert(0, 9) puts 9 at position 0 and shifts everything else along.")
out("A", S, P, "a = [1, 2]\nb = a\nb.append(3)\nprint(len(a))", ["2", "3", "1", "A NameError is raised."], 1,
    "b = a does not copy the list: both names point to the same list, so appending through b changes a too.")
out("A", S, P, "a = [1, 2]\nb = a.copy()\nb.append(3)\nprint(a, b)",
    ["[1, 2] [1, 2, 3]", "[1, 2, 3] [1, 2, 3]", "[1, 2] [1, 2]", "[1, 2, 3] [1, 2]"], 0,
    ".copy() makes a separate list, so appending to b leaves a unchanged.")
out("A", S, P, "result = [3, 1, 2].sort()\nprint(result)", ["[1, 2, 3]", "None", "[3, 1, 2]", "A TypeError is raised."], 1,
    ".sort() changes the list in place and returns None. To get a new sorted list, use sorted().")
out("A", S, P, "plate = [[1, 2], [3, 4]]\nprint(plate[1][0])", ["3", "2", "1", "[3, 4]"], 0,
    "plate[1] is the inner list [3, 4]; [0] then takes its first item.")
out("A", S, P, "x = [5, 2, 8]\ny = sorted(x)\nprint(x[0], y[0])", ["5 2", "2 2", "5 5", "2 5"], 0,
    "sorted() returns a new sorted list and leaves x as it was.")

# ── Strings ──────────────────────────────────────────────────────────────────
S = "strings"
out("E", S, P, 'dna = "GATTACA"\nprint(len(dna))', ["7", "6", "3", "GATTACA"], 0, "len() counts the characters: 7 letters.")
out("E", S, P, 'print("gattaca".upper())', ["GATTACA", "gattaca", "Gattaca", "A TypeError is raised."], 0,
    ".upper() returns a copy with every letter in capitals.")
out("E", S, P, 'print("GATTACA"[0])', ["G", "A", "GA", "0"], 0, "Index 0 is the first character.")
out("E", S, P, 'print("GATTACA".count("A"))', ["3", "2", "7", "1"], 0, '.count("A") counts how often A appears: G-A-T-T-A-C-A has three.')
out("E", S, P, 'print("AT" + "GC")', ["ATGC", "AT GC", "AT+GC", "A TypeError is raised."], 0,
    "+ joins two strings with nothing in between.")
out("I", S, P, 'print("GATTACA"[2:5])', ["TTA", "ATT", "TTAC", "TAC"], 0,
    "[2:5] takes positions 2, 3 and 4 and stops before 5: T, T, A.")
out("I", S, P, 'print("ATGCATGC".find("CAT"))', ["3", "2", "4", "-1"], 0,
    ".find() gives the position where the text first starts. C-A-T begins at index 3.")
out("I", S, P, 'print("sample_07".split("_"))', ["['sample', '07']", "['sample_07']", "['sample', '_', '07']", "sample 07"], 0,
    ".split() cuts the string at each _ and returns the pieces as a list. The _ itself is dropped.")
out("I", S, P, 'print("TTAGC"[-2:])', ["GC", "AG", "TT", "C"], 0, "[-2:] is the last two characters.")
out("I", S, P, 'print("ATG" in "CCATGA")', ["True", "False", "ATG", "2"], 0, "in checks whether one string appears inside another.")
out("A", S, P, 'print("ACGT"[::-1])', ["TGCA", "ACGT", "AGCT", "T"], 0, "A step of -1 walks backwards through the string, reversing it.")
out("A", S, P, 'print("AAAA".count("AA"))', ["2", "3", "4", "1"], 0,
    ".count() does not count overlapping matches: AA|AA is two, not three.")
out("A", S, P, 'print("-".join(["ATG", "GCC", "TAA"]))', ["ATG-GCC-TAA", "ATGGCCTAA", "-ATG-GCC-TAA-", "['ATG', 'GCC', 'TAA']"], 0,
    '"-".join(list) glues the strings together with - between them (not at the ends).')
out("A", S, P, 'print("ATGC".find("X"))', ["-1", "0", "None", "A ValueError is raised."], 0,
    ".find() returns -1 when the text is not there. It does not raise an error.")
out("A", S, P, 'seq = "ATGGC"\nprint((seq.count("G") + seq.count("C")) / len(seq))', ["0.6", "0.4", "3", "60"], 0,
    "G appears twice and C once: 3 out of 5 bases, so the GC fraction is 0.6.")

# ── Dictionaries ─────────────────────────────────────────────────────────────
S = "dictionaries"
out("E", S, P, 'ages = {"Rex": 3, "Tom": 5}\nprint(ages["Tom"])', ["5", "3", "Tom", "A KeyError is raised."], 0,
    "Square brackets with a key give the value stored for that key.")
out("E", S, P, 'print(len({"a": 1, "b": 2, "c": 3}))', ["3", "6", "2", "1"], 0, "len() counts the key–value pairs.")
blank("E", S, "Which replaces ____ to make a dictionary?", 'x = ____\nprint(type(x).__name__)',
      ['{"ATG": "M"}', '["ATG", "M"]', '("ATG", "M")', '{"ATG", "M"}'], 0, "dict",
      "A dictionary uses curly braces with key: value pairs. Without the colon, {} makes a set instead.")
out("E", S, P, 'd = {"x": 1}\nd["y"] = 2\nprint(d)', ["{'x': 1, 'y': 2}", "{'x': 1}", "{'y': 2}", "A KeyError is raised."], 0,
    "Assigning to a new key adds it. Only reading a missing key raises a KeyError.")
out("E", S, P, 'd = {"A": 4, "T": 2}\nprint(list(d.keys()))', ["['A', 'T']", "[4, 2]", "['A', 4, 'T', 2]", "2"], 0,
    ".keys() gives the keys, in the order they were added.")
out("I", S, P, 'd = {"G": 0}\nd["G"] = d["G"] + 1\nprint(d["G"])', ["1", "0", "G1", "A KeyError is raised."], 0,
    "The right-hand side reads the old value (0), adds 1, and stores 1 back under G.")
out("I", S, P, 'd = {"A": 4}\nprint(d.get("Z", "none"))', ["none", "None", "4", "A KeyError is raised."], 0,
    ".get() returns the default you give it when the key is missing, instead of raising an error.")
out("I", S, P, 'masses = {"H": 1, "O": 16}\nprint(masses["H"] * 2 + masses["O"])', ["18", "17", "34", "HHO"], 0,
    "Look up each value and do the sum: 1 * 2 + 16 = 18, the mass of water.")
out("I", S, P, 'd = {"a": 1}\nprint(d["A"])', ["1", "None", "A KeyError is raised.", "A NameError is raised."], 2,
    'Keys are case-sensitive: "A" is not the same key as "a".')
out("I", S, P, 'groups = {"ctrl": 4, "drug": 6}\ntotal = 0\nfor name, n in groups.items():\n    total += n\nprint(total)',
    ["10", "ctrldrug", "2", "46"], 0, ".items() gives each key with its value; the loop adds up the values.")
out("A", S, P, 'd = dict(zip(["x", "y"], [1, 2]))\nprint(d)', ["{'x': 1, 'y': 2}", "{'x': 'y', 1: 2}", "[('x', 1), ('y', 2)]", "{1: 'x', 2: 'y'}"], 0,
    "zip pairs up the two lists; dict() turns those pairs into keys and values.")
out("A", S, P, 'd = {"rat": 3, "bat": 7, "cat": 5}\ntop = sorted(d.items(), key=lambda kv: kv[1])[0]\nprint(top)',
    ["('rat', 3)", "('bat', 7)", "('cat', 5)", "rat"], 0,
    "key=lambda kv: kv[1] sorts the pairs by their value, smallest first, so item [0] is the pair with the lowest value.")
out("A", S, P, 'counts = {}\nfor base in "AGGA":\n    counts[base] = counts.get(base, 0) + 1\nprint(counts)',
    ["{'A': 2, 'G': 2}", "{'A': 1, 'G': 1}", "{'AGGA': 1}", "A KeyError is raised."], 0,
    ".get(base, 0) gives 0 the first time a base is seen, so counting never hits a missing key.")
out("A", S, P, 'squares = {n: n * n for n in [1, 2, 3]}\nprint(squares[3])', ["9", "3", "6", "A KeyError is raised."], 0,
    "A dictionary comprehension builds key: value pairs in one line; the key 3 maps to 3 * 3.")
out("A", S, P, 'data = {"mouse1": {"weight": 21}}\nprint(data["mouse1"]["weight"])', ["21", "weight", "{'weight': 21}", "A KeyError is raised."], 0,
    "The first lookup gives the inner dictionary; the second looks up weight inside it.")

# ── Loops ────────────────────────────────────────────────────────────────────
S = "loops"
out("E", S, P, "n = 0\nfor x in [5, 5, 5]:\n    n = n + 1\nprint(n)", ["3", "15", "5", "1"], 0,
    "The body runs once per item, adding 1 each time: three items, so n is 3.")
out("E", S, P, "print(list(range(2, 6)))", ["[2, 3, 4, 5]", "[2, 3, 4, 5, 6]", "[3, 4, 5, 6]", "[2, 6]"], 0,
    "range(2, 6) starts at 2 and stops before 6.")
value("E", S, "How many times does the body of  for i in range(4):  run?", ["3", "4", "5", "0"], 1, "len(range(4))",
      "range(4) gives 0, 1, 2, 3 — four values, so four runs.")
out("E", S, P, "total = 0\nfor v in [2, 3, 5]:\n    total += v\nprint(total)", ["10", "5", "235", "0"], 0,
    "A running total: 0 + 2 + 3 + 5 = 10.")
out("E", S, P, 'names = []\nfor n in [1, 2, 3]:\n    names.append("well" + str(n))\nprint(names)', ["['well1', 'well2', 'well3']", "['well3']", "['well', 'well', 'well']", "[1, 2, 3]"], 0,
    "Each pass builds one label and appends it, so the new list has one name per number.")
out("I", S, P, 'word = ""\nfor b in "CAT":\n    word = b + word\nprint(word)', ["TAC", "CAT", "C", "T"], 0,
    "Each letter is put in front of what is already there, so the word comes out backwards.")
out("I", S, P, "print(list(range(0, 10, 4)))", ["[0, 4, 8]", "[0, 4, 8, 12]", "[4, 8]", "[0, 10, 4]"], 0,
    "A step of 4: 0, 4, 8, then 12 would be past the stop value 10.")
out("I", S, P, 'n = 0\nfor b in "ATTA":\n    if b == "A":\n        n += 1\nprint(n)', ["2", "4", "1", "0"], 0,
    "The loop checks every letter and counts the As.")
out("I", S, P, "for v in [3, 8, 2, 9]:\n    if v > 5:\n        break\nprint(v)", ["8", "9", "3", "2"], 0,
    "break stops the loop at the first value above 5. v keeps that value, 8.")
out("I", S, P, "c = 0\nfor i in range(3):\n    for j in range(2):\n        c += 1\nprint(c)", ["6", "5", "3", "2"], 0,
    "The inner loop runs 2 times for each of the 3 outer runs: 3 × 2 = 6.")
out("A", S, P, "n = 1\nwhile n < 20:\n    n = n * 3\nprint(n)", ["27", "9", "20", "81"], 0,
    "n goes 1 → 3 → 9 → 27. At 27 the test n < 20 is False, so the loop stops.")
out("A", S, P, 'for i, b in enumerate("GAT"):\n    if b == "A":\n        print(i)', ["1", "0", "2", "A"], 0,
    "enumerate gives each position with its letter; A is at position 1.")
out("A", S, P, "total = 0\nfor a, b in zip([1, 2, 3], [10, 20, 30]):\n    total += a * b\nprint(total)", ["140", "66", "60", "6"], 0,
    "zip pairs the lists item by item: 1×10 + 2×20 + 3×30 = 140.")
out("A", S, P, "print([x * x for x in range(4)])", ["[0, 1, 4, 9]", "[1, 4, 9, 16]", "[0, 2, 4, 6]", "[0, 1, 2, 3]"], 0,
    "The comprehension squares each value from range(4), which starts at 0.")
out("A", S, P, "stack = [4, 1, 6]\nsteps = 0\nwhile len(stack) > 1:\n    stack = stack[1:]\n    steps += 1\nprint(stack, steps)",
    ["[6] 2", "[4] 2", "[] 3", "[6] 3"], 0,
    "Each pass drops the first item. After two passes one item is left, and the test len(stack) > 1 becomes False.")

# ── Conditionals ─────────────────────────────────────────────────────────────
S = "conditionals"
out("E", S, P, 'x = 15\nif x > 10:\n    print("big")\nelse:\n    print("small")', ["big", "small", "big small", "15"], 0,
    "15 > 10 is True, so the if block runs and the else block is skipped.")
idea("E", S, "Which keyword adds another condition to check after an if?", ["elif", "else if", "elseif", "then"], 0,
     "Python spells it elif. else takes no condition at all.")
out("E", S, P, 'ph = 8\nif ph < 7:\n    print("acid")\nelif ph == 7:\n    print("neutral")\nelse:\n    print("base")',
    ["base", "acid", "neutral", "acid base"], 0, "8 is neither below 7 nor equal to 7, so the else branch runs.")
out("E", S, P, "print(3 in [1, 2, 3])", ["True", "False", "3", "2"], 0, "in checks whether a value is one of the items in the list.")
out("E", S, P, "print(5 != 5)", ["False", "True", "0", "5"], 0, "!= means 'not equal'. 5 is equal to 5, so the answer is False.")
out("I", S, P, 'score = 65\nif score >= 70:\n    band = "first"\nelif score >= 60:\n    band = "2:1"\nelif score >= 50:\n    band = "2:2"\nelse:\n    band = "fail"\nprint(band)',
    ["2:1", "first", "2:2", "fail"], 0, "The checks run top to bottom. 65 fails the first and passes the second, and the rest are skipped.")
out("I", S, P, "n = 0\nfor v in [2, 7, 4, 9]:\n    if v % 2 == 0:\n        n += 1\nprint(n)", ["2", "4", "1", "0"], 0,
    "v % 2 == 0 is True for even numbers: 2 and 4.")
out("I", S, P, 'res = []\nfor v in [3, 12, 8]:\n    if v > 5:\n        res.append("hi")\n    else:\n        res.append("lo")\nprint(res)',
    ["['lo', 'hi', 'hi']", "['hi', 'hi']", "['lo']", "['hi', 'lo', 'lo']"], 0,
    "Each value gets exactly one label: 3 is lo, 12 and 8 are hi.")
out("I", S, P, 'age = 4\nweight = 30\nif age > 3 and weight < 25:\n    print("A")\nelif age > 3:\n    print("B")\nelse:\n    print("C")',
    ["B", "A", "C", "A B"], 0, "The first test needs both parts; weight < 25 is False. The second test only needs age > 3.")
out("I", S, P, 'x = 10\nout = ""\nif x > 5:\n    out += "a"\nif x > 8:\n    out += "b"\nprint(out)', ["ab", "a", "b", ""], 0,
    "These are two separate if statements, not an if/elif chain, so both can run.")
out("A", S, P, 'x = 4\nlabel = "even" if x % 2 == 0 else "odd"\nprint(label)', ["even", "odd", "True", "4"], 0,
    "A conditional expression picks one of two values in a single line.")
out("A", S, P, "print([v for v in [3, 8, 1, 9] if v > 2])", ["[3, 8, 9]", "[8, 9]", "[1]", "[True, True, False, True]"], 0,
    "The if at the end of a comprehension keeps only the values that pass the test.")
out("A", S, P, 'print(["H" if v > 5 else "L" for v in [7, 2, 6]])', ["['H', 'L', 'H']", "['H', 'H']", "['L', 'H', 'L']", "['H']"], 0,
    "An if/else before the for picks a value for every item; nothing is dropped.")
out("A", S, P, 'bad = ["N", "X"]\nclean = [b for b in "ANTXG" if b not in bad]\nprint("".join(clean))', ["ATG", "NX", "ANTXG", "ATXG"], 0,
    "not in keeps the letters that are not in the bad list; join glues them back into one string.")
out("A", S, P, 'd = {"A": 1}\nfor k in ["A", "B"]:\n    if k in d and d[k] > 0:\n        print(k)', ["A", "B", "A then B", "A KeyError is raised."], 0,
    "For B, k in d is False, so Python never evaluates d[k] — and no KeyError happens.")

# ── Functions ────────────────────────────────────────────────────────────────
S = "functions"
out("E", S, P, "def double(x):\n    return x * 2\n\nprint(double(6))", ["12", "6", "x * 2", "None"], 0,
    "The argument 6 becomes x inside the function, and return hands back 12.")
idea("E", S, "Which keyword starts a function definition?", ["def", "function", "func", "define"], 0, "Every function definition starts with def.")
out("E", S, P, 'def greet():\n    return "hi"\n\nprint(greet())', ["hi", "greet", "None", "A NameError is raised."], 0,
    "Calling greet() runs its body; return sends back the text hi.")
out("E", S, P, "def add(a, b):\n    return a + b\n\nprint(add(2, 3))", ["5", "23", "a + b", "None"], 0, "a is 2 and b is 3 for this call.")
out("E", S, P, "def nothing(x):\n    y = x * 2\n\nprint(nothing(3))", ["None", "6", "3", "A NameError is raised."], 0,
    "Without a return statement a function hands back None.")
out("I", S, P, "def dilute(c, factor=10):\n    return c / factor\n\nprint(dilute(50), dilute(50, 5))", ["5.0 10.0", "5.0 5.0", "10.0 10.0", "5 10"], 0,
    "The default 10 is used when no factor is given; passing 5 overrides it.")
out("I", S, P, "def f(x):\n    print(x + 1)\n\nresult = f(2)\nprint(result)", ["3\nNone", "3\n3", "None", "3"], 0,
    "f prints 3 but returns nothing, so result is None — and that is printed next.")
out("I", S, P, "def ratio(a, b):\n    return a / b\n\nprint(ratio(b=2, a=8))", ["4.0", "0.25", "4", "A TypeError is raised."], 0,
    "Named arguments match by name, not position: a is 8 and b is 2.")
out("I", S, P, "def square(x):\n    return x * x\n\ndef sum_sq(a, b):\n    return square(a) + square(b)\n\nprint(sum_sq(2, 3))", ["13", "25", "10", "36"], 0,
    "sum_sq calls square twice: 4 + 9 = 13.")
out("I", S, P, 'def check(x):\n    if x > 0:\n        return "pos"\n    return "not pos"\n\nprint(check(5), check(-1))', ["pos not pos", "pos pos", "not pos not pos", "pos None"], 0,
    "return ends the function straight away, so the second return only runs when x > 0 is False.")
out("A", S, P, "def stats(v):\n    return min(v), max(v)\n\nlo, hi = stats([4, 9, 2])\nprint(hi - lo)", ["7", "5", "2", "(2, 9)"], 0,
    "The function returns two values, unpacked into lo (2) and hi (9).")
out("A", S, P, "x = 5\n\ndef change():\n    x = 99\n    return x\n\nchange()\nprint(x)", ["5", "99", "None", "A NameError is raised."], 0,
    "The x inside the function is a separate, local variable. The x outside is never changed.")
out("A", S, P, 'def count_cells():\n    """Count the cells in an image."""\n    return 0\n\nprint(count_cells.__doc__)',
    ["Count the cells in an image.", "0", "None", "count_cells"], 0, "A docstring is stored on the function and can be read with __doc__.")
out("A", S, P, "def pair():\n    return 1, 2\n\nresult = pair()\nprint(result)", ["(1, 2)", "1 2", "[1, 2]", "1"], 0,
    "Returning two values gives a tuple. Without unpacking, result holds the whole tuple.")
out("A", S, P, 'def count_base(seq, base="A"):\n    n = 0\n    for b in seq:\n        if b == base:\n            n += 1\n    return n\n\nprint(count_base("AGGA"), count_base("AGGA", "G"))',
    ["2 2", "2 0", "4 2", "1 2"], 0, "The first call uses the default A (2 of them); the second counts G (also 2).")

# ── Errors ───────────────────────────────────────────────────────────────────
S = "errors"
out("E", S, P, 'print(int("abc"))', ["A ValueError is raised.", "A TypeError is raised.", "abc", "0"], 0,
    'int() cannot turn "abc" into a number. The type of the argument is fine (text), but its value is not.')
out("E", S, P, "print([1, 2][5])", ["An IndexError is raised.", "A KeyError is raised.", "None", "2"], 0,
    "The list has positions 0 and 1 only; asking for position 5 is an IndexError.")
out("E", S, P, 'print("A" + 1)', ["A TypeError is raised.", "A1", "A ValueError is raised.", "2"], 0,
    "You cannot add text and a number. Convert first: \"A\" + str(1).")
idea("E", S, "Which keyword starts the block that handles an error after try?", ["except", "catch", "error", "else"], 0,
     "Python uses try … except. catch is used in other languages.")
out("E", S, P, "print(cell_count)", ["A NameError is raised.", "0", "cell_count", "A KeyError is raised."], 0,
    "The variable was never created, so Python does not know the name.")
out("I", S, P, 'try:\n    x = int("12")\nexcept ValueError:\n    x = 0\nprint(x + 1)', ["13", "1", "121", "0"], 0,
    "The conversion works, so the except block never runs.")
out("I", S, P, 'try:\n    x = int("1x")\nexcept ValueError:\n    x = -1\nprint(x)', ["-1", "1", "A ValueError is raised.", "0"], 0,
    "The conversion fails with a ValueError, which the except block catches and replaces with -1.")
out("I", S, P, "def safe_div(a, b):\n    if b == 0:\n        return None\n    return a / b\n\nprint(safe_div(4, 0))",
    ["None", "0", "A ZeroDivisionError is raised.", "4.0"], 0, "The if guard checks first and returns None before any division happens.")
out("I", S, P, 'def check(seq):\n    if len(seq) == 0:\n        raise ValueError("empty")\n    return len(seq)\n\ntry:\n    check("")\nexcept ValueError:\n    print("caught")',
    ["caught", "empty", "0", "A ValueError is raised."], 0, "raise stops the function with a ValueError, and the caller's except catches it.")
out("I", S, P, 'try:\n    print([10, 20][2])\nexcept IndexError:\n    print("no such item")', ["no such item", "20", "None", "An IndexError is raised."], 0,
    "Index 2 does not exist in a two-item list; the IndexError is caught.")
out("A", S, P, 'try:\n    n = int("7")\nexcept ValueError:\n    print("bad")\nelse:\n    print(n * 2)', ["14", "bad", "7", "bad 14"], 0,
    "else runs only when the try block finished without an error.")
out("A", S, P, "r = []\ntry:\n    r.append(1)\n    x = 1 / 0\nexcept ZeroDivisionError:\n    r.append(2)\nfinally:\n    r.append(3)\nprint(r)",
    ["[1, 2, 3]", "[1, 3]", "[2, 3]", "[1, 2]"], 0, "1 is added before the error; except adds 2; finally always runs and adds 3.")
out("A", S, P, 'def f():\n    return [1][3]\n\ntry:\n    f()\nexcept IndexError:\n    print("index")', ["index", "1", "None", "An IndexError is raised."], 0,
    "An error inside a function travels back to the caller, where the except catches it.")
out("A", S, P, 'try:\n    raise ValueError("bad codon")\nexcept ValueError as e:\n    print(e)', ["bad codon", "ValueError", "e", "A ValueError is raised."], 0,
    "as e gives the caught error a name; printing it shows the message it was raised with.")
out("A", S, P, 'try:\n    int("x")\nexcept TypeError:\n    print("T")\nexcept ValueError:\n    print("V")', ["V", "T", "T V", "A ValueError is raised."], 0,
    "Python tries each except in turn. The error is a ValueError, so the second block runs.")
