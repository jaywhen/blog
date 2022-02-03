const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
        serif: ['"Old Standard TT"', ...defaultTheme.fontFamily.serif],
        mono: ['"Overpass Mono"', ...defaultTheme.fontFamily.mono],
        'long-cang': ['"Long Cang"']
      }
    },
  },
  plugins: [],
}
