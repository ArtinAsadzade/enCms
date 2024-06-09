/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blur: {
          "0%": { filter: "blur(5px)" },
          "100%": { filter: "blur(0px)" },
        },
      },
      animation: {
        blur: "blur 1s linear",
      },
    },
  },
  plugins: [],
};
