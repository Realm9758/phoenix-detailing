/**
 * Image manifest.
 *
 * Every photograph on this site is Phoenix Detailing's own, taken by Scott in
 * his own unit. There is no stock imagery here and there must never be any:
 * the work is the proof.
 *
 * Two provenances, both his:
 *
 *   - the set he supplied on 12 August 2026, straight off his phone;
 *   - two frames from an Instagram carousel, which is all the first build of
 *     this site had to work with. They stay because they are the only record
 *     of one car mid-job rather than finished.
 *
 * The files are produced by `tools/build-images.py`, which resizes the
 * photographs and crops Instagram's chrome off the two screenshots. Run
 * `npm run images` to regenerate.
 *
 * Alt text lives in content/site.ts alongside the rest of the site's words.
 */

import amgFoam from "./work/amg-foam.webp";
import amgFinished from "./work/amg-finished.webp";
import mclarenUnit from "./work/mclaren-unit.webp";
import tvrOutside from "./work/tvr-outside.webp";
import cullinanOutside from "./work/cullinan-outside.webp";
import bentleyBonnet from "./work/bentley-bonnet.webp";
import gClassUnit from "./work/g-class-unit.webp";
import ferrariShield from "./work/ferrari-shield.webp";
import bentleySeats from "./work/bentley-seats.webp";
import beading from "./work/beading.webp";
import headlights from "./work/headlights.webp";
import macanHex from "./work/macan-hex.webp";
import mclarenRear from "./work/mclaren-rear.webp";
import gtrRear from "./work/gtr-rear.webp";

export const photos = {
  /** Mercedes-AMG E-Class under snow foam. Pairs with `amgFinished`. */
  amgFoam,
  /** The same Mercedes-AMG, finished. */
  amgFinished,
  /** McLaren in the unit, doors up, under their own banner. The hero. */
  mclarenUnit,
  /** The unit from the road, sign legible. The contact panel. */
  tvrOutside,
  /** Rolls-Royce Cullinan outside the unit. */
  cullinanOutside,
  /** A Bentley bonnet returning the ceiling lights. */
  bentleyBonnet,
  /** Mercedes G-Class inside, banner behind it. */
  gClassUnit,
  /** A Ferrari's front wing and shield. */
  ferrariShield,
  /** Quilted leather in the back of a Bentley. */
  bentleySeats,
  /** Water standing in beads on a coated panel. */
  beading,
  /** Two headlights, one restored and one not. Landscape. */
  headlights,
  /** Porsche Macan under the hexagon lights. */
  macanHex,
  /** The back of a McLaren. */
  mclarenRear,
  /** Nissan GT-R, show plate still on. */
  gtrRear,
} as const;
