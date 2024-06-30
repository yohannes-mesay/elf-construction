/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tinsh: "520px",
      },
      fontFamily: {
        sans: "Kanit, sans-serif",
      },
    },
  },

  plugins: ["prettier-plugin-tailwindcss"],
};
