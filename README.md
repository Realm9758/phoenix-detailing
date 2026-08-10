# Phoenix Detailing Cardiff

The website for Phoenix Detailing Cardiff: vehicle valeting, detailing and accredited ceramic coating, run by Scott from a unit in Cardiff.

A single page. Next.js 16 (App Router), React 19, TypeScript. No database, no CMS, no forms. The only conversion event is a WhatsApp message or a phone call.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run images   # regenerate the photographs from source-images/
```

## Where things live

| Path | What it holds |
| --- | --- |
| `content/site.ts` | **Every word and every fact on the site.** Start here. |
| `images/index.ts` | The image manifest. |
| `app/page.tsx` | Composition only. No copy, no styling decisions. |
| `app/globals.css` | Design tokens and the livery primitives. |
| `components/` | One component per section, each with its own CSS module. |
| `tools/build-images.py` | Crops Instagram's chrome off the source screenshots. |
| `source-images/` | The original screenshots, kept so the crops stay reproducible. |
| `PRODUCT.md` | Durable product truth: users, positioning, services and their sources. |

## The one rule

**Nothing on this site may be invented.**

Phoenix is a real business with a real reputation, and this page is where a stranger checks it. So every claim traces to one of two places, and `content/site.ts` notes which one inline:

- Phoenix's own published material: their workshop banner, their show plate, their Instagram;
- a customer's own words, quoted from a Google review.

Where a fact has not been supplied it stays empty, and the parts of the page that depend on it simply do not render. It does not get a plausible-looking placeholder. If you add something here, source it the same way.

Two consequences worth knowing before you edit:

- Four of the eleven supplied Google reviews are **left out** because Google had truncated them mid-sentence. Finishing someone else's sentence for them is not quoting them.
- There is no `aggregateRating` in the structured data and no star rating on the page, because neither the rating nor the review total was ever supplied. Inventing structured data is still inventing.

## What Scott still needs to supply

Each of these is already wired up. Fill in the matching field in `content/site.ts` and the page picks it up with no layout change. The full list also lives in the `pending` export at the foot of that file.

| What | Field | Unlocks |
| --- | --- | --- |
| Unit address and postcode | `business.addressLine`, `business.postcode` | The address line, a working map link, a full `PostalAddress` in the search schema |
| Prices, if you want them shown | n/a | The site is built to work without a price list |
| Email address | `business.email` | A contact row |
| Facebook page URL | `business.facebook` | The Facebook link in the footer (the icon is on your banner; the URL was never captured) |
| Google rating and review count | `business.rating`, `business.reviewCount` | Until supplied, the site makes no numeric claim about either |
| The logo as SVG or high-res PNG | `components/PhoenixMark.tsx` | Replaces the drawn stand-in. See below |
| The live domain | `business.siteUrl` | The canonical URL, the Open Graph tags and the `url` in the search schema. All three are deliberately absent until then rather than pointing at a domain nobody registered |

## About the logo

`components/PhoenixMark.tsx` is **not** Scott's original artwork. The only copies available were photographs of the workshop banner and a show plate: too small, too angled and too washed out by the strip lights to trace. So the mark is drawn to match what those photographs show, in flat angular shapes that could genuinely be cut from vinyl.

Replace the paths in that one component when the real file turns up. Nothing else changes.

## Photographs

Three, all Phoenix's own, all taken in the current unit and published on their Instagram. There is no stock photography here and there must never be any. The work is the proof.

A fourth screenshot (a BMW in a hexagon-lit studio) is in `source-images/` but deliberately unused: it is not the current premises, and showing it would misrepresent where a customer's car actually goes.

## Design

The visual world is British club-motorsport livery (flat cut vinyl, number roundels, scrutineering stamps, sponsor bands), chosen because detailing is work done to a car's painted surface, and that is the graphic system which lives on that surface. The full contract is recorded as an HTML comment at the top of the rendered body, and the design system is documented in `DESIGN.md`.

The orange is sampled from the phoenix mark on Phoenix's own show plate. Text on an orange field is always black: livery white on that orange is only 2.94:1, which fails contrast, while black is 5.84:1.
