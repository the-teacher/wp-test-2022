const path = require('path')

module.exports = {
  entry: './src/html/index.js',
  output: {
    filename: 'bundle.js',
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