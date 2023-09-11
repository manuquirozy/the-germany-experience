import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'berlin': "url('/berlin.jpg')",
        'hamburg': "url('/hamburg.jpg')",
        'munich': "url('/munich.webp')",
        'nuremberg': "url('/nuremberg.jpg')",
        'freiburg': "url('/freiburg.webp')",
        'home': "url('/airport.jpg')",
      },
      height: {
        'tab': 'calc(100vh - 106px)',
      },
    },
  },
  plugins: [],
}
export default config
