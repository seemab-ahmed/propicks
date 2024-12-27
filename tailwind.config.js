/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#010510",
        textLight: "#C5CEE6",
      },
      backgroundImage: {
        "heading-gradient":
          "linear-gradient(90deg, #1C37E8 0%, #69F0F0 34.77%, #2898FF 64.53%, #E990FF 100%)",
        "heading-gradient-two": "linear-gradient(90deg, #1C37E8 0%, #69F0F0 34.77%, #2898FF 64.53%, #E990FF 100%)",
        "blue-gradient":
          "linear-gradient(162deg, #90BDFF 10.9%, #3F8DFF 22.6%, #1B64CE 84.01%)",
        "white-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        "tab-gradient":
          "linear-gradient(90deg, #1C37E8 0%, #69F0F0 34.77%, #2898FF 64.53%, #E990FF 100%)",
        "form-gradient": "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(186.25% 107.66% at 51.84% 0%, rgba(25, 114, 245, 0.10) 0%, rgba(25, 114, 245, 0.00) 50%, rgba(25, 114, 245, 0.00) 100%)",
        "form-inner-gradient": "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(186.25% 107.66% at 51.84% 0%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.00) 100%)",
        "purple-gradient": "linear-gradient(111deg, #E1C3FF 8.34%, #8B79FF 23.76%, #4830FF 83.56%)",
        "light-blue-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), #1972F5",
        "light-purple-gradient": "linear-gradient(180deg, #8B79FF 0%, #816EFF 100%)",
        "menu-black-gradient": "linear-gradient(180deg, #0A0A0A 0%, #040404 100%)",
      },
      boxShadow: {
        "grey-inset": "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
        "white-inset": "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
      },
    },
  },
  plugins: [],
};
