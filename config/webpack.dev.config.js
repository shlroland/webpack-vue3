const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 8181,
    hot: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
})
