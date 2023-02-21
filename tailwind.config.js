/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        NavBarColor: '#0e0e0e',
      },
      fontFamily: {
        logoFont: ['"Anton"', ...defaultTheme.fontFamily.sans],
        secFont: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],

      }
    },
  },
  plugins: [],
}
