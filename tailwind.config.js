/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tinsh: "520px",
      },
      fontFamily: {
        "Montserrat": ['Montserrat', 'sans-serif'],
      },
    },

  },

  plugins: [],
};
