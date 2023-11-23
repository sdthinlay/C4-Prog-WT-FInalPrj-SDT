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
      'Pancho': '#f1d1b5',
      'Wax-Flower': '#f0b7a4',
      'Pastel-Pink': '#fad1da'
    },
    extend: {},
  },
  plugins: [],
}

