"""A miniature stand-in for a numpy array of neural data.

Holds one neuron's calcium recording alongside the task events, and knows how
to summarise itself. Real data: mouse somatosensory cortex during a go/no-go
task, from Bhatt et al., "Sequence Learning Induces Selectivity to Multiple
Task Parameters in Mouse Somatosensory Cortex".

You are not meant to read this file. You are meant to read its documentation
and call its methods — which is how you will use every package for the rest
of your career.
"""

import csv

#: Frames per second of the two-photon microscope, from the paper's methods.
FRAME_RATE = 10.8

EVENTS = ["cue", "go", "nogo", "reward", "punish", "lick"]


class NeuronTrace:
    """One neuron's calcium recording, with the task events beside it.

    Load one from a course data file:

        trace = NeuronTrace.load("neuron_0588_20180828_5.csv")

    The recording is a fluorescence trace (dF/F) sampled at 10.8 frames per
    second, plus a 0/1 marker per frame for each task event: cue, go, nogo,
    reward, punish, lick.

    Methods
    -------
    n_frames()
        How many timepoints were recorded.
    minutes()
        How long the recording lasted, in minutes, to 1 decimal place.
    events()
        The event names, as a list of strings.
    n_trials(event)
        How many times that event started.
    mean()
        Mean dF/F across the whole recording, to 3 decimal places.
    peak()
        The largest dF/F the neuron reached, to 3 decimal places.
    during(event)
        Mean dF/F while that event is happening, to 3 decimal places.
    most_active()
        The name of the event with the highest mean dF/F.
    """

    def __init__(self, dff, markers):
        self._dff = list(dff)
        self._markers = {name: list(values) for name, values in markers.items()}

    @classmethod
    def load(cls, filename):
        """Load a recording from a course CSV file."""
        with open(filename, newline="") as handle:
            rows = list(csv.DictReader(handle))
        if not rows:
            raise ValueError(f"{filename!r} has no data in it")
        return cls(
            dff=[float(row["dff"]) for row in rows],
            markers={
                name: [int(row[name]) for row in rows]
                for name in EVENTS
                if name in rows[0]
            },
        )

    def __repr__(self):
        return f"NeuronTrace({self.n_frames()} frames, {self.minutes()} minutes)"

    def n_frames(self):
        """Return the number of timepoints recorded."""
        return len(self._dff)

    def minutes(self):
        """Return the length of the recording in minutes, to 1 dp."""
        return round(self.n_frames() / FRAME_RATE / 60, 1)

    def events(self):
        """Return the event names as a list of strings."""
        return list(self._markers)

    def n_trials(self, event):
        """Return how many times an event started."""
        marks = self._marks(event)
        return sum(
            1
            for i, value in enumerate(marks)
            if value and (i == 0 or not marks[i - 1])
        )

    def mean(self):
        """Return the mean dF/F across the whole recording, to 3 dp."""
        return round(sum(self._dff) / self.n_frames(), 3)

    def peak(self):
        """Return the largest dF/F the neuron reached, to 3 dp."""
        return round(max(self._dff), 3)

    def during(self, event):
        """Return the mean dF/F while an event is happening, to 3 dp."""
        marks = self._marks(event)
        values = [d for d, on in zip(self._dff, marks) if on]
        if not values:
            raise ValueError(f"{event!r} never happens in this recording")
        return round(sum(values) / len(values), 3)

    def most_active(self):
        """Return the name of the event with the highest mean dF/F."""
        return max(self._markers, key=self.during)

    def _marks(self, event):
        if event not in self._markers:
            raise KeyError(
                f"no event named {event!r} — try one of {self.events()}"
            )
        return self._markers[event]
