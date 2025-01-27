import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";


import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), sitemap({
    i18n: {
      locales: {en: "en-US", es: "es-ES"},
      defaultLocale: "en",
    },
    lastmod: new Date(),
  })],

  site: "https://www.allforwater.com",

  vite: {
    resolve: {
      alias: {
        "@lib": "/src/lib",
      },
    },
  },
  // outDir: "./dist",
  output: "server",
  adapter: [vercel()],
});