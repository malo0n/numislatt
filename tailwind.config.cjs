module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
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
      fontSize: {
        12: ["12px", { fontWeight: 500 }],
        16: ["16px", { fontWeight: 500 }],
        24: ["24px", { fontWeight: 500 }],
        32: ["32px", { fontWeight: 500 }],
        40: ["40px", { fontWeight: 500 }],
      },
    },
    colors: {
      mainWhite: "#FCFCFC",
      secondaryWhite: "#F7F7F7",
      zatychka: "#F5F5F5",
      mainBlack: "#000",
      secondaryBlack: "rgba(0, 0, 0, 0.3)",
      tetriaryBlack: "rgba(0, 0, 0, 0.05)",
      brandBlue: "#0C48E5",
      accentRed: "#FF4647",
      mainYellow: "#EED40F",
      secondaryYellow: "#CBB517",
      tetriaryYellow: "#F4EDB1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
