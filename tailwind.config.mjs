/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#06194a",
        "header-text": "#de540f",
      },
    },
  },
  plugins: [],
};
