---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

## Scope and mode

The single marketing page at `app/page.tsx`. **Persuade**: the visitor decides whether to hand Scott their car, and acts.

## Audience and job

Someone in Cardiff or South Wales who has just been recommended Phoenix, or found it searching for detailing, deciding whether to trust a stranger with something expensive. Usually on a phone, often in the evening. Three evidenced groups: enthusiast and high-end owners (Teslas, an AMG, a Ferrari), everyday owners wanting a thorough valet, and lease returners and small fleets.

## Action

One action, and only one: message or call Scott. WhatsApp is primary, phone secondary. No form, no booking engine, no account. A sticky two-button dock keeps both in thumb reach on phones for the whole scroll.

## Proof and content

The proof is Scott's own material, never claims about it:

- Three photographs from his own Instagram, all shot in the current unit. No stock imagery, ever.
- Seven Google reviews quoted verbatim. Four more were supplied but arrived truncated by Google and are omitted rather than completed by guesswork.
- Seven services, each carrying a visible chip naming its source: his own banner, his own Instagram, or a customer's review.

## Constraints

- Nothing may be invented. Missing facts stay visibly missing as empty slots in `content/site.ts`; see `pending` there for what Scott still owes.
- No prices exist in any source, so the page is enquiry-led and must stay shippable without a price list.
- No star rating or review total was captured, so the page makes no numeric claim about either and the schema carries no `aggregateRating`.
- The logo exists only as pixels in photographs. The mark in `PhoenixMark.tsx` is authored to match and is flagged for replacement.
- The hexagon-LED studio photograph is excluded: it is not the current premises.

## Direction and memorable moment

**Club Livery**, the graphic system that lives on a car's painted surface: flat cut vinyl, number roundels, scrutineering stamps, sponsor bands. Seed key `c96ce9d7`, candidate 4 of 7.

The memorable moment is the snow-foam-to-finished diptych: two panels of the same car in the same bay, separated by a 3px orange gutter that reads as the gap between two pieces of laid vinyl. Deliberately *not* a drag slider: the two frames are not camera-registered, and sliding one over the other would make the car jump.

Second moment: the reviews section is the page's one drenched region. Full orange, black type, because the proof should be the loudest thing on the page.

## Unresolved

- Street address and postcode: would unlock a real address line, a map link and a full `PostalAddress` in the schema.
- Whether Scott wants prices shown at all.
- Facebook URL, email, Google rating and review count.
- The real logo file.
- The live domain. `business.siteUrl` in `content/site.ts` is empty, and the canonical URL, the Open Graph URL and the schema `url` are all gated behind it rather than asserting a domain nobody has registered.

## First thing to raise on a future pass

The **Services band**. It is the page's longest region and the only one carrying no device from the livery: a rule-separated list on near-black that a generic site would also produce. Raised by the finish review as ambition rather than a blocker, and recorded here so it outlives the review.

Unspent devices of the world, if that pass happens: the roundel is only ever a 40px logo disc, never a race number or a scrutineering plate at structural scale; the sponsor band never becomes the stacked decal wall the world is known for; display lettering never runs at panel scale, outline-cut or as a livery numeral.
