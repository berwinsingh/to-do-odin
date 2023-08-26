/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        'yellow': '1px 2px 3px #facc15a2',
        'orange': '0 2px 3px #f97316a2',
      },
      scale:{
        '.99': '.99',
      },
      width:{
        '100':'35rem',
      },
      height:{
        '100':'35rem',
        '98':'25rem'
      },
      backgroundColor:{
        'black-low':'#00000033',
      },
    },
  },
  plugins: [],
}

