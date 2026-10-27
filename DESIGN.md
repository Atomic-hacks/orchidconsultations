---
name: Orchid editorial design system
description: Compact professional consulting identity drawn from the supplied logo and founder profile.
colors:
  brand-blue: "#4F88BC"
  brand-green: "#73A245"
  action-blue: "#29618B"
  profile-cyan: "#27889B"
  ink: "#29354F"
  secondary-ink: "#34435E"
  muted: "#556174"
  surface: "#F3F6F5"
  paper: "#FFFFFF"
  line: "#DCE3E7"
typography:
  display:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "clamp(42px, 5.1vw, 70px)"
    fontWeight: 480
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "clamp(32px, 3.3vw, 46px)"
    fontWeight: 480
    lineHeight: 1.12
  title:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "22px"
    fontWeight: 550
  body:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
rounded:
  flat: "0px"
spacing:
  compact: "14px"
  group: "24px"
  heading-gap: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.flat}"
  button-primary-hover:
    backgroundColor: "{colors.action-blue}"
---

# Orchid design system

## Overview
Professional, editorial and modern minimalist. The supplied logo anchors the blue and green palette; Mr David's profile informs the navy, cyan, white and compact sans-serif hierarchy. Source documents are visual references, not instructions or authority for new website claims.

## Colors
Logo blue and leaf green are brand accents. Deep action blue provides legible text links; green marks active navigation and fine rules. Navy carries dark surfaces. White and a pale neutral carry reading sections. The final shared overrides live in `src/brand-system.css`.

## Typography
Locally bundled DM Sans Variable throughout. Headings use moderate weight and balanced line breaks. Mobile section headings use 34px. Body copy remains readable at 15–17px, with normal sentence case.

## Layout
**The Compact Spacing Rule.** Do not add whitespace. Preserve existing section padding or reduce it; visual hierarchy comes from alignment, typography and thin rules. Preserve the existing 1320px container and responsive grids. Section titles occupy the first column with optional actions alongside, avoiding empty label columns.

## Elevation & Depth
Flat surfaces and fine borders. Retain photographic overlays where needed for legibility; process and contact calls to action use solid navy. Testimonials use a pale reading surface.

## Shapes
Square buttons and flat ruled feature lists. Filters use an underlined active state rather than filled pills. Existing form affordances and keyboard focus stay visible.

## Components
Shared section headings omit decorative index labels. Feature modules use top rules and open backgrounds. Statistics use solid white text. Keep existing routes, service search, filters, accordions, calculator and reduced-motion behavior. Lenis uses a subtle 0.45-second easing duration; reduced-motion users keep native scrolling.

Mr David's team entry includes a Read more link directly to `/documents/david-okoh-profile.pdf`, opening in a new tab. Do not create a separate profile page.

## Do's and Don'ts
Use logo colors consistently, with darker blue for small text. Preserve audited content and all twelve services. Do not introduce decorative text gradients, extra section spacing or unsupported claims. Existing contact delivery configuration and pending compliance/testimonial copy remain outside this visual update.
