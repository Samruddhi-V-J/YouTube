/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     experimental: {
//     darkModeVariant: true,
//   },
  darkMode: "class",
     theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
 
};

