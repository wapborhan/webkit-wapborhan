/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#e00108",
        danger: "#119c52",
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
