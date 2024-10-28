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
        darkBlue: "#182A44",
        mediumBlue: "#174068",
        lightBlue: "#D5FCFF",
        skyBlue: "#49B9DA",
      },
      backgroundImage: {
        "line-gradient": "linear-gradient(to right, #49B9DA, #D5FCFF)",
        "button-orange-gradient": "linear-gradient(to right, #AF4221, #E49A6D)",
        "table-gradient": "linear-gradient(to right, #182A44, #174068)",
        "medium-blue-gradient": "linear-gradient(to right, #174068, #49B9DA)",
      },
      fontFamily: {
        regular: ['"Futura Bk BT"', "sans-serif"],
        bold: ['"Futura BdCn BT"', "sans-serif"],
        italic: ['"Futura Md BT"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
