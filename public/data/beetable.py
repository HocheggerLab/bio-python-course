"""A miniature stand-in for a pandas DataFrame.

Holds a small table of pollinator counts — one named list per column — and
knows how to summarise itself. Real data, from the Nicholls Lab survey of
Brighton allotments (Nicholls et al., 2023).

You are not meant to read this file. You are meant to read its
documentation and call its methods — which is how you will use every
package for the rest of your career.
"""


class _Rows(str):
    """Rows of a table.

    A plain string would display with escaped newlines when it is the last
    line of a cell; this shows the table either way, exactly as a real
    DataFrame does.
    """

    def __repr__(self):
        return str(self)


class BeeTable:
    """A small table of pollinator counts, one named column per list.

    Build one by passing each column as a keyword argument:

        table = BeeTable(Honeybees=[1, 2, 0], Bumblebees=[0, 3, 1])

    All columns must be the same length — one entry per survey.

    Methods
    -------
    columns()
        The column names, as a list of strings.
    n_rows()
        How many surveys the table holds.
    head(n=3)
        The first n rows, as printable text.
    total(column)
        Total visits recorded in one column.
    mean(column)
        Mean visits per survey for one column, rounded to 2 decimal places.
    busiest()
        The name of the column with the most visits overall.
    """

    def __init__(self, **columns):
        lengths = {len(values) for values in columns.values()}
        if len(lengths) > 1:
            raise ValueError(
                "every column needs the same number of rows, got "
                f"{ {name: len(v) for name, v in columns.items()} }"
            )
        self._columns = dict(columns)

    def __repr__(self):
        return f"BeeTable({self.n_rows()} rows x {len(self._columns)} columns)"

    def columns(self):
        """Return the column names as a list of strings."""
        return list(self._columns)

    def n_rows(self):
        """Return the number of surveys (rows) in the table."""
        return len(next(iter(self._columns.values()))) if self._columns else 0

    def head(self, n=3):
        """Return the first n rows as printable text."""
        names = self.columns()
        widths = [max(len(name), 5) for name in names]
        lines = ["  ".join(name.rjust(w) for name, w in zip(names, widths))]
        for row in range(min(n, self.n_rows())):
            lines.append(
                "  ".join(
                    str(self._columns[name][row]).rjust(w)
                    for name, w in zip(names, widths)
                )
            )
        return _Rows("\n".join(lines))

    def total(self, column):
        """Return the total number of visits recorded in one column."""
        self._check(column)
        return sum(self._columns[column])

    def mean(self, column):
        """Return the mean visits per survey for one column, to 2 dp."""
        self._check(column)
        return round(self.total(column) / self.n_rows(), 2)

    def busiest(self):
        """Return the name of the column with the most visits overall."""
        return max(self._columns, key=self.total)

    def _check(self, column):
        if column not in self._columns:
            raise KeyError(
                f"no column named {column!r} — try one of {self.columns()}"
            )
