/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./assets/**/*.{vue,js,ts,jsx,tsx}",
    // "./templates/**/*.{html,twig}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#010851",
        "secondary":"#9A7AF1",
        "tartiary" :"#707070",
        "pink" :"#EE9AE5",
      },
      boxShadow: {
        '3xl': 'rgba(0,0,0,0.15) 0px 10px 50px 0px',
      }
    },
  },
  plugins: [],
}

