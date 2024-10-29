/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-primary": "#1D4ED8",
        "button-secondary": "#D97706",
      },
      borderRadius: {
        button: "0.375rem",
      },
      padding: {
        button: "0.5rem 1rem",
      },
    },
  },
  plugins: [],
};
