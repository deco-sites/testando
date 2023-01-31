/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#FF6832",
        headerColor: "#FF6832",
        orange: "#FE8700",
        midtermcolor: "#FE8700",
        red: "#F14900",
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
