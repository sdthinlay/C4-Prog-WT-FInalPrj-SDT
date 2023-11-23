/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
      './*.html',
  ],
  theme: {
    colors: {
      ...colors,
      'froly': '#f07c8a',
      'Pastel Pink': '#fad1da',
      'Wax Flower': '#f0b7a4',
      'Pancho': '#f1d1b5'
    },
    extend: {},
  },
  plugins: [],
}

