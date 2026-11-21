import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(50).max(160),
    kind: z.enum(['service', 'info']),
    order: z.number(),
    lastUpdated: z.coerce.date(),
    summary: z.string().optional(),
    icon: z.enum(['cv', 'letter', 'linkedin', 'interview']).optional(),
    lead: z.string().optional(),
    headline: z.string().optional(),
    example: z.object({ label: z.string(), before: z.string(), after: z.string() }).optional(),
    audience: z.array(z.string()).default([]),
    gets: z.array(z.string()).default([]),
    process: z.array(z.object({ t: z.string(), d: z.string() })).default([]),
    notes: z.array(z.string()).default([]),
  }).refine((d) => d.kind !== 'service' || (d.icon && d.lead && d.headline && d.example && d.audience.length && d.gets.length && d.process.length && d.notes.length), 'service pages need icon, lead, headline, example, audience, gets, process, notes'),
});
export const collections = { pages };
