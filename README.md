# Phoenix Detailing Cardiff

The website for Phoenix Detailing Cardiff: vehicle valeting, detailing and accredited ceramic coating, run by Scott from a unit in Cardiff.

A single page. Next.js 16 (App Router), React 19, TypeScript. No database, no CMS, no forms. The only conversion event is a WhatsApp message or a phone call.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run images   # regenerate the photographs from source-images/
npm run brand    # re-trace the logo from source-images/brand/
```

`npm run images` needs Pillow and `cwebp`. `npm run brand` also needs `potracer`
(`python3 -m pip install potracer`). Neither is needed to run or deploy the
site: both write files that are committed.

## Where things live

| Path | What it holds |
| --- | --- |
| `content/site.ts` | **Every word and every fact on the site.** Start here. |
| `images/index.ts` | The image manifest. |
| `app/page.tsx` | Composition only. No copy, no styling decisions. |
| `app/globals.css` | Design tokens and the livery primitives. |
| `components/` | One component per section, each with its own CSS module. |
| `tools/build-images.py` | Resizes Scott's photographs and crops Instagram's chrome off the old screenshots. |
| `tools/build-brand.py` | Traces Scott's logo files into the outlines the site draws. |
| `source-images/photos/` | Scott's own photographs, as supplied. |
| `source-images/brand/` | Scott's logo files, as supplied. |
| `source-images/instagram/` | The four screenshots the first build worked from. |
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
| The live domain | `business.siteUrl` | The canonical URL, the Open Graph tags and the `url` in the search schema. All three are deliberately absent until then rather than pointing at a domain nobody registered |

## About the logo

Scott supplied the artwork on 12 August 2026, and it is now the mark the site draws. `tools/build-brand.py` thresholds his two JPEGs and traces them, writing the outlines to `components/phoenix-paths.ts`; `components/PhoenixMark.tsx` draws them. Re-run `npm run brand` if he ever sends a better file.

Two decisions were taken in the trace, both worth knowing before anyone "fixes" them:

- **The gradient is gone.** His artwork fades orange to red. This page is cut vinyl, and vinyl does not fade, so the mark is one flat colour and inherits `currentColor`. That is also why it can sit on a black roundel, on bodywork and on an orange field without a second file.
- **Only the phoenix and the bird.** Scott asked for the lockup trimmed to those two, so the strapline, the social icons and the handle in his file are not traced. What they say still appears on the page, set in type, where it can be read at any size and by a screen reader.

## Photographs

All Phoenix's own. There is no stock photography here and there must never be any: the work is the proof.

Thirteen images are built: eleven of the twenty-six photographs Scott supplied on 12 August 2026, plus the two Instagram frames below. Which ones get built is the `PHOTOGRAPHS` list in `tools/build-images.py`, so swapping one in is a one-line change plus its caption and alt text in `content/site.ts`.

**Two rules decide what goes on the page, and both were learned by getting them wrong first.**

1. **Every gallery photograph is 3:4**, which is what Scott's phone shoots, and the grid tile is 3:4 too, so nothing is cropped to fit. A frame in any other shape loses a quarter of itself to `object-fit: cover`. That is how a photograph of two headlights ended up with the headlights cut off at the edges. If a frame is not 3:4 it gets a place of its own or it does not go on.
2. **Every photograph is built at twice the size it is displayed at**, because most people reading this page are on a 2x screen and a 1x image reads as soft. The check is in `tools/build-images.py`: hero and contact run near half the viewport, grid tiles are capped near 420px by the 88rem shell.

Two of Scott's pictures are deliberately left out on judgement rather than on those rules: a close-up of water beading on a panel (a good photograph of water, but a page of cars is not where it belongs) and a headlight before/after, which is a two-up collage at 841px, neither 3:4 nor big enough to show at a size worth showing.

Two frames from an old Instagram carousel are still used, for the snow-foam-to-finished pair: they are the only record of a car mid-job rather than finished. At 820px they are the smallest images on the site, which is why that block is capped at two grid columns instead of running the full width, and why the cap has a comment on it in `Work.module.css`. The Ferrari screenshot from that same set has been retired, because Scott's own photograph of a Ferrari is sharper and not letterboxed.

One question is open. A BMW screenshot in `source-images/instagram/` was left unused in the first build because Scott said the hexagon-lit studio in it was not the current premises. Several of the photographs he sent in August show a hexagon-lit bay, and the shots of the unit from the road show hexagon lights through the open door. So either the unit has been fitted out since, or two spaces are in play. Nothing on the page claims which room any photograph was taken in, except where his own sign or banner is in the frame. Confirm it with him before writing anything that does.

## Design

The visual world is British club-motorsport livery (flat cut vinyl, number roundels, scrutineering stamps, sponsor bands), chosen because detailing is work done to a car's painted surface, and that is the graphic system which lives on that surface. The full contract is recorded as an HTML comment at the top of the rendered body, and the design system is documented in `DESIGN.md`.

The orange is sampled from the phoenix mark on Phoenix's own show plate. Text on an orange field is always black: livery white on that orange is only 2.94:1, which fails contrast, while black is 5.84:1.
