const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
          filename: '[name]-[hash][ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/html/index.html',
      filename: 'index.html',
      publicPath: './'
    })
  ]
}
