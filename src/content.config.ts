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
  }),
});
export const collections = { pages };
