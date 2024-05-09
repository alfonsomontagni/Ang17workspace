/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/mindset/src/**/*.{html,ts,scss}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5b6dcf',
        'custom-red': '#ef4444',
        'custom-green': '#23ab55'
      },
    },
  },
  plugins: [require("daisyui")],
}

