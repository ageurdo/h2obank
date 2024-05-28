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
          500: "#FF6363;",
          800: "#FF1313;",
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
