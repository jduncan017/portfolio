const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["comfortaa", "sans-serif"],
      noto: ["notoSansMono", "sans-serif"],
      gulzar: ["gulzar", "serif"],
    },
    screens: {
      mini: "480px",
      xs: "550px",
      sm: "660px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "2000px",
    },
    extend: {
      transitionProperty: {
        filter: "filter",
      },
      styles: {
        img: {
          maxWidth: "none",
          height: "auto",
        },
      },
      boxShadow: {
        primary: "0 0 10px rgba(57, 212, 255, 0.4)",
        secondaryBright: "0 0 30px rgba(134, 134, 255, 0.8)",
        secondaryDim: "0 0 20px rgba(134, 134, 255, 0.4)",
        tertiary: "0 0 8px rgba(254, 215, 170, 0.6)",
        tertiaryBright: "0 0 20px rgba(254, 215, 170, 0.8)",
      },
      fontFamily: {
        serif: ["Jost", "serif"],
      },
      colors: {
        primaryDark: "rgb(26, 143, 152)",
        secondary: "rgb(134, 134, 255)",
        secondaryDark: "#4846b2",
        offBlack: "#00060d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [addVariablesForColors],
  safelist: ["text-gradient-clip"],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
