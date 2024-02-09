/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        EncodeSans: ["Encode Sans Condensed", "sans-serif"],
      },

      boxShadow: {
        teamShadow: "0px 0px 30px rgba(255, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
