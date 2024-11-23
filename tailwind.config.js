/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#010510",
        textLight: "#C5CEE6",
      },
      backgroundImage: {
        "heading-gradient": "linear-gradient(90deg, #1C37E8 0%, #69F0F0 34.77%, #2898FF 64.53%, #E990FF 100%)",
      },
    },
  },
  plugins: [],
}
