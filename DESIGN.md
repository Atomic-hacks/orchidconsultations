# Orchid — editorial consultancy refinement

## Current direction
Full-bleed photographic hero, left-aligned editorial copy, transparent navigation over the hero and a restrained bottom control rail. Remove eyebrow labels. Retain DM Sans, the approved corporate palette, audited copy, and clear service navigation. Featured service panels stack with native sticky positioning and Motion image parallax. Hero photography and copy move at different scroll depths. Carousel movement pauses when offscreen, on keyboard focus, and after manual selection. Reduced motion disables parallax and autoplay and presents service panels in normal flow. Preserve rolling labels, arrow exchanges, keyboard focus, and responsive layouts from 360px.

## Tokens and typography
Use the supplied brand palette: blue #005FD8, teal #01B59F, green #43CE7E; mark colors #6D974B, #5585B1, #2262A1. Ink #181C2C, secondary ink #232A3F, slate #5B6478, line #E3E7EE, surface #F6F8FB, white #FFFFFF. The supplied brand-gradient token is retained but decorative gradients are not rendered. Text and action contrast use blue/deep blue rather than bright teal or green.

DM Sans Variable is the single locally bundled family. Hero type caps at 64px; section headings 32–44px on desktop; body text 16–18px. Mobile headings scale down. Indexed uppercase labels, left alignment, 12-column grids, 1248px content width, consistent rules and spacing.

## Existing component refinement
All routes and the typed 12-service dataset remain. Shared Button, Reveal, SectionHeading, motion variants, Lenis, and route transitions remain. Services are grouped into Growth and Markets, Finance and Investment, Operations and Compliance, People and Projects, and Technology. Each row shows number, name, original scope summary and a lucide arrow. Service details expose overview, scope, outcomes and next steps beside sticky navigation.

## Motion
Shared easing [0.22, 1, 0.36, 1], default duration 0.5s, 12–16px reveals. Preserve masked text, rolling labels/arrows, hairline draws, scroll progress, nav behavior, counters and accessible accordions. Cursor follower, pointer-following glow, magnetic buttons, decorative parallax, rotating typography and automatic marquee were removed from the experience. First-session preloader is 0.45s reveal plus 0.5s exit. Reduced motion disables decorative transforms and Lenis.

## Copy pending
Footer compliance line, operational contact-form fallback/error text, and structural 404 message require approved copy. Contact delivery requires VITE_CONTACT_ENDPOINT. No thirteenth service was added. Source registration-number inconsistencies remain recorded in PRODUCT.md; no regulatory assertion is invented.
