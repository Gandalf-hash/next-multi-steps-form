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
        "alice-blue": "#EEF5FF",
        "downriver-blue": "#022955",
        "blue-genie": "#625AFF",
        "olympian-blue": "#174A89",
        "radio-checked": "#BEE2FA",
        "ghost-white": "#F8F9FE",
        "violet-mix": "#ADA5CC",
        "lavender-blue-shadow": "#938CFC",
      },
      variants: {
        backgroundColor: ["responsive", "focus", "hover", "active"],
      },
      fontFamily: {
        body: ["Ubuntu-Regular", "sans-serif"],
        "gs-medium": ["Ubuntu-Medium", "sans-serif"],
        "gs-bold": ["Ubuntu-Bold", "sans-serif"],
      },
      keyframes: {
        fadeInAnimation: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeInAnimation 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
