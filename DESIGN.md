# Design system: CV and LinkedIn Studio

Mood: calm, editorial, trustworthy. A quiet professional-services look, not a template.

## Colour
- Ink / navy `--ink` #0f1f33 (headings, dark bands, primary buttons)
- Ink soft `--ink-2` #31435a (body text), muted `--mut` #5a6878
- Accent (warm amber) `--accent` #e9a15a, accent text `--accent-ink` #8f4a12 (AA on paper)
- Paper `--paper` #fbf8f3, surface `--surface` #ffffff, tint `--tint` #f3ede3, line `--line` #e4ddd0
- All text pairs meet WCAG AA.

## Type
- Headings: Fraunces (variable serif, self-hosted via @fontsource-variable, font-display swap)
- Body: Inter (variable sans, self-hosted)
- Scale (fluid): display clamp(2.4rem,5vw,3.9rem); h1 clamp(2rem,4vw,3rem); h2 clamp(1.5rem,2.6vw,2.1rem); h3 1.2rem; body 1.0625rem/1.65; small .875rem; eyebrow .8rem uppercase tracked

## Space, shape
- 8px scale: `--s1` 8, `--s2` 16, `--s3` 24, `--s4` 32, `--s5` 48, `--s6` 64, `--s7` 96
- Radius: 6 (buttons), 14 (cards), 22 (hero visual)
- Shadow: soft `0 1px 2px rgba(15,31,51,.06), 0 8px 24px rgba(15,31,51,.07)`
- Widths: wrap 72rem, prose 42rem

## Patterns
- Header: sticky, slim (64px), paper blur, wordmark left, text nav, amber "Request a quote" button right; nav collapses to a details menu on mobile.
- Buttons: `.btn` primary navy, `.btn--accent` amber, `.btn--ghost` outlined. 44px min height, visible 3px focus ring.
- Cards: white surface, 1px line, radius 14, soft shadow, hover lift 2px.
- Sections: 96px vertical rhythm (64 on mobile); alternating paper / tint / ink bands.
- Footer: ink background, columns for brand, services, studio and trust, disclosure line.

## Content rules
No testimonials, stats, logos, names, ratings or prices. Offers say "Request a quote". No em dashes. No guarantee language.
