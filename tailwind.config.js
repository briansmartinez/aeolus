/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'dark.grey': '#31363F',
        'white.glint': '#EEEEEE',
        'dark.blue':'#222831'
      },
      backgroundImage:{
        'hero-image': "url('/src/hero-container.jpg')"
      }
    },
    fontFamily: {
        body: ['Inter']},
  },

  plugins: [],
}

