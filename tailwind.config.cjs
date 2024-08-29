module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "482px",
      sm: "640px",
      md: "768px",
      lg: "1030px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      habibi: ["Habibi", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        mainWhite: "#f7f7f7",
        secondaryWhite: "#fcfcfc",
        mainBlack: "#000",
        secondaryBlack: "rgba(0, 0, 0, 0.3)",
        tetriaryBlack: "rgba(0, 0, 0, 0.05)",
        brandBlue: "#0E52FF",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
