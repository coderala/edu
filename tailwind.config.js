/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#4D1BB6",
        light: "#EEE8F8",
        low_light: "#FFF8F8",
        yellow: "#EBD61D",
        second_yellow: "#ECDD6F",
        light_blue: "#C9EAF5",
        light_orange: "#F9E6C3",
        light_purple: "#DBC9F5",
        light_green: "#C9F5CA",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        prompt: ["Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
