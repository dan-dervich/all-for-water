import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";


import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), sitemap({
    i18n: {
      locales: {en: "en-US", es: "es-ES"},
      defaultLocale: "en",
    },
    lastmod: new Date(),
  })],

  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },

  site: "https://allforwater.com",

  vite: {
    resolve: {
      alias: {
        "@lib": "/src/lib",
      },
    },
  },

  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true,
  //   }
  // }),
  output: "server",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
});