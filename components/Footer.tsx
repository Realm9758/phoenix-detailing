import { business, footer } from "@/content/site";
import { Lockup } from "./Lockup";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        {/* The same lockup the bar carries. It already reads "Phoenix /
            Detailing Cardiff", so the name is not set in type beside it as
            well; its alt text carries the full name. */}
        <div className={styles.lockup}>
          <Lockup className={styles.logo} />
          <span className={styles.line}>{footer.line}</span>
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
