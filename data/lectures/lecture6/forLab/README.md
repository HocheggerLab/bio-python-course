# Lecture 6 — analysis slides moved to the lab

These slides answered "If the bumblebees vanished, what would you lose?" in the
lecture itself. In November 2026 the lecture was rebuilt on the Lecture 5
model: four parts of pandas tools, each with a three-question poll and a
revision exercise, then a short "back to the bees" part that stops at a map of
the analysis (Slide29InTheLab). These slides are the raw material for the
Lab 6 project. They are not in the lecture deck (index.tsx).

| File | What it shows |
|---|---|
| Slide14Part3 | section slide "One line, one answer" |
| Slide15GroupBy | `df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()` |
| Slide16TheAnswer | `visits.sort_values("Bumblebees", ascending=False)` — raspberry vs bean |
| Slide17WhyBeans | why a bean flower is harder work (long-tongued bees) |
| Slide18Species | the six *Bombus* species columns |
| Slide19TIYGroupBy | try-it-yourself groupby exercise |
| Slide20Honesty | "what we did slightly wrong" — totals vs survey effort |

Outputs were computed with pandas 3 against `public/data/pollinators_lecture.csv`;
recheck them if they move into a lab deck.
