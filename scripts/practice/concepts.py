"""Concept pages for /practice/concepts/[slug].

One page per lecture section. `basics` covers what the lecture and the basic
notebook teach; `further` covers the advanced notebook — the material behind the
advanced practice questions. Every code example is run by build.py and its real
output stored, so the pages never show an output Python would not produce.

`slides` are matched by title against the lecture decks at build time (the site
build fails if a title no longer exists), so links survive slide renumbering.
"""

C = []


def concept(slug, title, lecture_label, summary, slides, notebook, advanced, basics, further):
    C.append(dict(slug=slug, title=title, lecture=lecture_label, summary=summary, slides=slides,
                  notebook=notebook, advanced=advanced, basics=basics, further=further))


def block(heading, body, code=None):
    return dict(heading=heading, body=body, code=code)


concept(
    "variables", "Variables, print() and f-strings", "Lecture 1",
    "A variable is a name for a value. print() shows values, and f-strings drop them into text.",
    [(1, "Variables"), (1, "Naming Variables"), (1, "print()"), (1, "f-strings")],
    "lab01/02_variables_and_print.ipynb", None,
    [
        block("A name for a value",
              "Use a single = to store a value under a name. Assigning again replaces the old value: a variable holds one value at a time, and each line uses the value from the line before.",
              "cells = 120\ncells = cells + 30\nprint(cells)"),
        block("Good names",
              "Names may contain letters, digits and underscores, but cannot start with a digit or contain spaces or hyphens. They are case-sensitive: Gene and gene are different names.",
              None),
        block("print() and f-strings",
              "print() shows each item it is given, separated by a space. An f-string — text with an f in front — replaces every {name} with that variable's value. Without the f, the braces are printed as they are.",
              'gene = "TP53"\nlength = 393\nprint("Gene:", gene)\nprint(f"{gene} has {length} amino acids")\nprint("{gene} has {length} amino acids")'),
    ],
    [
        block("Formatting numbers",
              "Inside the braces you can put a whole expression, and after a colon a format: :.2f shows two decimal places, :.0f none.",
              'ratio = 2 / 3\nprint(f"{ratio:.2f}")\nprint(f"{ratio * 100:.0f} percent")'),
        block("Copying a value, not a link",
              "b = a copies the value a has at that moment. Changing a afterwards does not change b. Shortcuts such as += update a variable using its own value.",
              "a = 3\nb = a\na += 1\nprint(a, b)"),
    ],
)

concept(
    "types", "Data types and converting between them", "Lecture 1",
    "Every value has a type — int, float, str or bool — and the type decides what you can do with it.",
    [(1, "The Four Data Types"), (1, "type()"), (1, "Division & Decimals")],
    "lab01/03_data_types.ipynb", None,
    [
        block("The four types",
              "Whole numbers are int, numbers with a decimal point are float, anything in quotes is a str (string), and True/False are bool. type() tells you which one you have.",
              'print(type(42))\nprint(type(3.0))\nprint(type("42"))\nprint(type(True))'),
        block("Quotes change everything",
              "With strings, + joins and * repeats; with numbers they add and multiply. Text read from a file is always a string, so convert it before doing maths.",
              'print("12" + "3")\nprint(int("12") + 3)\nprint(str(4) + " wells")'),
    ],
    [
        block("Conversions have rules",
              "int() on a float cuts off the decimal part — it does not round. int() cannot read text with a decimal point (ValueError): go through float() first. Division with / always gives a float.",
              'print(int(7.9))\nprint(int(float("3.5")))\nprint(10 / 2)'),
    ],
)

concept(
    "operators", "Operators: arithmetic, comparison and logic", "Lecture 1",
    "Operators do the maths, compare values, and combine True/False answers.",
    [(1, "Arithmetic Operators"), (1, "Division & Decimals"), (3, "Making a Decision")],
    "lab01/04_operators_and_mini_programs.ipynb", None,
    [
        block("Arithmetic",
              "** is a power, // divides and drops the decimal part, % gives the remainder. Python follows the usual order — ** first, then * / // %, then + and - — and brackets go first of all.",
              "print(2 ** 5)\nprint(17 // 5, 17 % 5)\nprint(2 + 3 * 4, (2 + 3) * 4)"),
        block("Comparisons and logic",
              "== asks 'equal?' (a single = stores a value). != means 'not equal'. and needs both sides True, or needs at least one, and not flips True and False.",
              "od = 0.45\nprint(od == 0.45, od != 0.45)\nprint(od > 0.4 and od < 0.6)\nprint(not od > 0.4)"),
    ],
    [
        block("Chained comparisons and splitting units",
              "0.4 < od < 0.6 means 0.4 < od and od < 0.6. Together, // and % split a quantity into whole units and what is left over.",
              'od = 0.7\nprint(0.4 < od < 0.6)\nseconds = 200\nprint(seconds // 60, "min", seconds % 60, "s")'),
    ],
)

concept(
    "lists", "Lists", "Lecture 2",
    "A list holds many values in order. You can index it, slice it and change it.",
    [(2, "Lists"), (2, "Indexing & Slicing"), (2, "Growing a List"), (2, "Editing a List"), (2, "Lists of Numbers")],
    "lab02/01_lists_basics.ipynb", "lab02/02_lists_advanced_concepts.ipynb",
    [
        block("Indexing and slicing",
              "Counting starts at 0; -1 is the last item. A slice [start:stop] stops before stop, and leaving a side out runs to that end.",
              "weights = [21, 19, 25, 23]\nprint(weights[0], weights[-1])\nprint(weights[1:3], weights[:2])"),
        block("Changing a list",
              ".append() adds to the end, .insert() at a position, and x[i] = value replaces an item. len(), sum(), min() and max() summarise a list of numbers.",
              "weights = [21, 19, 25]\nweights.append(23)\nweights[0] = 22\nprint(weights, len(weights), sum(weights) / len(weights))"),
    ],
    [
        block("Two names, one list",
              "b = a does not copy a list: both names point to the same list, so a change through one shows up in the other. .copy() makes an independent list.",
              "a = [3, 1, 2]\nb = a\nc = a.copy()\na.append(9)\nprint(b, c)"),
        block("sort() versus sorted()",
              ".sort() reorders the list itself and returns None. sorted() gives back a new sorted list and leaves the original alone.",
              "x = [5, 2, 8]\ny = sorted(x)\nprint(x, y)\nprint(x.sort(), x)"),
        block("Lists inside lists",
              "Each item can itself be a list. Index twice: first the row, then the item in it.",
              "plate = [[1, 2, 3], [4, 5, 6]]\nprint(plate[1], plate[1][2])"),
    ],
)

concept(
    "strings", "Strings", "Lecture 2",
    "A string is a sequence of characters — indexed and sliced like a list, with its own methods.",
    [(2, "A String Is a Sequence"), (2, "Slicing Out Codons"), (2, "Building Strings"), (2, "String Methods"), (2, "Transcription with .replace()")],
    "lab02/03_strings_basics.ipynb", "lab02/04_strings_advanced_concepts.ipynb",
    [
        block("A sequence of characters",
              "len(), indexing and slicing work just as they do for lists. in checks whether one piece of text appears inside another.",
              'dna = "GATTACA"\nprint(len(dna), dna[0], dna[2:5], dna[-2:])\nprint("TTA" in dna)'),
        block("Methods return a new string",
              "Strings cannot be changed in place. .upper(), .replace() and friends hand back a new string — store it, or it is lost.",
              'dna = "atgc"\ndna.upper()\nprint(dna)\ndna = dna.upper()\nprint(dna, dna.replace("T", "U"))'),
        block("Useful methods",
              ".count() counts a piece of text, .find() gives where it starts, .split() cuts text into a list and .strip() removes spaces and newlines at both ends.",
              'line = "  sample_07,GATTACA \\n"\nclean = line.strip()\nprint(clean.split(","))\nprint(clean.count("A"), clean.find("GAT"))'),
    ],
    [
        block("Reversing, joining and searching",
              "A step of -1 reverses. \"-\".join(list) glues strings together with a separator. .find() returns -1 when the text is not there, and .count() does not count overlapping matches.",
              'print("ACGT"[::-1])\nprint("-".join(["ATG", "GCC", "TAA"]))\nprint("ATGC".find("X"), "AAAA".count("AA"))'),
    ],
)

concept(
    "dictionaries", "Dictionaries", "Lecture 2",
    "A dictionary is a lookup table: each key points to a value.",
    [(2, "Dictionaries — a lookup table"), (2, "Keys & Values"), (2, "Looking Up by Key"), (2, "KeyError & .get()"), (2, "Building Dictionaries"), (3, "Looping Through a Dictionary")],
    "lab02/05_dictionaries_basics.ipynb", "lab02/06_dictionaries_advanced_concepts.ipynb",
    [
        block("Looking things up",
              "Square brackets with a key give its value; assigning to a new key adds it. Reading a key that is not there raises a KeyError — keys are case-sensitive.",
              'codons = {"ATG": "M", "TGG": "W"}\ncodons["TTT"] = "F"\nprint(codons["ATG"], len(codons))'),
        block(".get() for missing keys",
              ".get(key, default) returns the default instead of raising an error. That makes it the standard way to count.",
              'counts = {}\nfor base in "GATTACA":\n    counts[base] = counts.get(base, 0) + 1\nprint(counts)\nprint(counts.get("N", 0))'),
        block("Looping through a dictionary",
              ".items() gives each key together with its value; .keys() and .values() give one side.",
              'groups = {"ctrl": 4, "drug": 6}\nfor name, n in groups.items():\n    print(name, n)'),
    ],
    [
        block("Building and sorting",
              "zip() pairs two lists, and dict() turns the pairs into a dictionary. sorted(d.items(), key=lambda kv: kv[1]) sorts the pairs by value; add reverse=True for largest first.",
              'd = dict(zip(["rat", "bat", "cat"], [3, 7, 5]))\nranked = sorted(d.items(), key=lambda kv: kv[1], reverse=True)\nprint(ranked[0])'),
        block("Comprehensions and nesting",
              "A dictionary comprehension builds key: value pairs in one line. A value can itself be a dictionary — look up twice.",
              'squares = {n: n * n for n in [1, 2, 3]}\nmice = {"m1": {"weight": 21}}\nprint(squares, mice["m1"]["weight"])'),
    ],
)

concept(
    "loops", "for loops and range()", "Lecture 3",
    "A for loop runs the same lines once for every item.",
    [(3, "Your First Loop"), (3, "A Running Total"), (3, "Building a New List"), (3, "Why We Need range()"), (3, "Stop and Go — break")],
    "lab03/01_loops_basics.ipynb", "lab03/02_loops_advanced_concepts.ipynb",
    [
        block("Once per item",
              "The indented lines run once for each item, with the loop variable set to that item. Two patterns come up again and again: a running total that starts at 0, and a new list that starts empty.",
              "total = 0\ndoubled = []\nfor v in [2, 3, 5]:\n    total += v\n    doubled.append(v * 2)\nprint(total, doubled)"),
        block("range()",
              "range(stop) counts from 0 up to — not including — stop. range(start, stop, step) changes where it starts and how far it jumps.",
              "print(list(range(4)))\nprint(list(range(2, 6)))\nprint(list(range(0, 10, 3)))"),
        block("break",
              "break leaves the loop straight away; the loop variable keeps its last value.",
              "for v in [3, 8, 2, 9]:\n    if v > 5:\n        break\nprint(v)"),
    ],
    [
        block("enumerate() and zip()",
              "enumerate() gives each position together with its item. zip() walks two lists side by side.",
              'for i, b in enumerate("GAT"):\n    print(i, b)\nfor a, b in zip([1, 2], [10, 20]):\n    print(a * b)'),
        block("List comprehensions",
              "[expression for item in list] builds a new list in one line.",
              "print([x * x for x in range(5)])"),
        block("while loops",
              "A while loop repeats as long as its condition is True — use it when you do not know in advance how many runs you need.",
              "n = 1\nsteps = 0\nwhile n < 100:\n    n = n * 3\n    steps += 1\nprint(n, steps)"),
    ],
)

concept(
    "conditionals", "if, elif and else", "Lecture 3",
    "if statements let a program make decisions.",
    [(3, "Making a Decision"), (3, "Two Ways to Go — if / else"), (3, "Many Branches — if / elif / else"), (3, "Decisions Inside a Loop")],
    "lab03/03_conditionals_basics.ipynb", "lab03/04_conditionals_advanced_concepts.ipynb",
    [
        block("One chain, one branch",
              "Python checks the conditions from the top and runs the first branch that is True; the rest of the chain is skipped. else takes no condition. Indentation decides which lines belong to each branch.",
              'ph = 6.5\nif ph < 7:\n    print("acid")\nelif ph == 7:\n    print("neutral")\nelse:\n    print("base")'),
        block("Decisions inside a loop",
              "Combine a loop with an if to count or collect only the items that pass a test.",
              'evens = 0\nfor v in [2, 7, 4, 9]:\n    if v % 2 == 0:\n        evens += 1\nprint(evens)'),
        block("Separate ifs are not a chain",
              "Two separate if statements are each checked, so both can run. Use elif when only one branch should.",
              'x = 10\nif x > 5:\n    print("over 5")\nif x > 8:\n    print("over 8")'),
    ],
    [
        block("Conditional expressions",
              "value_if_true if condition else value_if_false picks one of two values in a single line.",
              'x = 7\nprint("even" if x % 2 == 0 else "odd")'),
        block("Filtering with comprehensions",
              "An if at the end of a comprehension keeps only the items that pass; an if/else at the front labels every item. not in checks that something is absent.",
              'values = [3, 8, 1, 9]\nprint([v for v in values if v > 2])\nprint(["H" if v > 5 else "L" for v in values])\nprint([b for b in "ANTG" if b not in "N"])'),
    ],
)

concept(
    "functions", "Functions", "Lecture 4",
    "A function packages a few lines under a name, so you can run them again with different inputs.",
    [(4, "Packaging It Up — def"), (4, "Give It Something to Work On"), (4, "Hand the Answer Back — return"), (4, "Two Parameters — and a Default"), (4, "Say What It Does — docstrings")],
    "lab04/01_functions_basics.ipynb", "lab04/02_functions_advanced_concepts.ipynb",
    [
        block("def, parameters and return",
              "def starts a function. The names in brackets are parameters; the values you pass in the call are arguments. return hands a result back to the caller and ends the function.",
              "def gc_content(seq):\n    gc = seq.count(\"G\") + seq.count(\"C\")\n    return gc / len(seq)\n\nprint(gc_content(\"ATGC\"))"),
        block("print is not return",
              "A function without return hands back None. Printing inside a function shows a value, but the caller cannot use it.",
              "def shout(x):\n    print(x.upper())\n\nresult = shout(\"hi\")\nprint(result)"),
        block("Defaults and named arguments",
              "A default value is used when the argument is left out. Arguments can also be passed by name, in any order.",
              "def dilute(c, factor=10):\n    return c / factor\n\nprint(dilute(50), dilute(50, 5), dilute(factor=2, c=50))"),
    ],
    [
        block("Returning several values",
              "return a, b hands back a tuple; unpack it straight into two names.",
              "def stats(values):\n    return min(values), max(values)\n\nlo, hi = stats([4, 9, 2])\nprint(lo, hi, stats([1, 5]))"),
        block("Local variables",
              "Variables created inside a function are local: they disappear when it ends and never change a variable with the same name outside.",
              "x = 5\n\ndef change():\n    x = 99\n    return x\n\nprint(change(), x)"),
        block("Docstrings",
              "A string on the first line of a function documents it; Python stores it as __doc__, and help() shows it.",
              'def count_cells(image):\n    """Count the cells in an image."""\n    return 0\n\nprint(count_cells.__doc__)'),
    ],
)

concept(
    "errors", "Errors and how to handle them", "Lectures 1 and 4",
    "Errors are normal. Reading the error name tells you what went wrong; try/except lets a program carry on.",
    [(1, "Errors Are Normal"), (1, "Common Errors"), (4, "Check First — the if guard"), (4, "Fail Loudly — raise"), (4, "The Advanced Pattern — try / except")],
    "lab04/03_errors_basics.ipynb", "lab04/04_errors_advanced_concepts.ipynb",
    [
        block("The common errors",
              "NameError — a name that was never created. TypeError — the wrong type, e.g. \"A\" + 1. ValueError — the right type but an impossible value, e.g. int(\"abc\"). IndexError — a position past the end. KeyError — a dictionary key that is not there. The last line of the error message names it.",
              None),
        block("Check first, or try",
              "An if guard checks before something can go wrong. try/except runs the risky line and, if that error happens, runs the except block instead of crashing.",
              'text = "12x"\ntry:\n    n = int(text)\nexcept ValueError:\n    n = 0\nprint(n)'),
        block("raise",
              "raise stops a function with an error of your choosing — better than carrying on with bad data. The caller can catch it.",
              'def check(seq):\n    if len(seq) == 0:\n        raise ValueError("empty sequence")\n    return len(seq)\n\ntry:\n    check("")\nexcept ValueError as e:\n    print("caught:", e)'),
    ],
    [
        block("else and finally",
              "else runs only when the try block raised nothing; finally runs every time, error or not.",
              'for text in ["7", "x"]:\n    try:\n        n = int(text)\n    except ValueError:\n        print(text, "is not a number")\n    else:\n        print(text, "doubled is", n * 2)\n    finally:\n        print("checked", text)'),
        block("Errors travel up",
              "An error inside a function travels back to whoever called it, where an except can catch it. With several except blocks, the first matching one runs.",
              'def first(items):\n    return items[0]\n\ntry:\n    first([])\nexcept KeyError:\n    print("key")\nexcept IndexError:\n    print("index")'),
    ],
)
