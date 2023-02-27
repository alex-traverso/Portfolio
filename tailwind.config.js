/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightestBg: "#EDEDED",
        light: "#F5F5F5",
        lightDarkBg: "#d7d7d7",
        darkGrey: "#171717",
        lightGrey: "#BDBDBD",
        darkBgOpacity: "rgba(0, 0, 0, 0.7)",
        lightestGrey: "#232323",
        dark: "#0F0F0F",
        lightBlue: "#4399CE",
      },
      padding: {
        sectionTop: "50px",
        sectionBottom: "75px",
        sectionSides: "10rem",
        sectionSidesMobile: "2rem",
      },
      screens: {
        m: "375px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
