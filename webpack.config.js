const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html'
})
module.exports = {
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
  },
	devServer:{
		publicPath: '/public/',
		historyApiFallback: true
	},
	resolve:{
		extensions: ['.js', '.jsx', '.json']
	},
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}