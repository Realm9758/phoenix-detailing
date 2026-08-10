import { business, footer } from "@/content/site";
import { PhoenixMark } from "./PhoenixMark";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.lockup}>
          <PhoenixMark />
          <span>
            <span className={styles.name}>{business.fullName}</span>
            <br />
            <span className={styles.line}>{footer.line}</span>
          </span>
        </div>

        <div className={styles.socials}>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Phoenix Detailing on Instagram, ${business.instagramHandle}`}
          >
            <InstagramIcon />
          </a>
          {/* Renders only once the Facebook URL is supplied. See `pending`. */}
          {business.facebook ? (
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phoenix Detailing on Facebook"
            >
              <FacebookIcon />
            </a>
          ) : null}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Phoenix Detailing on WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
