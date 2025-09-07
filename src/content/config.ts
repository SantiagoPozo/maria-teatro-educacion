import { defineCollection, z } from "astro:content";

// Colección para la biografía/sobre mí
const bioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    orden: z.number(),
  }),
});

// Colección para el contenido de la landing
const landingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    cta: z.string().optional(),
  }),
});

// Colección para beneficios (antes claves)
const beneficiosCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    orden: z.number().optional(),
  }),
});

// Colección para talleres
const talleresCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.string().optional(),
    edades: z.string().optional(),
    duracion: z.string().optional(),
    orden: z.number(),
  }),
});

// Colección para trayectoria
const trayectoriaCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    orden: z.number().optional(),
  }),
});

// Exportar todas las colecciones
export const collections = {
  bio: bioCollection,
  landing: landingCollection,
  beneficios: beneficiosCollection,
  talleres: talleresCollection,
  trayectoria: trayectoriaCollection,
};
