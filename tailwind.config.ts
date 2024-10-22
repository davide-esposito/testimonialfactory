import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#345C74",
        secondary: "#5A8A93",
        neutral: "#E3E3E3",
        beige: "#F5F2E8",
        darkBlue: "#162B47",
        lightBlue: "#9AD1E3",
        systemRed: "#FF6B6B",
        systemGreen: "#40C057",
        systemYellow: "#FFD43B",
        systemOrange: "#FFA94D",
      },
      fontFamily: {
        regular: ['"Futura Bk BT"', "sans-serif"],
        bold: ['"Futura BdCn BT"', "sans-serif"],
        italic: ['"Futura Md BT"', "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#171717",
            h1: {
              fontFamily: '"Futura", sans-serif',
              fontWeight: "700",
              color: "#162B47",
            },
            h2: {
              fontFamily: '"Futura", sans-serif',
              fontWeight: "600",
              color: "#345C74",
            },
            p: {
              fontFamily: '"Futura", sans-serif',
              color: "#5A8A93",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
