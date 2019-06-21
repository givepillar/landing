let theme = require('tailwindcss/defaultTheme')
const custom = {}

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        display: [...theme.fontFamily.sans],
      },
    },
  },
  variants: {
    shadow: ['active'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
