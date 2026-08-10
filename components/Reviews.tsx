import { reviews } from "@/content/site";
import styles from "./Reviews.module.css";

export function Reviews() {
  return (
    <section className={`cut-panel ${styles.section}`} id="reviews">
      <div className="shell">
        <div className={styles.head}>
          <h2 className="display">{reviews.heading}</h2>
          <p className="lede">{reviews.body}</p>
        </div>

        <ul className={styles.grid}>
          {reviews.items.map((review) => (
            <li className={styles.item} key={review.name}>
              <figure>
                <blockquote className={styles.quote}>{review.body}</blockquote>
                <figcaption className={styles.who}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.when}>{review.when}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className={styles.note}>{reviews.note}</p>
      </div>
    </section>
  );
}
