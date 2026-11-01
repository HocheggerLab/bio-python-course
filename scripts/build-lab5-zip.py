"""Rebuild public/data/lab5/lab5.zip from the y3-bio-python notebooks.

Usage:  python3 scripts/build-lab5-zip.py [PATH_TO_y3-bio-python/lab05]

Notebooks go at the top of the zip and the recordings under data/, so
`tar -xf lab5.zip` inside a uv-start --data project puts everything where the
project (and the notebooks' loader) expects it. Entries carry a fixed date, so
rebuilding unchanged notebooks gives a byte-identical zip and a clean git diff.
Solutions are deliberately left out.
"""

import sys
import zipfile
from pathlib import Path

DEFAULT_SRC = Path.home() / "code" / "y3-bio-python" / "lab05"
OUT = Path(__file__).resolve().parent.parent / "public" / "data" / "lab5" / "lab5.zip"

FILES = [
    "01_numpy_small_data.ipynb",
    "02_neuron_analysis_basics.ipynb",
    "02_neuron_analysis_advanced.ipynb",
    "data/neuron_0588_20180828_5_lecture.csv",
    "data/neuron_0406_20180620_8_lecture.csv",
]


def build(src: Path, out: Path) -> None:
    """Write the zip, refusing to start if any source file is missing."""
    missing = [name for name in FILES if not (src / name).is_file()]
    if missing:
        sys.exit(f"missing in {src}: {', '.join(missing)}")
    out.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
        for name in FILES:
            info = zipfile.ZipInfo(name, date_time=(2026, 11, 3, 9, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            zf.writestr(info, (src / name).read_bytes())
    print(f"{out}: {out.stat().st_size} bytes, {len(FILES)} files")


if __name__ == "__main__":
    build(Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC, OUT)
