/**
 * The phoenix mark, drawn as cut vinyl.
 *
 * IMPORTANT: this is not Scott's original artwork. The only copies of the real
 * logo available were photographs of the workshop banner and a show plate:
 * too small, too angled and too blown-out by the strip lights to trace. So the
 * mark below is authored to match what those photographs show: a symmetrical
 * phoenix, wings swept up and out, head turned left, drawn in flat angular
 * shapes that could genuinely be cut from vinyl.
 *
 * It is listed in `pending` in content/site.ts. When Scott supplies the real
 * logo file, replace this component's paths and nothing else changes.
 *
 * Single-colour and inherits `currentColor`, so it sits on bodywork or on an
 * orange field without a second variant.
 */

type Props = {
  className?: string;
  /** Decorative uses (beside a wordmark) should stay out of the a11y tree. */
  title?: string;
};

export function PhoenixMark({ className, title }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 76"
      fill="currentColor"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}

      {/* Wings. Two heavy swept blades a side rather than a fringe of thin
          ones. At 24px in the nav roundel a fringe collapses into a smudge,
          and vinyl this fine could not be weeded off the backing anyway. */}
      <path d="M61 31 L3 2 L23 30 L5 31 L34 48 L61 46 Z" />
      <path d="M67 31 L125 2 L105 30 L123 31 L94 48 L67 46 Z" />

      {/* Body. Carries real mass: a thin spindle between two wings reads as a
          dragonfly, not a bird. */}
      <path d="M64 17 L73 30 L70 49 L64 57 L58 49 L55 30 Z" />

      {/* Tail, fanned into three points rather than closing to a needle */}
      <path d="M58 47 L47 73 L61 55 L64 76 L67 55 L81 73 L70 47 Z" />

      {/* Head, turned left, and the beak */}
      <path d="M64 0 L73 12 L64 25 L55 12 Z" />
      <path d="M56 8 L38 13 L56 19 Z" />
    </svg>
  );
}
