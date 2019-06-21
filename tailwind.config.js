let theme = require('tailwindcss/defaultTheme')
const custom = {}

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        display: ["ff-meta-serif-web-pro", ...theme.fontFamily.serif],
        sans: ["aktiv-grotesk", ...theme.fontFamily.sans]
      },
      colors: {
        teal: {
          "050": "#EFFCF6",
          "100": "#C6F7E2",
          "200": "#8EEDC7",
          "300": "#65D6AD",
          "400": "#3EBD93",
          "500": "#27AB83",
          "600": "#199473",
          "700": "#147D64",
          "800": "#0C6B58",
          "900": "#014D40",
        }
      },
      boxShadow: {
        float: "0 2px 14px 0 rgba(117,38,110,0.13)"
      }
    },
  },
  variants: {
    shadow: ['active'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}