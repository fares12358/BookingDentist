/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        50:"50%",
      },
      boxShadow: {
        'my': ' 0 25px 50px -12px rgb(0 0 0 / 87%)',
      },
    },
  },
  plugins: [],
}