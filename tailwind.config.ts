import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        serif: ["var(--serif)", "Georgia", "serif"],
        mono: ["var(--mono)", "monospace"],
      },
      borderColor: {
        DEFAULT: "var(--border)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};

export default config;
