import { business, nav } from "@/content/site";
import { PhoenixMark, PhoenixWordmark } from "./PhoenixMark";
import { PhoneIcon } from "./icons";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`shell ${styles.inner}`}>
        {/* Scott's own lockup: the bird in a roundel, his wordmark beside it.
            The link carries the full name for anyone not looking at it. */}
        <a href="#top" className={styles.lockup} aria-label={`${business.fullName}, top of page`}>
          <span className={`roundel roundel--plate ${styles.disc}`}>
            <PhoenixMark />
          </span>
          <PhoenixWordmark className={styles.word} />
        </a>

        <nav aria-label="Sections" className={styles.sections}>
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className={styles.call} href={business.phoneHref}>
          <PhoneIcon />
          {business.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
