const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        imageTheWeeknd: "calc(100vh - 64px)",
      },
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        yellow: colors.yellow,
      },
      backgroundImage: {
        "background-ballons":
          "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url('./images/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
