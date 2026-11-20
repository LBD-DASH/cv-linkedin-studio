# Playbook: adding a page

1. Create `src/content/pages/<slug>.md` with frontmatter: title (10-70 chars, "Name | CV and LinkedIn Studio"), description (50-160), kind (`service` or `info`), order, lastUpdated, summary (services only). The build fails if the schema is not met.
2. Write the body in Markdown. Rules: no invented facts, stats, testimonials or prices; any factual claim needs a source link with a "last checked" date or is cut; no em dashes; no "guaranteed" or "passive income"; offers say "Request a quote".
3. Services appear on the home page and in the sitemap automatically. Info pages also get a sitemap entry. Add a nav link in `src/layouts/Base.astro` only if it matters.
4. `npm run build`, then grep the output and src for the em dash character; it must return nothing.
5. Commit and push to `main`. The Actions workflow deploys to GitHub Pages. curl the new URL for 200.
6. Affiliate links only via `src/data/partners.json` with an empty `affiliateUrl` until a program approves.

## Next pages (priority)
1. Enquiry form once Kevin picks a backend (see STATUS.md)
2. CV and cover letter checklist guide (sourced, no ATS claims)
3. Career-change CV guide
4. Graduate and first-job CV guide
5. LinkedIn headline guide
6. Common interview questions guide
7. Sample before/after (only with a real, consenting client or clearly labelled fictional example)
