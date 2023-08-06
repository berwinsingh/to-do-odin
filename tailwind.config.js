/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        '2xl': '1px 5px 10px #facc15a2',
      }
    },
  },
  plugins: [],
}

