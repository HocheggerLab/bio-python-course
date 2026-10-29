"""Check every practice question against real Python, then write the JSON.

    python3 scripts/practice/build.py

Fails (and writes nothing) if any key is wrong, if a distractor is also
correct, or if a level/section count is off. Option order is shuffled with a
fixed seed per question so the correct letters are spread across a–d.
"""

import contextlib
import io
import json
import random
import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from questions import Q  # noqa: E402

OUT = Path(__file__).resolve().parents[2] / "lib" / "practice" / "questions.json"
SECTIONS = ["variables", "types", "operators", "lists", "strings", "dictionaries", "loops", "conditionals", "functions", "errors"]
LEVELS = {"E": "easy", "I": "intermediate", "A": "advanced"}
ERR = re.compile(r"^An? (\w+Error) is raised\.$")


def run(code):
    """Return printed output, or '!ErrorName' if the code raised."""
    buf = io.StringIO()
    try:
        with contextlib.redirect_stdout(buf):
            exec(code, {})
    except Exception as e:  # noqa: BLE001 — we want the exception type
        return "!" + type(e).__name__
    return buf.getvalue().rstrip("\n")


def matches(option, result):
    m = ERR.match(option)
    if m:
        return result == "!" + m.group(1)
    return option == result


problems = []
for i, q in enumerate(Q):
    tag = f"#{i} {q['sec']}/{q['level']}: {q['prompt'][:50]}"
    opts, ans = q["opts"], q["ans"]
    if len(opts) != 4 or len(set(opts)) != 4:
        problems.append(f"{tag} — needs four different options")
    if q["kind"] == "out":
        res = run(q["code"])
        hits = [j for j, o in enumerate(opts) if matches(o, res)]
        if hits != [ans]:
            problems.append(f"{tag} — output {res!r}; options matching: {hits}, key {ans}")
    elif q["kind"] == "blank":
        hits = [j for j, o in enumerate(opts) if run(q["code"].replace("____", o)) == q["expect"]]
        if hits != [ans]:
            problems.append(f"{tag} — options printing {q['expect']!r}: {hits}, key {ans}")
    elif q["kind"] == "value":
        got = str(eval(q["check"]))
        if opts[ans] != got:
            problems.append(f"{tag} — check gives {got!r}, key says {opts[ans]!r}")

counts = Counter((q["sec"], q["level"]) for q in Q)
for s in SECTIONS:
    for lv in LEVELS:
        if counts[(s, lv)] != 5:
            problems.append(f"{s}/{lv}: {counts[(s, lv)]} questions, expected 5")

if problems:
    print("NOT WRITTEN — fix these first:\n  " + "\n  ".join(problems))
    sys.exit(1)

out = []
per = Counter()
for q in Q:
    per[(q["sec"], q["level"])] += 1
    qid = f"{q['sec']}-{LEVELS[q['level']][0]}{per[(q['sec'], q['level'])]}"
    order = list(range(4))
    random.Random(qid).shuffle(order)
    opts = [q["opts"][k] for k in order]
    ans = order.index(q["ans"])
    item = {
        "id": qid,
        "level": LEVELS[q["level"]],
        "section": q["sec"],
        "prompt": q["prompt"],
        "options": opts,
        "answer": ans,
        "explanation": q["why"],
    }
    if q.get("code"):
        item["code"] = q["code"]
    # What "Try it yourself" opens with: the code, with any gap filled in.
    if q["kind"] == "blank":
        item["tryCode"] = q["code"].replace("____", q["opts"][q["ans"]])
    elif q.get("code"):
        item["tryCode"] = q["code"]
    out.append(item)

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n")
letters = Counter("abcd"[x["answer"]] for x in out)
print(f"OK — {len(out)} questions written to {OUT.relative_to(OUT.parents[2])}")
print("  levels:", dict(Counter(x["level"] for x in out)))
print("  answer letters:", dict(sorted(letters.items())))

# ── Concept pages ────────────────────────────────────────────────────────────
from concepts import C  # noqa: E402

CONCEPTS_OUT = OUT.parent / "concepts.json"
bad = []
pages = []
for c in C:
    page = dict(c)
    page["slides"] = [{"lecture": n, "title": t} for n, t in c["slides"]]
    for part in ("basics", "further"):
        blocks = []
        for b in c[part]:
            b = dict(b)
            if b["code"]:
                res = run(b["code"])
                if res.startswith("!"):
                    bad.append(f"{c['slug']} / {b['heading']}: example raises {res[1:]}")
                b["output"] = res
            blocks.append(b)
        page[part] = blocks
    pages.append(page)

missing = set(SECTIONS) - {c["slug"] for c in C}
if missing:
    bad.append(f"no concept page for: {sorted(missing)}")
if bad:
    print("CONCEPTS NOT WRITTEN:\n  " + "\n  ".join(bad))
    sys.exit(1)
CONCEPTS_OUT.write_text(json.dumps(pages, indent=1, ensure_ascii=False) + "\n")
print(f"OK — {len(pages)} concept pages written to {CONCEPTS_OUT.relative_to(OUT.parents[2])}")
