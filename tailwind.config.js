const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "661px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
