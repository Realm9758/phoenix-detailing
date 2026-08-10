"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The site's single authored motion: a panel of vinyl being squeegeed on.
 *
 * Used once, on the snow-foam-to-finished diptych. It was briefly wrapped
 * around every section and every service row, which turned one authored moment
 * into eleven identical entrances and diluted the thing it was meant to mark.
 *
 * The wipe class is attached after mount rather than in the markup, so a
 * visitor without JavaScript (or one who lands mid-page) gets the content
 * plainly visible instead of a blank panel waiting for an observer that never
 * fires. `prefers-reduced-motion` is honoured in CSS, where the whole effect
 * is scoped behind a no-preference query.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("squeegee");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.laid = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error: the ref type narrows per tag, and all of them are HTMLElement
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
