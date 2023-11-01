/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#f2aeda",

      secondary: "#64e56d",

      accent: "#2319aa",

      neutral: "#242433",

      "base-100": "#dfe5f1",

      info: "#479edc",

      success: "#50dca7",

      warning: "#be7d0e",

      error: "#f05675",

      "Background-1": "var(--Background-1)",

      "Background-2": "var(--Background-2)",

      "Background-3": "var(--Background-3)",

      "Texto-1": "var(--Texto-1)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   white: "#FFFFFF",
      //   black: "#000000",
      //   blue: {
      //     50: "#e6f1fe",
      //     100: "#cce3fd",
      //     200: "#99c7fb",
      //     300: "#66aaf9",
      //     400: "#338ef7",
      //     500: "#006FEE",
      //     600: "#005bc4",
      //     700: "#004493",
      //     800: "#002e62",
      //     900: "#001731",
      //   },
      // }
    },
  },
  plugins: [require("daisyui")],
};
