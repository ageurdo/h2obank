/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          100: "rgb(0, 89, 255);",
          200: "rgb(0, 129, 211)/",
        },
      },
      fontSize: {
        title: `2.6rem;`,
        paragraph: `1.2rem;`,
      },
    },
  },
  plugins: [],
};
