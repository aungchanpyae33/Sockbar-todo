/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#696868",
        containerColor: "#BEAFAF",
        logoColor: "#9A2E2E",
        textColor: "#7A6161",
        titleColor: "#CA996B",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
