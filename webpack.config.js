const path = require('path');
module.exports = {
	entry:'./index.js', // 入口文件,
	output:{
		path:path.resolve(__dirname,'build'),  // 绝对路径 输出文件夹
		filename:'bundle.js',
		publicPath:"build/"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:10000,
							name:'images/[name]-[hash].[ext]'
						}
					}
				]
			}
		]
	}
}