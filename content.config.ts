import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({ type: "page", source: "**/*.md" }),
    sections: defineCollection({
      type: "data",
      source: "sections/*.yml",
      schema: z.object({
        name: z.string(),
      }),
    }),
    about: defineCollection({
      type: "data",
      source: "about/*.yml",
      schema: z.object({
        sections: z.array(z.object({})),
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
    projects: defineCollection({
      type: "data",
      source: "projects/**.yml",
      schema: z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        url: z.string(),
        tags: z.array(z.string()),
      }),
    }),
    contact: defineCollection({
      type: "data",
      source: "contact/*.yml",
      schema: z.object({
        sections: z.array(z.object({})),
      }),
    }),
  },
});
