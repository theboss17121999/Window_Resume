/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        datetimesz:'0.7rem',
        giticontb:'1.7rem'
      },
      backgroundImage: {
        'desktop-wallpaper': "url('../src/assets/Background/wallpaper1.jpg')",
      },
    },
  },
  plugins: [],
}