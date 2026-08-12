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
 *
 * WATCH THE TWO ELEMENTS. The wipe's pre-state is `clip-path: inset(0 100% 0
 * 0)`, and a clipped element reports `isIntersecting: false` with a ratio of
 * 0 no matter where it sits on screen, because the intersection is computed
 * after the clip. Observing the clipped element is therefore a deadlock: the
 * observer that would un-hide the panel can never fire, and the diptych stays
 * blank forever. That shipped once. So the observed element is the outer
 * wrapper, which is never clipped, and the wipe is applied to the panel
 * inside it.
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
  const frame = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = frame.current;
    const inner = panel.current;
    if (!outer || !inner) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    inner.classList.add("squeegee");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            inner.dataset.laid = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    io.observe(outer);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error: the ref type narrows per tag, and all of them are HTMLElement
    <Tag ref={frame}>
      <div ref={panel} className={className}>
        {children}
      </div>
    </Tag>
  );
}
