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
        red: "#D9114A",
        viking: "#32b8cb",
      },
    },
  },
};
