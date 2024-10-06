/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d02b8e",
        danger: "#ffc107",
        secondary: "#ffffff",
        border: "#e5eaf2",
        text: "#424242",
        tabTextColor: "#424242",
        shadowColor: "rgba(0, 0, 0, 0.2)",
      },

      boxShadow: {
        primary: "0 35px 80px -15px rgba(0, 0, 0, 0.3)",
        secondary: "2px 2px 20px 2px rgba(0, 0, 0, 0.3)",
      },
    },

    screens: {
      "640px": "640px",
      "400px": "400px",
      "425px": "425px",
      "1024px": "1024px",
      "1260px": "1260px",
      "1404px": "1404px",
      "1605px": "1605px",
      "1630px": "1630px",
      "2000px": "2000px",
    },
  },
  plugins: [],
};
