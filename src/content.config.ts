import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
  }),
});

export const collections = {
  notes,
};