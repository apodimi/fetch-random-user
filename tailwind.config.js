/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-primary": "#000",
        "button-primary-hover": "#333",
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(#000000 0.5px, #ffffff 0.5px)",
      },
    },
  },
  plugins: [],
};
