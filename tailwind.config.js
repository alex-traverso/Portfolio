import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
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
        surface: "var(--bg-surface)",
        surfaceAlt: "var(--bg-surface-alt)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textTertiary: "var(--text-tertiary)",
        borderSubtle: "var(--border-subtle)",
        accent: "var(--accent)",
      },
      backgroundColor: {
        // "base" is scoped to background-only (not `colors`) so it can't collide
        // with Tailwind's built-in `text-base` font-size utility.
        base: "var(--bg-base)",
      },
      backgroundImage: {
        darkThemeDarkToLight: "linear-gradient(to top, #232323, #030303)",
        darkThemeLightToDark: "linear-gradient(to top, #030303, #232323)",
        lightThemeDarkToLight: "linear-gradient(to top, #EDEDED, #D4D4D4)",
        lightThemeLightToDark: "linear-gradient(to top, #D4D4D4, #EDEDED)",
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
      keyframes: {
        clampedTextIn: {
          from: { opacity: "0", transform: "scale(0.98)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        // Entry only: the resting state is the default, so the panel stays
        // readable even if the animation never runs.
        clampedTextIn: "clampedTextIn 120ms ease-out",
      },
      fontFamily: {
        madeOuterRegular: ["var(--font-madeOuterRegular)"],
        madeOuterBold: ["var(--font-madeOuterBold)"],
      },
    },
  },
  plugins: [
    // Only where hovering actually works, used to scope truncation to devices
    // that can reveal the full text on hover.
    //
    // This is a variant and not a `screens` entry on purpose: a single object
    // (`raw`) value in `screens` flips Tailwind's `areSimpleScreens` to false,
    // which drops the min-width sort from *every* breakpoint variant and lets
    // `mm:` override `lg:`. See corePlugins.js `screenVariants`.
    plugin(({ addVariant }) => {
      addVariant("desktop", "@media (hover: hover) and (min-width: 768px)");
    }),
  ],
};
