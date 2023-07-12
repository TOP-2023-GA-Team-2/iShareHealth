/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  // content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  // content: ['./src/**/*.{js,ts,jsx,tsx,html}'],

  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), [require("nativewind/postcss")]],
};
