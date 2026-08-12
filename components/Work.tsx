import Image from "next/image";
import { work } from "@/content/site";
import { photos } from "@/images";
import { Reveal } from "./Reveal";
import styles from "./Work.module.css";

const panels = [
  { key: "before", photo: photos.amgFoam, stage: work.process.before, alt: "The same Mercedes-AMG covered in snow foam in the Phoenix Detailing unit, before the wash is taken any further" },
  { key: "after", photo: photos.amgFinished, stage: work.process.after, alt: "The same Mercedes-AMG finished, its paint corrected and gleaming under the unit's strip lights" },
] as const;

export function Work() {
  return (
    <section className={`band-pad ${styles.section}`} id="work">
      <div className="shell">
        <div className={styles.head}>
          <h2 className="display">{work.heading}</h2>
          <p className="lede">{work.body}</p>
        </div>

        <div className={styles.block}>
          <div className={styles.subhead}>
            <h3>{work.process.heading}</h3>
            <p>{work.process.body}</p>
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
                  sizes="(min-width: 48rem) 28rem, 100vw"
                  placeholder="blur"
                />
                <figcaption className={styles.caption}>{stage.caption}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>

        <div className={styles.block}>
          <div className={styles.subhead}>
            <h3>{work.gallery.heading}</h3>
            <p>{work.gallery.body}</p>
          </div>

          {/* One tile shape, and it is the shape the photographs already are,
              so `cover` has nothing to crop. See the note in the manifest
              before adding a frame that is not 3:4. */}
          <ul className={styles.grid}>
            {work.gallery.items.map((item) => (
              <li className={styles.tile} key={item.key}>
                <figure>
                  {/* `sizes` describes the tile, not the viewport: two columns
                      at every width below 64rem, three above. Saying 92vw here
                      made a phone fetch an 828px file for a 179px tile. */}
                  <Image
                    src={photos[item.key]}
                    alt={item.alt}
                    sizes="(min-width: 64rem) 30vw, 46vw"
                    placeholder="blur"
                  />
                  <figcaption className="stamp">{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
