/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/signaltest/src/**/*.{html,ts,scss}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

