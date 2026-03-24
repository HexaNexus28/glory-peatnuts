import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8922A",
          light: "#E8B04A",
          pale: "#FDF3E3",
        },
        earth: {
          DEFAULT: "#2C1810",
          mid: "#5C3420",
        },
        cream: "#FBF7F0",
        "green-wa": {
          DEFAULT: "#25D366",
          dark: "#128C4E",
        },
        muted: "#6B5744",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
