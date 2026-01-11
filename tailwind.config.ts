import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          gray: '#6B7280',
          black: '#111827',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

