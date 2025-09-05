// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://santiagopozo.github.io",
  base: "/maria-teatro-educacion",
  build: {
    assets: "assets",
  },
});
