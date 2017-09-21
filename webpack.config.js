const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/init.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ]
}
