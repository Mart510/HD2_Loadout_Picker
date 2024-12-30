/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4xl': '2560px',
      },
      fontFamily: {
        plexMono: ['IBM Plex Mono', 'sans-serif'],
        zenDot: ['Zen Dots', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

