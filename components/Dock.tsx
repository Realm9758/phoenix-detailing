import { business, whatsappHref } from "@/content/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import styles from "./Dock.module.css";

export function Dock() {
  return (
    <>
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.dock}>
        <a className={styles.item} href={business.phoneHref}>
          <PhoneIcon />
          Call
        </a>
        <a
          className={`${styles.item} ${styles.primary}`}
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </>
  );
}
