const withCSS = require('@zeit/next-css')

const prod = process.env.NODE_ENV === 'production'

const env = {
  FB_CLIENT_ID: prod ? '1684207668378168' : '2173405042756743',
  API_URL: prod
    ? 'https://pillar.saythanks.me/graphql'
    : 'http://localhost:4000/graphql',
  BASE_URL: prod ? 'https://pillar.gives' : 'http://localhost:3000',
  STRIPE_KEY: prod
    ? 'pk_live_3jLMLDZZo9MhvOMvWl6U7tnJ'
    : 'pk_test_Aa9HCt6t96ix37gxvpeqOKYL',
  STRIPE_SUBSCRIPTION_KEY: prod ? 'prod_G8LdvEXPsPaSOR' : 'prod_G8Le5TM1WkZNMk',
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
