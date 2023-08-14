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
        red: "#d9114a",
        green: "",
      },
    },
  },
};
