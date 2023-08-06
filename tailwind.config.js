/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        "primary-dark": "#353542",
        "secondary-dark": "#272832",
        "primary-light": "#ffffff",
        "secondary-light": "#F1F1F1",
        "accent-yellow": "#ffc400",
        "accent-red": "#ef5350",
      },
    },
  },
  plugins: [],
};
