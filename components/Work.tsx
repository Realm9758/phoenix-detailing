import Image from "next/image";
import { work } from "@/content/site";
import { photos } from "@/images";
import { Reveal } from "./Reveal";
import styles from "./Work.module.css";

const panels = [
  { key: "before", photo: photos.amgFoam, stage: work.before, alt: "The same Mercedes-AMG covered in snow foam in the Phoenix Detailing unit, before the wash is taken any further" },
  { key: "after", photo: photos.amgFinished, stage: work.after, alt: "The same Mercedes-AMG finished, its paint corrected and gleaming under the unit's strip lights" },
] as const;

export function Work() {
  return (
    <section className={`band-pad ${styles.section}`} id="work">
      <div className="shell">
        <div className={styles.head}>
          <h2 className="display">{work.heading}</h2>
          <p className="lede">{work.body}</p>
        </div>

        <Reveal className={styles.pair}>
          {panels.map(({ key, photo, stage, alt }) => (
            <figure className={styles.panel} key={key}>
              <span className={styles.label} aria-hidden="true">
                {stage.label}
              </span>
              <Image
                src={photo}
                alt={alt}
                sizes="(min-width: 48rem) 44vw, 100vw"
                placeholder="blur"
              />
              <figcaption className={styles.caption}>{stage.caption}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
