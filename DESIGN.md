# Design system: CV and LinkedIn Studio (v2, "The editor's desk")

## Design reasoning
**Visitor.** A job seeker or career changer. Anxious, short of time, wants to look credible without lying. They have been told to "sell themselves" and distrust anything that sounds like hype.

**Feeling.** Calm confidence. Editorial and trustworthy, like a well-set career document on good paper, handled by someone careful with words.

**Concept: the editor's markup.** Our work is editing the truth, not inventing it, so the visual language is the editor's desk: tracked changes (a struck-out vague line, an inserted sharper one), margin notes, proof marks (caret, check, pilcrow), ruled document grid lines, and a profile card. The motif is native to the business and carries the promise: every change is visible, nothing is added from nowhere. Section dividers are ruled margin lines with a proof mark. Icons are proof marks in a ring. Dark bands carry a faint document grid.

**Palette (own identity).** Blue-black ink `#12151f` for authority; deep editorial green `#1b6b50` as the one accent because green means "approved, checked", the opposite of a red pen telling someone off; a soft highlighter yellow `#f4e28a` used only for insertions and margin notes; warm paper `#f5f1e8`, never pure white. Green text on paper passes AA.

**Type.** Fraunces Variable (headings, with an italic accent word in green, like an editor's emphasis) plus Inter Variable (text), both self-hosted, fluid `clamp()` sizes, slight negative tracking on headings, `text-wrap: balance`. Tabular numbers where numbers appear.

**Restraint.** Wrap 74rem, reading width 46rem, generous spacing, layered ink-tinted shadows, CSS-only motion (strike-through and insertion draw in) disabled under `prefers-reduced-motion`.

## Tokens
Ink scale `--ink-950` #0b0d14, `--ink-900` #12151f, `--ink-800` #1c2130, `--ink-700` #2b3347, `--ink-500` #5b6479. Accent `--green-600` #1b6b50, `--green-500` #2a8a68, `--green-100` #dcefe6. Mark `--mark` #f4e28a. Paper `--paper` #f5f1e8, `--paper-2` #ece6d8, line `--line` #ddd5c3. 8px space scale `--s-1..--s-9`. Radius 8/14/20/28. Shadows `--sh-1..3` ink-tinted.

## Patterns
- Eyebrow: tracked uppercase with a rule beside it.
- Divider (`.margin-rule`): dashed ruled line with a pilcrow mark.
- Tracked change: `.del` (struck, muted) then `.ins` (highlighted, green underline).
- Margin note: yellow note with small label ("Example", "Note").
- Buttons: green primary with arrow and soft green shadow; ghost outline; yellow variant on dark.
- Cards: warm white `#fffdf8`, 1px line, layered shadow.
- Service template: dark hero with tracked-change example, who it is for, what you get, process, honest notes as margin notes, CTA band.

## Content rules
No testimonials, stats, logos, names, ratings, outcomes or prices. Examples are labelled "Example". Offers say "Request a quote". No em dashes. No guarantee language.
