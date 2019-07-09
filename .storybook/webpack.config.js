module.exports = ({ config, mode }) => {
  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      }
    }

    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  })

  config.module.rules.push({
    test: /\.css$/,
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  })

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
