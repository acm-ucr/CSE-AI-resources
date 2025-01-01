/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      color: {
        ucr: {
          blue: "#003DA5",
          yellow: "#FFB81C",
        },
      },
    },
  },
  plugins: [],
};
