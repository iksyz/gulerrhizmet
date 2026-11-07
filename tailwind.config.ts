import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1e3a5f",
          dark: "#0f233a",
          light: "#2563eb",
        },
        accent: {
          orange: "#f97316",
          "orange-hover": "#ea580c",
          green: "#25d366",
          "green-hover": "#1ea952",
        },
      },
    },
  },
  plugins: [],
};
export default config;

