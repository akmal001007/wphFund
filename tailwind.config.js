/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#002d41",
        btnColor: "#ce0862",
        card: "#00b2ff",
        cardTwo: "#009fe4",
      },
    },
  },
  plugins: [],
};
