/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // gray: '#F3F3F3',
        // 'gray-medium': '#E2E2E2',
        // 'gray-dark': '#DADADA',
        // black: '#3d3d3d',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
