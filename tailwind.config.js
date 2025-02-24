/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico", "cursive"], // Add the Pacifico font
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
