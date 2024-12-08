import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
