/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gordita: ['Gordita', 'sans-serif']
      },
      listStyleType: {
        dash: `'- '`
      }
    },
  },
  plugins: [],
}
