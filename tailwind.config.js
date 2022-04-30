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
        bgColorTranslucent: "#151b28a3",
        bgColor: "#151b28",
        bgSecondaryColor: "#2a3241",
        pink: "#513bff",
        indigo: "#5cd700",
        rose: "#FF1CE8",
        blue: "#6AC9FF",
        lightBgSecondaryColor: "#f0f0f0",
        lightBgSecondaryColorTranslucent: "#b9b9b97a",
        lightTextColor: "#334155",
        extraDarkBgColorTranslucent: "#151b28de",
      },
      fontFamily: {
        primary: ["TimeBurner", "sans-serif"],
        secondary: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
