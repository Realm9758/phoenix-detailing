import { business, nav } from "@/content/site";
import { Lockup } from "./Lockup";
import { PhoneIcon } from "./icons";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`shell ${styles.inner}`}>
        {/* Scott's own lockup as he draws it: bird, wordmark, script line. The
            link carries the full name for anyone not looking at it, so the
            image itself is decorative and stays out of the reading order. */}
        <a href="#top" className={styles.lockup} aria-label={`${business.fullName}, top of page`}>
          <Lockup className={styles.logo} alt="" priority />
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
