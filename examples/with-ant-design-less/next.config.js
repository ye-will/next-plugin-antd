const withPluginAntd = require("next-plugin-antd")
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

module.exports = withPluginAntd({
  //
  antdThemeVariables: themeVariables,
  // all
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
})
