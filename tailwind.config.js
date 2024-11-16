/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#9538E2",
      white: "#ffffff",
      black: "#000000",
      yellow: "#F9C004",
      green: "#309C08",
      bg_green: "#309C081A",
      gray: "#80808070",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

