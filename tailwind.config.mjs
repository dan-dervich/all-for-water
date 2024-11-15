const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#0f3666",
        "dark-green": "#8ACB88",
        "light-blue": "#55A5CA",
        "light-green": "#80ED99",
        violeta: "#404DC6",
      },
      fontFamily: {
        edu: ["'Edu AU VIC WA NT Pre'", "sans-serif"],
      },
    },
    safelist: ["list-disc", "list-inside", "ml-5", "mb-2", "mb-4"],
  },
  plugins: [],
};
