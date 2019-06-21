const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(
  withCSS({
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })

      return config
    },
    target: 'serverless',
  })
)