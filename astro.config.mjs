// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://santiagopozo.github.io",
  base: process.env.CI ? "/maria-teatro-educacion" : "/",
  build: {
    assets: "_astro",
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // Asegurar que Sass se compile correctamente
        },
      },
    },
  },
});
