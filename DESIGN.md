---
name: Phoenix Detailing Cardiff
description: Club-motorsport livery: flat cut vinyl on bodywork black, one hard diagonal, black type on every orange field.
colors:
  ink: "#0b0b0c"
  ink-2: "#121214"
  ink-3: "#1a1a1d"
  orange: "#e85e1e"
  orange-hi: "#ff8a42"
  copper: "#a63e12"
  paper: "#f2efe9"
  fg: "#f2efe9"
  fg-2: "#b9b0a4"
  fg-3: "#8b8278"
  line: "rgba(242, 239, 233, 0.14)"
  line-strong: "rgba(242, 239, 233, 0.32)"
typography:
  # The enumerated ramp. Every discrete font-size in the build is here; a new
  # small role picks one of these steps rather than inventing one between them.
  scale:
    display-mobile-min: "3rem"
    display-mobile-max: "4rem"
    plate-name: "1.5rem"
    body: "1.0625rem"
    action: "1.0625rem"
    control: "1rem"
    meta: "0.9375rem"
    footnote: "0.875rem"
    stamp: "0.8125rem"
    timestamp: "0.75rem"
    chip: "0.6875rem"
    tile-caption: "0.6875rem"
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 11vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.7vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
    fontFeature: "tabular-nums"
rounded:
  none: "0"
  plate: "4px"
  disc: "50%"
spacing:
  s1: "0.5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2rem"
  s5: "3rem"
  s6: "4.5rem"
  s7: "6rem"
  s8: "clamp(5rem, 11vw, 9rem)"
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
components:
  action-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1rem 1.6rem"
  action-primary-hover:
    backgroundColor: "{colors.orange-hi}"
    textColor: "{colors.ink}"
  action-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "1rem 1.6rem"
  action-ghost-hover:
    textColor: "{colors.orange-hi}"
  action-ghost-on-vinyl:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.6rem"
  source-chip:
    backgroundColor: "transparent"
    textColor: "{colors.fg-3}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.5rem"
  roundel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.disc}"
    size: "2.5rem"
  roundel-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.orange}"
    rounded: "{rounded.disc}"
    size: "2.5rem"
  plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.plate}"
    padding: "1.5rem 2rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0"
  nav-link-hover:
    textColor: "{colors.fg}"
  band-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "2rem 0"
  dock-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 0"
  dock-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "1rem 0"
---

# Design System: Phoenix Detailing Cardiff

## Overview

**Creative North Star: "The Cut Vinyl Panel"**

Detailing is work done to a car's painted surface, so this system is built from the graphic language that lives on that surface: cut vinyl, race roundels, sponsor bands, scrutineering stamps. Every surface in the build is one of three materials: bodywork (near-black), vinyl (orange), or paint (livery white). There is no fourth. A surface either is a material or it is a rule drawn between two of them.

The system is flat by construction. Vinyl has a hard edge, and that edge is the whole design: the shipped page carries no gradient fill, no glass, no glow, no blur, and no drop shadow anywhere. Depth is made by cutting one panel over another on a single diagonal angle and letting the colour beneath show along the cut. The build's one authored motion is the same idea in time: a panel squeegeed on from one edge.

PRODUCT.md records the business's incumbent identity as an orange-to-copper *gradient* on near-black. The build resolves that into flat fields at the sampled orange, with copper surviving only as browser chrome. That divergence is deliberate and the flat resolution is the system: a gradient cannot be cut from vinyl.

The same resolution applies to the logo itself. Scott's artwork, supplied in August 2026, fades orange to red across the bird. The site traces his outlines and drops the fade, so the mark is one flat colour inheriting `currentColor`. It is his shape, in this world's material.

**Key Characteristics:**
- Three materials only: bodywork black, vinyl orange, livery white.
- Zero gradients as painted surfaces, zero glass, zero glow, zero box-shadow depth.
- One diagonal angle, one cut per panel, always on the panel's leading edge.
- Black type on every orange field, always. No exceptions, no opacity.
- Condensed uppercase display over a grotesque text face; rules instead of cards.

## Colors

A committed three-material palette: near-black bodywork, one sampled vinyl orange, and a warm livery white, with secondary text tones warmed off the paint rather than greyed toward it.

### Primary
- **Vinyl Orange** (`{colors.orange}`): the business's own orange, sampled from the phoenix mark on their show plate and workshop banner. It is the emphasis word in the hero headline, the primary action, the diptych gutter and stage labels, the icon fill on contact rows, and the full-bleed reviews band. It is a *field* colour and a *mark* colour; it is never body text on black at small sizes.
- **Vinyl Orange Bright** (`{colors.orange-hi}`): the hover and focus state of the orange only. It raises the primary action on hover, tints ghost-action and contact-row text on hover, and draws the focus ring. It never starts a surface.
- **Copper** (`{colors.copper}`): scoped to browser chrome, the scrollbar thumb and `scrollbar-color`. It is not a content colour and no new surface should introduce it.

### Neutral
- **Bodywork Black** (`{colors.ink}`): the page ground, the nav bar, the plate, the diptych panel backing, and the type colour on every orange field.
- **Bodywork Black Raised** (`{colors.ink-2}`): the only tonal step in use, on the services section and footer, one shade off the page so a band reads as a separate panel without a border doing all the work.
- **Livery White / Paint** (`{colors.paper}` = `{colors.fg}`): body and headline text on bodywork, and the roundel disc.
- **Warm Secondary** (`{colors.fg-2}`): standfirsts, captions, service detail copy, nav links at rest. Warmed off the paint, never grey.
- **Warm Tertiary** (`{colors.fg-3}`): stamps, source chips, footer lines, quiet notes.
- **Cut Line** (`{colors.line}`) and **Cut Line Strong** (`{colors.line-strong}`): the 1px rules that build every band, and the 2px outline of the ghost action and social buttons.

### Not a colour

One literal `#000` appears in the build, in the nav's overflow `mask-image`. A mask reads only alpha, so that black is opacity notation rather than a palette entry. It is the sole permitted literal colour value in the CSS, it must never be used to paint anything, and every actual colour comes from a token above.

### Named Rules

**The Black-On-Orange Rule.** Livery white on the vinyl orange measures 2.94:1 and is therefore banned. Every text role on an orange field (heading, body, name, timestamp, note, action label, icon) is bodywork black at 5.84:1. Hierarchy on orange comes from size and weight only. Never mix a colour toward the orange to make a secondary tone, and never use opacity to soften text on it. Audit test: sample any glyph sitting on `{colors.orange}`; if it is not `{colors.ink}`, it is wrong.

**The Three Materials Rule.** A surface is bodywork, vinyl, or paint. There is no fourth material and no in-between tint. If a new surface needs to separate from the page, it uses `{colors.ink-2}` or a 1px cut line, not a new colour.

**The One Drenched Region Rule.** Exactly one region of the page is flooded with vinyl orange (the reviews band, because the proof should be the loudest thing on the site). Everywhere else the orange is a mark, an edge, or an action. A second flooded region weakens the first.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow, sans-serif)
**Body Font:** Chivo (with Helvetica Neue, Arial, sans-serif)

**Character:** A condensed industrial signage face in the register of a race number and a sponsor block, set against a grotesque with enough grit to sit beside it without either one apologising. The display face is narrow enough to set a headline large without setting it tall.

The display face loads with `font-display: block` (not `swap`) and `adjustFontFallback: false`: no metric override exists for this face, so swapping would paint the display voice in a system condensed face first. Wrong lettering is worse here than a few frames of nothing. Chivo stays on `swap`.

### Hierarchy
- **Display** (800, `clamp(3.5rem, 11vw, 6rem)`, line-height 0.85, tracking -0.02em, uppercase, balanced wrap): the page's one `h1`. Ceiling is 6rem. Below 60rem the hero overrides it to `clamp(3rem, 13vw, 4rem)` so the headline does not eat the viewport before the photograph starts.
- **Headline** (800, `clamp(2.5rem, 6.5vw, 4rem)`, line-height 0.85, uppercase): every section `h2`.
- **Title** (700, `clamp(1.5rem, 2.6vw, 2rem)`, line-height 0.95, tracking -0.01em, uppercase): service names and equivalent row heads.
- **Lede** (400, `clamp(1.125rem, 1.7vw, 1.375rem)`, line-height 1.5, `{colors.fg-2}`): the standfirst under a heading. One per section.
- **Body** (400, 1.0625rem, line-height 1.6, max-width 68ch): all running copy. Paragraphs are capped at the measure by default; narrower caps are set per block (46ch standfirst, 62ch service detail, 42ch caption, 60ch note).
- **Label / Stamp** (600, 0.8125rem, tracking 0.14em, uppercase, tabular figures, `{colors.fg-3}`): scrutineering captions on the hero credentials strip and small stamped metadata. Related small display roles run 0.625–0.75rem at 0.1–0.22em tracking.
- **Action label** (700, 1.0625rem, tracking 0.04em, uppercase, display face): all buttons and dock items.
- **Minor steps.** Chrome and metadata use a closed set of fixed sizes, and nothing outside it: 1.5rem (diptych stage labels), 1rem (nav phone link, dock items), 0.9375rem (nav links in the display face; work captions, contact note and reviews note in Chivo), 0.875rem (footer strapline, Chivo), 0.8125rem (the stamp role above), 0.75rem (review timestamps), 0.6875rem (source chips, show-plate descriptor, grid tile captions). A new small role picks one of these; it does not invent a step between them.

  The nav wordmark is no longer type at all: it is Scott's own lettering, drawn as a mark. See Marks below.

### Named Rules

**The Two Voices Rule.** Anything uppercase and tracked is set in the display face: headings, actions, nav links, stamps, labels, wordmarks. Everything sentence-case and running is Chivo. There is no third face and no italic: the hero's emphasis is an `<em>` reset to `font-style: normal` and coloured instead.

**The Tabular Figures Rule.** Any role that carries a number (phone links, review dates, stamps, dock items) sets `font-variant-numeric: tabular-nums`. Numbers on this page are evidence and they line up.

## Layout

A single centred shell at 88rem max-width with a fluid gutter (`{spacing.gutter}`), full-bleed backgrounds behind it. Vertical rhythm runs on an eight-step scale from 0.5rem to `{spacing.s8}`; sections are padded with `{spacing.s8}` block padding, and the drenched reviews band adds the cut depth on top (`calc(var(--s8) + 3.2vw)`) to keep copy clear of its diagonals.

The page is one scrolling route: sticky nav, hero, services, work, reviews, contact, footer, plus a fixed mobile dock. Section heads are a `{spacing.s3}` stack capped at 54rem with `{spacing.s6}` beneath.

Breakpoints observed in the build, all rem-based: 48rem (services row goes three-column, reviews go two columns, diptych goes side-by-side), 52rem (nav link row stops scrolling and drops its fade; the mobile dock disappears), 60rem (hero splits 1.06fr/0.94fr and takes `min(100svh, 54rem)`; below it the hero stacks and the photo takes a 5/4 aspect), 62rem (contact splits in two), 64rem (the nav phone number appears), 76rem (reviews go three columns).

Density is generous vertically and tight horizontally: content sits on rules rather than inside boxes, so horizontal padding inside a "container" is usually zero.

## Elevation & Depth

**There are no shadows in this system.** No `box-shadow` is used for depth, no `filter`, no `backdrop-filter`, and no blur anywhere in the build. Depth is made entirely by overlap and cut: a vinyl panel is clipped on a diagonal over the panel beneath it, and the colour underneath is revealed along that cut as a hard stripe. The hero is the canonical case: the orange sits *behind* the photograph and is clipped less than the photograph is, so the edge reads as vinyl laid over bodywork rather than as a border.

The single `box-shadow` in the build is `inset 0 0 0 3px var(--ink), inset 0 0 0 6px var(--paper)` on the roundel. It draws concentric rings on a disc; it is a stroke, not an elevation, and it is the only sanctioned use of the property.

### Named Rules

**The No Glass Rule.** The nav is opaque `{colors.ink}`. `backdrop-filter` is forbidden anywhere on this site. The nav is the most persistent surface on the page, and a translucent blur bar there would break the world on every scroll position.

**The Reveal-By-Cut Rule.** When two surfaces need to separate, cut one over the other and let the colour beneath show along the cut. Do not reach for a shadow, a border glow, or a tint.

## Shapes

Square by default. Corner radius is zero on every panel, action, chip, band, image and dock item. Two exceptions exist and both are artifacts rather than styling: the roundel is a full circle (a race number disc), and the plate carries a 4px radius (a physical show plate has one).

The signature geometry is the cut. `.cut-panel` in `globals.css` is the primitive: `clip-path: polygon(0 3.2vw, 100% 0, 100% 100%, 0 calc(100% - 3.2vw))`. Angles as shipped: 3.2vw on the reviews band and the contact photograph; 4.4vw for the hero's orange with the photograph at 6vw/1.6vw above 60rem, so the orange is revealed as a stripe along the cut; 3.5vw/7vw at the top of the mobile hero.

Borders are hairlines: 1px `{colors.line}` for every band rule, 2px `{colors.line-strong}` for outlined actions and social buttons, 2px `{colors.ink}` above each review on the orange field. Gutters between panels are 2–3px of orange showing through (the diptych, the dock), so the gap itself reads as vinyl.

### Named Rules

**The One Angle, Leading Edge Rule.** There is exactly one diagonal in this system, and one cut per panel, always on the panel's leading edge, the edge the reader meets first. On desktop that is the left; when the hero stacks on a phone, the cut moves to the top rather than staying at the bottom, because the world's signature geometry must not fall below the fold. Never cut a panel on two edges to make it look like a parallelogram, and never introduce a second angle.

**The Rules-Not-Boxes Rule.** Repeating content is a sponsor band: a full-width row separated by a 1px hairline top and bottom, with its metadata as a small outlined chip. Cards are not a structure in this system. Do not wrap a list item in a bordered, padded, radiused box.

## Components

### Buttons (Actions)
- **Shape:** square (0 radius), inline-flex with a 0.75rem icon gap, padding 1rem 1.6rem, display face 700 uppercase at 0.04em tracking.
- **Primary:** vinyl orange field, bodywork-black label and icon. Hover raises the field to `{colors.orange-hi}`; the label stays black.
- **Ghost:** transparent with a 2px `{colors.line-strong}` outline and paint-white label. Hover shifts the border to `{colors.orange}` and the label to `{colors.orange-hi}`.
- **Ghost on a vinyl field:** inverts. Border `rgba(11, 11, 12, 0.4)`, label bodywork black; hover takes the border to full black. Never a white-outlined button on orange.
- **States:** all transitions 180ms on the standard ease; `:active` presses 1px down. Focus is the global 3px `{colors.orange-hi}` ring at 3px offset, never removed, never replaced per component.

### Chips (Source chip)
- **Style:** transparent, 1px `{colors.line-strong}` border, square, 0.25rem 0.5rem padding, display face 600 at 0.6875rem / 0.12em uppercase in `{colors.fg-3}`, no wrap.
- **State:** static. It is an attribution stamp, not a filter: it has no selected state and never becomes interactive.

### Bands (in place of cards)
- **Corner style:** none. There is no box.
- **Background:** the section ground; hover washes the row with `color-mix(in srgb, var(--orange) 8%, transparent)` over 220ms.
- **Border:** 1px `{colors.line}` on top, plus a bottom rule on the last row to close the stack.
- **Internal padding:** `{spacing.s4}` block, zero inline. Above 48rem the row becomes `minmax(12rem, 16rem) 1fr auto` on a shared baseline.

### Navigation
- **Style:** sticky, opaque `{colors.ink}`, 1px bottom cut line, 4.5rem min height, inside the shell. Logo lockup (roundel + wordmark) left, section links centre, phone number right above 64rem.
- **Links:** display face 600 at 0.9375rem / 0.1em uppercase in `{colors.fg-2}`, with a transparent 2px bottom border. Hover lifts the text to `{colors.fg}` and paints the underline `{colors.orange}`.
- **Mobile:** the same link row ships at every width: it is never collapsed into a hamburger. Below 52rem it scrolls horizontally with hidden scrollbars and a trailing 2.5rem `mask-image` fade so a clipped anchor reads as "there is more this way".
- **Anchor offset:** `scroll-padding-top: 5.5rem` on the root clears the sticky bar.

### Mobile Dock
Fixed to the bottom below 52rem: a two-up grid on a vinyl-orange ground with 2px gaps, so the orange shows as the seam. The primary item is an orange field with black label and icon; the secondary is a bodywork field with paint label and an orange icon. Respects `env(safe-area-inset-bottom)`, and a 4rem spacer keeps the last section clear.

### Roundel
A paint-white disc carrying the phoenix mark, ringed by inset bodywork and paint strokes. It carries the mark only, never a section number, because the sequence is not information anyone needs.

**Plate variant** (`.roundel--plate`): the same disc struck the way Scott's own signage is, bodywork ground with an orange mark and a paint ring. The nav lockup uses it, because his mark is drawn for a black ground and orange on paint measures 3.0:1 against 5.8:1 on bodywork.

### Plate
The business's own show plate rebuilt as the contact block: bodywork ground, 2px paint border, 4px radius, orange mark, his wordmark in paint white, descriptor beneath, capped at 26rem.

### Marks
Two, both Scott's own artwork, both traced to outlines by `tools/build-brand.py` and drawn from `components/PhoenixMark.tsx`: the bird, and the PHOENIX wordmark. Flat single colour, `currentColor`, `fill-rule: evenodd`, no gradient. The lockup is the bird and the wordmark and nothing else, at his instruction: the strapline and the handle that appear in his logo file are set in type on the page instead, where they can be read at any size.

The geometry is long, so it ships once as a `<symbol>` sprite in the layout and every mark on the page is a `<use>` of it. A new placement references the sprite; it never pastes the path data again.

### Work grid
Panels laid on bodywork: no border, no radius, no shadow, the black between them doing the separating. Portrait tiles are 3:4; a wide tile takes two columns at 3:2, which is exactly the height of the portrait tile beside it, so no row runs ragged. Two columns below 64rem, three above, with `grid-auto-flow: dense` so a wide tile never leaves a hole. Each tile carries a stamp caption underneath naming the car, not praising the job.

### Iconography
All icons are authored SVG in `components/icons.tsx` on one construction: 24×24 box, 2px stroke, round caps and joins, no fills except where a brand glyph is genuinely solid. They inherit `currentColor`, so a single definition works on bodywork and on vinyl. No icon fonts, no glyph characters, no icon package.

### Motion (Reveal)
One authored moment, used in exactly one place: the before/after diptych. A `clip-path: inset(0 100% 0 0)` wipe over 900ms on `cubic-bezier(0.16, 1, 0.3, 1)` , vinyl squeegeed on from one edge, with children pressing up 0.6rem in 620ms at 70ms stagger. The class is attached client-side after mount, so content is fully visible without JavaScript, and the whole effect is scoped behind `prefers-reduced-motion: no-preference`. It was briefly applied to every section and every service row, which turned one authored moment into eleven identical entrances; that is the failure mode this rule exists to prevent.

**The One Moment Rule.** This site has one entrance animation and it belongs to one element. State transitions (160–220ms) are the only other motion. A new surface does not get its own reveal.

## Do's and Don'ts

### Do:
- **Do** set every text role on a vinyl-orange field in bodywork black (`{colors.ink}`, 5.84:1), and build hierarchy there from size and weight alone.
- **Do** cut a panel on the single diagonal angle, once, on its leading edge. 3.2vw as the default, 4.4vw/6vw where the hero reveals the orange stripe.
- **Do** reveal depth by letting an underlying colour show along a cut, never by adding a shadow.
- **Do** build repeating content as full-width sponsor bands separated by 1px `{colors.line}` rules, with a small outlined source chip for metadata.
- **Do** keep the nav opaque and ship the section link row at every width, scrolling it sideways with a trailing mask fade below 52rem.
- **Do** author icons as flat SVG on the 24×24 / 2px-stroke construction, inheriting `currentColor`. The two phoenix marks are Scott's own outlines and follow the same colour rule from the sprite.
- **Do** load the display face with `display: block`; the wrong lettering is worse than a brief blank.
- **Do** set tabular figures on any role that carries a number.

### Don't:
- **Don't** put livery white, or any tint of it, on the orange: it measures 2.94:1.
- **Don't** create a secondary tone by mixing a colour toward its background or by lowering opacity. Change size or weight instead.
- **Don't** paint a gradient, a glow, a glass panel, or a `backdrop-filter` on any surface. (Non-painting uses of a gradient, such as the nav's overflow `mask-image`, are the exception the world already ships and are allowed only as scroll affordances.)
- **Don't** add a `box-shadow` for depth. The roundel's inset rings are a stroke and are the only permitted use of the property.
- **Don't** introduce a second diagonal angle, or cut a panel on more than one edge.
- **Don't** wrap content in a bordered, radiused, padded card. Corner radius stays at 0 outside the roundel disc and the 4px plate.
- **Don't** collapse the section navigation into a hamburger, or hide it below a breakpoint.
- **Don't** give a new section its own entrance animation; the diptych holds the site's one authored moment.
- **Don't** use `{colors.copper}` on content: it is scrollbar chrome only.
- **Don't** put a small tracked label *above* a heading as an eyebrow or kicker. The stamp role is a caption that sits beneath or beside content.
