import { defineCollection, z } from "astro:content";

const bioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    orden: z.number().optional(),
  }),
});

const clavesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    orden: z.number().optional(),
  }),
});

const talleresCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.string(),
    edades: z.string().optional(),
    duracion: z.string().optional(),
    orden: z.number(),
  }),
});

const landingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    cta: z.string(),
    orden: z.number().optional(),
  }),
});

export const collections = {
  bio: bioCollection,
  claves: clavesCollection, // Asegúrate de que esté aquí
  talleres: talleresCollection,
  landing: landingCollection,
};
