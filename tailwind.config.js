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
      animation: {
        "float-up": "float 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(100vh) scale(0)" },
          "100%": { transform: "translateY(-10vh) scale(2)" },
        },
      },
    },
  },
  plugins: [],
};
