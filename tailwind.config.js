/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"],
        code: [
          "Inconsolata",
          "monospace",
          "Inter",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#1871ee",
        info: "#E7F1FE",
      },
    },
  },
  plugins: [],
};
