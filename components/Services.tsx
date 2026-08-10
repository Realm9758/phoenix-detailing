import { services } from "@/content/site";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className={`band-pad ${styles.section}`} id="services">
      <div className="shell">
        <div className={styles.head}>
          <h2 className="display">{services.heading}</h2>
          <p className="lede">{services.body}</p>
        </div>

        <ul className={styles.list}>
          {services.items.map((item) => (
            <li key={item.name}>
              <div className={styles.row}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.detail}>{item.detail}</p>
                <span className={styles.source}>{item.source}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
