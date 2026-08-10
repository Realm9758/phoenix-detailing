#!/usr/bin/env python3
"""Turn the raw Instagram screenshots into the site's image assets.

The source material is four screenshots of @phoenixdetailingcardiff posts. Each
one is a photo pane plus Instagram's own chrome, and some of that chrome sits
*on* the photograph rather than beside it. This script removes all of it, so
the crops are reproducible rather than hand-made once and forgotten.

Per-image notes:

  foam / finished   Same Mercedes-AMG, same bay, two frames from one carousel.
                    Shared crop box, so the pair sits in a diptych without one
                    panel reading larger than the other. Note the frames are
                    NOT camera-registered (the photographer moved between
                    shots), which is why the site pairs them as two panels
                    rather than as a before/after drag slider.
                    Chrome removed: carousel dots along the bottom, the right
                    carousel arrow (cropped out at x=820), and on `finished`
                    the left carousel arrow, which sits over blank wall and is
                    reconstructed by interpolation.

  ferrari           A video frame. Instagram letterboxes portrait video with a
                    blurred fill, so the left bar is cropped away, along with
                    the mute button in the bottom-right.

Excluded: the BMW-in-the-hexagon-studio frame. The owner confirms that is not
the current premises.

Run from the project root:  python3 tools/build-images.py
"""

from __future__ import annotations

import random
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  python3 -m pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images"
OUT = ROOT / "images" / "work"

# Shared crop for the AMG pair: x1=820 drops the right carousel arrow,
# y1=1148 drops the carousel dots.
AMG_BOX = (0, 2, 820, 1148)

JOBS = [
    {
        "src": "Screenshot 2026-08-10 at 09.55.29.png",
        "stem": "amg-foam",
        "box": AMG_BOX,
        "patch": None,
    },
    {
        "src": "Screenshot 2026-08-10 at 09.55.37.png",
        "stem": "amg-finished",
        "box": AMG_BOX,
        # Left carousel arrow, in post-crop coordinates. The disc spans
        # x 23..72, y 569..620 and sits on blank wall between two panel seams
        # (y 556 and y 638), so the band below stays clear of both.
        "patch": (16, 563, 80, 626),
    },
    {
        "src": "Screenshot 2026-08-10 at 09.56.23.png",
        "stem": "ferrari",
        "box": (46, 0, 1205, 1448),
        "patch": None,
    },
]

WEBP_QUALITY = "88"


def heal(im: Image.Image, box: tuple[int, int, int, int], rng: random.Random) -> None:
    """Reconstruct a rectangle of flat wall by interpolating across it.

    The region is bounded left and right by the same smooth surface, so each
    row is a straight ramp between its two edges. A little matched grain stops
    the repair reading as a plastic patch against the wall's real texture.
    """
    x0, y0, x1, y1 = box
    px = im.load()
    span = x1 - x0
    sample = 8

    for y in range(y0, y1):
        left = [px[x, y] for x in range(x0 - sample, x0)]
        right = [px[x, y] for x in range(x1, x1 + sample)]
        lr = sum(c[0] for c in left) / sample
        lg = sum(c[1] for c in left) / sample
        lb = sum(c[2] for c in left) / sample
        rr = sum(c[0] for c in right) / sample
        rg = sum(c[1] for c in right) / sample
        rb = sum(c[2] for c in right) / sample

        for i, x in enumerate(range(x0, x1)):
            t = (i + 1) / (span + 1)
            n = rng.gauss(0, 2.2)
            px[x, y] = (
                max(0, min(255, round(lr + (rr - lr) * t + n))),
                max(0, min(255, round(lg + (rg - lg) * t + n))),
                max(0, min(255, round(lb + (rb - lb) * t + n))),
            )


def main() -> None:
    if not SRC.is_dir():
        sys.exit(f"Source screenshots not found at {SRC}")
    OUT.mkdir(parents=True, exist_ok=True)
    rng = random.Random(20260810)

    for job in JOBS:
        src = SRC / job["src"]
        if not src.is_file():
            sys.exit(f"Missing source screenshot: {src}")

        im = Image.open(src).convert("RGB").crop(job["box"])
        if job["patch"]:
            heal(im, job["patch"], rng)

        png = OUT / f"{job['stem']}.png"
        webp = OUT / f"{job['stem']}.webp"
        im.save(png)
        subprocess.run(
            ["cwebp", "-q", WEBP_QUALITY, "-m", "6", "-quiet", str(png), "-o", str(webp)],
            check=True,
        )
        png.unlink()

        kb = webp.stat().st_size / 1024
        print(f"{job['stem']:14s} {im.size[0]}x{im.size[1]}  {kb:6.1f} KB  {webp.name}")


if __name__ == "__main__":
    main()
