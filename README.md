# Next.js & Ant Design (& Less) Made Easy

A [@zeit/next-less][next-less] patch with full support for Ant Desgion, Less and CSS modules

## `create-next-app` example

```bash
npm init next-app -e https://github.com/ye-will/next-plugin-antd/tree/master/examples/with-ant-design-less with-ant-design-less
```

or

```
yarn create next-app -e https://github.com/ye-will/next-plugin-antd/tree/master/examples/with-ant-design-less with-ant-design-less
```

## Installation

```bash
npm install --save github:ye-will/next-plugin-antd less antd
```

## Configuring

Create/Edit `next.config.js` in your project

```javascript
// next.config.js
const withPluginAntd = require("next-plugin-antd")
module.exports = withPluginAntd({
  /* config options here */
})
```

Add a `.babelrc`

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "import", {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}
```

Congratulations 🎉🎉🎉

### Options

`antdThemeVariables`: [less-vars-to-js](https://github.com/michaeltaranto/less-vars-to-js) config to customize ant design theme

All @zeit/next-less [options][next-less] are supported, such as `cssModules`, `cssLoaderOptions`, `lessLoaderOptions`, `postcssLoaderOptions`

[next-less]: https://github.com/zeit/next-plugins/tree/master/packages/next-less
