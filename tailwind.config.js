/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        'full': '0 0 30px rgba(0, 0, 0, 0.3)',
      }
    },
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
