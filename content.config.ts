import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({ type: "page", source: "**/*.md" }),
    sections: defineCollection({
      type: "data",
      source: "**/*.yml",
      schema: z.object({
        name: z.string(),
      }),
    }),
    ui: defineCollection({
      type: "data",
      source: "ui/*.yml",
      schema: z.object({
        icons: z.array(
          z.object({
            icon: z.string(),
            url: z.string(),
          })
        ),
      }),
    }),
  },
});
