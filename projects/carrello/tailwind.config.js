/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/carrello/src/**/*.{html,ts,scss}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

