// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mariapozotavora.com",
  base: "/",
  build: {
    assets: "_astro",
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {},
      },
    },
  },
});
