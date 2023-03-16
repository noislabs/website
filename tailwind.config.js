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
          100: '#D9D9D9',
          500: '#8D8A95',
          600: '#787580',
          700: '#6E7387',
          800: '#373245',
          900: '#1F1C25'
        },
        'lime': {
          200: '#E4FFCF',
        }
      },
      fontFamily: {
        sans: 'Inter, sans-serif',
        mono: 'IBM Plex Mono, monospace',
        satoshi: 'Satoshi, sans-serif'
      },
      boxShadow: {
        'block': '0px 0px 4px --tw-shadow-color, 0px 0px 15px --tw-shadow-color',
      }
    }
  },
  plugins: []
}
