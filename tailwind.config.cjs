/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#4CA800",
      white: "#FFFFFF",
      blue: "#006BA9",
      greenTransparent: "#4ca80073",
      black: "#212121",
      orange: "#A54D09",
      blueDark: "#113245",
      red: "#F32424",
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        bgLogin:
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('images/bglogin.jpeg')",
      },
    },
  },
  plugins: [],
});
