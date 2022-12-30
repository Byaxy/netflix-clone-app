/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redColor: "#e50914",
        grayColor: "#303030",
        lightGrayColor: "#737373",
        borderBottom: "#222",
        veryLightGray: "#b3b3b3",
      },
      backgroundImage: {
        netflix: "url('https://i.imgur.com/ytDy3ns.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
