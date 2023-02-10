/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#171717",
        lightGrey: "#BDBDBD",
        lightestGrey: "#232323",
        dark: "#0F0F0F",
        lightBlue: "#4399CE",
      },
      padding: {
        sectionTop: "50px",
        sectionBottom: "75px",
        sectionSides: "11rem",
      },
    },
  },
  plugins: [],
};
