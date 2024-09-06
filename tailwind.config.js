/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      ...colors,
      "sabzk":"#C8CFA0",
      "sabzp":"#97BE5A",
      "narenjik":"#EF9C66",
      "zardk":"#115E59",
      "sorati":"#F4538A",
      "narenjip":"#ff5500"
      ,"abi":"#0099ff",
      "banafsh":"#BC7AF9"
      ,"bp":"#8C3061"},
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [],
}

