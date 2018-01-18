const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
	entry: './index.js', // 入口文件,
	output: {
		path: path.resolve(__dirname, 'build'),  // 绝对路径 输出文件夹
		filename: 'bundle.js',
	},
	devServer:{
		port:3332
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'images/[name]-[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}]
				})
			},
		]
	},
	plugins: [
		// 提取css到css文件
		new ExtractTextPlugin('css/style.[hash].css'),
		// 自动生成html
		new HtmlWebpackPlugin({
			title: "joke's html",
			template: "index.html"
		}),
		// 清除构建后重复的文件
		new CleanWebpackPlugin(
			['build/css/style.*.css'],
			{
				root: __dirname,
				verbose: true,
				dry: false
			}
		),
		// 压缩提取出的 CSS，并解决ExtractTextPlugin分离出的 JS 重复问题
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		// 压缩 JS 代码
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}
