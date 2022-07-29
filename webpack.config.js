const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  mode: 'none',
  module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          type: 'asset/resource'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', 'css-loader'
          ]
        }
      ]
  }
}
