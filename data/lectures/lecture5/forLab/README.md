# Lecture 5 — analysis slides moved to the lab

These slides walked through the whole go/nogo analysis in the lecture. In
October 2026 that proved too much for one session, so the lecture now stops
after the "Interrogate the array" quiz with a map of the analysis
(Slide30InTheLab), and these slides are the raw material for the Lab 5 project.
They are not in the lecture deck (index.tsx).

| File | What it shows |
|---|---|
| LabMasking | `dff[go == 1]`, mean while go is on vs overall (row-table visual) |
| LabOnsets | trial starts with `np.where(go == 1)[0][::9]` (frame-number chips) |
| LabStack | cut windows `dff[i-10 : i+30]` in a for loop, stack to (254, 40) |
| LabAverage | `LabAxisToy` (3×5 axis=0 grid) and `LabAverage` (254 trials averaged, plot) |
| LabAnswer | `response_to(column)` for go vs nogo: +0.290 vs +0.057 |
| LabSecondNeuronQuiz / LabRevisionSecondNeuron | same code on neuron 0406: +1.284 vs +1.041 |

LabSecondNeuronQuiz still uses poll ids l5-t3a/b/c (entries kept in lib/poll).
