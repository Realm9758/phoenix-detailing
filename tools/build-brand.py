#!/usr/bin/env python3
"""Turn Scott's supplied logo files into the site's vector brand assets.

Scott supplied two rasters on 12 August 2026: `logo.jpeg`, the full stacked
lockup (bird, PHOENIX wordmark, "DETAILING \\ VALETING", social icons, handle),
and a bird-only frame at a slightly larger size. Both are JPEGs off a phone,
so both carry compression noise around every edge.

The site needs neither of those as-is. It needs:

  - the bird and the wordmark separately, because they lock up differently in
    a 40px nav roundel than they do on a show plate;
  - one flat colour, not the artwork's orange gradient, because this site's
    world is cut vinyl and a gradient is the one thing vinyl cannot do;
  - a shape that stays hard-edged at 24px and at 400px.

So each mark is thresholded to a silhouette and traced to outlines, which
gives all three at once. The feather separations survive the trace because
they are gaps in the artwork, not lighter shades of it: the black ground shows
through between the blades, so the threshold cuts them open.

The user's instruction for this pass was "just keep the phoenix and the bird",
so the strapline, the social icons and the handle are cropped away and never
traced.

Requires the pure-python potrace port:  python3 -m pip install potracer

Run from the project root:  python3 tools/build-brand.py
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import numpy as np
    from PIL import Image
except ImportError:
    sys.exit("Pillow and numpy are required:  python3 -m pip install Pillow numpy")

try:
    import potrace
except ImportError:
    sys.exit("potracer is required:  python3 -m pip install potracer")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images" / "brand"
OUT = ROOT / "components"

# Row bands measured off the sources, so the crops are reproducible rather
# than eyeballed once. `logo-lockup.jpeg` stacks its parts:
#     40..671   bird
#     728..834  PHOENIX
#     891..918  DETAILING \ VALETING   <- cropped away
#     1029..    social icons, handle   <- cropped away
JOBS = [
    {
        "name": "bird",
        "src": "logo-bird.jpeg",
        # The bird alone, at a larger size than the copy inside the lockup.
        "box": None,
        # The artwork runs from pale yellow at the wing tips to a deep red at
        # the body. 90 sits above the JPEG mush in the black gaps and below
        # the darkest part of the bird itself.
        "threshold": 90,
        "viewbox_pad": 0,
    },
    {
        "name": "word",
        "src": "logo-lockup.jpeg",
        "box": (0, 716, 1133, 846),
        # Livery white on black: anything above the noise floor is a letter.
        "threshold": 120,
        "viewbox_pad": 0,
    },
]

# potrace settings. `alphamax` low keeps the corners the artwork actually has
# (the wordmark's notch cuts, the tail points) from being rounded into blobs.
TURDSIZE = 24
ALPHAMAX = 0.6
OPTTOLERANCE = 0.15


def trace(im: Image.Image, threshold: int) -> tuple[str, int, int]:
    """Threshold a mark to a silhouette and return its outline path data."""
    a = np.asarray(im.convert("RGB")).astype(int)
    mask = a.max(axis=2) > threshold

    # Crop to the ink, so the viewBox is the mark and nothing else.
    rows = np.flatnonzero(mask.any(axis=1))
    cols = np.flatnonzero(mask.any(axis=0))
    mask = mask[rows[0] : rows[-1] + 1, cols[0] : cols[-1] + 1]
    h, w = mask.shape

    # potracer treats its input the way potrace treats a scan: dark is ink, so
    # a Bitmap inverts whatever it is handed. Hand it the negative and the mark
    # comes back as the traced shape rather than the field around it.
    bitmap = potrace.Bitmap(~mask)
    path = bitmap.trace(
        turdsize=TURDSIZE,
        alphamax=ALPHAMAX,
        opticurve=True,
        opttolerance=OPTTOLERANCE,
    )

    parts: list[str] = []
    for curve in path:
        start = curve.start_point
        parts.append(f"M{start.x:.1f} {start.y:.1f}")
        for segment in curve:
            end = segment.end_point
            if segment.is_corner:
                parts.append(f"L{segment.c.x:.1f} {segment.c.y:.1f}")
                parts.append(f"L{end.x:.1f} {end.y:.1f}")
            else:
                parts.append(
                    f"C{segment.c1.x:.1f} {segment.c1.y:.1f}"
                    f" {segment.c2.x:.1f} {segment.c2.y:.1f}"
                    f" {end.x:.1f} {end.y:.1f}"
                )
        parts.append("Z")

    return "".join(parts), w, h


PATHS_HEADER = '''/**
 * GENERATED FILE. Do not edit by hand.
 *
 * Outlines traced from Scott's own logo files by `tools/build-brand.py`.
 * Run `npm run brand` to regenerate. The components that draw these live in
 * `components/PhoenixMark.tsx`, and they are hand-written; only the geometry
 * below is machine-made.
 */

'''


def main() -> None:
    if not SRC.is_dir():
        sys.exit(f"Logo sources not found at {SRC}")

    marks: dict[str, tuple[str, int, int]] = {}
    for job in JOBS:
        src = SRC / job["src"]
        if not src.is_file():
            sys.exit(f"Missing logo source: {src}")
        im = Image.open(src)
        if job["box"]:
            im = im.crop(job["box"])
        d, w, h = trace(im, job["threshold"])
        marks[job["name"]] = (d, w, h)
        print(f"{job['name']:6s} {w}x{h}  {len(d) / 1024:5.1f} KB of path data")

    body = "".join(
        f"export const {name} = {{\n"
        f"  viewBox: \"0 0 {w} {h}\",\n"
        f"  d: \"{d}\",\n"
        f"}} as const;\n\n"
        for name, (d, w, h) in marks.items()
    )
    (OUT / "phoenix-paths.ts").write_text(PATHS_HEADER + body.rstrip() + "\n")
    print("\nWrote components/phoenix-paths.ts")

    # The favicon is the mark on a black tile, which is how it appears on the
    # unit's own sign. A transparent bird would vanish into a dark browser tab.
    bd, bw, bh = marks["bird"]
    inset = 12
    scale = (128 - inset * 2) / bw
    ty = (128 - bh * scale) / 2
    (ROOT / "app" / "icon.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" '
        'role="img" aria-label="Phoenix Detailing Cardiff">\n'
        '  <rect width="128" height="128" fill="#0b0b0c"/>\n'
        f'  <path fill="#e85e1e" fill-rule="evenodd" '
        f'transform="translate({inset} {ty:.1f}) scale({scale:.5f})" d="{bd}"/>\n'
        "</svg>\n"
    )
    print("Wrote app/icon.svg")


if __name__ == "__main__":
    main()
