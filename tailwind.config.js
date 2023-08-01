/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
