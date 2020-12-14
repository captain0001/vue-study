const { MAX_SAFE_INTEGER } = require("core-js/fn/number")

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
}