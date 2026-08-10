/**
 * Image manifest.
 *
 * Every photograph on this site is Phoenix Detailing's own, taken in their own
 * unit in Cardiff and published on their Instagram. There is no stock imagery
 * here and there must never be any: the work is the proof.
 *
 * The files are produced by `tools/build-images.py`, which crops Instagram's
 * chrome off the original screenshots. Run `npm run images` to regenerate.
 *
 * Alt text lives in content/site.ts alongside the rest of the site's words.
 */

import amgFoam from "./work/amg-foam.webp";
import amgFinished from "./work/amg-finished.webp";
import ferrari from "./work/ferrari.webp";

export const photos = {
  /** Mercedes-AMG E-Class under snow foam. Pairs with `amgFinished`. */
  amgFoam,
  /** The same Mercedes-AMG, finished. Also the hero. */
  amgFinished,
  /** Ferrari 360 in the unit, Phoenix show plate on the bumper. */
  ferrari,
} as const;
