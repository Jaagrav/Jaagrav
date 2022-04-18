module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
      "120%": "150%",
    },
    extend: {
      colors: {
        bgColorTranslucent: "#040c20a3",
        bgColor: "#040c20",
        bgSecondaryColor: "#262f47",
        pink: "#FF00F5",
        indigo: "#9A6AFF",
      },
      fontFamily: {
        primary: ["TimeBurner", "sans-serif"],
        secondary: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
