/**
 * The Phoenix marks: Scott's own logo, as vinyl.
 *
 * Scott supplied the artwork on 12 August 2026 as two JPEGs. The outlines in
 * `phoenix-paths.ts` are traced from those files by `tools/build-brand.py`, so
 * the shapes here are his and nobody else's. Two things were deliberately left
 * behind in the trace:
 *
 *   - the artwork's orange gradient, because this page is cut vinyl and vinyl
 *     does not fade from one colour to another. The mark is one flat colour
 *     and inherits `currentColor`, so it sits on bodywork, on a roundel or on
 *     an orange field without a second variant;
 *   - everything under the wordmark. Scott asked for the phoenix and the bird,
 *     so the strapline, the social icons and the handle are not traced. What
 *     they say still appears on the page, set in type, where it can be read at
 *     any size and by a screen reader.
 *
 * The path data is long, so it is defined once in `PhoenixSprite` (rendered
 * once, in the layout) and referenced everywhere else. Three marks on the page
 * cost one copy of the geometry, not three.
 */

import { bird, word } from "./phoenix-paths";

type Props = {
  className?: string;
  /** Decorative uses (beside a wordmark) should stay out of the a11y tree. */
  title?: string;
};

/** The geometry, defined once per document. Renders nothing visible. */
export function PhoenixSprite() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <symbol id="phoenix-bird" viewBox={bird.viewBox}>
        <path fillRule="evenodd" d={bird.d} />
      </symbol>
      <symbol id="phoenix-word" viewBox={word.viewBox}>
        <path fillRule="evenodd" d={word.d} />
      </symbol>
    </svg>
  );
}

function Mark({ id, viewBox, className, title }: Props & { id: string; viewBox: string }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <use href={`#${id}`} />
    </svg>
  );
}

/** The bird alone. */
export function PhoenixMark(props: Props) {
  return <Mark id="phoenix-bird" viewBox={bird.viewBox} {...props} />;
}

/** The PHOENIX wordmark alone. */
export function PhoenixWordmark(props: Props) {
  return <Mark id="phoenix-word" viewBox={word.viewBox} {...props} />;
}
