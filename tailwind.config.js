/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0C0914',
        'grey': {
          50: '#E0DAEE',
          500: '#8D8A95'
        },
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
        mono: 'IBM Plex Mono, sans-serif'
      }
    }
  },
  plugins: []
}
