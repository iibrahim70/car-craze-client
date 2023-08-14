/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        black: "#1e212a",
        white: "#fafafa",
        red: "#d9114a",
        green: "#01b376",
        purple: "#5E32C0",
      },
    },
  },
};
