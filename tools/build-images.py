#!/usr/bin/env python3
"""Turn the source photographs into the site's image assets.

Two sources feed this, and they are handled differently.

`source-images/photos/` holds the photographs Scott supplied on 12 August 2026,
straight off the phone at 1536x2048 or thereabouts. They need no repair, only
resizing and encoding, so the CROPS list is short and the notes are about
framing rather than about damage.

`source-images/instagram/` holds the four screenshots the first build worked
from, back when Instagram was the only source of imagery. Each one is a photo
pane plus Instagram's own chrome, and some of that chrome sits *on* the
photograph rather than beside it. The SCREENSHOTS jobs remove all of it, so
those crops stay reproducible rather than hand-made once and forgotten.

Per-screenshot notes:

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

Retired: `ferrari`, a video frame from the same set. Scott's own photograph of
the Ferrari (`ferrari-shield.jpeg`) is sharper, larger and not letterboxed, so
it replaced it. The screenshot stays in `source-images/instagram/` rather than
being deleted, because a source that has been superseded is still a source.

Excluded: the BMW-in-the-hexagon-studio screenshot, as before.

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
PHOTOS = ROOT / "source-images" / "photos"
SHOTS = ROOT / "source-images" / "instagram"
OUT = ROOT / "images" / "work"

# Shared crop for the AMG pair: x1=820 drops the right carousel arrow,
# y1=1148 drops the carousel dots.
AMG_BOX = (0, 2, 820, 1148)

SCREENSHOTS = [
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
]

# The photographs the site uses. Everything else Scott sent stays in
# `source-images/photos/` unbuilt: sending fourteen near-identical supercar
# three-quarters to a page that shows nine would be a slideshow, not a website.
#
# TWO RULES DECIDE THIS LIST, and both were learned the hard way.
#
# 1. Every photograph on the grid is 3:4 portrait, which is what Scott's phone
#    shoots. The grid tile is 3:4 too, so `object-fit: cover` has nothing to
#    crop. A landscape or a square frame in a 3:4 tile loses a quarter of
#    itself, which is how a photograph of two headlights ended up with the
#    headlights cut off at the edges.
# 2. `long_edge` is at least twice the largest size the photograph is ever
#    displayed at, because half of the people looking at this page are on a
#    phone or a laptop with a 2x screen and a 1x image reads as soft.
#    Displayed sizes: hero and contact run near half the viewport; grid tiles
#    are capped at about 420px by the 88rem shell.
#
# Left out deliberately: a photograph of water beading on a panel (a fine
# picture of water, but a page of cars is not the place for it) and the
# headlight before/after (a two-up collage at 841px, the only frame in the set
# that is neither 3:4 nor big enough to show at any size worth showing).
PHOTOGRAPHS = [
    # The hero. The one frame that says what the place is: a car worth this
    # much care, square on, under their own banner. Built at native size.
    {"src": "mclaren-unit.jpeg", "stem": "mclaren-unit", "long_edge": 2048},
    # The contact panel. Their unit, from the road, sign legible: this is the
    # building a customer has to find.
    {"src": "tvr-outside.jpeg", "stem": "tvr-outside", "long_edge": 1800},
    # The grid, in the order it reads on the page.
    {"src": "cullinan-outside.jpeg", "stem": "cullinan-outside", "long_edge": 1400},
    {"src": "mclaren-hex.jpeg", "stem": "mclaren-hex", "long_edge": 1400},
    {"src": "ferrari-shield.jpeg", "stem": "ferrari-shield", "long_edge": 1400},
    {"src": "g-class-unit.jpeg", "stem": "g-class-unit", "long_edge": 1400},
    {"src": "bentley-rear-seats.jpeg", "stem": "bentley-seats", "long_edge": 1400},
    {"src": "macan-hex.jpeg", "stem": "macan-hex", "long_edge": 1400},
    {"src": "bentley-bonnet.jpeg", "stem": "bentley-bonnet", "long_edge": 1400},
    {"src": "gtr-rear.jpeg", "stem": "gtr-rear", "long_edge": 1400},
    {"src": "defender-outside.jpeg", "stem": "defender-outside", "long_edge": 1400},
]

WEBP_QUALITY = "82"
# The two marks and the sign carry hard edges and lettering, so they get a
# higher quality than the paintwork does.
WEBP_QUALITY_DETAIL = "88"


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


def encode(im: Image.Image, stem: str, quality: str) -> None:
    png = OUT / f"{stem}.png"
    webp = OUT / f"{stem}.webp"
    im.save(png)
    subprocess.run(
        ["cwebp", "-q", quality, "-m", "6", "-quiet", str(png), "-o", str(webp)],
        check=True,
    )
    png.unlink()
    kb = webp.stat().st_size / 1024
    print(f"{stem:18s} {im.size[0]}x{im.size[1]}  {kb:6.1f} KB  {webp.name}")


def main() -> None:
    for folder in (PHOTOS, SHOTS):
        if not folder.is_dir():
            sys.exit(f"Sources not found at {folder}")
    OUT.mkdir(parents=True, exist_ok=True)
    rng = random.Random(20260810)

    for job in SCREENSHOTS:
        src = SHOTS / job["src"]
        if not src.is_file():
            sys.exit(f"Missing source screenshot: {src}")
        im = Image.open(src).convert("RGB").crop(job["box"])
        if job["patch"]:
            heal(im, job["patch"], rng)
        encode(im, job["stem"], WEBP_QUALITY_DETAIL)

    for job in PHOTOGRAPHS:
        src = PHOTOS / job["src"]
        if not src.is_file():
            sys.exit(f"Missing source photograph: {src}")
        im = Image.open(src).convert("RGB")
        long_edge = job["long_edge"]
        if max(im.size) > long_edge:
            scale = long_edge / max(im.size)
            im = im.resize(
                (round(im.width * scale), round(im.height * scale)),
                Image.LANCZOS,
            )
        encode(im, job["stem"], WEBP_QUALITY)


if __name__ == "__main__":
    main()
