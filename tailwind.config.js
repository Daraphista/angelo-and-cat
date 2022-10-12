/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      amatic: ["Amatic SC", "cursive"],
    },
    extend: {
      rotate: {
        7.5: "7.5deg",
        15: "15deg",
      },
    },
  },
  plugins: [],
};
