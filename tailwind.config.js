module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        lightBgSecondaryColor: "#f0f0f0",
        lightBgSecondaryColorTranslucent: "#b9b9b97a",
      },
      fontFamily: {
        primary: ["TimeBurner", "sans-serif"],
        secondary: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
