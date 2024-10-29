const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#06194a",
        "header-text": "#31E981",
        "dark-green": "#35605A",
        "custom-grey": "#6B818C",
        "custom-grey-light": "#D8E4FF",
        "light-green": "#31E981",
      },
    },
  },
  plugins: [],
};
