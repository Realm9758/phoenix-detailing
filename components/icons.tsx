/**
 * Icons, drawn here rather than pulled from a library.
 *
 * One consistent construction: 24x24 box, 2px stroke, round caps and joins,
 * no fills except where a brand glyph is genuinely solid. They inherit
 * `currentColor` so they work on bodywork and on an orange field alike.
 */

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        {...stroke}
        d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13.1 10.9 21 19.4 21a1.5 1.5 0 0 0 1.6-1.5v-2a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .4l-1 1.3a13.6 13.6 0 0 1-5.4-5.4l1.3-1a1 1 0 0 0 .4-1l-.7-3.3a1 1 0 0 0-1-.8Z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path {...stroke} d="M3.5 20.5l1.3-4.4A8.2 8.2 0 1 1 8 19.3l-4.5 1.2Z" />
      <path
        {...stroke}
        d="M9 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.3 0 .5-.1.7l-.4.5c-.2.2-.3.3-.1.6a7 7 0 0 0 3 2.6c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5a1.9 1.9 0 0 1-1.3 1.6 3.6 3.6 0 0 1-2.4-.3 10 10 0 0 1-4.9-4.7 3.7 3.7 0 0 1-.5-2.3 2 2 0 0 1 .3-.8Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <rect {...stroke} x="3" y="3" width="18" height="18" rx="5" />
      <circle {...stroke} cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path {...stroke} d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5H17.6V4.4A21 21 0 0 0 15.2 4c-2.4 0-4 1.4-4 4.1v2.4H8.5v3h2.7V21" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path {...stroke} d="M4 12h15m0 0-6-6m6 6-6 6" />
    </svg>
  );
}
