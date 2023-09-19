/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#150E28',
        'secondary-color': '#D434FE'
      },
      lineHeight: {
        '3': '1em'
      }
    },
  },
  plugins: [],
}