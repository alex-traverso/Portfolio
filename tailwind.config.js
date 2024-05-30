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
				lightestGrey: "#232323",
				dark: "#030303",
				lightBlue: "#4399CE",
			},
			backgroundImage: {
				darkThemeDarkToLight: "linear-gradient(to top, #232323, #030303)",
				darkThemeLightToDark: "linear-gradient(to top, #030303, #232323)",
				lightThemeDarkToLight: "linear-gradient(to top, #EDEDED, #BDBDBD)",
				lightThemeLightToDark: "linear-gradient(to top, #BDBDBD, #EDEDED)",
			},
			padding: {
				sectionTop: "50px",
				sectionBottom: "75px",
				sectionSides: "10rem",
				sectionSidesMobile: "2rem",
			},
			screens: {
				mm: "320px",
				m: "375px",
				xs: "480px",
			},
			fontFamily: {
				madeOuterRegular: ["var(--font-madeOuterRegular)"],
				madeOuterBold: ["var(--font-madeOuterBold)"],
			},
		},
	},
	plugins: [],
};
