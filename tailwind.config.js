// /** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainRed: "#ac0000",
        cardBlack: "#141414",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        EncodeSans: ["Encode Sans Condensed", "sans-serif"],
      },

      boxShadow: {
        teamShadow: "0px 0px 30px rgba(255, 0, 0, 0.2)",
        loaderBox: "0px 0px 0px 1px rgba(255, 255, 255, 0.1)",
        gearShadow: "0px -1px 0px 0px #888888, 0px 1px 0px 0px black;",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
