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
        custom: "0 0 10px rgba(116, 255, 229, 0.3)",
        customBright: "0 0 20px rgba(143, 142, 255, 0.8)",
        customDim: "0 0 20px rgba(143, 142, 255, 0.4)",
        themeOrange: "0 0 8px rgba(254, 215, 170, 0.6)",
        themeBright: "0 0 20px rgba(254, 215, 170, 0.8)",
      },
      fontFamily: {
        serif: ["Jost", "serif"],
      },
      colors: {
        darkTeal: "rgb(26, 143, 152)",
        themeTeal: "#4cc3cc",
        themePurple: "rgb(143, 142, 255)",
        themePurpleDark: "#242439",
        blurWhite: "rgba(255, 255, 255, 0.5)",
        blurBlack: "rgba(0, 0, 0, 0.85)",
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
