/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  backgroundImage: {
    backgrounddark: "url('/src/images/backgrounddark.svg')",
    footeresclipse: "url('/src/images/footeresclipse.svg')"
  },
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    theme: {
      // 'xl': "1280px",
      // 'lg': "1024px",
      // 'md': "768px",
      // 'sm': "640px",
      
    },
  },
  plugins: [],
};
