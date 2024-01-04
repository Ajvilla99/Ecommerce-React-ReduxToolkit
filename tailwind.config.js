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
          succes: '#3c89fd',
        },
        gray: {
          100: '#D7D7D7',
          200: '#3a3e4a',
          300: '#f5f5f5',
        },
        orange: {
          100: '#e84917',
          200: '#d64749',
        },
        error: {
          100: '#efb4ba',
          200: '#bb303e'
        },
        primary: '#18314f',
        secundary: '#1772f9',
        succes: '#3c89fd',
        succes_hover: '#3c89fd',

      },
    },
  },
  plugins: [],
}
