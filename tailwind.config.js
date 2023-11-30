/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'bungee': ['bungee', 'sans']
    },
    extend: {
      colors: {
        blue: {
          100: '#191923',
          200: '#262635',
        },
        gray: {
          100: '#D7D7D7',
          200: '#3a3e4a',
        },
        orange: {
          100: '#e84917',
          200: '#d64749',
        },
      },
    },
  },
  plugins: [],
}
