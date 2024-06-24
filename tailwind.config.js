const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mini: "480px",
      xs: "550px",
      sm: "660px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      sxl: "1480px",
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
        custom: "0 0 10px rgba(116, 255, 229, 0.2)",
      },
      fontFamily: {
        serif: ["Jost", "serif"],
      },
      colors: {
        darkTeal: "#004e54",
        neonPurple: "#5e00a4",
        darkGrey: "#383838",
        darkerGrey: "#303030",
        lightGrey: "#ebeeee",
        blurWhite: "rgba(255, 255, 255, 0.5)",
        blurBlack: "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [addVariablesForColors],
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
