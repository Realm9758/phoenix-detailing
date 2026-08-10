import { business, nav } from "@/content/site";
import { PhoenixMark } from "./PhoenixMark";
import { PhoneIcon } from "./icons";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`shell ${styles.inner}`}>
        <a href="#top" className={styles.lockup}>
          <span className={`roundel ${styles.disc}`}>
            <PhoenixMark />
          </span>
          <span className={styles.word}>
            Phoenix
            <span>{business.city}</span>
          </span>
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
