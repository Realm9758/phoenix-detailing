/**
 * Single source of truth for every word and every fact on this site.
 *
 * SOURCING RULE: nothing in this file may be invented.
 *
 * Phoenix Detailing Cardiff is a real business with a real reputation, and a
 * website is the one place a stranger checks that reputation against. So every
 * claim below traces to one of exactly two places, noted inline:
 *
 *   - the business's own published material (their banner, their show plate,
 *     their Instagram captions and handle);
 *   - a customer's own words, quoted from their Google review.
 *
 * Where a fact has not been supplied it stays empty and the UI hides whatever
 * depends on it. It does not get a plausible-looking placeholder. See `pending`
 * at the foot of this file for the list Scott still needs to fill in.
 */

export const business = {
  // Their logo lockup reads "PHOENIX" over "Detailing Cardiff"; a second
  // lockup on their show plate reads "PHOENIX / DETAILING & VALETING".
  name: "Phoenix Detailing",
  fullName: "Phoenix Detailing Cardiff",
  // Straight off the show plate in their own photograph.
  descriptor: "Detailing & Valeting",
  city: "Cardiff",
  // Named personally in six of the eleven Google reviews supplied.
  owner: "Scott",

  // NOT PUBLISHED. Only "Cardiff" appears anywhere in the source material.
  // Fill these in and the address line, the map link and the schema below all
  // pick them up automatically.
  addressLine: "",
  postcode: "",

  // From the phone number printed on their own workshop banner.
  phoneDisplay: "07507 709167",
  phoneHref: "tel:+447507709167",
  whatsappNumber: "447507709167",

  instagram: "https://www.instagram.com/phoenixdetailingcardiff/",
  instagramHandle: "@phoenixdetailingcardiff",

  // NOT CONFIRMED. No domain has been registered or agreed yet, so the site
  // publishes no canonical URL, no Open Graph URL and no `url` in its schema
  // rather than asserting one it invented. Set this and all three appear.
  siteUrl: "",

  // A Facebook icon appears on their banner but the page URL was never
  // captured. Empty until Scott supplies it; the footer link stays hidden.
  facebook: "",
  email: "",

  // Their Google rating and review total were not captured, so this site makes
  // no numeric claim about either. The reviews section quotes and counts
  // nothing it cannot show.
  rating: null as number | null,
  reviewCount: null as number | null,
} as const;

export const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  "Hi Scott, I'd like a price for my car.",
)}`;

export const mapsUrl = business.postcode
  ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${business.addressLine} ${business.postcode}`,
    )}`
  : "https://www.google.com/maps/search/?api=1&query=Phoenix+Detailing+Cardiff";

export const nav = [
  { label: "Services", href: "#services" },
  { label: "The work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * "Brand new" is not a line we wrote. Three separate reviewers reached for it
 * independently. Natalie Cornock ("my car looks brand new after the valet"),
 * Dawn Evans ("My car looks Brand New!!") and Nathaniel Jarvis ("The car looked
 * brand new!"). It is the customers' own summary of the work.
 */
export const hero = {
  headline: "Your car, brand new again.",
  /** The fragment the headline sets in vinyl orange. Must appear in `headline`. */
  emphasis: "brand new",
  standfirst:
    "Vehicle valeting, full interior and exterior detailing, and accredited ceramic coating, from a unit in Cardiff. Scott does the work himself.",
  primary: "Message Scott on WhatsApp",
  secondary: `Call ${business.phoneDisplay}`,
  imageAlt:
    "A grey McLaren with both doors raised, standing square on under the strip lights of the Phoenix Detailing unit, the Phoenix banner on the wall behind it",
} as const;

/**
 * Every service below is published by the business itself or described by a
 * customer. Nothing is here because a detailer would normally offer it.
 */
export const services = {
  heading: "What Scott does",
  body: "Seven things, all under one roof in Cardiff. Every one of them is on this list because the business published it or a customer described having it done, not because it rounds the list out.",
  items: [
    {
      name: "Vehicle valeting",
      detail:
        "Inside and out. The way in for most cars, and the job most of the reviews are about.",
      // Their own workshop banner: "Vehicle Valeting / Detailing".
      source: "Their own banner",
    },
    {
      name: "Full detailing",
      detail:
        "Interior and exterior, taken further than a valet goes. Every corner, not just the panels you see first.",
      // Their own banner, plus their own Instagram caption: "Mercedes AMG in
      // for a full interior and exterior detail".
      source: "Their own banner and Instagram",
    },
    {
      name: "Accredited ceramic coating",
      detail:
        "A protective coating applied to corrected paint, so the finish lasts rather than looking good once.",
      // Their own banner, verbatim: "Accredited Ceramic Coating".
      source: "Their own banner",
    },
    {
      name: "Paint correction",
      detail:
        "Machine polishing that takes small marks and swirls out of the paint instead of filling them in.",
      // Leah Whitty: "small marks being buffed out as part of the service".
      source: "Customer review",
    },
    {
      name: "Window tinting",
      detail:
        "Fitted to the panes you ask for. One customer had 20% on everything behind the B pillar, twice, on two different Teslas.",
      // Hikari: "the 20% window tints I requested on everything behind the B pillar".
      source: "Customer review",
    },
    {
      name: "End-of-lease deep clean",
      detail:
        "Before the car goes back. One customer returned theirs with no recharges, because the marks that would have been charged for had been buffed out.",
      // Leah Whitty: "end of lease deep clean ahead of returning our car… no
      // issues or recharges".
      source: "Customer review",
    },
    {
      name: "Fleet and multi-car",
      detail:
        "More than one car, kept to the same standard. One customer brings his whole fleet.",
      // Andrew Bartlett: "I now bring my 'fleet' of cars to Scott".
      source: "Customer review",
    },
  ],
} as const;

/**
 * The work section: one job shown in two frames, then the cars themselves.
 *
 * `process` uses the two frames of the same Mercedes-AMG in the same bay, from
 * one Instagram carousel. They are deliberately NOT presented as a drag-slider
 * before/after: the camera moved between the two shots, so they do not
 * register, and pretending otherwise would look like a trick. Two panels, one
 * cut line.
 *
 * `gallery` is Scott's own photography, supplied 12 August 2026. Each caption
 * says only what is in the frame. Where a badge is not legible the marque is
 * named and the model is not, because a caption is a claim like any other.
 * Eleven of the pictures he sent are not here: near-identical three-quarter
 * views of the same cars, which would make a slideshow rather than a page.
 */
export const work = {
  heading: "The work",
  body: "Every photograph below is Scott's own, taken in the unit. None of it is stock, and none of it is a car he did not do himself.",

  process: {
    heading: "Snow foam to finished",
    body: "The same car, the same bay, one job. This is what the middle of the work looks like, and what the end of it looks like.",
    before: {
      label: "In",
      caption: "Snow foam on, lifting the grit before anything touches the paint.",
    },
    after: {
      label: "Out",
      caption: "Paint corrected, glass clear, trim dressed. Ready to collect.",
    },
  },

  gallery: {
    heading: "Through the unit",
    body: "Cars booked in, worked on and photographed on the way out.",
    items: [
      {
        key: "cullinanOutside",
        caption: "Rolls-Royce, on the forecourt",
        alt: "A black Rolls-Royce Cullinan parked outside the Phoenix Detailing unit in the sun, the Phoenix sign on the wall above it and a Phoenix show plate on its bumper",
      },
      {
        key: "bentleyBonnet",
        caption: "A Bentley bonnet, holding the ceiling",
        alt: "The bonnet of a dark grey Bentley, so clean that the hexagonal ceiling lights above it come back off the paint in a sharp unbroken pattern, the winged B badge in the foreground",
      },
      {
        key: "gClassUnit",
        caption: "Mercedes G-Class, inside",
        alt: "A black Mercedes G-Class inside the unit under the strip lights, the Phoenix banner on the wall behind it and a Phoenix show plate on its bumper",
      },
      {
        key: "headlights",
        caption: "One headlight brought back, one as it arrived",
        wide: true,
        alt: "Two photographs of a silver car's headlights side by side: one clear enough to see the reflector inside, the other clouded and yellowed",
      },
      {
        key: "ferrariShield",
        caption: "Ferrari, wing and shield",
        alt: "The front wing of a red Ferrari with the Scuderia shield on it, the paint reflecting a long unbroken line of light",
      },
      {
        key: "bentleySeats",
        caption: "Quilted leather, cleaned",
        alt: "The rear cabin of a Bentley, quilted tan leather seats and burr walnut trim, cleaned and photographed with the door open",
      },
      {
        key: "beading",
        caption: "Water standing up on a coated panel",
        wide: true,
        alt: "Water in tight round beads standing on a silver panel rather than running off it",
      },
      {
        key: "macanHex",
        caption: "Porsche Macan, under the lights",
        alt: "A black Porsche Macan under a ceiling of hexagonal lights, the pattern reflected the length of its bonnet, a Phoenix show plate on the front",
      },
      {
        key: "mclarenRear",
        caption: "McLaren, from behind",
        alt: "The rear of a black McLaren from above, the hexagonal ceiling lights reflected across the engine cover, a Phoenix show plate below the tail lights",
      },
      {
        key: "gtrRear",
        caption: "Nissan GT-R, plate still on",
        alt: "The rear of a grey Nissan GT-R parked outside the unit, a Phoenix show plate in place of the number plate and the Phoenix sign on the building behind",
      },
    ],
  },
} as const;

/**
 * Verbatim Google reviews.
 *
 * Eleven were supplied. The four that Google had truncated mid-sentence with
 * "… More" are omitted rather than completed by guesswork: Natalie Cornock,
 * Dawn Evans, beth evans and Ian Gaughan. The seven below are quoted exactly as
 * written, including the reviewers' own capitalisation and punctuation. The one
 * edit made anywhere is a missing space after a full stop in Simon Farrell's,
 * which was plainly a typing slip and not a word.
 */
export const reviews = {
  heading: "What people said afterwards",
  body: "Reviews left on Google, quoted exactly as they were written. Nothing here has been tidied up, shortened or paraphrased.",
  note: "Four further reviews were left out because Google had cut them off mid-sentence, and finishing someone else's sentence for them is not quoting them.",
  items: [
    {
      name: "Hikari【光】",
      when: "4 months ago",
      body: "He's brilliant and really nice to talk to while he does the work for you. Awesome small business. Made my last 2 Teslas look awesome with the 20% window tints I requested on everything behind the B pillar. Would use again.",
    },
    {
      name: "Elain Jones",
      when: "5 months ago",
      body: "Very friendly and professional service - the car is spotless, and Scott went above and beyond to make it as easy as possible for me to get my car cleaned on my day off! Highly recommend.",
    },
    {
      name: "Leah Whitty",
      when: "a year ago",
      body: "Absolutely amazing service from Phoenix Detailing. We had an end of lease deep clean ahead of returning our car and the attention to detail was impeccable, car returned with no issues or recharges due to small marks being buffed out as part of the service. Would highly recommend",
    },
    {
      name: "Andrew Bartlett",
      when: "3 months ago",
      body: "Incredible work & fantastic customer service. I now bring my “fleet” of cars to Scott.",
    },
    {
      name: "georgia roberts",
      when: "3 months ago",
      body: "My car has never looked and felt so clean. Scott is fantastic and very thorough.",
    },
    {
      name: "Nathaniel Jarvis",
      when: "a year ago",
      body: "Quick and easy booking process, fitted in a full valet in between the morning and afternoon school run. An amazing job at a great price. The car looked brand new!",
    },
    {
      name: "Simon Farrell",
      when: "a year ago",
      body: "Superb. Great job keeping my pride and joy immaculate. easy to get hold of too especially in an emergency. Highly recommended",
    },
  ],
} as const;

export const contact = {
  heading: "Bring it to the unit",
  body: "Cars are booked in and collected from the unit in Cardiff. Message Scott with what you drive and what you want doing, and he'll come back with a price.",
  imageAlt:
    "The Phoenix Detailing unit from the road: a grey building with the Phoenix sign above the door, one bay open with its hexagon lights on, and a colour-shifting green TVR parked outside",
  // No prices are published anywhere in the source material, so the site asks
  // for an enquiry rather than showing a figure or a "from" price.
  priceNote: "No fixed price list. Every car is quoted on the car.",
} as const;

export const footer = {
  // Their own banner carries this line beneath the logo.
  line: "Vehicle Valeting / Detailing · Accredited Ceramic Coating",
  /**
   * The same banner line broken into its parts, so the hero strip wraps
   * between claims instead of orphaning half of one.
   */
  credentials: [
    "Vehicle Valeting",
    "Detailing",
    "Accredited Ceramic Coating",
  ],
} as const;

/**
 * Facts Scott still needs to supply. Each one is wired up already: fill the
 * matching field above and the site picks it up with no layout change.
 *
 * Nothing here is guessed at in the meantime, and no part of the page pretends
 * these exist.
 */
export const pending = [
  { field: "business.addressLine / business.postcode", what: "The unit's street address and postcode. Unlocks a real address line, a working map link and a full PostalAddress in the search-engine schema." },
  { field: "packages", what: "A price list or 'from' prices, if you want them shown. The site is built to work without one." },
  { field: "business.email", what: "A contact email address, if you want one on the page." },
  { field: "business.facebook", what: "The Facebook page URL. The icon is on your banner but the link was never captured." },
  { field: "business.rating / business.reviewCount", what: "Your Google star rating and total review count. Until these are supplied the site makes no numeric claim about either." },
  { field: "business.siteUrl", what: "The live domain, once there is one. Unlocks the canonical URL, the Open Graph tags and the `url` in the search-engine schema. All three are deliberately absent until then rather than pointing at a guess." },
] as const;
