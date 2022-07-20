/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        builderGreen: "#476653",
        builderBlue: "#BCDAE1",
        builderBlueD: "#8EC1CC",
        builderBlueL: "#D5E8EC",
      },
    },
  },
  plugins: [],
};
