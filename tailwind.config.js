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
        'background-gray': '#F3F3F3',
        'acme-red': '#FA2555',
        'brand-blue': '#0171F8',
        'brand-light-blue': '#17A9F9',
        'brand-purple': '#443AFA',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
