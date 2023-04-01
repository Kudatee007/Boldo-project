/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  backgroundImage: {
    'backgrounddark': "url('/src/images/backgrounddark.svg')",
  },
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
}