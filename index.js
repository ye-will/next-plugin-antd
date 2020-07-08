const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const withLess = require('@zeit/next-less')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const lessConfig = withLess({ ...nextConfig, webpack: undefined }).webpack(config, options)
      const { dev, isServer } = options
      // prevent Node.js loading less files in SSR mode
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...lessConfig.externals]
        lessConfig.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]
        lessConfig.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      // hack MiniCssExtractPlugin to mute `Conflicting order...`
      // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      // TO BE OPTIMIZED
      for (let i = 0; i < lessConfig.plugins.length; i++) {
        const p = config.plugins[i]
        if (p.constructor && p.constructor.name === MiniCssExtractPlugin.name) {
          config.plugins[i] = new MiniCssExtractPlugin({
            ...p.options,
            ignoreOrder: true
          })
          break
        }
      }
      // hack the next-less, exclude ant design less filess
      const lessConf = {
        exclude: /node_modules\/antd/,
        ...lessConfig.module.rules.pop()
      }
      lessConfig.module.rules.push(lessConf)
      // load ant design less files
      lessConfig.module.rules.push({
        test: /\.less$/,
        include: /node_modules\/antd/,
        use: cssLoaderConfig(lessConfig, {
          extensions: ['less'],
          cssModules: false,
          cssLoaderOptions: {},
          dev,
          isServer,
          loaders: [
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
                modifyVars: nextConfig.antdThemeVariables
              }
            }
          ]
        })
      })
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return lessConfig
    }
  })
}
