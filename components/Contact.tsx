import Image from "next/image";
import { business, contact, whatsappHref } from "@/content/site";
import { photos } from "@/images";
import { Lockup } from "./Lockup";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={`band-pad ${styles.section}`} id="contact">
      <div className={`shell ${styles.grid}`}>
        <div className={styles.panel}>
          <h2 className="display">{contact.heading}</h2>
          <p className="lede">{contact.body}</p>

          <div className={styles.actions}>
            <a
              className="action action--primary"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Message Scott
            </a>
          </div>

          <div className={styles.rows}>
            <a className={styles.row} href={business.phoneHref}>
              <PhoneIcon />
              {business.phoneDisplay}
            </a>
            <a
              className={styles.row}
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              {business.instagramHandle}
            </a>
            {/* Address only renders once Scott supplies one. See `pending`. */}
            {business.addressLine ? (
              <p className={styles.row}>
                {business.addressLine}, {business.postcode}
              </p>
            ) : null}
          </div>

          <p className={styles.note}>{contact.priceNote}</p>

          {/* His own show plate, rebuilt: the same lockup the bar and the
              footer carry, on the plate's black ground. */}
          <div className={`plate ${styles.plateBlock}`}>
            <Lockup className={styles.plateLogo} />
          </div>
        </div>

        <div className={styles.shot}>
          <Image
            src={photos.tvrOutside}
            alt={contact.imageAlt}
            sizes="(min-width: 62rem) 46vw, 100vw"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
