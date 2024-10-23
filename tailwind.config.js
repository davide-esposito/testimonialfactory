/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#345C74",
        secondary: "#5A8A93",
        neutral: "#E3E3E3",
        darkBlue: "#162B47",
        lightBlue: "#9AD1E3",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #49B9DA, #D5FCFF)",
        "hero-button": "linear-gradient(to right, #AF4221, #E49A6D)",
      },
      fontFamily: {
        regular: ['"Futura Bk BT"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
