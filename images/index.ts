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
import mclarenHex from "./work/mclaren-hex.webp";
import ferrariShield from "./work/ferrari-shield.webp";
import gClassUnit from "./work/g-class-unit.webp";
import bentleyCabin from "./work/bentley-cabin.webp";
import macanHex from "./work/macan-hex.webp";
import bentleyBonnet from "./work/bentley-bonnet.webp";
import gtrRear from "./work/gtr-rear.webp";
import defenderOutside from "./work/defender-outside.webp";

export const photos = {
  /** Mercedes-AMG E-Class under snow foam. Pairs with `amgFinished`. */
  amgFoam,
  /** The same Mercedes-AMG, finished. */
  amgFinished,
  /** McLaren in the unit, doors up, under their own banner. The hero. */
  mclarenUnit,
  /** The unit from the road, sign legible. The contact panel. */
  tvrOutside,

  /**
   * The grid, in page order. Every one of these is 3:4, which is the tile's
   * shape too, so none of them is cropped to fit. Keep it that way: a frame
   * that is not 3:4 either gets a place of its own or does not go on.
   */
  /** Rolls-Royce Cullinan outside the unit. */
  cullinanOutside,
  /** McLaren under the hexagon lights, doors up. */
  mclarenHex,
  /** A Ferrari's front wing and shield. */
  ferrariShield,
  /** Mercedes G-Class inside, banner behind it. */
  gClassUnit,
  /** A Bentley's front cabin: dash, burr walnut, quilted leather. */
  bentleyCabin,
  /** Porsche Macan under the hexagon lights. */
  macanHex,
  /** A Bentley bonnet returning the ceiling lights. */
  bentleyBonnet,
  /** Nissan GT-R, show plate still on. */
  gtrRear,
  /** Land Rover Defender outside the unit. */
  defenderOutside,
} as const;
