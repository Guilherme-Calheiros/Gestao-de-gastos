/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: {
          100: "#D0FFD2", 
          200: "#A3D9A5",
        },
        secondarycolor: "#1A3E59",
        textcolor: "#707070",
        contrastcolor: "#5A9BD5"
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

