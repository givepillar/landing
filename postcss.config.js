const tailwindcss = require('tailwindcss')
const colorFunction = require('postcss-color-function')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./tailwind.config.js'),
    colorFunction({ preserveCustomProps: true }),
    require('autoprefixer'),
  ],
}
