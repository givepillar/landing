let theme = require('tailwindcss/defaultTheme')
const custom = {
  teal: {
    '50': '#EFFCF6',
    '100': '#C6F7E2',
    '200': '#8EEDC7',
    '300': '#65D6AD',
    '400': '#3EBD93',
    '500': '#27AB83',
    '600': '#199473',
    '700': '#147D64',
    '800': '#0C6B58',
    '900': '#014D40',
  },
  gray: {
    '25': '#FAF9F7',
    '50': '#FAF9F7',
    '100': '#E8E6E1',
    '200': '#D3CEC4',
    '300': '#B8B2A7',
    '400': '#A39E93',
    '500': '#857F72',
    '600': '#625D52',
    '700': '#504A40',
    '800': '#423D33',
    '900': '#27241D',
  },
  // gray: {
  //   ...theme.colors.gray,
  //   '25': '#F8FAFC',
  //   '50': '#F0F4F8',
  //   '100': '#D9E2EC',
  //   '200': '#BCCCDC',
  //   '300': '#9FB3C8',
  //   '400': '#829AB1',
  //   '500': '#627D98',
  //   '600': '#486581',
  //   '700': '#334E68',
  //   '800': '#243B53',
  //   '900': '#102A43',
  // },
  // gray: {
  //   ...theme.colors.gray,
  //   // '25': '#FAF9F7',
  //   // '50': '#FAF9F7',
  //   // '100': '#E8E6E1',
  //   '25': '#FAF9F7',
  //   '50': '#FAF9F7',
  //   '100': '#E8E6E1',
  //   // '200': '#BCCCDC',
  //   // '300': '#9FB3C8',
  //   // '400': '#829AB1',
  //   // '500': '#627D98',
  //   // '600': '#486581',
  //   // '700': '#334E68',
  //   // '800': '#243B53',
  //   // '900': '#102A43',
  // },
}

module.exports = {
  theme: {
    container: {
      center: true,
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect': {
          // backgroundColor: custom.gray['50'],
          // border: 'none',
        },
      },
    }),
    extend: {
      fontFamily: {
        display: ['ff-meta-serif-web-pro', ...theme.fontFamily.serif],
        sans: ['aktiv-grotesk', ...theme.fontFamily.sans],
      },
      screens: {
        print: { raw: 'print' },
      },
      colors: {
        ...custom,
        grey: custom.gray,
      },
      boxShadow: {
        float: '0 4px 14px 0 rgba(60,38,110,0.13)',
      },
    },
  },
  variants: {
    shadow: ['active'],
    backgroundColor: ['hover', 'focus'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
