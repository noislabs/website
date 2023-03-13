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
        'white': '#E0DAEE'
      }
    }
  },
  plugins: []
}
