const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1280px',
        xl: '1440px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      violet: colors.violet,
      blue: colors.blue,
      cyan: colors.cyan,
      green: colors.emerald,
      lime: colors.lime,
      orange: colors.orange,
      red: colors.red,
      rose: colors.rose,
      pink: colors.pink,
      teal: colors.teal,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ['Maven Pro', ...defaultTheme.fontFamily.sans],
      display: ['Maven Pro', ...defaultTheme.fontFamily.sans],
      body: ['Maven Pro', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {},
  },
  variants: {
    extend: {
      margin: ['last'],
      translate: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
