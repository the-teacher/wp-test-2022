const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dest'),
    publicPath: './dest'
  },
  mode: 'none',
  module: {
    rules: [
      {
        // does not work properly with image paths in css
        // background: url(ABS path)
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        generator : {
          publicPath: './',
          filename : '[name]-[hash][ext][query]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'My App',
      template: 'src/html/index.html',
      filename: 'index.html',
      publicPath: './'
    }
  )]
}
