import Image from "next/image";
import { business, footer, hero, whatsappHref } from "@/content/site";
import { photos } from "@/images";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import styles from "./Hero.module.css";

/** Splits the headline so the customers' own phrase carries the vinyl colour. */
function Headline() {
  const [before, after] = hero.headline.split(hero.emphasis);
  return (
    <h1 className={`display ${styles.headline}`}>
      {before}
      <em>{hero.emphasis}</em>
      {after}
    </h1>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.type}>
        <Headline />

        <p className={`lede ${styles.standfirst}`}>{hero.standfirst}</p>

        <div className={styles.actions}>
          <a
            className="action action--primary"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {hero.primary}
          </a>
          <a className="action action--ghost" href={business.phoneHref}>
            <PhoneIcon />
            {hero.secondary}
          </a>
        </div>

        <ul className={`stamp ${styles.strip}`}>
          {footer.credentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
      </div>

      <div className={styles.shot}>
        <Image
          src={photos.amgFinished}
          alt={hero.imageAlt}
          priority
          sizes="(min-width: 60rem) 47vw, 100vw"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
