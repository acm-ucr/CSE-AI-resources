/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ucr: {
          blue: "#003DA5",
          yellow: "#FFB81C",
          orangeYellow: "#F5C000",
        },
      },
    },
  },
  plugins: [],
};
