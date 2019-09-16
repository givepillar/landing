const withCSS = require('@zeit/next-css')

const prod = process.env.NODE_ENV === 'production'

const env = {
  FB_CLIENT_ID: prod ? '1684207668378168' : '2173405042756743',
  API_URL: prod
    ? 'http://dev.oscarnewman.me:4000/graphql'
    : 'http://localhost:4000/graphql',
  BASE_URL: prod ? 'https://pillar.gives' : 'http://localhost:3000',
}

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  target: 'serverless',
  env,
})
