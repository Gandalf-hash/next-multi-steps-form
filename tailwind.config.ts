import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
      fontFamily: {
        "body": ["Ubuntu-Regular", "sans-serif"],
        "gs-medium": ['Ubuntu-Medium', 'sans-serif'],
        "gs-bold": ['Ubuntu-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
