import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Chivo } from "next/font/google";
import { business, services } from "@/content/site";
import "./globals.css";

/**
 * Display: Big Shoulders. A condensed industrial signage face: the register
 * of a race number and a sponsor block, and narrow enough to set a headline
 * large without setting it tall.
 *
 * Text: Chivo. A grotesque with enough grit to sit beside the display face
 * without either one apologising.
 */
const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display",
  // `block`, not `swap`. Google publishes no metric overrides for this face, so
  // no synthesised fallback can match it, and swapping would paint the display
  // voice in a system condensed face first, and the wrong lettering is worse here
  // than a few frames of nothing. The face is self-hosted and preloaded, so the
  // block period is short.
  display: "block",
  fallback: ["Arial Narrow", "sans-serif"],
  adjustFontFallback: false,
});

const text = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-text",
});

/**
 * Empty until a domain is actually agreed. Nothing on this site may be
 * invented, and a canonical URL is a claim like any other, so when this is
 * blank the site simply publishes no URL rather than asserting a guess.
 */
const siteUrl = business.siteUrl as string;

const description =
  "Full interior and exterior vehicle detailing and accredited ceramic coating in Cardiff. Paint correction, window tinting, end-of-lease deep cleans and fleet work. Message Scott for a price.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Phoenix Detailing Cardiff: vehicle detailing & ceramic coating",
    template: "%s · Phoenix Detailing Cardiff",
  },
  description,
  keywords: [
    "car detailing Cardiff",
    "vehicle detailing Cardiff",
    "ceramic coating Cardiff",
    "paint correction Cardiff",
    "window tinting Cardiff",
    "end of lease car clean Cardiff",
  ],
  openGraph: {
    title: "Phoenix Detailing Cardiff",
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: business.fullName,
    locale: "en_GB",
    type: "website",
  },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

/**
 * Search-engine schema. Every field below is sourced the same way the visible
 * copy is. There is deliberately no `aggregateRating` and no `priceRange`:
 * Phoenix's star rating, review total and prices were never supplied, and
 * inventing structured data is still inventing.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: business.fullName,
  description,
  ...(siteUrl ? { url: siteUrl } : {}),
  telephone: "+447507709167",
  areaServed: { "@type": "City", name: "Cardiff" },
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressCountry: "GB",
    ...(business.addressLine ? { streetAddress: business.addressLine } : {}),
    ...(business.postcode ? { postalCode: business.postcode } : {}),
  },
  sameAs: [business.instagram, business.facebook].filter(Boolean),
  makesOffer: services.items.map((item) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: item.name },
  })),
};

/**
 * The direction contract. Emitted as a real HTML comment so it survives the
 * production build and can be grepped out of the shipped markup.
 */
const contract = `<!--
THESIS: Detailing is work done to a car's painted surface, so this page is built from the graphic system that lives on that surface: cut vinyl, race roundels, scrutineering stamps. It refuses the category default: a wet supercar glowing orange in the dark.
OWN-WORLD: Bodywork black #0B0B0C, vinyl orange #E85E1E sampled from Phoenix's own show plate, livery white #F2EFE9. Flat fields, one hard diagonal cut, no gradients, no glass, no glow. Big Shoulders condensed display over Chivo text. Black type on every orange field, always.
STORY: A stranger sees a car finished to a standard, reads seven services that each name their source and seven reviews quoted verbatim, and messages Scott.
FIRST VIEWPORT: Left on black, "Your car, brand new again." with "brand new" in vinyl orange, standfirst, WhatsApp primary beside a call action. Right, the finished AMG as a vinyl panel cut on a 4.4vw diagonal, orange revealed along the cut edge.
FORM: Club-motorsport livery. Candidate 4 of 7 on the grounded list. Seed key c96ce9d7.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${text.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: contract }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
