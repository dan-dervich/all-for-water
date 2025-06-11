import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    react(),
    sitemap({
      i18n: {
        locales: { en: "en-US", es: "es-ES" },
        defaultLocale: "en",
      },
      lastmod: new Date(),
    }),
  ],
  // add trailing slash
  trailingSlash: "always",
  prefetch: {
    defaultStrategy: "load"
  },
  site: "https://www.allforwater.com",

  vite: {
    resolve: {
      alias: {
        "@lib": "/src/lib",
      },
    },
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
    fallback: "blocking"
  }),
});
