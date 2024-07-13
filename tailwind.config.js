/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1440px',
    },
    colors: {
      'Nutmeg': '#854632',
      'DarkRasberry': '#7b284f',
      'White': '#ffffff',
      'RoseWhite': '#fff5fa',
      'Eggshell': '#f3e6d8',
      'LightGrey': '#e4ded8',
      'WengeBrown': '#5f574e',
      'DarkCharcoal': '#302d2c'
    },
    fontFamily: {
      'young': '"Young Serif"',
      'outfit': '"Outfit"'
    }
  },
  plugins: [],
}

