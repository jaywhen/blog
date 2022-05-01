const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Old Standard TT"', ...defaultTheme.fontFamily.serif],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        'long-cang': ['"Long Cang"'],
      }
    },
  },
  plugins: [],
}
