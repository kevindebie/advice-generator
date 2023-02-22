/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html"],
  theme: {
    extend: {},
    colors: {
      'lightcyan': 'hsl(193, 38%, 86%)',
      'neongreen': 'hsl(150, 100%, 66%)',
      'grayblue': 'hsl(217, 19%, 38%)',
      'dark-grayblue': 'hsl(217, 19%, 24%)',
      'darkblue': 'hsl(218, 23%, 16%)',
    },
  },
  plugins: [],
}
