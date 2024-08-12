/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
      },
      backgroundImage:{
        'batiment': "url('src/assets/images/BackgroundBatiment.png')",
        'contact': "url('src/assets/images/bgcontact.png')"
      },
      colors: {
        gold: '#FFBF00',
        bluebg: '#084A83',
      }
    },
  },
  plugins: [],
};
